import React from 'react';
import { trustMetrics } from '../data/complianceData';

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-[#5C768D]/20 py-10 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#5C768D]/15">
          {trustMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={metric.id} className={`pt-4 lg:pt-0 ${idx > 0 ? 'lg:pl-8' : ''}`}>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Icon className="w-5 h-5 text-[#2E6D22]" />
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#1B365D] font-heading tracking-tight">
                    {metric.value}
                  </span>
                </div>
                <div className="text-sm font-bold text-[#1B365D] font-heading">{metric.label}</div>
                <div className="text-xs text-[#5C768D] mt-0.5">{metric.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
