import React from 'react';
import { ShieldCheck, AlertTriangle, ArrowLeft, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { legalDocs } from '../data/complianceData';
import StatusBadge from '../components/common/StatusBadge';

export default function DisclaimerPage() {
  const doc = legalDocs.disclaimer;

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
            <StatusBadge status="warning" label="Legal Clarification Notice" size="sm" />
            <span className="text-xs text-slate-300 font-mono">Last Updated: {doc.lastUpdated}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading">{doc.title}</h1>
          <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
            Important legal distinction regarding statutory legal representation, software tools, and certified CPA auditor matching.
          </p>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-2xl border border-[#5C768D]/20 p-8 sm:p-10 shadow-sm space-y-8">
          
          <div className="p-4 bg-[#C67D0A]/10 border border-[#C67D0A]/30 rounded-xl flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#C67D0A] shrink-0 mt-0.5" />
            <div className="text-xs text-[#1B365D] leading-relaxed">
              <strong>Notice of Non-Legal Counsel Status:</strong> SNN Compliance Solutions provides software tools, control mapping, risk telemetry, and audit readiness facilitation. SNN Compliance Solutions does not provide formal legal representation or statutory legal opinions.
            </div>
          </div>

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
