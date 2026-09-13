import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo/SEO';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { paths } from '../utils/routes';
import { PASS_REWARD_CONFIG } from '../config/passReward';
import { trackEvent } from '../utils/analytics';
import {
  getPassRewardPageSEO,
  getFAQStructuredData,
  getBreadcrumbStructuredData,
  getPassRewardPromotionStructuredData,
} from '../utils/seo';

const PASS_REWARD_FAQS = [
  {
    question: 'Is this really a full refund?',
    answer: 'Yes. If your qualifying claim is approved, CertReady refunds the full eligible course purchase amount back to your original payment method via Stripe.',
  },
  {
    question: 'Do I need to leave a positive review?',
    answer: 'No. Reviews, ratings, and testimonials are entirely optional and have no effect whatsoever on refund eligibility or approval.',
  },
  {
    question: 'What proof do I need?',
    answer: 'A clear document, official email, testing portal screenshot, certificate, or other reasonable evidence showing your name and the successful pass result for the corresponding examination.',
  },
  {
    question: 'How long do I have to pass?',
    answer: 'The examination must be successfully passed within 6 months of your qualifying CertReady course purchase.',
  },
  {
    question: 'Can I claim more than once?',
    answer: 'A Pass Reward applies once per qualifying course purchase.',
  },
  {
    question: 'What if I don’t pass?',
    answer: 'The Pass Reward is specifically designed as a celebration reward for successful candidates. If you need more time, your regular course access remains active under CertReady standard purchase terms (up to 5 years).',
  },
];

export default function PassRewardPage() {
  const { t: _t } = useTranslation();
  const seoProps = getPassRewardPageSEO();

  useEffect(() => {
    trackEvent('pass_reward_viewed', { campaign: PASS_REWARD_CONFIG.campaignId });
  }, []);

  const structuredData = [
    getBreadcrumbStructuredData([
      { name: 'Home', url: paths.home },
      { name: 'CertReady Pass Reward', url: paths.passReward },
    ]),
    getFAQStructuredData(PASS_REWARD_FAQS),
    getPassRewardPromotionStructuredData(),
  ];

  return (
    <div className="min-h-screen bg-bg">
      <SEO
        {...seoProps}
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden border-b border-border bg-gradient-to-b from-surface via-surface-2/40 to-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="warm" className="text-sm px-4 py-1.5 mb-6">
            {PASS_REWARD_CONFIG.headlines.badge}
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-6 leading-tight">
            {PASS_REWARD_CONFIG.headlines.primary}
          </h1>
          <p className="text-lg sm:text-xl text-text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
            {PASS_REWARD_CONFIG.headlines.secondary}
          </p>
          <div className="inline-flex items-center gap-2 p-3 px-5 rounded-full bg-accent-warm/10 border border-accent-warm/20 text-accent-warm text-sm font-medium mb-10">
            <span>🛡️</span>
            <span>{PASS_REWARD_CONFIG.headlines.reassurance}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={paths.trades}
              onClick={() => trackEvent('pass_reward_cta_clicked', { action: 'browse_courses' })}
            >
              <Button size="lg" className="w-full sm:w-auto">
                Browse Eligible Courses
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                How It Works
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Are We Doing This */}
      <section className="py-16 bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-surface-2 border border-border">
            <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
              Why are we doing this?
            </h2>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              {PASS_REWARD_CONFIG.whyExplanation}
            </p>
          </div>
        </div>
      </section>

      {/* How It Works: 4 Steps */}
      <section id="how-it-works" className="py-20 bg-bg border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-4">
              How the Pass Reward Works
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              A transparent, straightforward process designed to support skilled trade candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {PASS_REWARD_CONFIG.fourSteps.map((step) => (
              <Card key={step.step} hover className="flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent-warm/15 text-accent-warm font-display font-bold text-xl flex items-center justify-center mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-display font-bold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-surface-2 border border-border text-center">
            <h3 className="text-base font-semibold text-text-primary mb-2">
              Clear & Honest Guarantee of Independence
            </h3>
            <p className="text-sm text-text-muted">
              {PASS_REWARD_CONFIG.headlines.reassurance} We believe skilled trade professionals earn their certifications through dedication and rigorous practice. We are honored to celebrate your success.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-16 bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-text-primary mb-8 text-center">
            Eligibility Requirements
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-2 border border-border">
              <span className="text-success text-xl">✓</span>
              <div>
                <strong className="text-text-primary block">Qualifying Purchase</strong>
                <span className="text-sm text-text-muted">
                  Purchase an eligible CertReady course ($49.99 CAD) during the active promotional period.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-2 border border-border">
              <span className="text-success text-xl">✓</span>
              <div>
                <strong className="text-text-primary block">6-Month Exam Window</strong>
                <span className="text-sm text-text-muted">
                  Take and successfully pass the corresponding trade certification examination within 6 months of your purchase date.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-2 border border-border">
              <span className="text-success text-xl">✓</span>
              <div>
                <strong className="text-text-primary block">Candidate Identity</strong>
                <span className="text-sm text-text-muted">
                  You must be the candidate who took the exam, matching your CertReady account name or verified identity.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-2 border border-border">
              <span className="text-success text-xl">✓</span>
              <div>
                <strong className="text-text-primary block">Reasonable Result Verification</strong>
                <span className="text-sm text-text-muted">
                  Provide an official examination result sheet, certificate, or portal confirmation showing passing status.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-bg border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-text-muted">Everything you need to know about the CertReady Pass Reward</p>
          </div>
          <div className="space-y-6">
            {PASS_REWARD_FAQS.map((faq, i) => (
              <Card key={i}>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-text-primary mb-4">
            Ready to Prepare and Earn Your Pass Reward?
          </h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            Choose your skilled trade, practice with hundreds of Red Seal-aligned questions, and get your course fee refunded when you pass.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={paths.trades}>
              <Button size="lg">Browse Trade Courses</Button>
            </Link>
            <Link to={paths.passRewardTerms}>
              <Button size="lg" variant="outline">View Full Terms & Conditions</Button>
            </Link>
          </div>
          <p className="text-xs text-text-muted mt-8">
            CertReady is an independent Canadian study platform and is not affiliated with the Red Seal Program or provincial trades authorities.
          </p>
        </div>
      </section>
    </div>
  );
}
