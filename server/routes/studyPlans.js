import express from 'express';
import StudyPlan from '../models/StudyPlan.js';
import Course from '../models/Course.js';
import { protect } from '../middleware/auth.js';
import {
  STUDY_PLAN_PHASES,
  STUDY_PLAN_COURSE_SLUGS,
  DAYS_FOR_DAILY_PLAN,
} from '../config/studyPlanPhases.js';

const router = express.Router();

router.use(protect);

function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Generate plan items: either weekly or daily from today until examDate (exclusive).
 * Phases are distributed across the available periods.
 */
function generatePlanItems(examDate, phases, planType) {
  const today = startOfDay(new Date());
  const exam = startOfDay(new Date(examDate));
  if (exam <= today) {
    return [];
  }
  const totalDays = Math.floor((exam - today) / (24 * 60 * 60 * 1000));
  const items = [];
  const isDaily = planType === 'daily';

  if (isDaily) {
    const daysPerPhase = Math.max(1, Math.floor(totalDays / phases.length));
    let dayIndex = 0;
    phases.forEach((phase, phaseIndex) => {
      const isLast = phaseIndex === phases.length - 1;
      const count = isLast ? Math.max(1, totalDays - dayIndex) : daysPerPhase;
      for (let i = 0; i < count && dayIndex < totalDays; i++) {
        dayIndex++;
        const startDate = addDays(today, dayIndex - 1);
        const endDate = addDays(today, dayIndex - 1);
        items.push({
          id: `day-${dayIndex}`,
          label: `Day ${dayIndex}: ${phase.title}`,
          periodType: 'day',
          periodIndex: dayIndex,
          startDate,
          endDate,
          completed: false,
        });
      }
    });
  } else {
    const totalWeeks = Math.max(1, Math.ceil(totalDays / 7));
    const weeksPerPhase = Math.max(1, Math.floor(totalWeeks / phases.length));
    let weekIndex = 0;
    phases.forEach((phase, phaseIndex) => {
      const isLast = phaseIndex === phases.length - 1;
      const count = isLast ? Math.max(1, totalWeeks - weekIndex) : weeksPerPhase;
      for (let i = 0; i < count && weekIndex < totalWeeks; i++) {
        weekIndex++;
        const startDate = addDays(today, (weekIndex - 1) * 7);
        const endDate = addDays(today, weekIndex * 7 - 1);
        items.push({
          id: `week-${weekIndex}`,
          label: `Week ${weekIndex}: ${phase.title}`,
          periodType: 'week',
          periodIndex: weekIndex,
          startDate,
          endDate,
          completed: false,
        });
      }
    });
  }
  return items;
}

// @route   GET /api/users/study-plans
// @desc    List current user's study plans (newest first)
// @access  Private
router.get('/', async (req, res) => {
  try {
    const plans = await StudyPlan.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .lean();
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/users/study-plans/courses
// @desc    List course slugs and titles available for study plans
// @access  Private
router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find({
      slug: { $in: STUDY_PLAN_COURSE_SLUGS },
      isPublished: true,
    })
      .select('slug title')
      .lean();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/users/study-plans
// @desc    Create a new study plan (generate from courseSlug + examDate)
// @access  Private
router.post('/', async (req, res) => {
  try {
    const { courseSlug, examDate } = req.body;
    if (!courseSlug || !examDate) {
      return res.status(400).json({ message: 'courseSlug and examDate are required' });
    }
    const phases = STUDY_PLAN_PHASES[courseSlug];
    if (!phases || !phases.length) {
      return res.status(400).json({ message: 'Invalid course for study plan' });
    }
    const exam = new Date(examDate);
    const today = startOfDay(new Date());
    if (exam <= today) {
      return res.status(400).json({ message: 'Exam date must be in the future' });
    }
    const daysUntil = Math.floor((exam - today) / (24 * 60 * 60 * 1000));
    const planType = daysUntil <= DAYS_FOR_DAILY_PLAN ? 'daily' : 'weekly';
    const items = generatePlanItems(exam, phases, planType);
    if (!items.length) {
      return res.status(400).json({ message: 'Could not generate plan' });
    }
    const course = await Course.findOne({ slug: courseSlug, isPublished: true }).select('title').lean();
    const plan = await StudyPlan.create({
      user: req.user._id,
      courseSlug,
      courseTitle: course?.title || courseSlug,
      examDate: exam,
      planType,
      items,
    });
    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/users/study-plans/:id
// @desc    Get one study plan
// @access  Private
router.get('/:id', async (req, res) => {
  try {
    const plan = await StudyPlan.findOne({
      _id: req.params.id,
      user: req.user._id,
    }).lean();
    if (!plan) {
      return res.status(404).json({ message: 'Study plan not found' });
    }
    res.json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   PATCH /api/users/study-plans/:id/items/:itemId
// @desc    Toggle completion for a plan item
// @access  Private
router.patch('/:id/items/:itemId', async (req, res) => {
  try {
    const plan = await StudyPlan.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!plan) {
      return res.status(404).json({ message: 'Study plan not found' });
    }
    const item = plan.items.find((i) => i.id === req.params.itemId);
    if (!item) {
      return res.status(404).json({ message: 'Plan item not found' });
    }
    item.completed = !item.completed;
    item.completedAt = item.completed ? new Date() : undefined;
    plan.updatedAt = new Date();
    await plan.save();
    res.json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   DELETE /api/users/study-plans/:id
// @desc    Delete a study plan
// @access  Private
router.delete('/:id', async (req, res) => {
  try {
    const plan = await StudyPlan.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!plan) {
      return res.status(404).json({ message: 'Study plan not found' });
    }
    res.json({ message: 'Study plan deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
