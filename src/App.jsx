import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import FrameworksPage from './pages/FrameworksPage';
import DashboardPage from './pages/DashboardPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import DisclaimerPage from './pages/DisclaimerPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="frameworks" element={<FrameworksPage />} />
          <Route path="portal" element={<DashboardPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="about" element={<AboutPage />} />
          
          {/* Legal Pages */}
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="cookie-policy" element={<CookiePolicyPage />} />
          <Route path="disclaimer" element={<DisclaimerPage />} />
          
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}
