import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { paths } from '../../utils/routes';

const POINTS = [
  { icon: '🧰', titleKey: 'home.trust.points.tradeSpecific.title', descKey: 'home.trust.points.tradeSpecific.desc' },
  { icon: '💡', titleKey: 'home.trust.points.explanations.title', descKey: 'home.trust.points.explanations.desc' },
  { icon: '⏱️', titleKey: 'home.trust.points.selfPaced.title', descKey: 'home.trust.points.selfPaced.desc' },
  { icon: '📚', titleKey: 'home.trust.points.resources.title', descKey: 'home.trust.points.resources.desc' },
];

/** Trust / "Why CertReady" section with real product claims and legal links. */
export default function TrustSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-20 bg-surface" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 id="trust-heading" className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-3">
            {t('home.trust.title')}
          </h2>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
            {t('home.trust.subtitle')}
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POINTS.map((point) => (
            <li key={point.titleKey} className="text-center">
              <div className="text-3xl mb-3" aria-hidden="true">{point.icon}</div>
              <h3 className="text-lg font-semibold text-text-primary mb-1.5">
                {t(point.titleKey)}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {t(point.descKey)}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-text-muted max-w-3xl mx-auto text-center leading-relaxed">
          {t('home.trust.disclaimer')}
        </p>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <li><Link to={paths.about} className="text-accent hover:text-accent/80">{t('home.trust.links.about')}</Link></li>
          <li><Link to={paths.contact} className="text-accent hover:text-accent/80">{t('home.trust.links.contact')}</Link></li>
          <li><Link to="/terms" className="text-accent hover:text-accent/80">{t('home.trust.links.terms')}</Link></li>
          <li><Link to="/privacy" className="text-accent hover:text-accent/80">{t('home.trust.links.privacy')}</Link></li>
        </ul>
      </div>
    </section>
  );
}