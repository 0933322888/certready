import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getTradeBySlug, examDurationMinutes } from '../data/tradeGuideContent';
import { getReadinessQuestions } from '../api/practiceApi';
import { getTopicStats, getStrongAndWeakTopics } from '../hooks/usePracticeSession';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/layout/Breadcrumb';
import {
  getReadinessTestSEO,
  getBreadcrumbStructuredData,
} from '../utils/seo';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { paths } from '../utils/routes';
import { tradeGuides } from '../data/tradeGuides';

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }
  return `${m}:${String(s).padStart(2, '0')}`;
}

/** 20% of full exam duration in seconds */
function readinessDurationSeconds(trade) {
  const fullMinutes = examDurationMinutes(trade);
  return Math.max(1, Math.ceil(0.2 * fullMinutes * 60));
}

function getWebPageStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Red Seal Readiness Test',
    description: 'Free quiz to assess your readiness for the Red Seal interprovincial exam.',
    url: 'https://www.certready.ca/red-seal-readiness-test',
    applicationCategory: 'EducationalApplication',
    publisher: { '@type': 'Organization', name: 'CertReady', url: 'https://www.certready.ca' },
  };
}

export default function RedSealReadinessTestPage() {
  const { t } = useTranslation();
  const [phase, setPhase] = useState('choose'); // 'choose' | 'loading' | 'exam' | 'results'
  const [selectedTradeSlug, setSelectedTradeSlug] = useState(null);
  const [loadError, setLoadError] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [markedForReview, setMarkedForReview] = useState(new Set());
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState(null);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  const trade = selectedTradeSlug ? getTradeBySlug(selectedTradeSlug) : null;
  const totalSeconds = trade ? readinessDurationSeconds(trade) : 0;
  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;

  const toggleMarkForReview = useCallback(() => {
    if (!currentQuestion) return;
    setMarkedForReview((prev) => {
      const next = new Set(prev);
      if (next.has(currentQuestion.id)) next.delete(currentQuestion.id);
      else next.add(currentQuestion.id);
      return next;
    });
  }, [currentQuestion]);

  const handleSelectTrade = useCallback(async (tradeSlug) => {
    setLoadError(null);
    setSelectedTradeSlug(tradeSlug);
    setPhase('loading');
    try {
      const { questions: qs } = await getReadinessQuestions(tradeSlug);
      if (!qs?.length) {
        setLoadError(t('readinessTest.noQuestions'));
        setPhase('choose');
        setSelectedTradeSlug(null);
        return;
      }
      setQuestions(qs);
      setAnswers({});
      setCurrentIndex(0);
      setMarkedForReview(new Set());
      setTimeRemainingSeconds(readinessDurationSeconds(getTradeBySlug(tradeSlug)));
      setPhase('exam');
    } catch (err) {
      setLoadError(t('readinessTest.loadError'));
      setPhase('choose');
      setSelectedTradeSlug(null);
    }
  }, [t]);

  const handleSubmitExam = useCallback(() => {
    setPhase('results');
    setShowSubmitConfirm(false);
  }, []);

  useEffect(() => {
    if (phase !== 'exam' || timeRemainingSeconds === null) return;
    if (timeRemainingSeconds <= 0) {
      handleSubmitExam();
      return;
    }
    const timer = setInterval(() => {
      setTimeRemainingSeconds((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, timeRemainingSeconds, handleSubmitExam]);

  const handleAnswerSelect = useCallback((questionId, selectedIndex) => {
    setAnswers((prev) => ({ ...prev, [questionId]: selectedIndex }));
  }, []);

  const results = useMemo(() => {
    if (phase !== 'results' || questions.length === 0) return null;
    const answersWithCorrect = {};
    questions.forEach((q) => {
      const sel = answers[q.id];
      const isCorrect = sel !== undefined ? sel === q.correctIndex : false;
      answersWithCorrect[q.id] = {
        selectedIndex: sel ?? -1,
        isCorrect,
      };
    });
    const topicStats = getTopicStats(questions, answersWithCorrect);
    const { strong: strongTopics, weak: weakTopics } = getStrongAndWeakTopics(topicStats);
    const correctCount = Object.values(answersWithCorrect).filter((a) => a.isCorrect).length;
    const incorrectCount = questions.length - correctCount;
    const scorePercent = Math.round((correctCount / questions.length) * 100);
    const passingScore = trade?.passingScore ?? 70;
    const passed = scorePercent >= passingScore;
    let readinessLevel = 'low';
    if (scorePercent >= passingScore) readinessLevel = 'high';
    else if (scorePercent >= 50) readinessLevel = 'medium';
    return {
      correctCount,
      incorrectCount,
      total: questions.length,
      scorePercent,
      passed,
      passingScore,
      topicStats,
      strongTopics,
      weakTopics,
      readinessLevel,
    };
  }, [phase, questions, answers, trade?.passingScore]);

  const handleBackToChoose = useCallback(() => {
    setPhase('choose');
    setSelectedTradeSlug(null);
    setQuestions([]);
    setAnswers({});
    setLoadError(null);
  }, []);

  const seo = getReadinessTestSEO();
  const breadcrumbItems = useMemo(() => {
    const base = [
      { name: t('practicePage.home'), url: paths.home },
      { name: t('readinessTest.breadcrumb'), url: paths.redSealReadinessTest },
    ];
    if (trade && (phase === 'exam' || phase === 'results')) {
      base.push({ name: trade.name, url: paths.redSealReadinessTest });
    }
    return base;
  }, [t, trade, phase]);

  return (
    <>
      <SEO
        {...seo}
        structuredData={[
          getBreadcrumbStructuredData(breadcrumbItems),
          getWebPageStructuredData(),
        ].filter(Boolean)}
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />

        {phase === 'choose' && (
          <>
            <h1 className="text-4xl font-display font-bold text-text-primary mb-2">
              {t('readinessTest.title')}
            </h1>
            <p className="text-lg text-text-muted mb-6">
              {t('readinessTest.subtitle')}
            </p>
            <p className="text-text-muted mb-6">
              {t('readinessTest.intro')}
            </p>
            {loadError && (
              <Card className="mb-6 border-danger/50 bg-danger/5">
                <p className="text-danger">{loadError}</p>
              </Card>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {tradeGuides.map((guide) => {
                const guideTrade = getTradeBySlug(guide.slug);
                const readinessMinutes = guideTrade ? Math.ceil(0.2 * examDurationMinutes(guideTrade)) : 36;
                const questionCount = Math.ceil(0.2 * (guide.examQuestions || 100));
                return (
                <Card key={guide.slug} hover className="flex flex-col p-6">
                  <h2 className="text-xl font-display font-bold text-text-primary mb-2">
                    {guide.tradeName} ({guide.tradeCode})
                  </h2>
                  <p className="text-text-muted text-sm flex-1 mb-4">
                    {t('readinessTest.tradeCardDesc', {
                      count: questionCount,
                      duration: t('readinessTest.durationMinutes', { count: readinessMinutes }),
                    })}
                  </p>
                  <Button onClick={() => handleSelectTrade(guide.slug)} className="w-full">
                    {t('readinessTest.startTest')}
                  </Button>
                </Card>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to={paths.redSealExam} className="text-accent hover:text-accent/80 text-sm font-medium">
                {t('readinessTest.aboutRedSeal')} →
              </Link>
              <Link to={paths.practiceTests} className="text-accent hover:text-accent/80 text-sm font-medium">
                {t('readinessTest.tryPracticeTests')} →
              </Link>
            </div>
          </>
        )}

        {phase === 'loading' && (
          <Card className="py-12 text-center text-text-muted">
            {t('readinessTest.loading')}
          </Card>
        )}

        {phase === 'exam' && trade && questions.length > 0 && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 bg-surface border border-border rounded-xl p-4 sticky top-20 z-10">
              <div className="flex items-center gap-4">
                <span
                  className={`text-lg font-mono font-semibold ${timeRemainingSeconds <= 60 ? 'text-danger' : 'text-text-primary'}`}
                  aria-live="polite"
                >
                  {t('readinessTest.timeRemaining')}: {formatTime(timeRemainingSeconds)}
                </span>
                <span className="text-text-muted text-sm">
                  {t('readinessTest.answeredCount', { answered: answeredCount, total: questions.length })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleMarkForReview}
                  className={markedForReview.has(currentQuestion?.id) ? 'ring-2 ring-amber-500' : ''}
                >
                  {markedForReview.has(currentQuestion?.id)
                    ? t('readinessTest.unmarkReview')
                    : t('readinessTest.markReview')}
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setShowSubmitConfirm(true)}
                >
                  {t('readinessTest.submitExam')}
                </Button>
              </div>
            </div>

            <Card className="p-6">
              <p className="text-sm text-text-muted mb-4">
                {t('readinessTest.questionOf', { current: currentIndex + 1, total: questions.length })}
              </p>
              <h2 className="text-xl font-semibold text-text-primary mb-6">{currentQuestion.question}</h2>
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = answers[currentQuestion.id] === index;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleAnswerSelect(currentQuestion.id, index)}
                      className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                        isSelected
                          ? 'bg-accent/20 border-accent text-accent'
                          : 'bg-surface-2 border-border text-text-primary hover:border-accent/50'
                      }`}
                    >
                      <span className="font-medium">
                        {String.fromCharCode(65 + index)}. {option}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Card>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <Button
                variant="outline"
                onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                disabled={currentIndex === 0}
              >
                ← {t('readinessTest.previous')}
              </Button>
              <Button
                variant="outline"
                onClick={() => setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))}
                disabled={currentIndex === questions.length - 1}
              >
                {t('readinessTest.next')} →
              </Button>
              <div className="flex flex-wrap gap-2 justify-center">
                {questions.map((q, i) => (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIndex(i)}
                    className={`w-9 h-9 rounded-lg border-2 text-sm font-medium transition-all ${
                      i === currentIndex
                        ? 'border-accent bg-accent text-white'
                        : answers[q.id] !== undefined
                        ? 'border-success/50 bg-success/10 text-text-primary'
                        : markedForReview.has(q.id)
                        ? 'border-amber-500 bg-amber-500/10 text-amber-600'
                        : 'border-border bg-surface-2 text-text-muted hover:border-accent/50'
                    }`}
                    title={t('readinessTest.goToQuestion', { num: i + 1 })}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {showSubmitConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <Card className="max-w-md w-full p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">{t('readinessTest.submitConfirmTitle')}</h3>
              <p className="text-text-muted mb-4">
                {t('readinessTest.submitConfirmMessage', { answered: answeredCount, total: questions.length })}
              </p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setShowSubmitConfirm(false)}>
                  {t('readinessTest.cancel')}
                </Button>
                <Button variant="danger" onClick={handleSubmitExam}>
                  {t('readinessTest.submitAnyway')}
                </Button>
              </div>
            </Card>
          </div>
        )}

        {phase === 'results' && results && trade && (
          <div className="space-y-6">
            <h1 className="text-4xl font-display font-bold text-text-primary">
              {t('readinessTest.resultsTitle')}
            </h1>
            <Card className="p-6">
              <p className="text-3xl font-bold text-text-primary mb-2">
                {t('readinessTest.scoreLabel')}: {results.scorePercent}%
              </p>
              <p className="text-lg text-text-muted mb-4">
                {t('readinessTest.scoreDetail', {
                  correct: results.correctCount,
                  incorrect: results.incorrectCount,
                  total: results.total,
                })}
              </p>

              <div className="mb-6">
                <h3 className="font-semibold text-text-primary mb-2">{t('readinessTest.estimatedReadiness')}</h3>
                <p className={`text-lg font-medium ${
                  results.readinessLevel === 'high' ? 'text-success' :
                  results.readinessLevel === 'medium' ? 'text-amber-600' : 'text-danger'
                }`}>
                  {t(`readinessTest.readinessLevel.${results.readinessLevel}`)}
                </p>
                <p className="text-text-muted text-sm mt-1">
                  {t(`readinessTest.readinessLevelDesc.${results.readinessLevel}`)}
                </p>
              </div>

              {results.weakTopics.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-text-primary mb-2">{t('readinessTest.weakAreas')}</h3>
                  <ul className="list-disc list-inside text-text-muted space-y-1">
                    {results.weakTopics.map((label) => (
                      <li key={label}>{label}</li>
                    ))}
                  </ul>
                </div>
              )}
              {results.strongTopics.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-text-primary mb-2">{t('readinessTest.strongAreas')}</h3>
                  <ul className="list-disc list-inside text-text-muted space-y-1">
                    {results.strongTopics.map((label) => (
                      <li key={label}>{label}</li>
                    ))}
                  </ul>
                </div>
              )}

              <Card className="mb-6 bg-accent/10 border-accent/30 p-6">
                <h3 className="font-semibold text-text-primary mb-2">{t('readinessTest.ctaTitle')}</h3>
                <p className="text-text-muted mb-4">{t('readinessTest.ctaText')}</p>
                <Link to={paths.tradeGuide(trade.slug)}>
                  <Button size="lg">{t('readinessTest.ctaButton')}</Button>
                </Link>
              </Card>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                <Button onClick={() => handleSelectTrade(selectedTradeSlug)}>{t('readinessTest.tryAgain')}</Button>
                <Button variant="outline" onClick={handleBackToChoose}>{t('readinessTest.chooseAnotherTrade')}</Button>
                <Link to={paths.practiceTest(trade.slug)}>
                  <Button variant="outline">{t('readinessTest.backToPractice')}</Button>
                </Link>
                <Link to={paths.tradeGuide(trade.slug)}>
                  <Button variant="ghost">{t('readinessTest.viewStudyGuide')}</Button>
                </Link>
              </div>
            </Card>
          </div>
        )}
      </main>
    </>
  );
}
