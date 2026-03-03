import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  stripeSessionId: { type: String, required: true, unique: true },
  stripePaymentIntent: { type: String },
  amount: { type: Number },
  currency: { type: String },
  status: { type: String, enum: ['pending', 'completed', 'refunded'], default: 'pending' },
  completedAt: { type: Date },
}, { timestamps: true });

export default mongoose.model('Purchase', purchaseSchema);
