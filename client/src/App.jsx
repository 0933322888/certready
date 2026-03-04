import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageWrapper from './components/layout/PageWrapper';
import ScrollToTop from './components/layout/ScrollToTop';
import ProtectedRoute from './components/ui/ProtectedRoute';
import Spinner from './components/ui/Spinner';

import HomePage from './pages/HomePage';

const AllCoursesPage = lazy(() => import('./pages/AllCoursesPage'));
const CoursePage = lazy(() => import('./pages/CoursePage'));
const LearnPage = lazy(() => import('./pages/LearnPage'));
const GuidesPage = lazy(() => import('./pages/GuidesPage'));
const TradeGuidePage = lazy(() => import('./pages/TradeGuidePage'));
const PracticePage = lazy(() => import('./pages/PracticePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const CheckoutSuccessPage = lazy(() => import('./pages/CheckoutSuccessPage'));
const CheckoutCancelPage = lazy(() => import('./pages/CheckoutCancelPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'));
const ResetPasswordPage = lazy(() => import('./pages/ResetPasswordPage'));

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

export default function App() {
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <AuthProvider>
        <BrowserRouter>
        <ScrollToTop />
        <Toaster 
          position="top-right" 
          toastOptions={{ 
            style: { 
              background: '#1C2A3A', 
              color: '#F1F5F9', 
              border: '1px solid #1E3A5F' 
            } 
          }} 
        />
        <PageWrapper>
          <Navbar />
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <Spinner size="lg" />
            </div>
          }>
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<AllCoursesPage />} />
            <Route path="/courses/:slug" element={<CoursePage />} />
            <Route path="/learn/:slug" element={<LearnPage />} />
            <Route path="/guides" element={<GuidesPage />} />
            <Route path="/guides/:tradeSlug" element={<TradeGuidePage />} />
            <Route path="/practice/:tradeSlug" element={<PracticePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/checkout/success" element={<CheckoutSuccessPage />} />
            <Route path="/checkout/cancel" element={<CheckoutCancelPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/dashboard" element={
              <ProtectedRoute><DashboardPage /></ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute><ProfilePage /></ProtectedRoute>
            } />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          </Suspense>
          <Footer />
        </PageWrapper>
        </BrowserRouter>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}
