import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/seo/SEO';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Spinner from '../components/ui/Spinner';
import api from '../utils/api';
import toast from 'react-hot-toast';

export default function ProfilePage() {
  const { t } = useTranslation();
  const { user, loading: authLoading, dispatch } = useAuth();
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [profileSaving, setProfileSaving] = useState(false);
  const [passwordSaving, setPasswordSaving] = useState(false);

  const { register: registerProfile, handleSubmit: handleProfileSubmit, reset: resetProfile } = useForm({
    defaultValues: { name: user?.name ?? '', email: user?.email ?? '' },
  });

  const { register: registerPassword, handleSubmit: handlePasswordSubmit, watch, reset: resetPassword, setError } = useForm({});
  const newPassword = watch('newPassword');

  useEffect(() => {
    if (user) {
      resetProfile({ name: user.name, email: user.email });
    }
  }, [user, resetProfile]);

  useEffect(() => {
    if (user) {
      api.get('/users/purchase-history')
        .then((res) => setPurchaseHistory(res.data))
        .catch(() => setPurchaseHistory([]))
        .finally(() => setLoadingHistory(false));
    }
  }, [user]);

  const onProfileSubmit = async (data) => {
    setProfileSaving(true);
    try {
      const res = await api.put('/users/profile', { name: data.name, email: data.email });
      dispatch({ type: 'SET_USER', payload: res.data });
      toast.success(t('profile.profileUpdated'));
    } catch (err) {
      const msg = err.response?.data?.message;
      toast.error(msg && msg.includes('already') ? t('profile.emailInUse') : t('profile.profileUpdateFailed'));
    } finally {
      setProfileSaving(false);
    }
  };

  const onPasswordSubmit = async (data) => {
    if (data.newPassword !== data.confirmNewPassword) {
      setError('confirmNewPassword', { type: 'manual', message: t('profile.passwordsMustMatch') });
      return;
    }
    setPasswordSaving(true);
    try {
      await api.put('/auth/change-password', {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      });
      toast.success(t('profile.passwordUpdated'));
      resetPassword();
    } catch (err) {
      const msg = err.response?.data?.message;
      toast.error(msg && msg.includes('incorrect') ? t('profile.currentPasswordIncorrect') : t('profile.passwordUpdateFailed'));
    } finally {
      setPasswordSaving(false);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO noIndex title="Profile" description="Manage your CertReady account and view purchase history." />
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold text-text-primary mb-2">
          {t('profile.title')}
        </h1>
        <p className="text-text-muted">{t('profile.subtitle')}</p>
      </div>

      <div className="space-y-8">
        {/* Profile details */}
        <Card>
          <h2 className="text-xl font-display font-semibold text-text-primary mb-6">
            {t('profile.profileDetails')}
          </h2>
          <form onSubmit={handleProfileSubmit(onProfileSubmit)} className="space-y-4">
            <div>
              <label htmlFor="profile-name" className="block text-sm font-medium text-text-primary mb-2">
                {t('profile.name')}
              </label>
              <input
                id="profile-name"
                type="text"
                {...registerProfile('name', { required: true })}
                className="w-full px-4 py-2 rounded-lg bg-surface-2 border border-border text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="profile-email" className="block text-sm font-medium text-text-primary mb-2">
                {t('profile.email')}
              </label>
              <input
                id="profile-email"
                type="email"
                {...registerProfile('email', { required: true })}
                className="w-full px-4 py-2 rounded-lg bg-surface-2 border border-border text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <Button type="submit" disabled={profileSaving}>
              {profileSaving ? t('profile.saving') : t('profile.saveProfile')}
            </Button>
          </form>
        </Card>

        {/* Change password */}
        <Card>
          <h2 className="text-xl font-display font-semibold text-text-primary mb-6">
            {t('profile.changePassword')}
          </h2>
          <form onSubmit={handlePasswordSubmit(onPasswordSubmit)} className="space-y-4">
            <div>
              <label htmlFor="current-password" className="block text-sm font-medium text-text-primary mb-2">
                {t('profile.currentPassword')}
              </label>
              <input
                id="current-password"
                type="password"
                {...registerPassword('currentPassword', { required: true })}
                className="w-full px-4 py-2 rounded-lg bg-surface-2 border border-border text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-text-primary mb-2">
                {t('profile.newPassword')}
              </label>
              <input
                id="new-password"
                type="password"
                {...registerPassword('newPassword', { required: true, minLength: 6 })}
                className="w-full px-4 py-2 rounded-lg bg-surface-2 border border-border text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="confirm-new-password" className="block text-sm font-medium text-text-primary mb-2">
                {t('profile.confirmNewPassword')}
              </label>
              <input
                id="confirm-new-password"
                type="password"
                {...registerPassword('confirmNewPassword', {
                  required: true,
                  validate: (v) => v === newPassword || t('profile.passwordsMustMatch'),
                })}
                className="w-full px-4 py-2 rounded-lg bg-surface-2 border border-border text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <Button type="submit" disabled={passwordSaving}>
              {passwordSaving ? t('profile.updating') : t('profile.updatePassword')}
            </Button>
          </form>
        </Card>

        {/* Purchase history */}
        <Card>
          <h2 className="text-xl font-display font-semibold text-text-primary mb-6">
            {t('profile.purchaseHistory')}
          </h2>
          {loadingHistory ? (
            <div className="flex justify-center py-8">
              <Spinner />
            </div>
          ) : purchaseHistory.length === 0 ? (
            <p className="text-text-muted">{t('profile.purchaseHistoryEmpty')}</p>
          ) : (
            <ul className="space-y-4">
              {purchaseHistory.map((p) => (
                <li
                  key={p._id}
                  className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-border last:border-0"
                >
                  <div>
                    <span className="font-medium text-text-primary">
                      {p.course?.title ?? p.course?.slug ?? '—'}
                    </span>
                    {p.course?.tradeCode && (
                      <span className="ml-2 text-sm text-text-muted">({p.course.tradeCode})</span>
                    )}
                    <p className="text-sm text-text-muted mt-1">
                      {t('profile.purchasedOn')} {formatDate(p.completedAt ?? p.createdAt)}
                    </p>
                  </div>
                  {p.course?.slug && (
                    <Link to={`/learn/${p.course.slug}`}>
                      <Button variant="outline" size="sm">
                        {t('profile.viewCourse')}
                      </Button>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </div>
  );
}
