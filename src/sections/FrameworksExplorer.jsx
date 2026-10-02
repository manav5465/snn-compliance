import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layers, ArrowRight, CheckCircle2, Clock, RefreshCw, FileText } from 'lucide-react';
import { regulatoryFrameworks } from '../data/complianceData';
import StatusBadge from '../components/common/StatusBadge';
import BookAuditModal from '../components/common/BookAuditModal';

export default function FrameworksExplorer() {
  const [selectedFramework, setSelectedFramework] = useState(regulatoryFrameworks[0]);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <section id="frameworks-section" className="py-20 bg-[#F4F6F9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B365D]/10 text-[#1B365D] text-xs font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4 text-[#2E6D22]" />
            Supported Regulatory Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B365D] tracking-tight font-heading">
            Global Compliance Frameworks Library
          </h2>
          <p className="text-base text-[#5C768D]">
            Explore supported standards, control counts, telemetry automation levels, and audit cycles.
          </p>
        </div>

        {/* Tab Buttons Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {regulatoryFrameworks.map((fw) => {
            const isSelected = selectedFramework.id === fw.id;
            return (
              <button
                key={fw.id}
                onClick={() => setSelectedFramework(fw)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-[#1B365D] text-white shadow-md'
                    : 'bg-white text-[#1B365D] border border-[#5C768D]/20 hover:border-[#1B365D]'
                }`}
              >
                {fw.name}
              </button>
            );
          })}
        </div>

        {/* Active Framework Showcase Box */}
        <motion.div
          key={selectedFramework.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white border border-[#5C768D]/20 rounded-2xl p-8 sm:p-10 shadow-lg max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#5C768D]/15">
            <div>
              <div className="flex items-center gap-2">
                <StatusBadge status="success" label={`Authority: ${selectedFramework.authority}`} size="sm" />
              </div>
              <h3 className="text-3xl font-extrabold text-[#1B365D] font-heading mt-2">
                {selectedFramework.name}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-[#2E6D22]/10 text-[#2E6D22] text-xs font-bold border border-[#2E6D22]/30 flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5" />
                {selectedFramework.autoCollectEvidence}
              </span>
            </div>
          </div>

          <div className="py-6 space-y-6">
            <p className="text-sm text-[#5C768D] leading-relaxed">
              {selectedFramework.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#F4F6F9] rounded-xl border border-[#5C768D]/15">
                <div className="text-xs font-bold text-[#5C768D] uppercase tracking-wider mb-1">Target Sectors</div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {selectedFramework.targetIndustries.map((ind) => (
                    <span key={ind} className="px-2.5 py-1 rounded-md bg-white border border-[#5C768D]/20 text-[11px] font-semibold text-[#1B365D]">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#F4F6F9] rounded-xl border border-[#5C768D]/15 space-y-2">
                <div>
                  <div className="text-xs font-bold text-[#5C768D] uppercase tracking-wider">Total Controls</div>
                  <div className="text-lg font-extrabold text-[#1B365D]">{selectedFramework.totalControls} Mapped Controls</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#5C768D] uppercase tracking-wider">Audit Frequency</div>
                  <div className="text-xs text-[#1B365D] font-medium">{selectedFramework.auditFrequency}</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#1B365D]/5 rounded-xl border border-[#1B365D]/15 flex items-center justify-between text-xs text-[#1B365D]">
              <div>
                <strong>Core Rule Spec:</strong> {selectedFramework.keyRequirement}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#5C768D]/15 flex items-center justify-between">
            <span className="text-xs text-[#5C768D]">Certified Auditor Escort Included</span>
            
            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="px-6 py-2.5 rounded-xl bg-[#1B365D] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#284B7C] transition-colors flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#2E6D22]" />
              Start {selectedFramework.name} Readiness
            </button>
          </div>
        </motion.div>
      </div>

      <BookAuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </section>
  );
}
