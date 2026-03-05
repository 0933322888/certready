import mongoose from 'mongoose';

const studyPlanItemSchema = new mongoose.Schema({
  id: { type: String, required: true }, // e.g. "week-1" or "day-3"
  label: { type: String, required: true },
  periodType: { type: String, enum: ['week', 'day'], required: true },
  periodIndex: { type: Number, required: true }, // 1-based week or day number
  startDate: { type: Date },
  endDate: { type: Date },
  completed: { type: Boolean, default: false },
  completedAt: { type: Date },
}, { _id: false });

const studyPlanSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  courseSlug: { type: String, required: true },
  courseTitle: { type: String },
  examDate: { type: Date, required: true },
  planType: { type: String, enum: ['daily', 'weekly'], required: true },
  items: [studyPlanItemSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

studyPlanSchema.index({ user: 1, createdAt: -1 });

export default mongoose.model('StudyPlan', studyPlanSchema);
