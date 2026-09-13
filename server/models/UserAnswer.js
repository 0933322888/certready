import mongoose from 'mongoose';

const userAnswerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  courseId: { type: String, required: true }, // e.g., 'hairstylist-332a' or 'carpenter'
  chapterId: { type: String, default: 'practice' }, // e.g., 'ch-1', 'practice', or 'mock-exam'
  questionId: { type: String, required: true }, // e.g., 'q1-1' or PracticeQuestion _id
  selectedIndex: { type: Number, required: true },
  isCorrect: { type: Boolean, required: true },
  answeredAt: { type: Date, default: Date.now },
}, { timestamps: true });

// Compound index to ensure one answer per user per question
userAnswerSchema.index({ user: 1, questionId: 1 }, { unique: true });

export default mongoose.model('UserAnswer', userAnswerSchema);
