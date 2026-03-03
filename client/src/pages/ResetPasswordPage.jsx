import { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import SEO from '../components/seo/SEO';
import api from '../utils/api';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Spinner from '../components/ui/Spinner';
import toast from 'react-hot-toast';

export default function ResetPasswordPage() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch('password');

  useEffect(() => {
    if (!token) {
      toast.error(t('auth.invalidResetLink'));
    }
  }, [token, t]);

  const onSubmit = async (data) => {
    if (!token) return;
    setSubmitting(true);
    try {
      await api.post('/auth/reset-password', {
        token,
        password: data.password,
      });
      setSuccess(true);
      toast.success(t('auth.resetPasswordSuccess'));
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || t('auth.resetPasswordFailed'));
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <SEO noIndex title="Password Reset" description="Your CertReady password has been reset." />
        <Card className="w-full max-w-md text-center">
          <div className="mb-6">
            <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-display font-bold text-text-primary mb-2">
              {t('auth.passwordReset')}
            </h1>
            <p className="text-text-muted text-sm">
              {t('auth.redirectToLogin')}
            </p>
          </div>
          <Link to="/login">
            <Button className="w-full">{t('auth.signIn')}</Button>
          </Link>
        </Card>
      </div>
    );
  }

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <SEO noIndex title="Invalid Reset Link" description="This password reset link is invalid or has expired." />
        <Card className="w-full max-w-md text-center">
          <h1 className="text-xl font-display font-bold text-text-primary mb-4">
            {t('auth.invalidResetLink')}
          </h1>
          <p className="text-text-muted text-sm mb-6">
            {t('auth.invalidResetLinkDesc')}
          </p>
          <Link to="/forgot-password">
            <Button variant="outline" className="w-full">
              {t('auth.requestNewLink')}
            </Button>
          </Link>
          <Link to="/login" className="block mt-4 text-accent hover:text-accent/80 text-sm">
            ← {t('auth.backToLogin')}
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <SEO noIndex title="Reset Password" description="Set a new password for your CertReady account." />
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-bold text-text-primary mb-2">
            {t('auth.resetPassword')}
          </h1>
          <p className="text-text-muted text-sm">
            {t('auth.resetPasswordDesc')}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">
              {t('auth.newPassword')}
            </label>
            <input
              id="password"
              type="password"
              {...register('password', {
                required: t('auth.passwordRequired'),
                minLength: { value: 6, message: t('auth.passwordMinLength') },
              })}
              className="w-full px-4 py-2.5 bg-surface-2 border border-border rounded-lg text-text-primary placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-danger">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-primary mb-2">
              {t('auth.confirmPassword')}
            </label>
            <input
              id="confirmPassword"
              type="password"
              {...register('confirmPassword', {
                required: t('auth.confirmPasswordRequired'),
                validate: (value) => value === password || t('auth.passwordsNoMatch'),
              })}
              className="w-full px-4 py-2.5 bg-surface-2 border border-border rounded-lg text-text-primary placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-danger">{errors.confirmPassword.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? (
              <span className="flex items-center justify-center">
                <Spinner size="sm" className="mr-2" />
                {t('auth.resetting')}
              </span>
            ) : (
              t('auth.resetPasswordBtn')
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
