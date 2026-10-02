import React from 'react';
import HeroSection from '../sections/HeroSection';
import TrustBar from '../sections/TrustBar';
import ServicesGrid from '../sections/ServicesGrid';
import EstimatorWidget from '../sections/EstimatorWidget';
import FrameworksExplorer from '../sections/FrameworksExplorer';
import ClientDashboardPreview from '../sections/ClientDashboardPreview';
import PricingSection from '../sections/PricingSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import AboutSection from '../sections/AboutSection';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <EstimatorWidget />
      <FrameworksExplorer />
      <ClientDashboardPreview />
      <PricingSection />
      <TestimonialsSection />
      <AboutSection />
    </div>
  );
}
