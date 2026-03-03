import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="text-center">
        <h1 className="text-6xl font-display font-bold text-text-primary mb-4">404</h1>
        <h2 className="text-2xl font-display font-semibold text-text-primary mb-4">
          {t('notFound.title')}
        </h2>
        <p className="text-text-muted mb-8">
          {t('notFound.message')}
        </p>
        <Link to="/">
          <Button size="lg">{t('notFound.goHome')}</Button>
        </Link>
      </div>
    </div>
  );
}
