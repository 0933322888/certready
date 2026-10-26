import mongoose from 'mongoose';

const courseFeedbackSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  purchase: { type: mongoose.Schema.Types.ObjectId, ref: 'Purchase', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  customerName: { type: String, required: true, trim: true },
  text: { type: String, required: true, trim: true, maxlength: 2000 },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  moderatedAt: { type: Date },
}, { timestamps: true });

courseFeedbackSchema.index({ purchase: 1 }, { unique: true });
courseFeedbackSchema.index({ status: 1, moderatedAt: -1 });

export default mongoose.model('CourseFeedback', courseFeedbackSchema);