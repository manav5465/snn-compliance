import React from 'react';
import { ShieldCheck, Award, Building, Lock, CheckCircle2, Globe, Users, Scale } from 'lucide-react';
import { companyDetails } from '../data/complianceData';
import StatusBadge from '../components/common/StatusBadge';

export default function AboutSection() {
  return (
    <section id="about-section" className="py-20 bg-[#F4F6F9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B365D]/10 text-[#1B365D] text-xs font-bold uppercase tracking-wider">
              <Building className="w-4 h-4 text-[#2E6D22]" />
              Corporate Governance & Rigor
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B365D] tracking-tight font-heading">
              Built on Regulatory Precision & Absolute Integrity
            </h2>

            <p className="text-sm sm:text-base text-[#5C768D] leading-relaxed">
              Founded in {companyDetails.founded}, SNN Compliance Solutions is a premier B2B compliance provision firm dedicated to simplifying complex regulatory frameworks for modern enterprises. We combine deep legal knowledge, cybersecurity engineering, and automated telemetry tools.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 bg-white rounded-xl border border-[#5C768D]/20 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#2E6D22] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1B365D] uppercase tracking-wider">ISO 27001 & SOC 2 Certified Provider</h4>
                  <p className="text-xs text-[#5C768D] mt-0.5">Our platform operations undergo strict annual SOC 2 Type II audits and maintain accredited ISO/IEC 27001:2022 certification.</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#5C768D]/20 flex items-start gap-3">
                <Scale className="w-5 h-5 text-[#2E6D22] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1B365D] uppercase tracking-wider">Certified Auditor Matching SLA</h4>
                  <p className="text-xs text-[#5C768D] mt-0.5">Direct partnership network with accredited CPAs, ISO registrars, and QSAs to ensure flawless audit execution.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image / Badges Card Column */}
          <div className="lg:col-span-6">
            <div className="bg-[#1B365D] text-white rounded-2xl p-8 sm:p-10 shadow-xl border border-[#5C768D]/30 space-y-6 relative overflow-hidden bg-dark-grid-pattern">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#2E6D22]" />
                  </div>
                  <span className="text-sm font-bold font-heading">SNN Security Governance</span>
                </div>
                <StatusBadge status="success" label="Global Standard" size="sm" />
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-[#8DA4B8] font-bold uppercase">Headquarters</div>
                  <div className="text-white font-semibold mt-1">New York, NY</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-[#8DA4B8] font-bold uppercase">Audit Coverage</div>
                  <div className="text-white font-semibold mt-1">Global 50+ Countries</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-[#8DA4B8] font-bold uppercase">Primary Stack</div>
                  <div className="text-white font-semibold mt-1">Multi-Cloud Telemetry</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-[#8DA4B8] font-bold uppercase">Client Retention</div>
                  <div className="text-white font-semibold mt-1">99.4% Annual SLA</div>
                </div>
              </div>

              <div className="p-4 bg-white/10 rounded-xl border border-white/15 text-xs text-slate-300 leading-relaxed">
                "We hold ourselves to the exact same rigorous security standards we implement for our enterprise clients."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
