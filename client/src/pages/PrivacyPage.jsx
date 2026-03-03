import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function PrivacyPage() {
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold text-text-primary mb-4">
        {t('privacy.title')}
      </h1>
      <p className="text-text-muted mb-8">
        {t('privacy.lastUpdated')}:{' '}
        {new Date().toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>

      <div className="space-y-8 text-sm leading-relaxed text-text-primary">
        <section>
          <h2 className="text-xl font-semibold mb-2">{t('privacy.introTitle')}</h2>
          <p>{t('privacy.introBody')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{t('privacy.collectTitle')}</h2>
          <p className="mb-2">{t('privacy.collectBody')}</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>{t('privacy.collect1')}</li>
            <li>{t('privacy.collect2')}</li>
            <li>{t('privacy.collect3')}</li>
            <li>{t('privacy.collect4')}</li>
            <li>{t('privacy.collect5')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{t('privacy.useTitle')}</h2>
          <p className="mb-2">{t('privacy.useBody')}</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>{t('privacy.use1')}</li>
            <li>{t('privacy.use2')}</li>
            <li>{t('privacy.use3')}</li>
            <li>{t('privacy.use4')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{t('privacy.cookiesTitle')}</h2>
          <p>{t('privacy.cookiesBody')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{t('privacy.retentionTitle')}</h2>
          <p>{t('privacy.retentionBody')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{t('privacy.sharingTitle')}</h2>
          <p>{t('privacy.sharingBody')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{t('privacy.rightsTitle')}</h2>
          <p className="mb-2">{t('privacy.rightsBody')}</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>{t('privacy.rights1')}</li>
            <li>{t('privacy.rights2')}</li>
            <li>{t('privacy.rights3')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{t('privacy.securityTitle')}</h2>
          <p>{t('privacy.securityBody')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">{t('privacy.contactTitle')}</h2>
          <p className="mb-2">{t('privacy.contactBody')}</p>
          <p>
            <a href="mailto:support@certready.ca" className="text-accent hover:text-accent/80">
              support@certready.ca
            </a>
          </p>
        </section>

        <section className="pt-4">
          <Link to="/" className="text-accent hover:text-accent/80 text-sm">
            ← {t('privacy.backHome')}
          </Link>
        </section>
      </div>
    </div>
  );
}
