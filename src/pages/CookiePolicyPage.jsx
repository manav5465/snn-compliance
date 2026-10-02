import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Settings, Save } from 'lucide-react';
import { Link } from 'react-router-dom';
import { legalDocs } from '../data/complianceData';
import StatusBadge from '../components/common/StatusBadge';

export default function CookiePolicyPage() {
  const doc = legalDocs.cookie;
  const [preferences, setPreferences] = useState({
    essential: true, // Always required
    analytics: false,
    functional: true,
    marketing: false
  });
  const [saved, setSaved] = useState(false);

  const handleToggle = (key) => {
    if (key === 'essential') return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

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
            <StatusBadge status="success" label="ePrivacy & GDPR Compliant" size="sm" />
            <span className="text-xs text-slate-300 font-mono">Last Updated: {doc.lastUpdated}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading">{doc.title}</h1>
          <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
            Granular breakdown of essential operational cookies and optional telemetry cookies with interactive preference management.
          </p>
        </div>

        {/* Interactive Preference Center */}
        <div className="bg-white rounded-2xl border border-[#5C768D]/20 p-8 sm:p-10 shadow-sm space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Settings className="w-5 h-5 text-[#1B365D]" />
              <h2 className="text-xl font-bold text-[#1B365D] font-heading">Interactive Cookie Preference Center</h2>
            </div>
            <p className="text-xs text-[#5C768D]">
              Customize your tracking settings below. Essential security cookies cannot be disabled as they are required for system authentication and CSRF defense.
            </p>
          </div>

          <div className="space-y-4">
            {/* Essential Cookies */}
            <div className="p-4 rounded-xl border border-[#5C768D]/20 bg-[#F4F6F9] flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#1B365D]">Strictly Essential Security Cookies</span>
                  <StatusBadge status="success" label="Always Active" size="sm" />
                </div>
                <p className="text-xs text-[#5C768D] mt-1">
                  Required for user authentication, session security, load balancing, and anti-tamper validation.
                </p>
              </div>
              <input type="checkbox" checked disabled className="w-5 h-5 accent-[#1B365D] cursor-not-allowed" />
            </div>

            {/* Analytical Cookies */}
            <div className="p-4 rounded-xl border border-[#5C768D]/20 bg-white flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-[#1B365D]">Analytical & Performance Telemetry</div>
                <p className="text-xs text-[#5C768D] mt-1">
                  Helps us measure feature usage frequency, platform responsiveness, and UI ergonomic enhancements.
                </p>
              </div>
              <button
                onClick={() => handleToggle('analytics')}
                className={`w-12 h-6 rounded-full p-1 transition-colors ${
                  preferences.analytics ? 'bg-[#2E6D22]' : 'bg-[#5C768D]/30'
                }`}
                aria-label="Toggle analytics cookies"
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    preferences.analytics ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Functional Cookies */}
            <div className="p-4 rounded-xl border border-[#5C768D]/20 bg-white flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-[#1B365D]">Functional Preferences</div>
                <p className="text-xs text-[#5C768D] mt-1">
                  Remembers your selected industry parameters in the Estimator and preferred dashboard views.
                </p>
              </div>
              <button
                onClick={() => handleToggle('functional')}
                className={`w-12 h-6 rounded-full p-1 transition-colors ${
                  preferences.functional ? 'bg-[#2E6D22]' : 'bg-[#5C768D]/30'
                }`}
                aria-label="Toggle functional cookies"
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    preferences.functional ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-[#5C768D]/15 flex items-center justify-between">
            {saved ? (
              <div className="text-xs font-bold text-[#2E6D22] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Preferences Saved Successfully!
              </div>
            ) : (
              <span className="text-xs text-[#5C768D]">Changes take effect immediately across all sessions.</span>
            )}

            <button
              onClick={handleSave}
              className="px-6 py-2.5 rounded-xl bg-[#1B365D] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#284B7C] transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
