import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { getCourse } from '../data/courseContent';
import { getChapterById, getAllChapters } from '../data/courseHelpers';
import { useCoursePricingBySlug } from '../hooks/useCoursePricing';
import { setLastChapter, markChapterComplete, getProgress } from '../utils/progress';
import SEO from '../components/seo/SEO';
import { getLearnPageSEO } from '../utils/seo';
import ChapterSidebar from '../components/course/ChapterSidebar';
import ChapterContent from '../components/course/ChapterContent';
import LockOverlay from '../components/ui/LockOverlay';
import Button from '../components/ui/Button';
import Spinner from '../components/ui/Spinner';
import { formatPrice } from '../utils/formatters';
import api from '../utils/api';
import toast from 'react-hot-toast';

export default function LearnPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const { user, loading: authLoading } = useAuth();
  const { pricing } = useCoursePricingBySlug(slug);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(null);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  const course = getCourse(slug, i18n.language);

  // Derive access from user purchases (stable dependency: user, not a function)
  const userHasAccess = Boolean(
    user?.purchases?.some((p) => p && p.slug === slug)
  );

  useEffect(() => {
    if (!course) {
      navigate('/');
      return;
    }

    setHasAccess(userHasAccess);

    const progress = getProgress(course.id);
    const allChapters = getAllChapters(course);
    const firstChapterId = allChapters[0]?.id;
    const lastChapterId = progress.lastChapter || firstChapterId;
    const chapter = getChapterById(lastChapterId, course) || allChapters[0];

    if (chapter) {
      setCurrentChapterId(chapter.id);
      setCurrentChapter(chapter);
      setLastChapter(course.id, chapter.id);
    }
    setLoading(false);
    // Scroll to top when opening the learn page (e.g. from Preview button) so we don't land mid-content
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [slug, userHasAccess, navigate, course]);

  const handleChapterSelect = (chapterId) => {
    const chapter = getChapterById(chapterId, course);
    if (!chapter) return;

    // Check if chapter is accessible
    const isAccessible = chapter.isFree || hasAccess;
    if (!isAccessible) {
      toast.error(t('learn.chapterRequiresAccess'));
      return;
    }

    setCurrentChapterId(chapterId);
    setCurrentChapter(chapter);
    setLastChapter(course.id, chapterId);
    setSidebarOpen(false);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuestionComplete = () => {
    // Mark chapter as complete when all questions are answered
    if (currentChapter && currentChapter.practiceQuestions && course) {
      markChapterComplete(course.id, currentChapter.id);
      toast.success(t('learn.progressSaved'));
    }
  };

  const handlePurchase = async () => {
    if (!user) {
      navigate('/login', { state: { from: { pathname: `/learn/${slug}` } } });
      return;
    }
    setPurchasing(true);
    try {
      const res = await api.post('/payments/create-checkout-session', { courseSlug: slug });
      if (res.data?.url) {
        window.location.href = res.data.url;
        return;
      }
    } catch (err) {
      toast.error(err.response?.data?.message || t('course.checkoutFailed'));
    }
    setPurchasing(false);
  };

  if (authLoading || loading || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!currentChapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-text-muted">{t('learn.chapterNotFound')}</p>
      </div>
    );
  }

  // Check if current chapter is accessible
  const isChapterAccessible = currentChapter.isFree || hasAccess;

  const learnSeo = getLearnPageSEO(course, currentChapter);

  return (
    <div className="flex min-h-screen bg-bg">
      {learnSeo && <SEO {...learnSeo} />}
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-20 left-4 z-30 md:hidden bg-surface border border-border rounded-lg p-2 shadow-lg"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {sidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <ChapterSidebar
        course={course}
        currentChapterId={currentChapterId}
        onChapterSelect={handleChapterSelect}
        onClose={sidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 md:ml-80 min-h-screen">
        {/* Sticky Header */}
        <div className="sticky top-16 z-20 bg-surface/95 backdrop-blur-sm border-b border-border px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-lg font-display font-semibold text-text-primary">
              {course.title}
            </h1>
            <p className="text-sm text-text-muted">{currentChapter.title}</p>
            {/* Purchase CTA when previewing without access */}
            {!hasAccess && (
              <div className="mt-3 pt-3 border-t border-border flex flex-wrap items-center justify-between gap-3">
                <span className="text-sm text-text-muted">
                  {t('lockOverlay.title')}
                </span>
                <Button
                  onClick={handlePurchase}
                  disabled={purchasing}
                  size="sm"
                  className="flex-shrink-0"
                >
                  {user
                    ? (purchasing ? t('course.processing') : `${t('lockOverlay.getAccess')} — ${formatPrice(pricing?.currentPrice ?? course.price, pricing?.currency ?? course.currency)}`)
                    : t('course.signInToPurchase')}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="relative px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            {isChapterAccessible ? (
              <ChapterContent
                course={course}
                chapter={currentChapter}
                onQuestionComplete={handleQuestionComplete}
              />
            ) : (
              <div className="relative">
                <div className="opacity-30 pointer-events-none">
                  <ChapterContent
                    course={course}
                    chapter={currentChapter}
                    onQuestionComplete={handleQuestionComplete}
                  />
                </div>
                <LockOverlay
                  courseSlug={slug}
                  price={formatPrice(pricing?.currentPrice ?? course.price, pricing?.currency ?? course.currency)}
                  onPurchase={handlePurchase}
                  purchasing={purchasing}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
