import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';
import { getAllChapters } from '../../data/courseHelpers';
import { isChapterAccessible } from '../../utils/freeWindowAccess';
import { getProgress } from '../../utils/progress';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import ProgressBar from '../ui/ProgressBar';

export default function ChapterSidebar({
  course,
  currentChapterId,
  onChapterSelect,
  onClose = null,
  hasAccess: hasAccessProp,
  hasMockExamAccess: hasMockExamAccessProp,
  hasFreeWindowAccess = false,
  _progressVersion = 0,
  accessPanel = null,
}) {
  const { t } = useTranslation();
  const [expandedParts, setExpandedParts] = useState(new Set(course.parts.map(p => p.id)));
  const { hasPurchasedBySlug, hasMockExamAccess } = useAuth();
  const hasAccess = hasAccessProp ?? hasPurchasedBySlug(course.slug);
  const canAccessMockExam = hasMockExamAccessProp ?? hasMockExamAccess(course.slug);
  const hasFullCourseAccess = canAccessMockExam;
  const progress = getProgress(course.id);
  const allChapters = getAllChapters(course);
  const completedCount = progress.completed.length;
  const progressPercentage = allChapters.length > 0 ? (completedCount / allChapters.length) * 100 : 0;

  const togglePart = (partId) => {
    const newExpanded = new Set(expandedParts);
    if (newExpanded.has(partId)) {
      newExpanded.delete(partId);
    } else {
      newExpanded.add(partId);
    }
    setExpandedParts(newExpanded);
  };

  const isChapterContentUnlocked = (chapter) => {
    return isChapterAccessible(chapter, course, {
      hasFullCourseAccess,
      hasFreeWindowAccess,
      hasMockExamAccess: canAccessMockExam,
    });
  };

  // Mock exam can be opened (shows unlock UI) once the user has course access
  const isChapterSelectable = (chapter) => {
    if (chapter.isMockExam) {
      return canAccessMockExam || hasAccess;
    }
    return isChapterContentUnlocked(chapter);
  };

  return (
    <>
      {/* Mobile overlay */}
      {onClose && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-16 left-0 h-[calc(100vh-4rem)] md:h-auto
          w-[85vw] max-w-xs sm:w-80 bg-surface border-r border-border z-50
          overflow-y-auto transform transition-transform duration-300 ease-out
          ${onClose !== null ? (onClose ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
          md:translate-x-0
        `}
      >
        <div className="p-4">
          <div className="flex items-center justify-between md:hidden mb-4 pb-2 border-b border-border">
            <span className="text-sm font-semibold text-text-primary">Course Navigation</span>
            <button
              onClick={() => onClose && onChapterSelect && onChapterSelect(currentChapterId)}
              className="p-1 rounded text-text-muted hover:text-text-primary"
              aria-label={t('common.ariaLabelClose')}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Progress Tracker */}
          <div className="mb-6 pb-6 border-b border-border">
            <h3 className="text-sm font-semibold text-text-muted mb-2">{t('learn.progress')}</h3>
            <ProgressBar value={progressPercentage} showLabel={true} />
            <p className="text-xs text-text-muted mt-2">
              {completedCount} of {allChapters.length} {t('learn.chaptersCompleted')}
            </p>
          </div>

          {accessPanel?.visible && (
            <section className="mb-6 pb-6 border-b border-border space-y-3">
              <div>
                <p className="text-sm text-text-muted"> {accessPanel.title}
                  {accessPanel.price !== null && (
                    <span className="text-lg font-semibold text-accent mt-1"> {accessPanel.price}</span>
                  )}
                </p>
              </div>
              {accessPanel.showPromo && (
                <div className="space-y-2">
                  <label htmlFor="sidebar-promo-code" className="block text-sm font-medium text-text-primary">
                    {t('course.promoCodeLabel')}
                  </label>
                  <input
                    id="sidebar-promo-code"
                    type="text"
                    value={accessPanel.promoCode}
                    onChange={(event) => accessPanel.onPromoCodeChange(event.target.value)}
                    placeholder={t('course.promoCodePlaceholder')}
                    className="w-full min-w-0 px-3 py-2 rounded-lg border border-border bg-surface text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label={t('course.promoCodeLabel')}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={accessPanel.onApplyPromo}
                    disabled={accessPanel.applyingPromo || !accessPanel.promoCode.trim() || !accessPanel.user}
                  >
                    {accessPanel.applyingPromo ? t('course.processing') : t('course.promoCodeApply')}
                  </Button>
                </div>
              )}
              {accessPanel.unlockingMockExam && accessPanel.appliedPromo && (
                <p className="text-sm text-accent-warm font-medium">
                  {accessPanel.appliedPromo.amountCents === 0
                    ? t('course.promoAppliedFree')
                    : t('course.promoApplied')}
                </p>
              )}
              <Button
                onClick={accessPanel.onPurchase}
                disabled={accessPanel.purchasing}
                size="sm"
                className="w-full"
              >
                {accessPanel.user
                  ? (accessPanel.purchasing ? t('course.processing') : accessPanel.purchaseLabel)
                  : t('course.signInToPurchase')}
              </Button>
            </section>
          )}

          {/* Chapter List */}
          <nav>
            {course.parts.map((part) => (
              <div key={part.id} className="mb-4">
                <button
                  onClick={() => togglePart(part.id)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-surface-2 transition-colors mb-2"
                >
                  <span className="text-sm font-semibold text-text-primary">{part.title}</span>
                  <svg
                    className={`w-4 h-4 text-text-muted transition-transform ${expandedParts.has(part.id) ? 'rotate-180' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedParts.has(part.id) && (
                  <div className="ml-2 space-y-1">
                    {part.chapters.map((chapter) => {
                      const isUnlocked = isChapterContentUnlocked(chapter);
                      const isSelectable = isChapterSelectable(chapter);
                      const isActive = chapter.id === currentChapterId;
                      const isCompleted = progress.completed.includes(chapter.id);

                      return (
                        <button
                          key={chapter.id}
                          onClick={() => {
                            if (isSelectable) {
                              onChapterSelect(chapter.id);
                              if (onClose) onClose();
                            }
                          }}
                          disabled={!isSelectable}
                          className={`
                            w-full text-left px-3 py-2 rounded-lg text-sm
                            transition-all duration-200
                            ${isActive
                              ? 'bg-accent/20 border-l-4 border-accent text-accent font-medium'
                              : isSelectable
                                ? 'hover:bg-surface-2 text-text-muted'
                                : 'text-text-dim cursor-not-allowed opacity-50'
                            }
                          `}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex min-w-0 flex-1 items-center space-x-2">
                              <span className="min-w-0 flex-1 break-words text-sm">
                                {chapter.number}. {chapter.title}
                              </span>
                              {isCompleted && (
                                <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <div className="flex shrink-0 items-center space-x-1">
                              {chapter.isFree && !hasAccess && (
                                <Badge variant="accent" className="text-xs">{t('course.freePreview')}</Badge>
                              )}
                              {hasFreeWindowAccess && isUnlocked && (
                                <Badge variant="accent" className="text-xs">{t('course.freePreview')}</Badge>
                              )}
                              {chapter.isMockExam && hasAccess && !canAccessMockExam && (
                                <Badge variant="accent" className="text-xs">{t('mockExam.unlockBadge')}</Badge>
                              )}
                              {!isUnlocked && (
                                <svg className="w-4 h-4 text-accent-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
