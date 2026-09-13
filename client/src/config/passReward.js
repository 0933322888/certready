/**
 * Frontend CertReady Pass Reward Campaign Configuration
 */

export const PASS_REWARD_CONFIG = {
  campaignId: 'pass_reward_v1',
  campaignName: 'CertReady Pass Reward',
  termsVersion: '2026-v1',
  isActive: true,
  startDate: '2026-01-01T00:00:00.000Z',
  endDate: '2026-12-31T23:59:59.999Z',
  claimWindowMonths: 6,
  standardPriceCad: '$49.99 CAD',
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
  headlines: {
    badge: 'CertReady Pass Reward',
    primary: 'Pass Your Exam. Get Your Course Fee Back.',
    secondary: "For a limited time, purchase an eligible CertReady course, prepare for your certification exam, pass it, and we'll refund your original course fee.",
    reassurance: 'No positive review is required. Your refund does not depend on what you say about CertReady.',
  },
  fourSteps: [
    {
      step: 1,
      title: 'Prepare',
      desc: 'Purchase an eligible CertReady course and use the study material, practice questions, and mock exams to prepare.',
    },
    {
      step: 2,
      title: 'Take your exam',
      desc: 'Take the corresponding Canadian certification or skilled-trades exam within 6 months of your purchase.',
    },
    {
      step: 3,
      title: 'Pass',
      desc: 'Provide reasonable proof that you successfully passed the corresponding exam.',
    },
    {
      step: 4,
      title: 'Get your course fee back',
      desc: 'Once the claim is approved, CertReady refunds the original eligible course purchase.',
    },
  ],
  whyExplanation: 'CertReady is growing, and we want more skilled-trades candidates to experience our exam preparation courses. Instead of putting our entire marketing budget into advertising, we’re using part of it to reward students who successfully pass their exams.',
};

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

export function isCourseEligibleForPassReward(courseSlug) {
  if (!isPassRewardActive()) return false;
  if (!PASS_REWARD_CONFIG.eligibleCourseSlugs || PASS_REWARD_CONFIG.eligibleCourseSlugs.length === 0) {
    return true;
  }
  return PASS_REWARD_CONFIG.eligibleCourseSlugs.includes(courseSlug);
}
