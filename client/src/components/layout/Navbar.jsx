import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';
import { CertReadyLogoCompact } from '../brand/CertReadyLogo';

export default function Navbar() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setUserMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <CertReadyLogoCompact width={160} height={34} className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {user ? (
              <>
                <Link to="/dashboard" className="text-white hover:text-accent transition-colors font-medium">
                  {t('nav.dashboard')}
                </Link>
                <Link to="/trades" className="text-white hover:text-accent transition-colors">
                  {t('nav.trades')}
                </Link>
                <Link to="/practice-tests" className="text-white hover:text-accent transition-colors">
                  {t('nav.practiceTests')}
                </Link>
                <Link to="/pass-reward" className="text-accent-warm hover:text-white transition-colors font-medium">
                  Pass Reward
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="text-white hover:text-accent transition-colors">
                  {t('nav.home')}
                </Link>
                <Link to="/red-seal-exam" className="text-white hover:text-accent transition-colors">
                  {t('nav.redSealExam')}
                </Link>
                <Link to="/trades" className="text-white hover:text-accent transition-colors">
                  {t('nav.trades')}
                </Link>
                <Link to="/pass-reward" className="text-accent-warm hover:text-white transition-colors font-medium">
                  Pass Reward
                </Link>
                <Link to="/practice-tests" className="text-white hover:text-accent transition-colors">
                  {t('nav.practiceTests')}
                </Link>
                <Link to="/guides" className="text-white hover:text-accent transition-colors">
                  {t('nav.guides')}
                </Link>
                <Link to="/blog" className="text-white hover:text-accent transition-colors">
                  {t('nav.blog')}
                </Link>
              </>
            )}
          </div>

          {/* Desktop: Language + Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-white hover:text-accent hover:bg-surface-2 transition-colors text-sm"
                aria-label={t('common.ariaLabelSelectLanguage')}
              >
                <span className="uppercase font-medium">{i18n.language}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-surface border border-border rounded-xl shadow-lg py-2 z-50">
                  {SUPPORTED_LANGUAGES.map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => changeLanguage(code)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        i18n.language === code ? 'text-accent font-medium' : 'text-text-primary hover:bg-surface-2'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div> */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-surface-2 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-medium">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-text-primary">{user.name}</span>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-surface border border-border rounded-xl shadow-lg py-2">
                    {user.isAdmin && (
                      <>
                        <Link
                          to="/admin/users"
                          onClick={() => setUserMenuOpen(false)}
                          className="block px-4 py-2 text-accent hover:bg-surface-2 transition-colors font-medium flex items-center justify-between"
                        >
                          <span>Users Admin</span>
                          <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent/20 text-accent font-semibold">Admin</span>
                        </Link>
                        <Link
                          to="/admin/claims"
                          onClick={() => setUserMenuOpen(false)}
                          className="block px-4 py-2 text-accent-warm hover:bg-surface-2 transition-colors font-medium flex items-center justify-between"
                        >
                          <span>Claims Admin</span>
                          <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent-warm/20 text-accent-warm">Admin</span>
                        </Link>
                      </>
                    )}
                    <Link
                      to="/profile"
                      onClick={() => setUserMenuOpen(false)}
                      className="block px-4 py-2 text-text-primary hover:bg-surface-2 transition-colors"
                    >
                      {t('nav.profile')}
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-text-primary hover:bg-surface-2 transition-colors"
                    >
                      {t('nav.logout')}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">{t('nav.logIn')}</Button>
                </Link>
                <Link to="/register">
                  <Button>{t('nav.getStarted')}</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-text-primary p-2"
            aria-label={t('common.ariaLabelToggleMenu')}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-surface">
          <div className="px-4 py-4 space-y-3">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-accent font-medium hover:text-white transition-colors"
                >
                  {t('nav.dashboard')}
                </Link>
                <Link
                  to="/trades"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-text-primary hover:text-accent transition-colors"
                >
                  {t('nav.trades')}
                </Link>
                <Link
                  to="/practice-tests"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-text-primary hover:text-accent transition-colors"
                >
                  {t('nav.practiceTests')}
                </Link>
                <Link
                  to="/pass-reward"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-accent-warm hover:text-white transition-colors font-medium"
                >
                  Pass Reward
                </Link>
                {user.isAdmin && (
                  <>
                    <Link
                      to="/admin/users"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-accent hover:text-white transition-colors font-medium flex items-center justify-between"
                    >
                      <span>Users Admin</span>
                      <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent/20 text-accent font-semibold">Admin</span>
                    </Link>
                    <Link
                      to="/admin/claims"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-accent-warm hover:text-white transition-colors font-medium flex items-center justify-between"
                    >
                      <span>Claims Admin</span>
                      <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent-warm/20 text-accent-warm font-semibold">Admin</span>
                    </Link>
                  </>
                )}
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-text-primary hover:text-accent transition-colors"
                >
                  {t('nav.profile')}
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-text-muted hover:text-danger transition-colors pt-2 border-t border-border"
                >
                  {t('nav.logout')}
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-text-primary hover:text-accent transition-colors"
                >
                  {t('nav.home')}
                </Link>
                <Link
                  to="/red-seal-exam"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-text-primary hover:text-accent transition-colors"
                >
                  {t('nav.redSealExam')}
                </Link>
                <Link
                  to="/trades"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-text-primary hover:text-accent transition-colors"
                >
                  {t('nav.trades')}
                </Link>
                <Link
                  to="/pass-reward"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-accent-warm hover:text-white transition-colors font-medium"
                >
                  Pass Reward
                </Link>
                <Link
                  to="/practice-tests"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-text-primary hover:text-accent transition-colors"
                >
                  {t('nav.practiceTests')}
                </Link>
                <Link
                  to="/guides"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-text-primary hover:text-accent transition-colors"
                >
                  {t('nav.guides')}
                </Link>
                <Link
                  to="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-text-primary hover:text-accent transition-colors"
                >
                  {t('nav.blog')}
                </Link>
                <div className="pt-2 border-t border-border space-y-2">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-text-primary hover:text-accent transition-colors"
                  >
                    {t('nav.logIn')}
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    <Button className="w-full">{t('nav.getStarted')}</Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
