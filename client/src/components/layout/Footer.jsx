import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCourse, COURSE_SLUGS } from '../../data/courseContent';
import { tradeGuides } from '../../data/tradeGuides';
import { CertReadyLogoCompact } from '../brand/CertReadyLogo';
import { paths } from '../../utils/routes';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <CertReadyLogoCompact width={160} height={34} className="h-8 w-auto" />
            </Link>
            <p className="text-text-muted text-sm">
              {t('footer.tagline')}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary mb-4">{t('footer.courses')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to={paths.trades} className="text-text-muted hover:text-accent transition-colors">
                  {t('footer.allCourses')}
                </Link>
              </li>
              {COURSE_SLUGS.map((slug) => {
                const course = getCourse(slug, 'en');
                const guide = tradeGuides.find((g) => g.courseSlug === slug);
                const tradeSlug = guide?.slug;
                return course ? (
                  <li key={slug}>
                    <Link
                      to={tradeSlug ? paths.trade(tradeSlug) : paths.trades}
                      className="text-text-muted hover:text-accent transition-colors"
                    >
                      {course.trade} ({course.tradeCode})
                    </Link>
                  </li>
                ) : null;
              })}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary mb-4">{t('footer.studyGuides')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to={paths.guides} className="text-text-muted hover:text-accent transition-colors">
                  All Study Guides
                </Link>
              </li>
              {tradeGuides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    to={paths.guideArticle(guide.slug)}
                    className="text-text-muted hover:text-accent transition-colors"
                  >
                    {guide.tradeName} Red Seal Guide
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/#faq" className="text-text-muted hover:text-accent transition-colors">
                  {t('footer.faq')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text-muted hover:text-accent transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-muted hover:text-accent transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-text-muted hover:text-accent transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-text-muted hover:text-accent transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-text-muted gap-3">
          <p>© {new Date().getFullYear()} CertReady. All rights reserved.</p>
          <p className="text-center sm:text-right">Red Seal is a registered trademark of the Canadian Council of Directors of Apprenticeship (CCDA).</p>
        </div>
      </div>
    </footer>
  );
}
