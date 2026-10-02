import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Quote, CheckCircle2, Star } from 'lucide-react';
import { testimonials } from '../data/complianceData';
import StatusBadge from '../components/common/StatusBadge';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white border-y border-[#5C768D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B365D]/10 text-[#1B365D] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#2E6D22]" />
            Enterprise Verification
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B365D] tracking-tight font-heading">
            Enterprise Client Success Stories
          </h2>
          <p className="text-base text-[#5C768D]">
            Read how global CISOs, CTOs, and founders fast-track compliance accreditation with SNN.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ y: -4 }}
              className="bg-[#F4F6F9] rounded-2xl border border-[#5C768D]/20 p-7 flex flex-col justify-between shadow-sm relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#C67D0A] gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <StatusBadge status="success" label="Verified Client" size="sm" />
                </div>

                <Quote className="w-8 h-8 text-[#1B365D]/15 mb-2" />

                <p className="text-xs sm:text-sm text-[#1B365D] leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#5C768D]/15 space-y-3">
                <div className="p-2.5 bg-white rounded-lg border border-[#5C768D]/20 text-[11px] font-bold text-[#2E6D22] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.metrics}</span>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-[#1B365D]/20"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#1B365D] font-heading">{t.author}</div>
                    <div className="text-[11px] text-[#5C768D]">{t.role}</div>
                    <div className="text-[11px] text-[#1B365D] font-semibold">{t.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
