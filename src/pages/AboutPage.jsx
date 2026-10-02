import React from 'react';
import AboutSection from '../sections/AboutSection';
import TestimonialsSection from '../sections/TestimonialsSection';

export default function AboutPage() {
  return (
    <div className="py-8 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1B365D] text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-white/10 text-center space-y-3">
          <h1 className="text-4xl font-extrabold font-heading">About SNN Compliance Solutions</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Enterprise governance rigor, multi-cloud telemetry automation, and certified lead auditor leadership.
          </p>
        </div>
      </div>
      <AboutSection />
      <TestimonialsSection />
    </div>
  );
}
