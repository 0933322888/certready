import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { paths } from '../utils/routes';
import { PASS_REWARD_CONFIG } from '../config/passReward';
import { getPassRewardTermsPageSEO, getBreadcrumbStructuredData } from '../utils/seo';

export default function PassRewardTermsPage() {
  const seoProps = getPassRewardTermsPageSEO();
  const structuredData = [
    getBreadcrumbStructuredData([
      { name: 'Home', url: paths.home },
      { name: 'CertReady Pass Reward', url: paths.passReward },
      { name: 'Terms & Conditions', url: paths.passRewardTerms },
    ]),
  ];

  return (
    <div className="min-h-screen bg-bg py-16">
      <SEO
        {...seoProps}
        structuredData={structuredData}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to={paths.passReward} className="text-sm text-accent hover:underline inline-flex items-center gap-1 mb-4">
            ← Back to Pass Reward Overview
          </Link>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-2">
            CertReady Pass Reward Terms & Conditions
          </h1>
          <p className="text-sm text-text-muted">
            Terms Version: {PASS_REWARD_CONFIG.termsVersion} • Effective Date: January 1, 2026
          </p>
        </div>

        <Card className="prose prose-invert max-w-none space-y-6 text-sm text-text-muted leading-relaxed">
          <p className="text-base text-text-primary">
            Please read these Terms & Conditions carefully. The CertReady Pass Reward program is designed to celebrate and reward candidates who dedicate themselves to passing their skilled-trades certification exams.
          </p>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-2">1. Promotion Name & Operator</h2>
            <p>
              This promotion is officially known as the <strong>CertReady Pass Reward</strong> (“Promotion”). The Promotion is operated independently by CertReady (“CertReady”, “we”, “us”, or “our”).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-2">2. Eligible Purchases</h2>
            <p>
              To qualify for the Pass Reward, a customer must purchase an eligible CertReady trade exam preparation course at the regular retail price ({PASS_REWARD_CONFIG.standardPriceCad}) during the active campaign period. Purchases made using 100% free promotional bypasses or non-qualifying complimentary access do not generate refund rights under this program.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-2">3. Promotional Period & Terms Protection</h2>
            <p>
              The Promotion begins on the official campaign start date and may run until ended by CertReady. If CertReady discontinues or modifies the Promotion prospectively, <strong>any purchase completed during the active promotion retains its full Pass Reward rights</strong> under the terms that were active at the exact time of purchase, through the full 6-month claim window.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-2">4. Eligible Courses & Exams</h2>
            <p>
              The exam taken by the candidate must directly correspond to the skilled trade of the CertReady course purchased (e.g., passing the Red Seal Construction Electrician 309A exam for a CertReady Construction Electrician course purchase).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-2">5. Candidate Identity</h2>
            <p>
              The customer submitting the claim must be the individual who sat for and passed the examination. Name verification between the CertReady account, payment billing details, and examination document may be performed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-2">6. Eligibility Window & Claim Deadline</h2>
            <p>
              The certification or skilled-trades examination must be successfully completed within <strong>six (6) months</strong> from the date of the qualifying CertReady course purchase. Claims submitted after this 6-month window has elapsed are ineligible.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-2">7. Proof Requirements & Verification</h2>
            <p>
              To submit a claim, the customer must upload reasonable evidence of having passed the exam. Accepted documentation includes official provincial/territorial score reports, certification certificates, or official examination administration portal confirmations clearly showing the candidate’s name, exam trade, date, and pass status. CertReady reserves the right to request additional reasonable clarification to prevent duplicate or fraudulent claims.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-2">8. Refund Amount & Method</h2>
            <p>
              Upon review and approval of a qualifying claim, CertReady will issue a refund of the original course fee actually paid by the customer for that purchase (up to CAD $49.99). The refund will be credited directly to the original payment method used during checkout via Stripe. Processing time to appear on your bank statement typically ranges between 5 to 10 business days depending on financial institutions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-2">9. Claim Limits</h2>
            <p>
              A maximum of one (1) Pass Reward refund may be claimed per qualifying course purchase. Duplicate claims for the same purchase will be automatically rejected.
            </p>
          </section>

          <section className="p-4 rounded-xl bg-surface-2 border border-border">
            <h2 className="text-lg font-bold text-text-primary mb-2">10. No Review or Public Testimonial Requirement</h2>
            <p className="text-text-primary">
              <strong>Submitting a review, rating, testimonial, or public endorsement of CertReady is NEVER required</strong> to receive the Pass Reward. Approval and refund disbursement are strictly based on verified qualification and exam pass results. Any optional feedback provided by a student is completely voluntary.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-2">11. Fraud Prevention</h2>
            <p>
              Claims involving altered, fabricated, forged, or stolen examination documentation will be immediately rejected and may result in account termination.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-2">12. Independent Educational Provider Disclaimer</h2>
            <p>
              CertReady is an independent Canadian study platform and is not affiliated with, sponsored by, or endorsed by the Red Seal Program, the Canadian Council of Directors of Apprenticeship (CCDA), Skilled Trades Ontario, or any provincial or territorial apprenticeship authority. Passing a certification exam depends upon the individual candidate’s comprehensive knowledge and preparation.
            </p>
          </section>

          <div className="pt-6 border-t border-border flex justify-between items-center">
            <Link to={paths.passReward}>
              <Button variant="outline">Back to Overview</Button>
            </Link>
            <Link to={paths.trades}>
              <Button>Browse Courses</Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
