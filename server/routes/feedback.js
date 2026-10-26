import express from 'express';
import mongoose from 'mongoose';
import CourseFeedback from '../models/CourseFeedback.js';
import Purchase from '../models/Purchase.js';
import { protect, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

function getCustomerName(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length < 2) return parts[0] || 'Customer';
  return `${parts[0]} ${parts[parts.length - 1][0].toUpperCase()}.`;
}

router.get('/approved', async (req, res) => {
  try {
    const feedback = await CourseFeedback.find({ status: 'approved' })
      .populate('course', 'title tradeCode')
      .sort({ moderatedAt: -1 })
      .lean();
    res.json(feedback.map(({ _id, customerName, text, course }) => ({
      _id,
      customerName,
      text,
      course,
    })));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/mine', protect, async (req, res) => {
  try {
    const feedback = await CourseFeedback.find({ user: req.user._id })
      .populate('course', 'title tradeCode')
      .sort({ createdAt: -1 })
      .lean();
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', protect, async (req, res) => {
  try {
    const { purchaseId, text } = req.body;
    const trimmedText = typeof text === 'string' ? text.trim() : '';
    if (!mongoose.Types.ObjectId.isValid(purchaseId) || trimmedText.length < 10 || trimmedText.length > 2000) {
      return res.status(400).json({ message: 'Select a purchase and enter feedback between 10 and 2000 characters.' });
    }

    const purchase = await Purchase.findOne({
      _id: purchaseId,
      user: req.user._id,
      status: 'completed',
    }).populate('course', '_id');
    if (!purchase) {
      return res.status(403).json({ message: 'Feedback can only be submitted for a completed purchase on your account.' });
    }
    if (req.user.name.trim().split(/\s+/).filter(Boolean).length < 2) {
      return res.status(400).json({ message: 'Add your first and last name to your profile before submitting feedback.' });
    }

    const feedback = await CourseFeedback.findOneAndUpdate(
      { purchase: purchase._id },
      {
        user: req.user._id,
        purchase: purchase._id,
        course: purchase.course._id,
        customerName: getCustomerName(req.user.name),
        text: trimmedText,
        status: 'pending',
        moderatedAt: null,
      },
      { upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true }
    ).populate('course', 'title tradeCode');

    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/admin', protect, requireAdmin, async (req, res) => {
  try {
    const status = ['pending', 'approved', 'rejected'].includes(req.query.status)
      ? req.query.status
      : undefined;
    const query = status ? { status } : {};
    const feedback = await CourseFeedback.find(query)
      .populate('course', 'title tradeCode')
      .sort({ createdAt: -1 })
      .lean();
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch('/admin/:feedbackId', protect, requireAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    if (!mongoose.Types.ObjectId.isValid(req.params.feedbackId) || !['approved', 'rejected'].includes(status)) {
      return res.status(400).json({ message: 'A valid feedback ID and moderation status are required.' });
    }

    const feedback = await CourseFeedback.findByIdAndUpdate(
      req.params.feedbackId,
      { status, moderatedAt: new Date() },
      { new: true, runValidators: true }
    ).populate('course', 'title tradeCode');
    if (!feedback) return res.status(404).json({ message: 'Feedback not found.' });
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;