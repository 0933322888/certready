/**
 * CertReady Pass Reward Campaign Configuration
 * 
 * Centralized business rules for the Pass Reward promotion.
 * All purchases made while the campaign is active qualify for the reward.
 * Eligible purchases retain their Pass Reward claim rights for 6 months after purchase,
 * even if the campaign is subsequently turned off or expired.
 */

export const PASS_REWARD_CONFIG = {
  campaignId: 'pass_reward_v1',
  campaignName: 'CertReady Pass Reward',
  termsVersion: '2026-v1',
  // Active toggle for new purchases
  isActive: true,
  // Start date of campaign (ISO string)
  startDate: '2026-01-01T00:00:00.000Z',
  // End date of campaign (optional, null means ongoing until deactivated)
  endDate: '2026-12-31T23:59:59.999Z',
  // Claim duration in months after purchase date
  claimWindowMonths: 6,
  // Price in CAD cents that represents standard refundable course fee
  standardCourseFeeCents: 4999,
  // Eligible course slugs (null / empty array means all published paid courses are eligible)
  eligibleCourseSlugs: [
    'construction-electrician',
    'plumber',
    'carpenter',
    'hairstylist',
    'automotive-service-technician',
    'welder',
    'industrial-electrician',
    'truck-and-coach-technician',
  ],
  // Allowed mime types for claim proof
  allowedProofMimeTypes: [
    'application/pdf',
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
  ],
  maxProofSizeBytes: 10 * 1024 * 1024, // 10MB
  headlines: {
    badge: 'Limited-Time Pass Reward',
    primary: 'Pass Your Exam. Get Your Course Fee Back.',
    secondary: "For a limited time, purchase an eligible CertReady course, prepare for your certification exam, pass it, and we'll refund your original course fee.",
    reassurance: 'No positive review is required. Your refund does not depend on what you say about CertReady.',
  },
};

/**
 * Checks if the campaign is currently accepting new qualifying purchases.
 */
export function isPassRewardActive(now = new Date()) {
  if (!PASS_REWARD_CONFIG.isActive) return false;
  const currentTime = now instanceof Date ? now.getTime() : new Date(now).getTime();
  if (PASS_REWARD_CONFIG.startDate && currentTime < new Date(PASS_REWARD_CONFIG.startDate).getTime()) {
    return false;
  }
  if (PASS_REWARD_CONFIG.endDate && currentTime > new Date(PASS_REWARD_CONFIG.endDate).getTime()) {
    return false;
  }
  return true;
}

/**
 * Checks if a specific course slug qualifies for the Pass Reward under active campaign.
 */
export function isCourseEligibleForPassReward(courseSlug) {
  if (!isPassRewardActive()) return false;
  if (!PASS_REWARD_CONFIG.eligibleCourseSlugs || PASS_REWARD_CONFIG.eligibleCourseSlugs.length === 0) {
    return true;
  }
  return PASS_REWARD_CONFIG.eligibleCourseSlugs.includes(courseSlug);
}

/**
 * Calculates claim deadline given a purchase date.
 */
export function calculateClaimDeadline(purchaseDate = new Date(), months = PASS_REWARD_CONFIG.claimWindowMonths) {
  const d = new Date(purchaseDate);
  d.setMonth(d.getMonth() + months);
  return d;
}
