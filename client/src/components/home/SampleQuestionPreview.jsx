import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PracticeQuestion from '../course/PracticeQuestion';
import { paths } from '../../utils/routes';
import { trackEvent } from '../../utils/analytics';

/**
 * Interactive sample question from the public question bank.
 * Uses the same PracticeQuestion component as the real practice test so the
 * preview behaves exactly like the product. The question is a CertReady
 * practice item — not an official Red Seal examination question.
 */
const SAMPLE_QUESTION = {
  id: 'homepage-sample-carpenter-1',
  topicLabel: 'Performs Common Occupational Skills',
  question: 'What class of hard hat is required on construction sites where contact with electrical hazards is possible?',
  options: ['Class B', 'Class C', 'Class E', 'Class G'],
  correctIndex: 2,
  explanation: 'CSA Z94.1 Class E (Electrical) hard hats are rated for high-voltage electrical contact up to 20,000 volts. Class E is the standard requirement for construction sites. Class G (General) is rated for lower voltages, and Class C (Conductive) provides no electrical protection.',
};

export default function SampleQuestionPreview() {
  const { t } = useTranslation();

  const handleAnswerSave = (_questionId, result) => {
    trackEvent('sample_question_answered', {
      trade_name: 'Carpenter',
      trade_code: '403A',
      cta_location: 'homepage_sample_question',
      is_correct: result.isCorrect,
    });
  };

  return (
    <section className="py-16 sm:py-20 bg-bg" aria-labelledby="sample-question-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 id="sample-question-heading" className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-3">
            {t('home.sampleQuestion.title')}
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            {t('home.sampleQuestion.subtitle')}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-text-muted mb-3">
          {t('home.sampleQuestion.label', { trade: 'Carpenter', code: '403A' })}
        </p>

        <PracticeQuestion
          questionId="homepage-sample-question"
          actualQuestionId={SAMPLE_QUESTION.id}
          question={SAMPLE_QUESTION.question}
          options={SAMPLE_QUESTION.options}
          correctIndex={SAMPLE_QUESTION.correctIndex}
          explanation={SAMPLE_QUESTION.explanation}
          onAnswerSave={handleAnswerSave}
          explanationLabel={t('home.sampleQuestion.explanationLabel')}
        />

        <p className="text-xs text-text-muted mt-4">
          {t('home.sampleQuestion.disclaimer')}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <Link to={paths.practiceTest('carpenter')} className="w-full sm:w-auto">
            <span className="inline-flex w-full sm:w-auto items-center justify-center font-medium rounded-xl bg-accent text-white hover:bg-accent/90 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base min-h-[44px] touch-manipulation transition-colors">
              {t('home.sampleQuestion.cta')}
            </span>
          </Link>
          <Link
            to={paths.practiceTests}
            className="inline-flex items-center font-semibold text-accent hover:text-accent/80 text-sm sm:text-base"
          >
            {t('home.sampleQuestion.allTrades')} →
          </Link>
        </div>
      </div>
    </section>
  );
}