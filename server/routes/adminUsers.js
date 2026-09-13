import express from 'express';
import mongoose from 'mongoose';
import User from '../models/User.js';
import Purchase from '../models/Purchase.js';
import StudyPlan from '../models/StudyPlan.js';
import UserAnswer from '../models/UserAnswer.js';
import Course from '../models/Course.js';
import { protect, requireAdmin } from '../middleware/auth.js';
import { isWithinFreeWindow, FREE_WINDOW_DAYS } from '../utils/coursePricing.js';
import { isFreeWindowPurchase } from '../utils/userPurchases.js';

const router = express.Router();

// Require admin authentication for all endpoints in this router
router.use(protect, requireAdmin);

/**
 * @route   GET /api/admin/users
 * @desc    Get paginated/searchable list of users with high-level summaries
 * @access  Private/Admin
 */
router.get('/', async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 20));
    const search = (req.query.search || '').trim();
    const sort = req.query.sort || 'createdAt_desc';

    const query = {};
    if (search) {
      const searchRegex = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      query.$or = [{ name: searchRegex }, { email: searchRegex }];
    }

    let sortOptions = { createdAt: -1 };
    if (sort === 'createdAt_asc') sortOptions = { createdAt: 1 };
    if (sort === 'name_asc') sortOptions = { name: 1 };
    if (sort === 'name_desc') sortOptions = { name: -1 };

    const totalUsers = await User.countDocuments(query);
    const users = await User.find(query)
      .select('-password -resetPasswordToken -resetPasswordExpires')
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    const userIds = users.map((u) => u._id);

    // Aggregate purchase summaries for these users
    const [purchaseAgg, studyPlansAgg, answerCountsAgg] = await Promise.all([
      Purchase.aggregate([
        { $match: { user: { $in: userIds }, status: 'completed' } },
        {
          $group: {
            _id: '$user',
            totalSpent: { $sum: { $ifNull: ['$amount', 0] } },
            completedPurchasesCount: { $sum: 1 },
          },
        },
      ]),
      StudyPlan.aggregate([
        { $match: { user: { $in: userIds } } },
        {
          $group: {
            _id: '$user',
            count: { $sum: 1 },
          },
        },
      ]),
      UserAnswer.aggregate([
        { $match: { user: { $in: userIds } } },
        {
          $group: {
            _id: '$user',
            answersCount: { $sum: 1 },
            correctCount: { $sum: { $cond: [{ $eq: ['$isCorrect', true] }, 1, 0] } },
          },
        },
      ]),
    ]);

    const purchaseMap = new Map(purchaseAgg.map((p) => [p._id.toString(), p]));
    const studyPlanMap = new Map(studyPlansAgg.map((s) => [s._id.toString(), s.count]));
    const answerMap = new Map(answerCountsAgg.map((a) => [a._id.toString(), a]));

    const adminEmails = (process.env.ADMIN_EMAILS || '')
      .split(',')
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean);

    const enrichedUsers = users.map((u) => {
      const pData = purchaseMap.get(u._id.toString()) || { totalSpent: 0, completedPurchasesCount: 0 };
      const plansCount = studyPlanMap.get(u._id.toString()) || 0;
      const ansData = answerMap.get(u._id.toString()) || { answersCount: 0, correctCount: 0 };
      const inFreeWindow = isWithinFreeWindow(u.createdAt);

      return {
        _id: u._id,
        name: u.name,
        email: u.email,
        googleId: Boolean(u.googleId),
        createdAt: u.createdAt,
        isAdmin: adminEmails.includes(u.email.toLowerCase()),
        purchasesCount: (u.purchases || []).length,
        completedPurchasesCount: pData.completedPurchasesCount,
        totalSpent: pData.totalSpent,
        studyPlansCount: plansCount,
        answersCount: ansData.answersCount,
        correctAnswersCount: ansData.correctCount,
        inFreeWindow,
      };
    });

    res.json({
      users: enrichedUsers,
      pagination: {
        page,
        limit,
        totalUsers,
        totalPages: Math.ceil(totalUsers / limit),
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * @route   GET /api/admin/users/:userId
 * @desc    Get comprehensive detailed data for a specific user
 * @access  Private/Admin
 */
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const user = await User.findById(userId)
      .select('-password -resetPasswordToken -resetPasswordExpires')
      .populate('purchases', 'slug title tradeCode price totalChapters totalQuestions isPublished')
      .lean();

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const adminEmails = (process.env.ADMIN_EMAILS || '')
      .split(',')
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean);

    // Fetch user's purchases, study plans, and answers
    const [purchases, studyPlans, answers] = await Promise.all([
      Purchase.find({ user: userId })
        .populate('course', 'slug title tradeCode price totalChapters totalQuestions')
        .sort({ createdAt: -1 })
        .lean(),
      StudyPlan.find({ user: userId })
        .sort({ createdAt: -1 })
        .lean(),
      UserAnswer.find({ user: userId })
        .sort({ answeredAt: -1 })
        .lean(),
    ]);

    const inFreeWindow = isWithinFreeWindow(user.createdAt);

    // Calculate free window expiration date
    let freeWindowExpiresAt = null;
    if (user.createdAt) {
      const d = new Date(user.createdAt);
      d.setDate(d.getDate() + FREE_WINDOW_DAYS);
      freeWindowExpiresAt = d;
    }

    // Process purchases with detailed tags
    const processedPurchases = purchases.map((p) => ({
      _id: p._id,
      course: p.course,
      amount: p.amount,
      currency: p.currency,
      status: p.status,
      stripeSessionId: p.stripeSessionId,
      stripePaymentIntent: p.stripePaymentIntent,
      promoCode: p.promoCode,
      passRewardEligible: p.passRewardEligible,
      passRewardClaimDeadline: p.passRewardClaimDeadline,
      isFreeWindow: isFreeWindowPurchase(p),
      createdAt: p.createdAt,
      completedAt: p.completedAt,
    }));

    // Process Study Plans: progress, stats
    const processedStudyPlans = studyPlans.map((plan) => {
      const items = plan.items || [];
      const totalItems = items.length;
      const completedItems = items.filter((item) => item.completed).length;
      const progressPercent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

      return {
        _id: plan._id,
        courseSlug: plan.courseSlug,
        courseTitle: plan.courseTitle,
        planType: plan.planType,
        examDate: plan.examDate,
        createdAt: plan.createdAt,
        updatedAt: plan.updatedAt,
        totalItems,
        completedItems,
        progressPercent,
        items,
      };
    });

    // Process Answers: statistics per course and overall accuracy
    const totalAnswers = answers.length;
    const correctAnswers = answers.filter((a) => a.isCorrect).length;
    const accuracy = totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100) : 0;

    // Group answers by courseId
    const courseAnswerGroups = {};
    answers.forEach((ans) => {
      const cId = ans.courseId || 'unknown';
      if (!courseAnswerGroups[cId]) {
        courseAnswerGroups[cId] = {
          total: 0,
          correct: 0,
          chapters: new Set(),
          lastAnsweredAt: null,
        };
      }
      courseAnswerGroups[cId].total += 1;
      if (ans.isCorrect) courseAnswerGroups[cId].correct += 1;
      if (ans.chapterId) courseAnswerGroups[cId].chapters.add(ans.chapterId);
      if (!courseAnswerGroups[cId].lastAnsweredAt || new Date(ans.answeredAt) > new Date(courseAnswerGroups[cId].lastAnsweredAt)) {
        courseAnswerGroups[cId].lastAnsweredAt = ans.answeredAt;
      }
    });

    const coursesActivity = Object.entries(courseAnswerGroups).map(([courseId, stats]) => ({
      courseId,
      totalAnswered: stats.total,
      correctAnswered: stats.correct,
      accuracy: Math.round((stats.correct / stats.total) * 100),
      chaptersAttempted: stats.chapters.size,
      lastAnsweredAt: stats.lastAnsweredAt,
    }));

    res.json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        googleId: Boolean(user.googleId),
        stripeCustomerId: user.stripeCustomerId,
        createdAt: user.createdAt,
        isAdmin: adminEmails.includes(user.email.toLowerCase()),
        inFreeWindow,
        freeWindowExpiresAt,
        directPurchases: user.purchases || [],
      },
      purchases: processedPurchases,
      studyPlans: processedStudyPlans,
      activity: {
        totalAnswers,
        correctAnswers,
        accuracy,
        recentAnswers: answers.slice(0, 20),
        coursesActivity,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
