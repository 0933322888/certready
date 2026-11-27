import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { getCourse } from '../data/courseContent';
import { getChapterById, getAllChapters, getAdjacentChapters } from '../data/courseHelpers';
import { isChapterAccessible } from '../utils/freeWindowAccess';
import { useCoursePricingBySlug } from '../hooks/useCoursePricing';
import { setLastChapter, markChapterComplete, toggleChapterComplete, getProgress } from '../utils/progress';
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
  const { user, loading: authLoading, refreshUser, hasMockExamAccess } = useAuth();
  const { pricing } = useCoursePricingBySlug(slug);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [applyingPromo, setApplyingPromo] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(null);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progressVersion, setProgressVersion] = useState(0);

  const course = getCourse(slug, i18n.language);

  const userHasAccess = pricing
    ? Boolean(pricing.ownsCourse)
    : Boolean(user?.purchases?.some((p) => p && p.slug === slug));
  const userHasMockExam = hasMockExamAccess(slug);
  const hasFreeWindowAccess = Boolean(
    userHasAccess && pricing?.isFreeWindowActive && !userHasMockExam
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
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [slug, userHasAccess, navigate, course]);

  const handleChapterSelect = (chapterId) => {
    const chapter = getChapterById(chapterId, course);
    if (!chapter) return;

    // Allow opening mock exam chapter with course access so unlock UI can show
    const canOpen = isChapterAccessible(chapter, course, {
      hasFullCourseAccess: userHasMockExam,
      hasFreeWindowAccess,
      hasMockExamAccess: userHasMockExam,
    }) || (chapter.isMockExam && hasAccess);
    if (!canOpen) {
      toast.error(t('learn.chapterRequiresAccess'));
      return;
    }

    setCurrentChapterId(chapter.id);
    setCurrentChapter(chapter);
    setLastChapter(course.id, chapterId);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuestionComplete = () => {
    if (currentChapter && currentChapter.practiceQuestions && course) {
      markChapterComplete(course.id, currentChapter.id);
      setProgressVersion((v) => v + 1);
      toast.success(t('learn.progressSaved'));
    }
  };

  const handleToggleComplete = () => {
    if (!currentChapter || !course) return;
    const nowCompleted = toggleChapterComplete(course.id, currentChapter.id);
    setProgressVersion((v) => v + 1);
    if (nowCompleted) {
      toast.success(t('learn.chapterCompleted'));
    } else {
      toast(t('learn.chapterIncomplete'), { icon: 'ℹ️' });
    }
  };

  const fullPrice = pricing?.fullPrice ?? pricing?.currentPrice ?? course?.price;
  const fullCurrency = pricing?.currency ?? course?.currency ?? 'CAD';
  const isFreeWindowPreview = Boolean(hasAccess && pricing?.isFreeWindowActive && !userHasMockExam);
  const unlockingMockExam = Boolean(userHasAccess && !userHasMockExam && !isFreeWindowPreview);
  const isFreePromo = Boolean(
    !userHasAccess && !unlockingMockExam && appliedPromo?.amountCents === 0
  );
  const isFreeWindowOffer = Boolean(
    !userHasAccess && !unlockingMockExam && !appliedPromo && pricing?.isFreeWindowActive
  );
  const isFreeOffer = isFreePromo || isFreeWindowOffer;
  const mockUnlockBasePrice = pricing?.fullPrice ?? course?.price ?? fullPrice;
  const displayPrice = appliedPromo
    ? appliedPromo.amountCents
    : (unlockingMockExam || isFreeWindowPreview)
      ? mockUnlockBasePrice
      : (pricing?.currentPrice ?? course?.price ?? fullPrice);
  const displayCurrency = appliedPromo ? appliedPromo.currency : fullCurrency;

  const handleApplyPromo = async () => {
    const code = promoCode.trim();
    if (!code || !user) return;
    setApplyingPromo(true);
    try {
      const res = await api.post('/payments/validate-promo', { promoCode: code, courseSlug: slug });
      if (res.data?.valid) {
        setAppliedPromo({ code, amountCents: res.data.amountCents, currency: res.data.currency });
        toast.success(res.data.amountCents === 0 ? t('course.promoAppliedFree') : t('course.promoApplied'));
      } else {
        setAppliedPromo(null);
        toast.error(res.data?.message || t('course.invalidPromoCode'));
      }
    } catch (err) {
      setAppliedPromo(null);
      toast.error(err.response?.data?.message || t('course.invalidPromoCode'));
    }
    setApplyingPromo(false);
  };

  const handlePromoInputChange = (value) => {
    setPromoCode(value);
    setAppliedPromo(null);
  };

  const handlePurchase = async () => {
    if (!user) {
      navigate('/login', { state: { from: { pathname: `/learn/${slug}` } } });
      return;
    }
    setPurchasing(true);
    try {
      const res = await api.post('/payments/create-checkout-session', {
        courseSlug: slug,
        promoCode: appliedPromo?.code || undefined,
      });
      if (res.data?.isFree || res.data?.sessionId?.startsWith('free_')) {
        await refreshUser();
        toast.success(t('checkout.successTitle'));
        setPurchasing(false);
        return;
      }
      if (res.data?.url) {
        window.location.href = res.data.url;
        return;
      }
    } catch (err) {
      if (err.response?.status === 400) {
        await refreshUser();
      } else {
        toast.error(err.response?.data?.message || t('course.checkoutFailed'));
      }
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

  const canAccessCurrentChapter = isChapterAccessible(currentChapter, course, {
    hasFullCourseAccess: userHasMockExam,
    hasFreeWindowAccess: isFreeWindowPreview,
    hasMockExamAccess: userHasMockExam,
  });
  const currentProgress = getProgress(course.id);
  const isCurrentChapterCompleted = currentProgress.completed.includes(currentChapter.id);
  const adjacentChapters = getAdjacentChapters(currentChapter.id, course);
  const learnSeo = getLearnPageSEO(course, currentChapter);
  const purchaseLabel = unlockingMockExam
    ? `${t('mockExam.unlockCta')}${displayPrice === 0 ? '' : ` — ${formatPrice(displayPrice, displayCurrency)}`}`
    : isFreeOffer
      ? t(isFreePromo ? 'course.claimFreeCourse' : 'course.claimFreeAccess')
      : `${t('lockOverlay.getAccess')}${displayPrice === 0 ? '' : ` — ${formatPrice(displayPrice, displayCurrency)}`}`;

  return (
    <div className="flex min-h-screen bg-bg">
      {learnSeo && <SEO {...learnSeo} />}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-20 left-4 z-30 md:hidden bg-surface border border-border rounded-xl p-2.5 shadow-xl min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label={t('common.ariaLabelToggleMenu')}
      >
        <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {sidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <ChapterSidebar
        course={course}
        currentChapterId={currentChapterId}
        onChapterSelect={handleChapterSelect}
        onClose={sidebarOpen}
        hasAccess={hasAccess}
        hasMockExamAccess={userHasMockExam}
        hasFreeWindowAccess={isFreeWindowPreview}
        progressVersion={progressVersion}
        accessPanel={{
          visible: !hasAccess || unlockingMockExam || isFreeWindowPreview,
          title: unlockingMockExam
            ? t('mockExam.unlockBanner')
            : isFreeWindowPreview
              ? t('course.getFullCourseAccess')
              : isFreePromo
                ? t('course.promoAppliedFree')
                : isFreeWindowOffer
                  ? t('course.freeWindowOffer')
                  : t('lockOverlay.title'),
          price: displayPrice === 0 ? null : formatPrice(displayPrice, displayCurrency),
          showPromo: unlockingMockExam || !isFreeOffer,
          promoCode,
          onPromoCodeChange: handlePromoInputChange,
          onApplyPromo: handleApplyPromo,
          applyingPromo,
          appliedPromo,
          unlockingMockExam,
          user,
          purchasing,
          purchaseLabel,
          onPurchase: handlePurchase,
        }}
      />

      <div className="flex-1 min-w-0 md:ml-80 min-h-screen">
        <div className="sticky top-16 z-20 bg-surface/95 backdrop-blur-sm border-b border-border px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <div className="min-w-0">
              <h1 className="text-lg font-display font-semibold text-text-primary truncate">
                {course.title}
              </h1>
              <p className="text-sm text-text-muted truncate">{currentChapter.title}</p>
            </div>
            {user && canAccessCurrentChapter && (
              <Button
                type="button"
                variant={isCurrentChapterCompleted ? 'secondary' : 'outline'}
                size="sm"
                onClick={handleToggleComplete}
                className="flex-shrink-0 flex items-center gap-1.5"
                title={isCurrentChapterCompleted ? t('learn.completed') : t('learn.markAsComplete')}
              >
                {isCurrentChapterCompleted ? (
                  <>
                    <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{t('learn.completed')}</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{t('learn.markAsComplete')}</span>
                  </>
                )}
              </Button>
            )}
          </div>
        </div>

        <div className="relative min-w-0 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="max-w-4xl min-w-0 mx-auto">
            {canAccessCurrentChapter ? (
              <ChapterContent
                course={course}
                chapter={currentChapter}
                onQuestionComplete={handleQuestionComplete}
                isCompleted={isCurrentChapterCompleted}
                onToggleComplete={handleToggleComplete}
                adjacentChapters={adjacentChapters}
                onNavigateChapter={handleChapterSelect}
                onUnlockMockExam={handlePurchase}
                unlockMockExamPrice={formatPrice(displayPrice, displayCurrency)}
                unlockingMockExam={purchasing}
              />
            ) : (
              <div className="relative">
                <div className="opacity-30 pointer-events-none">
                  <ChapterContent
                    course={course}
                    chapter={currentChapter}
                    onQuestionComplete={handleQuestionComplete}
                    isCompleted={isCurrentChapterCompleted}
                    onToggleComplete={handleToggleComplete}
                    adjacentChapters={adjacentChapters}
                    onNavigateChapter={handleChapterSelect}
                  />
                </div>
                <LockOverlay
                  courseSlug={slug}
                  price={formatPrice(displayPrice, displayCurrency)}
                  onPurchase={handlePurchase}
                  purchasing={purchasing}
                  title={currentChapter.isMockExam ? t('mockExam.lockedTitle') : undefined}
                  description={currentChapter.isMockExam
                    ? t('mockExam.requiresPaidAccess')
                    : (isFreeWindowPreview ? t('course.freeWindowPartLimit') : undefined)}
                  showPromo={Boolean(currentChapter.isMockExam || unlockingMockExam)}
                  promoCode={promoCode}
                  onPromoCodeChange={handlePromoInputChange}
                  onApplyPromo={handleApplyPromo}
                  applyingPromo={applyingPromo}
                  appliedPromo={appliedPromo}
                  purchaseLabel={currentChapter.isMockExam ? t('mockExam.unlockCta') : undefined}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
