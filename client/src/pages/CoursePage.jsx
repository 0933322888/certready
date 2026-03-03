import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { getCourse } from '../data/courseContent';
import { getAllChapters } from '../data/courseHelpers';
import { getGuideSlugFromCourseSlug } from '../data/tradeGuides';
import { useCoursePricingBySlug } from '../hooks/useCoursePricing';
import SEO from '../components/seo/SEO';
import { getCoursePageSEO, getBreadcrumbStructuredData } from '../utils/seo';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { formatPrice } from '../utils/formatters';
import api from '../utils/api';
import toast from 'react-hot-toast';
import Spinner from '../components/ui/Spinner';

export default function CoursePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { user, hasPurchasedBySlug, loading: authLoading } = useAuth();
  const [purchasing, setPurchasing] = useState(false);
  const { pricing, loading: pricingLoading } = useCoursePricingBySlug(slug);

  const course = getCourse(slug, i18n.language);
  const allChapters = course ? getAllChapters(course) : [];
  const hasPurchased = hasPurchasedBySlug(slug);

  const currentPrice = pricing?.currentPrice ?? course?.price;
  const currency = pricing?.currency ?? course?.currency ?? 'CAD';
  const discountedSpotsLeft = pricing?.discountedSpotsLeft ?? 0;
  const fullPrice = pricing?.fullPrice ?? course?.price;
  const isDiscounted = discountedSpotsLeft > 0;

  const handlePurchase = async () => {
    if (!user) {
      navigate('/login', { state: { from: `/courses/${slug}` } });
      return;
    }

    if (hasPurchased) {
      navigate(`/learn/${slug}`);
      return;
    }

    setPurchasing(true);
    try {
      const res = await api.post('/payments/create-checkout-session', {
        courseSlug: slug,
      });
      // Redirect to Stripe Checkout
      window.location.href = res.data.url;
    } catch (err) {
      toast.error(err.response?.data?.message || t('course.checkoutFailed'));
      setPurchasing(false);
    }
  };

  if (authLoading || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  const seo = getCoursePageSEO(course);
  const breadcrumbs = getBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'Courses', url: '/courses' },
    { name: course.trade, url: `/courses/${course.slug}` },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {seo && (
        <SEO
          {...seo}
          structuredData={[seo.structuredData, breadcrumbs].filter(Boolean)}
        />
      )}
      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <Badge variant="accent">{course.tradeCode}</Badge>
          <span className="text-text-muted">Skilled Trades Ontario</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
          {course.trade} Red Seal Exam Prep — Complete Study Guide ({course.tradeCode})
        </h1>
        <p className="text-xl text-text-muted mb-6">{course.subtitle}</p>
        <p className="text-lg text-text-primary max-w-3xl leading-relaxed">
          {course.description || 'Pass your Skilled Trades Ontario Hairstylist (332A) certification exam with confidence. 15 chapters, 75+ practice questions, full mock exam — all based on the official STO curriculum standard.'}
        </p>
        {(() => {
          const guideSlug = getGuideSlugFromCourseSlug(course.slug);
          return guideSlug ? (
            <p className="mt-4">
              <Link to={`/guides/${guideSlug}`} className="text-accent hover:text-accent/80 font-medium">
                Learn more about the {course.trade} Red Seal exam →
              </Link>
            </p>
          ) : null;
        })()}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Chapter List */}
          <Card>
            <h2 className="text-2xl font-display font-bold text-text-primary mb-6">
              {t('course.whatsCovered')}
            </h2>
            <div className="space-y-3">
              {allChapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className={`p-4 rounded-lg border ${
                    chapter.isFree
                      ? 'border-accent/30 bg-accent/5'
                      : hasPurchased
                      ? 'border-border bg-surface'
                      : 'border-border bg-surface opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg font-semibold text-accent">
                        {chapter.number}
                      </span>
                      <div>
                        <h3 className="font-semibold text-text-primary">
                          {chapter.title}
                        </h3>
                        <p className="text-sm text-text-muted">{chapter.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {chapter.isFree && (
                        <Badge variant="accent">{t('course.freePreview')}</Badge>
                      )}
                      {!chapter.isFree && !hasPurchased && (
                        <svg className="w-5 h-5 text-accent-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      )}
                      {hasPurchased && (
                        <Link to={`/learn/${slug}?chapter=${chapter.id}`}>
                          <Button variant="ghost" size="sm">{t('course.view')} →</Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Features */}
          <Card>
            <h2 className="text-2xl font-display font-bold text-text-primary mb-6">
              {t('course.whatsIncluded')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-primary">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar - Pricing Card */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            {isDiscounted && (
              <Badge variant="warm" className="mb-4">
                {t('course.launchPrice')}
              </Badge>
            )}
            <div className="text-center mb-6">
              {isDiscounted && fullPrice !== currentPrice && (
                <p className="text-lg text-text-muted line-through mb-1">
                  {formatPrice(fullPrice, currency)}
                </p>
              )}
              <div className="text-4xl font-display font-bold text-accent mb-2">
                {formatPrice(currentPrice, currency)}
              </div>
              {isDiscounted && fullPrice - currentPrice > 0 && (
                <p className="text-accent-warm font-semibold mb-2">
                  {t('course.saveAmount', { amount: formatPrice(fullPrice - currentPrice, currency) })}
                </p>
              )}
              <p className="text-text-muted">{t('course.oneTime')}</p>
              {!pricingLoading && (
                <p className="text-sm mt-2 text-accent-warm font-medium">
                  {isDiscounted
                    ? t('course.discountedSpotsLeft', { count: discountedSpotsLeft })
                    : t('course.discountedSpotsLeftNone')}
                </p>
              )}
            </div>

            {hasPurchased ? (
              <Link to={`/learn/${slug}`} className="block">
                <Button size="lg" className="w-full mb-4">
                  {t('home.continueLearning')} →
                </Button>
              </Link>
            ) : user ? (
              <Button
                size="lg"
                className="w-full mb-4"
                onClick={handlePurchase}
                disabled={purchasing}
              >
                {purchasing ? t('course.processing') : t('course.purchase', { price: formatPrice(currentPrice, currency) })}
              </Button>
            ) : (
              <Link to="/login" state={{ from: `/courses/${slug}` }}>
                <Button size="lg" className="w-full mb-4">
                  {t('course.signInToPurchase')}
                </Button>
              </Link>
            )}

            <div className="space-y-3 text-sm text-text-muted">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('course.lifetimeAccess')}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('course.noSubscription')}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('course.studyPace')}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
