import express from 'express';
import User from '../models/User.js';
import Purchase from '../models/Purchase.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/users/dashboard
// @desc    Get user dashboard data
// @access  Private
router.get('/dashboard', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .select('-password')
      .populate('purchases', 'slug title subtitle tradeCode totalChapters totalQuestions');
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/users/purchase-history
// @desc    Get user's purchase history (course + date)
// @access  Private
router.get('/purchase-history', protect, async (req, res) => {
  try {
    const purchases = await Purchase.find({ user: req.user._id, status: 'completed' })
      .populate('course', 'slug title tradeCode')
      .sort({ completedAt: -1 });
    res.json(purchases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   PUT /api/users/profile
// @desc    Update user name and/or email
// @access  Private
router.put('/profile', protect, async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findById(req.user._id).select('-password');

    if (name !== undefined && name.trim()) {
      user.name = name.trim();
    }
    if (email !== undefined && email.trim()) {
      const existing = await User.findOne({ email: email.trim().toLowerCase() });
      if (existing && existing._id.toString() !== user._id.toString()) {
        return res.status(400).json({ message: 'Email already in use' });
      }
      user.email = email.trim().toLowerCase();
    }

    await user.save();
    const updated = await User.findById(user._id)
      .select('-password')
      .populate('purchases', 'slug title subtitle tradeCode totalChapters totalQuestions');
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
