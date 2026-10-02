import React from 'react';
import { ShieldCheck, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { legalDocs } from '../data/complianceData';
import StatusBadge from '../components/common/StatusBadge';

export default function TermsPage() {
  const doc = legalDocs.terms;

  return (
    <div className="py-12 bg-[#F4F6F9] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Back */}
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-[#1B365D] hover:text-[#284B7C] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Return to Home
        </Link>

        {/* Page Header */}
        <div className="bg-[#1B365D] text-white rounded-2xl p-8 sm:p-10 shadow-lg border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <StatusBadge status="success" label="Enterprise Agreement" size="sm" />
            <span className="text-xs text-slate-300 font-mono">Last Updated: {doc.lastUpdated}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading">{doc.title}</h1>
          <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
            These terms govern your subscription and operational usage of SNN Compliance Solutions software and advisory tools.
          </p>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-2xl border border-[#5C768D]/20 p-8 sm:p-10 shadow-sm space-y-8">
          {doc.sections.map((section, idx) => (
            <div key={idx} className="space-y-3 pb-6 border-b border-[#5C768D]/15 last:border-b-0 last:pb-0">
              <h2 className="text-xl font-bold text-[#1B365D] font-heading">{section.heading}</h2>
              <p className="text-sm text-[#5C768D] leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
