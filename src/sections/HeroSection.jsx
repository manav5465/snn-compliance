import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, CheckCircle2, Lock, FileCheck, RefreshCw, Cpu, Award } from 'lucide-react';
import BookAuditModal from '../components/common/BookAuditModal';
import StatusBadge from '../components/common/StatusBadge';

export default function HeroSection() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <section className="relative bg-[#1B365D] text-white pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-dark-grid-pattern">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#284B7C]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-[#2E6D22]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Copy Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Regulatory Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <StatusBadge status="success" label="SOC 2 & ISO 27001 Certified Advisory" size="sm" />
              <span className="text-xs font-semibold text-slate-200">2026 Enterprise Rigor</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-heading">
              Automated Compliance. <br />
              <span className="text-[#8DA4B8]">Zero Audit Friction.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              SNN Compliance Solutions bridges technical infrastructure with stringent regulatory frameworks. We automate continuous telemetry evidence, fast-track SOC 2 & ISO 27001 certifications, and enforce enterprise governance.
            </p>

            {/* Call to Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => setIsAuditModalOpen(true)}
                className="px-8 py-4 rounded-xl bg-[#2E6D22] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#23541A] shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group focus:ring-2 focus:ring-white"
              >
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span>Get Compliant Today</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#frameworks-section"
                className="px-8 py-4 rounded-xl border border-white/30 bg-white/5 backdrop-blur-md text-white text-sm font-semibold hover:bg-white/15 transition-all text-center flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-[#8DA4B8]" />
                <span>Explore Frameworks</span>
              </a>
            </div>

            {/* Feature Highlights Grid */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E6D22] shrink-0" />
                <span>100% Audit Readiness SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E6D22] shrink-0" />
                <span>Multi-Cloud Telemetry</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E6D22] shrink-0" />
                <span>Zero-Trust Governance</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Interactive Telemetry Card Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#0F2039]/90 border border-white/15 rounded-2xl p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#2E6D22] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Live Telemetry Engine
                  </span>
                </div>
                <StatusBadge status="success" label="100% Compliant" size="sm" />
              </div>

              {/* Status Gauges */}
              <div className="py-6 space-y-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
                    <span>SOC 2 Type II Controls</span>
                    <span className="text-[#2E6D22] font-bold">114 / 114 Verified</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div className="bg-[#2E6D22] h-full rounded-full w-full" />
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
                    <span>ISO 27001 Annex A Telemetry</span>
                    <span className="text-[#2E6D22] font-bold">93 / 93 Active</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div className="bg-[#2E6D22] h-full rounded-full w-full" />
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
                    <span>GDPR Data Mapping & RoPA</span>
                    <span className="text-[#2E6D22] font-bold">Validated</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div className="bg-[#2E6D22] h-full rounded-full w-full" />
                  </div>
                </div>
              </div>

              {/* Live Ticker Feed */}
              <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <RefreshCw className="w-3 h-3 text-[#2E6D22] animate-spin" />
                    <span>AWS Production Control Check</span>
                  </span>
                  <span className="text-[#2E6D22]">PASSED</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-[#2E6D22]" />
                    <span>GitHub Enterprise MFA Enforcement</span>
                  </span>
                  <span className="text-[#2E6D22]">ENFORCED</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Audit Modal */}
      <BookAuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </section>
  );
}
