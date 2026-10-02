import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Calendar, Building2, Mail, User, Server, AlertCircle } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function BookAuditModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '26-150',
    frameworks: ['SOC 2 Type II'],
    timeline: 'Within 30 Days',
    cloudStack: 'AWS + GitHub',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const frameworkOptions = [
    'SOC 2 Type I / II',
    'ISO 27001:2022',
    'EU GDPR & CCPA',
    'HIPAA Security Rule',
    'PCI-DSS v4.0',
    'EU AI Act Governance',
    'Vendor Risk (TPRM)'
  ];

  const handleFrameworkToggle = (fw) => {
    setFormData((prev) => {
      const exists = prev.frameworks.includes(fw);
      return {
        ...prev,
        frameworks: exists ? prev.frameworks.filter((item) => item !== fw) : [...prev.frameworks, fw]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setBookingRef(`SNN-AUD-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F2039]/70 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#5C768D]/20 overflow-hidden my-8"
        >
          {/* Header */}
          <div className="bg-[#1B365D] text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-[#2E6D22] bg-white rounded-full p-0.5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading">Book an Enterprise Audit</h3>
                <p className="text-xs text-slate-300">Schedule a consultation with an SNN Certified Lead Auditor</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 md:p-8">
            {isSubmitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-[#2E6D22]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#2E6D22]/30">
                  <CheckCircle2 className="w-10 h-10 text-[#2E6D22]" />
                </div>
                <StatusBadge status="success" label="Audit Booking Confirmed" />
                <h4 className="text-2xl font-bold text-[#1B365D] mt-3">Request Received Successfully!</h4>
                <p className="text-sm text-[#5C768D] mt-2 max-w-md mx-auto">
                  Your audit booking reference is <strong className="text-[#1B365D] font-mono">{bookingRef}</strong>. 
                  A Senior Compliance Auditor has been assigned to review your technical environment.
                </p>

                <div className="mt-6 p-4 bg-[#F4F6F9] rounded-xl text-left border border-[#5C768D]/20 max-w-lg mx-auto">
                  <h5 className="text-xs font-semibold text-[#5C768D] uppercase tracking-wider mb-2">Booking Summary</h5>
                  <div className="grid grid-cols-2 gap-2 text-xs text-[#1B365D]">
                    <div><strong>Company:</strong> {formData.company || 'Enterprise Partner'}</div>
                    <div><strong>Timeline:</strong> {formData.timeline}</div>
                    <div className="col-span-2"><strong>Selected Frameworks:</strong> {formData.frameworks.join(', ')}</div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-[#1B365D] text-white font-semibold hover:bg-[#284B7C] transition-colors"
                  >
                    Done & Return to Site
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step indicator */}
                <div className="flex items-center justify-between pb-4 border-b border-[#5C768D]/15 text-xs font-medium text-[#5C768D]">
                  <span className={step === 1 ? 'text-[#1B365D] font-bold' : ''}>1. Scope & Frameworks</span>
                  <span className="w-8 border-b border-[#5C768D]/30" />
                  <span className={step === 2 ? 'text-[#1B365D] font-bold' : ''}>2. Enterprise Profile</span>
                </div>

                {step === 1 ? (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-bold text-[#1B365D] mb-2">
                        Select Required Compliance Frameworks (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {frameworkOptions.map((fw) => {
                          const isSelected = formData.frameworks.includes(fw);
                          return (
                            <button
                              key={fw}
                              type="button"
                              onClick={() => handleFrameworkToggle(fw)}
                              className={`p-3 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-all ${
                                isSelected
                                  ? 'border-[#1B365D] bg-[#1B365D]/5 text-[#1B365D] font-bold shadow-sm'
                                  : 'border-[#5C768D]/20 bg-white text-[#5C768D] hover:border-[#1B365D]/40'
                              }`}
                            >
                              <span>{fw}</span>
                              {isSelected && <CheckCircle2 className="w-4 h-4 text-[#2E6D22] shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#1B365D] mb-2">
                        Target Audit & Readiness Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#5C768D]/30 bg-white text-sm text-[#1B365D] focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D]"
                      >
                        <option value="Immediate (< 30 Days)">Immediate (&lt; 30 Days - Fast Track)</option>
                        <option value="Within 60 Days">Within 60 Days</option>
                        <option value="Next Quarter (Q4/Q1)">Next Quarter (Q4/Q1)</option>
                        <option value="Exploratory Evaluation">Exploratory / Planning Stage</option>
                      </select>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={formData.frameworks.length === 0}
                        className="px-6 py-2.5 rounded-xl bg-[#1B365D] text-white text-sm font-semibold hover:bg-[#284B7C] disabled:opacity-50 transition-colors"
                      >
                        Next: Enterprise Details &rarr;
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1B365D] mb-1">Full Name *</label>
                        <div className="relative">
                          <User className="w-4 h-4 text-[#5C768D] absolute left-3 top-3" />
                          <input
                            type="text"
                            required
                            placeholder="Alex Morgan"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#5C768D]/30 bg-white text-sm text-[#1B365D] focus:border-[#1B365D]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1B365D] mb-1">Corporate Work Email *</label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-[#5C768D] absolute left-3 top-3" />
                          <input
                            type="email"
                            required
                            placeholder="alex@enterprise.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#5C768D]/30 bg-white text-sm text-[#1B365D] focus:border-[#1B365D]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1B365D] mb-1">Company / Organization *</label>
                        <div className="relative">
                          <Building2 className="w-4 h-4 text-[#5C768D] absolute left-3 top-3" />
                          <input
                            type="text"
                            required
                            placeholder="Acme Financial Technologies"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#5C768D]/30 bg-white text-sm text-[#1B365D] focus:border-[#1B365D]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1B365D] mb-1">Organization Size</label>
                        <select
                          value={formData.employees}
                          onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-[#5C768D]/30 bg-white text-sm text-[#1B365D] focus:border-[#1B365D]"
                        >
                          <option value="1-25">1 - 25 Employees</option>
                          <option value="26-150">26 - 150 Employees</option>
                          <option value="151-500">151 - 500 Employees</option>
                          <option value="500+">500+ Global Employees</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1B365D] mb-1">Primary Cloud Infrastructure & Tools</label>
                      <input
                        type="text"
                        placeholder="e.g. AWS, GCP, Azure, GitHub Enterprise, Okta"
                        value={formData.cloudStack}
                        onChange={(e) => setFormData({ ...formData, cloudStack: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#5C768D]/30 bg-white text-sm text-[#1B365D] focus:border-[#1B365D]"
                      />
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-[#5C768D]/15">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs text-[#5C768D] font-semibold hover:text-[#1B365D]"
                      >
                        &larr; Back to Frameworks
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2.5 rounded-xl bg-[#2E6D22] text-white text-sm font-semibold hover:bg-[#23541A] disabled:opacity-50 transition-colors flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Scheduling Audit...
                          </>
                        ) : (
                          <>
                            <ShieldCheck className="w-4 h-4" />
                            Confirm Audit Session
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
