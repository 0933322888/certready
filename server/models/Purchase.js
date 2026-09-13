import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  stripeSessionId: { type: String, required: true, unique: true },
  stripePaymentIntent: { type: String },
  amount: { type: Number },
  currency: { type: String },
  promoCode: { type: String }, // code used at checkout, if any
  status: { type: String, enum: ['pending', 'completed', 'refunded'], default: 'pending' },
  // CertReady Pass Reward campaign fields recorded at purchase time
  passRewardEligible: { type: Boolean, default: false },
  passRewardCampaignId: { type: String },
  passRewardCampaignName: { type: String },
  passRewardTermsVersion: { type: String },
  passRewardPurchaseDate: { type: Date },
  passRewardClaimDeadline: { type: Date },
  completedAt: { type: Date },
}, { timestamps: true });

purchaseSchema.index({ user: 1, passRewardEligible: 1 });
purchaseSchema.index({ stripePaymentIntent: 1 });

export default mongoose.model('Purchase', purchaseSchema);
