import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo/SEO';
import api from '../utils/api';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Spinner from '../components/ui/Spinner';
import toast from 'react-hot-toast';

export default function ForgotPasswordPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    try {
      await api.post('/auth/forgot-password', { email: email.trim() });
      setSent(true);
      toast.success(t('auth.forgotPasswordSuccess'));
    } catch (err) {
      // Don't reveal whether email exists; show same message for success or not found
      setSent(true);
      toast.success(t('auth.forgotPasswordSuccess'));
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md text-center">
          <div className="mb-6">
            <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-2xl font-display font-bold text-text-primary mb-2">
              {t('auth.checkEmail')}
            </h1>
            <p className="text-text-muted text-sm">
              {t('auth.forgotPasswordInstructions')}
            </p>
          </div>
          <Link to="/login">
            <Button variant="outline" className="w-full">
              {t('auth.backToLogin')}
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <SEO noIndex title="Forgot Password" description="Reset your CertReady account password." />
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-bold text-text-primary mb-2">
            {t('auth.forgotPassword')}
          </h1>
          <p className="text-text-muted text-sm">
            {t('auth.forgotPasswordDesc')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
              {t('auth.email')}
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 bg-surface-2 border border-border rounded-lg text-text-primary placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="you@example.com"
            />
          </div>

          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? (
              <span className="flex items-center justify-center">
                <Spinner size="sm" className="mr-2" />
                {t('auth.sending')}
              </span>
            ) : (
              t('auth.sendResetLink')
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/login" className="text-accent hover:text-accent/80 text-sm">
            ← {t('auth.backToLogin')}
          </Link>
        </div>
      </Card>
    </div>
  );
}
