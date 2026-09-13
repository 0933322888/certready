import express from 'express';
import Stripe from 'stripe';
import { protect, requireAdmin } from '../middleware/auth.js';
import PassRewardClaim, { CLAIM_STATUSES } from '../models/PassRewardClaim.js';
import Purchase from '../models/Purchase.js';
import {
  PASS_REWARD_CONFIG,
  isPassRewardActive,
} from '../config/passReward.js';
import {
  sendClaimSubmittedEmail,
  sendClaimApprovedEmail,
  sendClaimRejectedEmail,
  sendRefundCompletedAndReviewInviteEmail,
} from '../utils/sendEmail.js';

const router = express.Router();

let stripeInstance = null;
const getStripe = () => {
  if (stripeInstance) return stripeInstance;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  const cleanKey = key.trim().replace(/^["']|["']$/g, '');
  try {
    stripeInstance = new Stripe(cleanKey);
    return stripeInstance;
  } catch (err) {
    console.error('Stripe init error in passReward:', err.message);
    return null;
  }
};

// ==========================================
// PUBLIC & ELIGIBILITY ENDPOINTS
// ==========================================

// @route   GET /api/pass-reward/status
// @desc    Get public campaign status & parameters
// @access  Public
router.get('/status', (req, res) => {
  const active = isPassRewardActive();
  res.json({
    isActive: active,
    campaignId: PASS_REWARD_CONFIG.campaignId,
    campaignName: PASS_REWARD_CONFIG.campaignName,
    claimWindowMonths: PASS_REWARD_CONFIG.claimWindowMonths,
    eligibleCourseSlugs: PASS_REWARD_CONFIG.eligibleCourseSlugs,
    headlines: PASS_REWARD_CONFIG.headlines,
    termsVersion: PASS_REWARD_CONFIG.termsVersion,
  });
});

// ==========================================
// STUDENT / CUSTOMER CLAIMS ENDPOINTS
// ==========================================

// @route   GET /api/pass-reward/my-eligibility
// @desc    List customer's purchases with Pass Reward eligibility and existing claims
// @access  Private
router.get('/my-eligibility', protect, async (req, res) => {
  try {
    // Find all completed purchases for this user
    const purchases = await Purchase.find({
      user: req.user._id,
      status: { $in: ['completed', 'refunded'] },
    })
      .populate('course', 'slug title trade tradeCode price currency')
      .sort({ createdAt: -1 })
      .lean();

    const claims = await PassRewardClaim.find({ user: req.user._id })
      .select('-proofFile.data')
      .lean();

    const claimMap = new Map();
    claims.forEach((c) => {
      claimMap.set(c.purchase.toString(), c);
    });

    const now = new Date();

    const results = purchases.map((p) => {
      const claim = claimMap.get(p._id.toString()) || null;
      const isEligible = Boolean(p.passRewardEligible && p.amount > 0);
      const deadline = p.passRewardClaimDeadline ? new Date(p.passRewardClaimDeadline) : null;
      const isExpired = deadline ? now > deadline : false;

      let state = 'NOT_ELIGIBLE';
      if (isEligible) {
        if (claim) {
          state = claim.status; // 'SUBMITTED', 'UNDER_REVIEW', 'APPROVED', 'REFUND_PROCESSING', 'REFUNDED', 'REJECTED'
        } else if (p.status === 'refunded') {
          state = 'ALREADY_REFUNDED';
        } else if (isExpired) {
          state = 'EXPIRED';
        } else {
          state = 'ELIGIBLE_UNCLAIMED';
        }
      }

      return {
        purchaseId: p._id,
        course: p.course,
        amount: p.amount,
        currency: p.currency,
        completedAt: p.completedAt || p.createdAt,
        passRewardEligible: isEligible,
        passRewardClaimDeadline: p.passRewardClaimDeadline,
        isExpired,
        state,
        claim: claim ? {
          _id: claim._id,
          status: claim.status,
          examDate: claim.examDate,
          examName: claim.examName,
          submittedAt: claim.submittedAt,
          rejectionReason: claim.rejectionReason,
          refundAmountCents: claim.refundAmountCents,
        } : null,
      };
    });

    res.json(results);
  } catch (error) {
    console.error('Pass reward my-eligibility error:', error);
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/pass-reward/submit-claim
// @desc    Submit a new Pass Reward claim with exam proof
// @access  Private
router.post('/submit-claim', protect, async (req, res) => {
  try {
    const {
      purchaseId,
      examDate,
      examName,
      customerNotes,
      proofFile,
    } = req.body;

    if (!purchaseId || !examDate || !examName || !proofFile) {
      return res.status(400).json({ message: 'Missing required claim fields (purchaseId, examDate, examName, proofFile)' });
    }

    // 1. Verify purchase belongs to user and is completed
    const purchase = await Purchase.findOne({
      _id: purchaseId,
      user: req.user._id,
      status: 'completed',
    }).populate('course');

    if (!purchase) {
      return res.status(404).json({ message: 'Eligible completed purchase not found for this account' });
    }

    // 2. Verify Pass Reward eligibility at purchase time
    if (!purchase.passRewardEligible) {
      return res.status(400).json({ message: 'This purchase does not qualify for the Pass Reward promotion' });
    }

    if (purchase.amount <= 0) {
      return res.status(400).json({ message: 'Free or zero-dollar access cannot be refunded' });
    }

    // 3. Verify claim deadline
    const parsedExamDate = new Date(examDate);
    if (isNaN(parsedExamDate.getTime())) {
      return res.status(400).json({ message: 'Invalid exam date' });
    }

    const now = new Date();
    if (purchase.passRewardClaimDeadline && now > new Date(purchase.passRewardClaimDeadline)) {
      return res.status(400).json({ message: 'The 6-month claim deadline for this purchase has expired' });
    }

    // 4. Verify no active or approved claim already exists for this purchase
    const existingClaim = await PassRewardClaim.findOne({
      purchase: purchase._id,
      status: { $in: ['SUBMITTED', 'UNDER_REVIEW', 'APPROVED', 'REFUND_PROCESSING', 'REFUNDED'] },
    });

    if (existingClaim) {
      return res.status(400).json({ message: 'An active or processed claim already exists for this purchase' });
    }

    // 5. Validate file proof payload
    const { originalFilename, mimeType, size, data } = proofFile;
    if (!originalFilename || !mimeType || !data) {
      return res.status(400).json({ message: 'Invalid proof document upload' });
    }

    if (!PASS_REWARD_CONFIG.allowedProofMimeTypes.includes(mimeType.toLowerCase())) {
      return res.status(400).json({
        message: 'Unsupported file type. Please upload a PDF, PNG, JPG, or WebP document.',
      });
    }

    // 10 MB limit check
    if (size && size > PASS_REWARD_CONFIG.maxProofSizeBytes) {
      return res.status(400).json({ message: 'Proof file size exceeds the 10MB limit' });
    }

    // Estimate base64 length safety check (~13.5MB in base64 is ~10MB binary)
    if (data.length > 15 * 1024 * 1024) {
      return res.status(400).json({ message: 'Proof file payload is too large' });
    }

    // 6. Create claim
    const claim = await PassRewardClaim.create({
      user: req.user._id,
      purchase: purchase._id,
      course: purchase.course._id,
      campaignId: purchase.passRewardCampaignId || PASS_REWARD_CONFIG.campaignId,
      termsVersion: purchase.passRewardTermsVersion || PASS_REWARD_CONFIG.termsVersion,
      examDate: parsedExamDate,
      examName: examName.trim(),
      customerNotes: (customerNotes || '').trim(),
      proofFile: {
        originalFilename: originalFilename.trim(),
        mimeType: mimeType.toLowerCase(),
        size: size || Math.round((data.length * 3) / 4),
        data,
      },
      status: 'SUBMITTED',
      submittedAt: now,
      history: [{
        fromStatus: null,
        toStatus: 'SUBMITTED',
        changedBy: req.user._id,
        note: 'Claim submitted by student',
        timestamp: now,
      }],
    });

    // 7. Non-blocking confirmation email
    sendClaimSubmittedEmail({
      toEmail: req.user.email,
      userName: req.user.name,
      courseTitle: purchase.course.title,
      claimId: claim._id,
    }).catch((err) => console.error('Failed to send claim submitted email:', err.message));

    res.status(201).json({
      success: true,
      message: 'Pass Reward claim submitted successfully. It will be reviewed by our team.',
      claimId: claim._id,
      status: claim.status,
    });
  } catch (error) {
    console.error('Submit claim error:', error);
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/pass-reward/claim/:claimId/proof
// @desc    Securely download / view uploaded proof for a claim (Student or Admin only)
// @access  Private
router.get('/claim/:claimId/proof', protect, async (req, res) => {
  try {
    const claim = await PassRewardClaim.findById(req.params.claimId);
    if (!claim) {
      return res.status(404).json({ message: 'Claim not found' });
    }

    // Authorization check: Must be owner of the claim or an Admin
    const emails = (process.env.ADMIN_EMAILS || '').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean);
    const isAdmin = emails.includes((req.user?.email || '').toLowerCase());
    const isOwner = claim.user.toString() === req.user._id.toString();

    if (!isOwner && !isAdmin) {
      return res.status(403).json({ message: 'Unauthorized to view this document' });
    }

    const { originalFilename, mimeType, data } = claim.proofFile;
    if (!data) {
      return res.status(404).json({ message: 'Proof file data not available' });
    }

    // Convert base64 data to binary buffer
    const fileBuffer = Buffer.from(data, 'base64');

    res.setHeader('Content-Type', mimeType || 'application/octet-stream');
    res.setHeader('Content-Disposition', `inline; filename="${encodeURIComponent(originalFilename)}"`);
    res.setHeader('Content-Length', fileBuffer.length);
    res.send(fileBuffer);
  } catch (error) {
    console.error('Fetch proof error:', error);
    res.status(500).json({ message: error.message });
  }
});

// ==========================================
// ADMIN CLAIMS MANAGEMENT ENDPOINTS
// ==========================================

// @route   GET /api/pass-reward/admin/claims
// @desc    List all claims for admin review with filtering
// @access  Private (Admin)
router.get('/admin/claims', protect, requireAdmin, async (req, res) => {
  try {
    const { status } = req.query;
    const filter = {};
    if (status && CLAIM_STATUSES.includes(status)) {
      filter.status = status;
    }

    const claims = await PassRewardClaim.find(filter)
      .select('-proofFile.data')
      .populate('user', 'name email createdAt')
      .populate('course', 'title slug trade tradeCode price currency')
      .populate('purchase')
      .sort({ submittedAt: -1 })
      .lean();

    // Check for warnings on each claim
    const enriched = claims.map((claim) => {
      const warnings = [];
      const purchase = claim.purchase;
      const deadline = purchase?.passRewardClaimDeadline ? new Date(purchase.passRewardClaimDeadline) : null;
      const submittedAt = new Date(claim.submittedAt);

      if (!purchase?.passRewardEligible) {
        warnings.push('Purchase was not flagged as Pass Reward eligible at checkout');
      }
      if (purchase?.status === 'refunded' && claim.status !== 'REFUNDED') {
        warnings.push('Underlying purchase is already marked as refunded');
      }
      if (deadline && submittedAt > deadline) {
        warnings.push('Claim was submitted AFTER the 6-month deadline');
      }
      if (!purchase?.stripePaymentIntent && (purchase?.amount || 0) > 0) {
        warnings.push('Missing Stripe Payment Intent on purchase record');
      }

      return {
        ...claim,
        warnings,
      };
    });

    res.json(enriched);
  } catch (error) {
    console.error('Admin list claims error:', error);
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/pass-reward/admin/claims/:claimId
// @desc    Get detailed claim record for admin
// @access  Private (Admin)
router.get('/admin/claims/:claimId', protect, requireAdmin, async (req, res) => {
  try {
    const claim = await PassRewardClaim.findById(req.params.claimId)
      .select('-proofFile.data')
      .populate('user', 'name email createdAt')
      .populate('course')
      .populate('purchase');

    if (!claim) {
      return res.status(404).json({ message: 'Claim not found' });
    }

    res.json(claim);
  } catch (error) {
    console.error('Admin get claim error:', error);
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/pass-reward/admin/claims/:claimId/status
// @desc    Update claim status (e.g. UNDER_REVIEW, REJECTED, APPROVED)
// @access  Private (Admin)
router.post('/admin/claims/:claimId/status', protect, requireAdmin, async (req, res) => {
  try {
    const { status, adminNotes, rejectionReason } = req.body;
    if (!status || !CLAIM_STATUSES.includes(status)) {
      return res.status(400).json({ message: 'Invalid claim status' });
    }

    const claim = await PassRewardClaim.findById(req.params.claimId)
      .populate('user', 'name email')
      .populate('course', 'title');

    if (!claim) {
      return res.status(404).json({ message: 'Claim not found' });
    }

    const oldStatus = claim.status;
    claim.status = status;
    claim.reviewedAt = new Date();
    if (adminNotes !== undefined) claim.adminNotes = adminNotes;
    if (rejectionReason !== undefined) claim.rejectionReason = rejectionReason;

    if (status === 'APPROVED' && !claim.approvedAt) {
      claim.approvedAt = new Date();
    }

    claim.history.push({
      fromStatus: oldStatus,
      toStatus: status,
      changedBy: req.user._id,
      note: adminNotes || `Status updated to ${status}`,
      timestamp: new Date(),
    });

    await claim.save();

    // Trigger emails for approval or rejection
    if (status === 'APPROVED') {
      const purchase = await Purchase.findById(claim.purchase);
      sendClaimApprovedEmail({
        toEmail: claim.user.email,
        userName: claim.user.name,
        courseTitle: claim.course.title,
        refundAmountCents: purchase?.amount || PASS_REWARD_CONFIG.standardCourseFeeCents,
        currency: purchase?.currency || 'cad',
      }).catch((e) => console.error('Error sending approved email:', e.message));
    } else if (status === 'REJECTED') {
      sendClaimRejectedEmail({
        toEmail: claim.user.email,
        userName: claim.user.name,
        courseTitle: claim.course.title,
        reason: rejectionReason || adminNotes,
      }).catch((e) => console.error('Error sending rejected email:', e.message));
    }

    res.json({ success: true, claim });
  } catch (error) {
    console.error('Update claim status error:', error);
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/pass-reward/admin/claims/:claimId/refund
// @desc    Process Stripe refund for an approved claim (Idempotent, strictly guarded)
// @access  Private (Admin)
router.post('/admin/claims/:claimId/refund', protect, requireAdmin, async (req, res) => {
  try {
    const claim = await PassRewardClaim.findById(req.params.claimId)
      .populate('user', 'name email')
      .populate('course', 'title')
      .populate('purchase');

    if (!claim) {
      return res.status(404).json({ message: 'Claim not found' });
    }

    // Safety checks
    if (claim.status === 'REFUNDED') {
      return res.status(400).json({ message: 'Claim has already been refunded' });
    }

    const purchase = claim.purchase;
    if (!purchase) {
      return res.status(400).json({ message: 'Associated purchase not found' });
    }

    if (purchase.status === 'refunded') {
      return res.status(400).json({ message: 'Purchase transaction is already marked as refunded in database' });
    }

    if (!purchase.passRewardEligible) {
      return res.status(400).json({ message: 'Purchase is not eligible for Pass Reward' });
    }

    const paidAmount = purchase.amount;
    if (!paidAmount || paidAmount <= 0) {
      return res.status(400).json({ message: 'Paid amount is $0; cannot refund a zero-dollar purchase' });
    }

    const paymentIntentId = purchase.stripePaymentIntent;
    if (!paymentIntentId) {
      return res.status(400).json({
        message: 'No Stripe PaymentIntent associated with this purchase. Please verify manually in Stripe dashboard.',
      });
    }

    const stripe = getStripe();
    if (!stripe) {
      return res.status(500).json({ message: 'Stripe is not configured on server' });
    }

    // Set processing status
    claim.status = 'REFUND_PROCESSING';
    await claim.save();

    // Perform Stripe refund with idempotency key
    const idempotencyKey = `refund_claim_${claim._id.toString()}`;
    const refund = await stripe.refunds.create({
      payment_intent: paymentIntentId,
      amount: paidAmount, // Exactly the amount actually paid
      reason: 'requested_by_customer',
      metadata: {
        claimId: claim._id.toString(),
        userId: claim.user._id.toString(),
        purchaseId: purchase._id.toString(),
        campaign: PASS_REWARD_CONFIG.campaignId,
      },
    }, {
      idempotencyKey,
    });

    const now = new Date();

    // Update claim
    claim.status = 'REFUNDED';
    claim.stripeRefundId = refund.id;
    claim.refundAmountCents = paidAmount;
    claim.refundCurrency = purchase.currency || 'cad';
    claim.refundedAt = now;
    claim.history.push({
      fromStatus: 'REFUND_PROCESSING',
      toStatus: 'REFUNDED',
      changedBy: req.user._id,
      note: `Stripe refund processed. Refund ID: ${refund.id}. Amount: $${(paidAmount / 100).toFixed(2)}`,
      timestamp: now,
    });
    await claim.save();

    // Mark purchase as refunded
    purchase.status = 'refunded';
    await purchase.save();

    // Send refund completed & optional review invitation email
    sendRefundCompletedAndReviewInviteEmail({
      toEmail: claim.user.email,
      userName: claim.user.name,
      courseTitle: claim.course.title,
      refundAmountCents: paidAmount,
      currency: purchase.currency || 'cad',
    }).catch((err) => console.error('Failed to send refund completed email:', err.message));

    res.json({
      success: true,
      message: 'Refund processed successfully via Stripe',
      refundId: refund.id,
      amountRefunded: paidAmount,
      claim,
    });
  } catch (error) {
    console.error('Stripe refund execution error:', error);
    // Restore claim status if Stripe failed
    try {
      const claim = await PassRewardClaim.findById(req.params.claimId);
      if (claim && claim.status === 'REFUND_PROCESSING') {
        claim.status = 'APPROVED';
        await claim.save();
      }
    } catch (restoreErr) {
      console.error('Failed to rollback claim status:', restoreErr.message);
    }
    res.status(500).json({ message: `Refund failed: ${error.message}` });
  }
});

export default router;
