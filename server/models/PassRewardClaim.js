import mongoose from 'mongoose';

export const CLAIM_STATUSES = [
  'SUBMITTED',
  'UNDER_REVIEW',
  'APPROVED',
  'REFUND_PROCESSING',
  'REFUNDED',
  'REJECTED',
];

const passRewardClaimSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  purchase: { type: mongoose.Schema.Types.ObjectId, ref: 'Purchase', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  campaignId: { type: String, required: true },
  termsVersion: { type: String, required: true },
  
  examDate: { type: Date, required: true },
  examName: { type: String, required: true, trim: true },
  customerNotes: { type: String, trim: true, maxlength: 2000 },
  
  // Secure proof file storage (stored directly or retrieved via secure authenticated endpoint)
  proofFile: {
    originalFilename: { type: String, required: true },
    mimeType: { type: String, required: true },
    size: { type: Number, required: true },
    // Binary buffer / base64 payload stored securely in MongoDB
    data: { type: String, required: true }, // base64 encoded file data
  },

  status: {
    type: String,
    enum: CLAIM_STATUSES,
    default: 'SUBMITTED',
    required: true,
  },

  adminNotes: { type: String, trim: true, maxlength: 2000 },
  rejectionReason: { type: String, trim: true, maxlength: 1000 },
  
  submittedAt: { type: Date, default: Date.now, required: true },
  reviewedAt: { type: Date },
  approvedAt: { type: Date },
  refundedAt: { type: Date },

  // Stripe refund traceability
  stripeRefundId: { type: String },
  refundAmountCents: { type: Number },
  refundCurrency: { type: String },
  
  // Audit log of status transitions
  history: [{
    fromStatus: { type: String },
    toStatus: { type: String },
    changedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    note: { type: String },
    timestamp: { type: Date, default: Date.now },
  }],
}, { timestamps: true });

// Prevent duplicate active claims for the same purchase
// Only allow a new claim if the previous one was rejected, or enforce one claim per purchase
passRewardClaimSchema.index({ purchase: 1, status: 1 });
passRewardClaimSchema.index({ user: 1, createdAt: -1 });

export default mongoose.model('PassRewardClaim', passRewardClaimSchema);
