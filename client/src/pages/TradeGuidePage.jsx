import { useParams, Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { getGuideBySlug } from '../data/tradeGuides';
import {
  getTradeGuideSEO,
  getFAQStructuredData,
  getBreadcrumbStructuredData,
} from '../utils/seo';
import NotFoundPage from './NotFoundPage';

export default function TradeGuidePage() {
  const { tradeSlug } = useParams();
  const guide = getGuideBySlug(tradeSlug);

  if (!guide) {
    return <NotFoundPage />;
  }

  const seo = getTradeGuideSEO(guide);
  const breadcrumbs = getBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'Study Guides', url: '/guides' },
    { name: guide.tradeName, url: `/guides/${guide.slug}` },
  ]);

  return (
    <>
      <SEO
        {...seo}
        structuredData={[
          getFAQStructuredData(guide.faqs),
          breadcrumbs,
        ].filter(Boolean)}
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-text-muted mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/guides" className="hover:text-accent">Study Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-text-primary">{guide.tradeName}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
          {guide.tradeName} Red Seal Exam — Complete Study Guide ({guide.tradeCode})
        </h1>

        <p className="text-lg text-text-primary leading-relaxed mb-8">
          The {guide.tradeName} Red Seal interprovincial exam is a {guide.examQuestions}-question
          multiple-choice examination that tests knowledge across every aspect of the trade.
          Passing requires a minimum score of {guide.passMark}%. This guide covers everything
          you need to know: exam structure, topic weightings, what to focus on, and how to
          prepare effectively.
        </p>

        <section className="mb-12" aria-labelledby="exam-overview-heading">
          <h2 id="exam-overview-heading" className="text-2xl font-display font-bold text-text-primary mb-4">
            {guide.tradeName} Red Seal Exam — Overview
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-surface">
                  <th className="text-left p-4 text-text-primary font-semibold">Detail</th>
                  <th className="text-left p-4 text-text-primary font-semibold">Value</th>
                </tr>
              </thead>
              <tbody className="text-text-primary">
                <tr className="border-t border-border"><td className="p-4">Total questions</td><td className="p-4">{guide.examQuestions}</td></tr>
                <tr className="border-t border-border"><td className="p-4">Pass mark</td><td className="p-4">{guide.passMark}%</td></tr>
                <tr className="border-t border-border"><td className="p-4">Apprenticeship hours</td><td className="p-4">{guide.apprenticeshipHours.toLocaleString()}</td></tr>
                <tr className="border-t border-border"><td className="p-4">Apprenticeship levels</td><td className="p-4">{guide.apprenticeshipLevels}</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12" aria-labelledby="exam-weighting-heading">
          <h2 id="exam-weighting-heading" className="text-2xl font-display font-bold text-text-primary mb-4">
            What Is on the {guide.tradeName} Red Seal Exam?
          </h2>
          <p className="text-text-muted mb-4">
            Exam weighting by topic area (official Red Seal distribution):
          </p>
          <div className="space-y-2">
            {guide.examWeighting.map((row, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-1 text-text-primary">{row.area}</div>
                <div className="w-32 h-4 bg-surface-2 rounded overflow-hidden">
                  <div
                    className="h-full bg-accent rounded"
                    style={{ width: `${row.percent}%` }}
                  />
                </div>
                <span className="w-12 text-right text-text-muted text-sm">{row.percent}%</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12" aria-labelledby="study-tips-heading">
          <h2 id="study-tips-heading" className="text-2xl font-display font-bold text-text-primary mb-4">
            How to Study for the {guide.tradeName} Red Seal Exam
          </h2>
          <ul className="list-disc list-inside space-y-2 text-text-primary">
            {guide.topStudyTips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-display font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {guide.faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{faq.question}</h3>
                <p className="text-text-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface border border-border rounded-xl p-8" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-2xl font-display font-bold text-text-primary mb-4">
            Ready to Prepare? Try a Free Chapter
          </h2>
          <p className="text-text-muted mb-6">
            CertReady offers a comprehensive {guide.tradeName} exam prep course — {guide.examQuestions}+ practice
            questions, chapter-by-chapter content, and a full mock exam. The first 2 chapters are completely free.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to={`/courses/${guide.courseSlug}`}
              className="inline-flex items-center font-semibold text-accent hover:text-accent/80"
            >
              View the {guide.tradeName} Course →
            </Link>
            <Link
              to={`/practice/${guide.slug}`}
              className="inline-flex items-center font-semibold text-accent hover:text-accent/80"
            >
              Try free practice questions →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
