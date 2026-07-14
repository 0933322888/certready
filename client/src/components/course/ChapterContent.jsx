import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';
import { getGuideSlugFromCourseSlug } from '../../data/tradeGuides';
import { getTradeBySlug } from '../../data/tradeGuideContent';
import { paths } from '../../utils/routes';
import KeyTermCard from './KeyTermCard';
import InfoBox from './InfoBox';
import ComparisonTable from './ComparisonTable';
import PracticeQuestion from './PracticeQuestion';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Card from '../ui/Card';
import api from '../../utils/api';

/** Renders string with **bold** segments as inline <strong> (for list items) */
function formatInlineBold(str) {
  if (typeof str !== 'string') return str;
  const parts = str.split(/\*\*(.*?)\*\*/g);
  return parts.map((p, i) => (i % 2 === 1 ? <strong key={i}>{p}</strong> : p));
}

export default function ChapterContent({ course, chapter, onQuestionComplete }) {
  const { t } = useTranslation();
  const { user, hasMockExamAccess } = useAuth();
  const [savedAnswers, setSavedAnswers] = useState({});
  const [loadingAnswers, setLoadingAnswers] = useState(true);

  // Load saved answers for this chapter
  useEffect(() => {
    if (user && chapter.practiceQuestions && course) {
      api.get(`/answers/${course.id}/${chapter.id}`)
        .then(res => {
          setSavedAnswers(res.data.answers || {});
          setLoadingAnswers(false);
        })
        .catch(err => {
          console.error('Failed to load saved answers:', err);
          setLoadingAnswers(false);
        });
    } else {
      setLoadingAnswers(false);
    }
  }, [user, chapter.id, chapter.practiceQuestions, course]);

  const handleAnswerSave = (questionId, answer) => {
    setSavedAnswers(prev => ({
      ...prev,
      [questionId]: answer,
    }));
  };
  const renderContent = (content) => {
    switch (content.type) {
      case 'paragraph':
        return (
          <p className="text-text-primary leading-relaxed mb-4 text-base">
            {content.text}
          </p>
        );

      case 'text':
        return (
          <p className="text-text-primary leading-relaxed mb-4 text-base">
            {content.text}
          </p>
        );
      
      case 'keyTerm':
        return (
          <KeyTermCard term={content.term} definition={content.definition} />
        );

      case 'bullets':
      case 'list': {
        const items = content.items || [];
        return (
          <div className="my-4">
            {content.title && (
              <p className="text-text-primary font-semibold mb-2 text-base">{content.title}</p>
            )}
            <ul className="list-none space-y-2 ml-4">
              {items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-3 mt-1.5">•</span>
                  <span className="text-text-primary text-base leading-relaxed flex-1">{formatInlineBold(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      }
      
      case 'numbered':
        return (
          <ol className="list-decimal space-y-2 my-4 ml-6">
            {content.items.map((item, index) => (
              <li key={index} className="text-text-primary text-base leading-relaxed">
                {formatInlineBold(item)}
              </li>
            ))}
          </ol>
        );
      
      case 'table':
        return (
          <div>
            <ComparisonTable headers={content.headers} rows={content.rows} />
            {content.notes && (
              <p className="text-text-muted text-sm mt-2 italic">{content.notes}</p>
            )}
          </div>
        );
      
      case 'infoBox':
        return (
          <InfoBox title={content.title} items={content.items} />
        );

      case 'image':
        return (
          <figure className="my-6">
            <div className="rounded-xl border border-border bg-surface p-3 flex justify-center">
              <img
                src={content.src}
                alt={content.alt}
                className="max-w-full h-auto max-h-[min(420px,70vh)] object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            {(content.caption || content.credit) && (
              <figcaption className="mt-2 text-sm text-text-muted text-center max-w-2xl mx-auto space-y-1">
                {content.caption && <p>{content.caption}</p>}
                {content.credit && <p className="text-xs opacity-90">{content.credit}</p>}
              </figcaption>
            )}
          </figure>
        );

      case 'callout':
        const isWarning = content.style === 'warning';
        return (
          <div className={`rounded-xl border p-4 my-4 ${isWarning ? 'bg-amber-500/10 border-amber-500/40' : 'bg-accent/10 border-accent/30'}`}>
            <div className="flex items-start gap-3">
              {isWarning ? (
                <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              )}
              <p className={`text-base leading-relaxed flex-1 ${isWarning ? 'text-amber-800 dark:text-amber-200' : 'text-text-primary'}`}>
                {content.text}
              </p>
            </div>
          </div>
        );

      default:
        if (content.text) {
          return (
            <p className="text-text-primary leading-relaxed mb-4 text-base">
              {content.text}
            </p>
          );
        }
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Chapter Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-4xl font-display font-bold text-accent">
            Chapter {chapter.number}
          </span>
        </div>
        <h1 className="text-3xl font-display font-bold text-text-primary mb-2">
          {chapter.title}
        </h1>
        <p className="text-lg text-text-muted mb-4">{chapter.subtitle}</p>
        {chapter.estimatedMinutes && (
          <Badge variant="accent" className="text-xs">
            {chapter.estimatedMinutes} min read
          </Badge>
        )}
      </div>

      {/* Full Mock Exam simulation CTA */}
      {chapter.isMockExam && course?.id && (() => {
        const tradeSlug = getGuideSlugFromCourseSlug(course.id);
        const trade = getTradeBySlug(tradeSlug);
        if (!trade) return null;
        const canStartMock = hasMockExamAccess(course.slug || course.id);
        return (
          <div className="mb-8">
            <Card className="p-6 border-2 border-accent/30 bg-accent/5">
              <h2 className="text-xl font-display font-semibold text-text-primary mb-2">
                {t('mockExam.title')}
              </h2>
              <p className="text-text-muted mb-4">
                {canStartMock
                  ? `${t('mockExam.instructionQuestions', { count: trade.examQuestions })} · ${t('mockExam.instructionTime', { duration: trade.examDuration })} · ${t('mockExam.instructionPassing', { percent: trade.passingScore })}`
                  : t('mockExam.requiresPaidAccess')}
              </p>
              {canStartMock ? (
                <Link to={paths.mockExam(tradeSlug)}>
                  <Button size="lg">{t('mockExam.startExam')}</Button>
                </Link>
              ) : (
                <Button size="lg" disabled>
                  {t('mockExam.lockedCta')}
                </Button>
              )}
            </Card>
          </div>
        );
      })()}

      {/* Sections */}
      {chapter.sections && chapter.sections.map((section) => (
        <div key={section.id} className="mb-8">
          <h2 className="text-2xl font-display font-semibold text-text-primary mb-4">
            {section.title}
          </h2>
          <div className="space-y-4">
            {section.content && section.content.map((contentBlock, index) => (
              <div key={index}>
                {renderContent(contentBlock) }
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Practice Questions */}
      {chapter.practiceQuestions && chapter.practiceQuestions.length > 0 && (
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-2xl font-display font-semibold text-text-primary mb-6">
            {t('learn.practiceQuestions')}
          </h2>
          <div className="space-y-6">
            {chapter.practiceQuestions.map((question, index) => {
              const domQuestionId = `question-${question.id}`;
              const nextQuestion = chapter.practiceQuestions[index + 1];
              const nextQuestionId = nextQuestion ? `question-${nextQuestion.id}` : null;
              const savedAnswer = savedAnswers[question.id];
              
              return (
                <PracticeQuestion
                  key={question.id}
                  questionId={domQuestionId}
                  actualQuestionId={question.id}
                  nextQuestionId={nextQuestionId}
                  courseId={course?.id}
                  chapterId={chapter.id}
                  question={question.question}
                  options={question.options}
                  correctIndex={question.correctIndex}
                  explanation={question.explanation}
                  savedAnswer={savedAnswer}
                  onAnswerSave={handleAnswerSave}
                  onNext={index < chapter.practiceQuestions.length - 1 ? onQuestionComplete : null}
                  explanationLabel={t('learn.explanation')}
                  nextQuestionLabel={t('learn.nextQuestion')}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
