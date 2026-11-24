import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { CertReadyLogoFull } from '../brand/CertReadyLogo';
import { paths } from '../../utils/routes';
import { isBlackFridayPromoActive } from '../../config/blackFridayPromo';

const AUTOPLAY_MS = 9000;

export default function HeroCarousel() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const hasPromoSlide = isBlackFridayPromoActive();
  const totalSlides = hasPromoSlide ? 2 : 1;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % totalSlides);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [totalSlides]);

  const goTo = (i) => setIndex(i);
  const next = () => setIndex((i) => (i + 1) % totalSlides);
  const prev = () => setIndex((i) => (i - 1 + totalSlides) % totalSlides);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="flex min-h-screen transition-transform duration-500 ease-out"
        style={{ width: `${totalSlides * 100}%`, transform: `translateX(-${index * (100 / totalSlides)}%)` }}
      >
        {/* Slide 0: Main hero */}
        <div className="min-h-screen flex-shrink-0 relative flex items-center justify-center pt-16 pb-24 sm:py-20" style={{ width: `${100 / totalSlides}%` }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/hero-bg.png)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-bg/95 via-bg/90 to-accent/20" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23eb8512' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <Badge variant="warm" className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6">
              {t('hero.freeWindowBadge')}
            </Badge>
            <CertReadyLogoFull
              width={560}
              height={120}
              className="mx-auto mb-4 sm:mb-6 max-w-[280px] sm:max-w-[420px] md:max-w-[560px] w-full h-auto"
            />
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-text-primary mb-4 sm:mb-6 leading-tight">
              {t('hero.title')} <span className="text-accent mt-1 sm:mt-2 block sm:inline">— {t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-text-primary mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-accent-warm font-semibold mb-6 sm:mb-8 max-w-3xl mx-auto">
              {t('hero.freeWindowSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-4">
              <Link to={paths.practiceTests} className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  {t('hero.startPracticeQuestions')}
                </Button>
              </Link>
              <Link to={paths.redSealReadinessTest} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  {t('hero.takeReadinessTest')}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide 1: Black Friday offer */}
        {hasPromoSlide && <div className="min-h-screen flex-shrink-0 relative flex items-center justify-center pt-16 pb-24 sm:py-20" style={{ width: `${100 / totalSlides}%` }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/hero-bg.png)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-bg/95 via-bg/90 to-accent-warm/15" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23eb8512' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <Badge variant="warm" className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6">
              {t('hero.slideDiscountBadge')}
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-4 sm:mb-6 leading-tight">
              {t('hero.slideDiscountTitle')}
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-text-primary mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('hero.slideDiscountSubtitle')}
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 p-3 px-5 rounded-2xl bg-accent-warm/10 border border-accent-warm/20 text-accent-warm text-sm sm:text-base font-medium mb-6 sm:mb-8">
              <span>{t('hero.slideDiscountCode')}:</span>
              <span className="font-mono font-bold tracking-wider">blackfriday</span>
            </div>
            <p className="text-sm text-text-primary mb-6 sm:mb-8">
              {t('hero.slideDiscountSpots')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-4">
              <Link to={paths.trades} className="w-full sm:w-auto">
                <Button size="lg" className="bg-accent-warm hover:bg-accent-warm/90 text-bg font-semibold w-full sm:w-auto">
                  {t('hero.slideDiscountCta')}
                </Button>
              </Link>
            </div>
          </div>
        </div>}
      </div>

      {/* Carousel controls */}
      <div className="absolute bottom-3 sm:bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label={t('hero.carouselPrev')}
          className="p-2 sm:p-2.5 rounded-full bg-surface/90 border border-border text-text-primary hover:bg-surface-2 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center shadow-lg"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex gap-2 items-center">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? 'w-8 bg-accent-warm' : 'w-2.5 bg-surface-2 hover:bg-border'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label={t('hero.carouselNext')}
          className="p-2 sm:p-2.5 rounded-full bg-surface/90 border border-border text-text-primary hover:bg-surface-2 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center shadow-lg"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
