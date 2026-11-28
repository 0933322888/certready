import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo/SEO';
import { getHomePageSEO, getOrganizationStructuredData, getWebSiteStructuredData, getFAQStructuredData } from '../utils/seo';
import Hero from '../components/home/Hero';
import PromoBanner from '../components/home/PromoBanner';
import TradeSelector from '../components/home/TradeSelector';
import HowItWorks from '../components/home/HowItWorks';
import SampleQuestionPreview from '../components/home/SampleQuestionPreview';
import TrustSection from '../components/home/TrustSection';
import FinalCta from '../components/home/FinalCta';
import Testimonials from '../components/home/Testimonials';
import Card from '../components/ui/Card';

const HOME_FAQ_FOR_SEO = [
  { question: 'What trades does CertReady offer exam prep for?', answer: 'CertReady currently offers courses for Hairstylist, Plumber, Carpenter, Construction Electrician, Refrigeration and Air Conditioning Mechanic, Welder, and other trades. All courses are based on the official Red Seal Occupational Standard.' },
  { question: 'Is this affiliated with the Red Seal Program or Skilled Trades Ontario?', answer: 'No. CertReady is an independent study resource. We are not affiliated with or endorsed by any provincial or federal trades certification authority.' },
  { question: 'How long do I have access after purchasing?', answer: 'You have 5 years access to the course materials. You can study at your own pace and revisit the content anytime.' },
  { question: 'What if I fail the exam after using CertReady?', answer: 'We believe in our content, but we cannot guarantee exam results — exam content is set by certification authorities and can change. We do not offer refunds based on exam outcomes.' },
  { question: 'What payment methods are accepted?', answer: 'All major credit and debit cards via Stripe. Payments are processed securely — CertReady never stores your card information.' },
  { question: 'Can I preview before buying?', answer: 'Yes — explore the first 2 parts of any course free for 5 days after registration before deciding.' },
];

export default function HomePage() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = t('home.faqs', { returnObjects: true });
  const faqList = Array.isArray(faqs) ? faqs : [];
  const seo = getHomePageSEO();

  return (
    <div>
      <SEO
        {...seo}
        structuredData={[
          getOrganizationStructuredData(),
          getWebSiteStructuredData(),
          getFAQStructuredData(HOME_FAQ_FOR_SEO),
        ]}
      />

      {/* 1. Static hero with value proposition */}
      <Hero />

      {/* 2. Promotional offer, visible without interaction */}
      <PromoBanner />

      {/* 3. Trade selector */}
      <TradeSelector />

      {/* 4. How CertReady works */}
      <HowItWorks />

      {/* 5. Interactive practice question preview */}
      <SampleQuestionPreview />

      {/* 6. Why choose CertReady / trust */}
      <TrustSection />

      {/* 7. Genuine customer feedback, when available */}
      <Testimonials />

      {/* 8. Final CTA */}
      <FinalCta />

      {/* 9. FAQ */}
      <section id="faq" className="py-20 bg-surface scroll-mt-24" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-4xl font-display font-bold text-text-primary mb-4">
              {t('home.faqTitle')}
            </h2>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, index) => (
              <Card key={index}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left flex items-center justify-between"
                  aria-expanded={openFaq === index}
                >
                  <h3 className="text-lg font-semibold text-text-primary pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-text-muted leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}