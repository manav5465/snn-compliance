import React from 'react';
import ServicesGrid from '../sections/ServicesGrid';
import EstimatorWidget from '../sections/EstimatorWidget';

export default function ServicesPage() {
  return (
    <div className="py-8 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1B365D] text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-white/10 text-center space-y-3">
          <h1 className="text-4xl font-extrabold font-heading">Enterprise Services Catalog</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Complete compliance provision and audit readiness engineering for SOC 2, ISO 27001, GDPR, HIPAA, and EU AI Act.
          </p>
        </div>
      </div>
      <ServicesGrid />
      <EstimatorWidget />
    </div>
  );
}
