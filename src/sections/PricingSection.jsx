import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, HelpCircle } from 'lucide-react';
import { pricingPlans } from '../data/complianceData';
import StatusBadge from '../components/common/StatusBadge';
import BookAuditModal from '../components/common/BookAuditModal';

export default function PricingSection() {
  const [annualBilling, setAnnualBilling] = useState(true);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <section id="pricing-section" className="py-20 bg-[#F4F6F9] border-y border-[#5C768D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B365D]/10 text-[#1B365D] text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 text-[#2E6D22]" />
            Transparent B2B Investment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B365D] tracking-tight font-heading">
            Enterprise Compliance Tiers
          </h2>
          <p className="text-base text-[#5C768D]">
            Predictable subscription plans backed by our 100% Audit Readiness SLA & certified auditor match guarantee.
          </p>

          {/* Billing Frequency Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs font-semibold ${!annualBilling ? 'text-[#1B365D]' : 'text-[#5C768D]'}`}>
              Billed Monthly
            </span>
            <button
              onClick={() => setAnnualBilling(!annualBilling)}
              className="w-12 h-6 rounded-full bg-[#1B365D] p-1 relative transition-colors focus:ring-2 focus:ring-[#1B365D]"
              aria-label="Toggle annual or monthly billing"
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  annualBilling ? 'translate-x-6 bg-[#2E6D22]' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-semibold flex items-center gap-1.5 ${annualBilling ? 'text-[#1B365D]' : 'text-[#5C768D]'}`}>
              <span>Billed Annually</span>
              <span className="px-2 py-0.5 rounded-full bg-[#2E6D22]/10 text-[#2E6D22] text-[10px] font-bold border border-[#2E6D22]/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const displayPrice = annualBilling ? plan.priceAnnual : plan.priceMonthly;

            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl bg-white border p-8 flex flex-col justify-between relative shadow-sm hover:shadow-xl transition-all ${
                  plan.popular
                    ? 'border-[#1B365D] ring-2 ring-[#1B365D]/30'
                    : 'border-[#5C768D]/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-[#1B365D] text-white text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2E6D22]" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-[#1B365D] font-heading">{plan.name}</h3>
                  <p className="text-xs text-[#5C768D] mt-1 mb-6 leading-relaxed">{plan.target}</p>

                  {/* Price */}
                  <div className="pb-6 border-b border-[#5C768D]/15">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-[#1B365D] font-heading">
                        {displayPrice}
                      </span>
                      {plan.id !== 'custom' && (
                        <span className="text-xs font-medium text-[#5C768D]">/ month</span>
                      )}
                    </div>
                    <div className="text-[11px] text-[#5C768D] mt-1">{plan.billingPeriod}</div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="py-6 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#1B365D]">Included Capabilities</div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1B365D]">
                        <CheckCircle2 className="w-4 h-4 text-[#2E6D22] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-[#5C768D]/15">
                  <button
                    onClick={() => setIsAuditModalOpen(true)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-[#2E6D22] text-white hover:bg-[#23541A] shadow-lg'
                        : 'bg-[#1B365D] text-white hover:bg-[#284B7C]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <BookAuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </section>
  );
}
