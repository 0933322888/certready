import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  subtitle: { type: String },
  description: { type: String },
  trade: { type: String },
  tradeCode: { type: String },
  price: { type: Number, required: true },
  discountPrice: { type: Number },
  discountCap: { type: Number },
  currency: { type: String, default: 'cad' },
  stripePriceId: { type: String },
  coverImage: { type: String },
  totalChapters: { type: Number },
  totalQuestions: { type: Number },
  isPublished: { type: Boolean, default: true },
  features: [String],
}, { timestamps: true });

export default mongoose.model('Course', courseSchema);
