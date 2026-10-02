import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  Award, 
  Building, 
  Server, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Clock, 
  FileText 
} from 'lucide-react';
import { coreServices } from '../data/complianceData';
import StatusBadge from '../components/common/StatusBadge';
import BookAuditModal from '../components/common/BookAuditModal';

const iconMap = {
  Lock: Lock,
  ShieldCheck: ShieldCheck,
  Award: Award,
  Building: Building,
  Server: Server,
  Cpu: Cpu
};

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState(null);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <section id="services-section" className="py-20 bg-[#F4F6F9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B365D]/10 text-[#1B365D] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#2E6D22]" />
            Enterprise Compliance Catalog
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B365D] tracking-tight font-heading">
            Core Regulatory & Governance Services
          </h2>
          <p className="text-base text-[#5C768D] leading-relaxed">
            From initial readiness gap assessments to continuous evidence collection and auditor matching, our solutions are engineered for zero-friction accreditation.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || ShieldCheck;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-[#5C768D]/20 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3 rounded-xl bg-[#1B365D]/5 text-[#1B365D] group-hover:bg-[#1B365D] group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <StatusBadge status={service.statusType} label={service.status} size="sm" />
                  </div>

                  {/* Title & Category */}
                  <div className="text-xs font-semibold text-[#5C768D] uppercase tracking-wider mb-1">
                    {service.category}
                  </div>
                  <h3 className="text-xl font-bold text-[#1B365D] font-heading group-hover:text-[#284B7C] transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#5C768D] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-2 mb-6 border-t border-[#5C768D]/15 pt-4">
                    <div className="text-xs font-bold text-[#1B365D] uppercase tracking-wider">Key Deliverables</div>
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#1B365D]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6D22] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-[#5C768D]/15 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#5C768D] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {service.timeline}
                  </span>
                  
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1B365D] hover:text-[#284B7C] transition-colors group-hover:translate-x-1"
                  >
                    <span>Inspect Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F2039]/70 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#5C768D]/20 overflow-hidden my-8"
            >
              <div className="bg-[#1B365D] text-white p-6 flex items-center justify-between">
                <div>
                  <StatusBadge status={selectedService.statusType} label={selectedService.status} size="sm" />
                  <h3 className="text-2xl font-bold font-heading mt-2">{selectedService.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-[#5C768D] uppercase tracking-wider mb-2">Scope & Overview</h4>
                  <p className="text-sm text-[#1B365D] leading-relaxed">{selectedService.fullDesc}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#5C768D] uppercase tracking-wider mb-3">All Key Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.deliverables.map((item, idx) => (
                      <div key={idx} className="p-3 bg-[#F4F6F9] rounded-xl border border-[#5C768D]/20 flex items-start gap-2.5 text-xs text-[#1B365D] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#2E6D22] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[#1B365D]/5 rounded-xl border border-[#1B365D]/15 flex items-center justify-between text-xs text-[#1B365D]">
                  <div>
                    <strong>Target Engagement Duration:</strong> {selectedService.timeline}
                  </div>
                  <div className="font-semibold text-[#2E6D22]">
                    Includes Auditor Match Guarantee
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-2.5 rounded-xl border border-[#5C768D]/30 text-xs font-semibold text-[#5C768D] hover:bg-[#F4F6F9]"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      setIsAuditModalOpen(true);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#2E6D22] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#23541A]"
                  >
                    Schedule Audit for this Service
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <BookAuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </section>
  );
}
