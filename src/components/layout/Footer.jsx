import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, CheckCircle2, Lock, FileText, ArrowRight } from 'lucide-react';
import { companyDetails } from '../../data/complianceData';
import StatusBadge from '../common/StatusBadge';

export default function Footer({ onOpenLegalModal }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#0F2039] text-white border-t border-[#5C768D]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#5C768D]/20">
          {/* Column 1: Brand & Credibility */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md">
                <Shield className="w-6 h-6 text-[#1B365D]" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white font-heading">
                  SNN <span className="text-[#8DA4B8] font-normal">COMPLIANCE</span>
                </span>
                <p className="text-[10px] text-[#8DA4B8] font-medium tracking-wider uppercase">
                  Enterprise Rigor & Governance
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              SNN Compliance Solutions empowers global enterprises with automated continuous compliance, multi-cloud risk telemetry, SOC 2, ISO 27001, and regulatory governance.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <StatusBadge status="success" label="ISO 27001 Certified" size="sm" />
              <StatusBadge status="success" label="SOC 2 Type II Verified" size="sm" />
            </div>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8DA4B8] shrink-0" />
                <span>{companyDetails.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8DA4B8] shrink-0" />
                <span>{companyDetails.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8DA4B8] shrink-0" />
                <span>{companyDetails.phone}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading mb-4 pb-1 border-b border-white/10">
              Core Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#2E6D22]" /> SOC 2 Type I & II Readiness
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#2E6D22]" /> ISO 27001 Certification
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#2E6D22]" /> Data Privacy (GDPR/CCPA)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#2E6D22]" /> Corporate Governance & ESG
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#2E6D22]" /> Vendor Risk (TPRM)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#2E6D22]" /> EU AI Act Governance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Regulatory Frameworks */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading mb-4 pb-1 border-b border-white/10">
              Frameworks
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><Link to="/frameworks" className="hover:text-white transition-colors">SOC 2 Trust Services</Link></li>
              <li><Link to="/frameworks" className="hover:text-white transition-colors">ISO/IEC 27001:2022</Link></li>
              <li><Link to="/frameworks" className="hover:text-white transition-colors">EU GDPR & UK DPA</Link></li>
              <li><Link to="/frameworks" className="hover:text-white transition-colors">HIPAA Security Rule</Link></li>
              <li><Link to="/frameworks" className="hover:text-white transition-colors">PCI-DSS v4.0</Link></li>
              <li><Link to="/frameworks" className="hover:text-white transition-colors">NIST CSF 2.0</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Regulatory Updates */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading mb-4 pb-1 border-b border-white/10">
              Regulatory Alerts
            </h4>
            <p className="text-xs text-slate-300 mb-3">
              Subscribe to executive compliance bulletins, EU AI Act updates, and audit readiness advisories.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#2E6D22]/20 border border-[#2E6D22]/40 rounded-xl text-xs text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E6D22]" />
                <span>Subscribed! Check your inbox for updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="executive@company.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-[#2E6D22] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#23541A] transition-colors"
                >
                  Subscribe to Bulletins
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Legal Pages & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© 2026 SNN Compliance Solutions. All Rights Reserved. Enterprise Compliance & Governance Platform.</p>
          </div>

          {/* Required Legal Links */}
          <div className="flex flex-wrap items-center gap-4 font-medium">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-600">•</span>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link to="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
