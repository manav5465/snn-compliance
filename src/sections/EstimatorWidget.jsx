import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Layers, 
  Building2, 
  Server, 
  ArrowRight, 
  Printer, 
  RotateCcw,
  Sparkles,
  AlertTriangle
} from 'lucide-react';
import { estimatorData } from '../data/complianceData';
import StatusBadge from '../components/common/StatusBadge';
import BookAuditModal from '../components/common/BookAuditModal';

export default function EstimatorWidget() {
  const [step, setStep] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState(estimatorData.industries[0]);
  const [selectedSize, setSelectedSize] = useState(estimatorData.companySizes[1]);
  const [selectedDataTypes, setSelectedDataTypes] = useState(['pii', 'financial']);
  const [selectedSecurityState, setSelectedSecurityState] = useState(estimatorData.securityStates[1]);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const toggleDataType = (id) => {
    if (selectedDataTypes.includes(id)) {
      if (selectedDataTypes.length > 1) {
        setSelectedDataTypes(selectedDataTypes.filter((t) => t !== id));
      }
    } else {
      setSelectedDataTypes([...selectedDataTypes, id]);
    }
  };

  // Calculate customized metrics
  const calculateResult = () => {
    // Timeline calculation
    let totalWeeks = Math.round(
      selectedIndustry.baseWeeks * selectedSize.multiplier + selectedSecurityState.addedWeeks
    );
    if (selectedDataTypes.includes('phi')) totalWeeks += 2;
    if (selectedDataTypes.includes('ai')) totalWeeks += 2;

    // Readiness score calculation
    let score = selectedSecurityState.gapScore;
    if (selectedSize.id === 'enterprise') score -= 8;
    if (selectedDataTypes.length > 3) score -= 5;
    score = Math.max(35, Math.min(96, score));

    // Recommended frameworks combining industry primary + data types
    const recFrameworks = [...selectedIndustry.primaryFrameworks];
    if (selectedDataTypes.includes('phi') && !recFrameworks.includes('HIPAA')) recFrameworks.push('HIPAA');
    if (selectedDataTypes.includes('ai') && !recFrameworks.includes('EU AI Act')) recFrameworks.push('EU AI Act');

    return {
      estimatedWeeks: totalWeeks,
      readinessScore: score,
      tier: selectedSize.costTier,
      recommendedFrameworks: Array.from(new Set(recFrameworks))
    };
  };

  const result = calculateResult();

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="estimator-section" className="py-20 bg-white border-y border-[#5C768D]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B365D]/10 text-[#1B365D] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-[#2E6D22]" />
            Interactive Audit Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B365D] tracking-tight font-heading">
            Compliance Readiness & Timeline Calculator
          </h2>
          <p className="text-base text-[#5C768D]">
            Select your enterprise profile parameters to calculate your audit readiness timeline, compliance gap score, and recommended frameworks roadmap.
          </p>
        </div>

        {/* Interactive Estimator Wizard Card */}
        <div className="bg-[#F4F6F9] border border-[#5C768D]/20 rounded-2xl p-6 sm:p-10 shadow-lg max-w-5xl mx-auto">
          
          {/* Progress Indicator Steps */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#5C768D]/20 no-print">
            <div className="flex items-center gap-3">
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step === 1 ? 'bg-[#1B365D] text-white' : 'bg-[#1B365D]/10 text-[#1B365D]'}`}>1</span>
              <span className="text-xs sm:text-sm font-bold text-[#1B365D] hidden sm:inline">Industry & Size</span>
            </div>
            <div className="w-8 sm:w-16 h-0.5 bg-[#5C768D]/20" />
            <div className="flex items-center gap-3">
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step === 2 ? 'bg-[#1B365D] text-white' : 'bg-[#1B365D]/10 text-[#1B365D]'}`}>2</span>
              <span className="text-xs sm:text-sm font-bold text-[#1B365D] hidden sm:inline">Data & Security Controls</span>
            </div>
            <div className="w-8 sm:w-16 h-0.5 bg-[#5C768D]/20" />
            <div className="flex items-center gap-3">
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step === 3 ? 'bg-[#2E6D22] text-white' : 'bg-[#1B365D]/10 text-[#1B365D]'}`}>3</span>
              <span className="text-xs sm:text-sm font-bold text-[#1B365D]">Roadmap Report</span>
            </div>
          </div>

          {/* Step 1: Industry & Company Size */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#1B365D] mb-3">
                  Step 1A: Select Industry Sector
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {estimatorData.industries.map((ind) => (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => setSelectedIndustry(ind)}
                      className={`p-4 rounded-xl border text-left text-xs font-bold transition-all flex items-center justify-between ${
                        selectedIndustry.id === ind.id
                          ? 'border-[#1B365D] bg-[#1B365D] text-white shadow-md'
                          : 'border-[#5C768D]/20 bg-white text-[#1B365D] hover:border-[#1B365D]/40'
                      }`}
                    >
                      <span>{ind.label}</span>
                      {selectedIndustry.id === ind.id && <CheckCircle2 className="w-4 h-4 text-[#2E6D22] bg-white rounded-full shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1B365D] mb-3">
                  Step 1B: Select Organization Size
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {estimatorData.companySizes.map((sz) => (
                    <button
                      key={sz.id}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`p-3.5 rounded-xl border text-center text-xs font-bold transition-all ${
                        selectedSize.id === sz.id
                          ? 'border-[#1B365D] bg-[#1B365D] text-white shadow-md'
                          : 'border-[#5C768D]/20 bg-white text-[#1B365D] hover:border-[#1B365D]/40'
                      }`}
                    >
                      <div>{sz.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl bg-[#1B365D] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#284B7C] transition-colors flex items-center gap-2"
                >
                  <span>Continue to Step 2</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Data Practices & Security State */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#1B365D] mb-3">
                  Step 2A: What Data Does Your Platform Handle? (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {estimatorData.dataHandlingOptions.map((opt) => {
                    const isChecked = selectedDataTypes.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => toggleDataType(opt.id)}
                        className={`p-3.5 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-all ${
                          isChecked
                            ? 'border-[#1B365D] bg-[#1B365D]/10 text-[#1B365D] font-bold'
                            : 'border-[#5C768D]/20 bg-white text-[#5C768D] hover:border-[#1B365D]/40'
                        }`}
                      >
                        <span>{opt.label}</span>
                        {isChecked && <CheckCircle2 className="w-4 h-4 text-[#2E6D22] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1B365D] mb-3">
                  Step 2B: Current Security Policy & Control Maturity
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {estimatorData.securityStates.map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setSelectedSecurityState(st)}
                      className={`p-4 rounded-xl border text-left text-xs font-medium transition-all ${
                        selectedSecurityState.id === st.id
                          ? 'border-[#1B365D] bg-[#1B365D] text-white shadow-md'
                          : 'border-[#5C768D]/20 bg-white text-[#1B365D] hover:border-[#1B365D]/40'
                      }`}
                    >
                      <div className="font-bold text-sm mb-1">{st.label.split(' ')[0]}</div>
                      <div className="text-[11px] opacity-90">{st.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-bold text-[#5C768D] hover:text-[#1B365D]"
                >
                  &larr; Back to Step 1
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-3 rounded-xl bg-[#2E6D22] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#23541A] transition-colors flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Generate Custom Compliance Roadmap
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Tailored Roadmap Report */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#5C768D]/20">
                <div>
                  <StatusBadge status="success" label="Tailored Assessment Generated" />
                  <h3 className="text-2xl font-bold text-[#1B365D] font-heading mt-2">
                    Executive Compliance Roadmap
                  </h3>
                  <p className="text-xs text-[#5C768D]">
                    Based on {selectedIndustry.label} • {selectedSize.label}
                  </p>
                </div>

                <div className="flex items-center gap-3 no-print">
                  <button
                    onClick={handlePrint}
                    className="px-3.5 py-2 rounded-xl border border-[#5C768D]/30 bg-white text-xs font-semibold text-[#1B365D] hover:bg-[#1B365D]/5 flex items-center gap-1.5"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Report</span>
                  </button>
                  <button
                    onClick={() => setStep(1)}
                    className="px-3.5 py-2 rounded-xl border border-[#5C768D]/30 bg-white text-xs font-semibold text-[#5C768D] hover:text-[#1B365D] flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Recalculate</span>
                  </button>
                </div>
              </div>

              {/* Metrics Result Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 bg-white rounded-xl border border-[#5C768D]/20 text-center">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5C768D]">Readiness Timeline</div>
                  <div className="text-3xl font-extrabold text-[#1B365D] font-heading mt-1">
                    {result.estimatedWeeks} Weeks
                  </div>
                  <div className="text-[11px] text-[#2E6D22] font-semibold mt-1 flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3" /> Guaranteed Fast-Track Option
                  </div>
                </div>

                <div className="p-5 bg-white rounded-xl border border-[#5C768D]/20 text-center">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5C768D]">Initial Gap Score</div>
                  <div className="text-3xl font-extrabold text-[#1B365D] font-heading mt-1">
                    {result.readinessScore}%
                  </div>
                  <div className="text-[11px] text-[#5C768D] mt-1">
                    Target: 100% Audit Readiness
                  </div>
                </div>

                <div className="p-5 bg-white rounded-xl border border-[#5C768D]/20 text-center">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5C768D]">Recommended Tier</div>
                  <div className="text-3xl font-extrabold text-[#1B365D] font-heading mt-1">
                    {result.tier}
                  </div>
                  <div className="text-[11px] text-[#2E6D22] font-semibold mt-1">
                    Includes Telemetry Suite
                  </div>
                </div>
              </div>

              {/* Frameworks Recommended List */}
              <div className="p-6 bg-white rounded-xl border border-[#5C768D]/20 space-y-4">
                <h4 className="text-sm font-bold text-[#1B365D] font-heading uppercase tracking-wider">
                  Required & Recommended Regulatory Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {result.recommendedFrameworks.map((fw) => (
                    <span
                      key={fw}
                      className="px-3.5 py-1.5 rounded-lg bg-[#1B365D] text-white text-xs font-bold flex items-center gap-1.5"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2E6D22]" />
                      {fw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#5C768D]/20 no-print">
                <div className="text-xs text-[#5C768D]">
                  Ready to fast-track your {result.recommendedFrameworks.join(', ')} audit?
                </div>

                <button
                  onClick={() => setIsAuditModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#2E6D22] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#23541A] transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Lock In Timeline & Book Audit
                </button>
              </div>
            </motion.div>
          )}

        </div>
      </div>

      <BookAuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </section>
  );
}
