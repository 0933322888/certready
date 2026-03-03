import express from 'express';
import { protect } from '../middleware/auth.js';
import UserAnswer from '../models/UserAnswer.js';

const router = express.Router();

// @route   POST /api/answers
// @desc    Save or update user answer
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const { courseId, chapterId, questionId, selectedIndex, isCorrect } = req.body;

    if (!courseId || !chapterId || !questionId || selectedIndex === undefined || isCorrect === undefined) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Upsert: update if exists, create if not
    const answer = await UserAnswer.findOneAndUpdate(
      { user: req.user._id, questionId },
      {
        user: req.user._id,
        courseId,
        chapterId,
        questionId,
        selectedIndex,
        isCorrect,
        answeredAt: new Date(),
      },
      { upsert: true, new: true }
    );

    res.json({ success: true, answer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/answers/:courseId/:chapterId
// @desc    Get all user answers for a chapter
// @access  Private
router.get('/:courseId/:chapterId', protect, async (req, res) => {
  try {
    const { courseId, chapterId } = req.params;

    const answers = await UserAnswer.find({
      user: req.user._id,
      courseId,
      chapterId,
    });

    // Convert to a map for easy lookup: { questionId: { selectedIndex, isCorrect } }
    const answersMap = {};
    answers.forEach(answer => {
      answersMap[answer.questionId] = {
        selectedIndex: answer.selectedIndex,
        isCorrect: answer.isCorrect,
        answeredAt: answer.answeredAt,
      };
    });

    res.json({ answers: answersMap });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   DELETE /api/answers/:questionId
// @desc    Clear a specific answer (optional - for reset functionality)
// @access  Private
router.delete('/:questionId', protect, async (req, res) => {
  try {
    await UserAnswer.findOneAndDelete({
      user: req.user._id,
      questionId: req.params.questionId,
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
