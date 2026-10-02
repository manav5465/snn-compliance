import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, ChevronRight, Lock, CheckCircle2 } from 'lucide-react';
import BookAuditModal from '../common/BookAuditModal';
import StatusBadge from '../common/StatusBadge';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Regulatory Frameworks', path: '/frameworks' },
    { label: 'Client Portal', path: '/portal' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About Us', path: '/about' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1B365D]/95 backdrop-blur-md shadow-lg border-b border-[#5C768D]/20 py-3'
            : 'bg-[#1B365D] border-b border-[#5C768D]/20 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-1">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6 text-[#1B365D]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-extrabold tracking-tight text-white font-heading">
                    SNN <span className="text-[#8DA4B8] font-normal">COMPLIANCE</span>
                  </span>
                </div>
                <p className="text-[10px] text-[#8DA4B8] font-medium tracking-wider uppercase">
                  Enterprise Rigor & Governance
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive('/') && location.pathname === '/'
                    ? 'text-white bg-white/15 font-semibold'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                Home
              </Link>

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'text-white bg-white/15 font-semibold'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/portal"
                className="px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-1.5 border border-white/20 rounded-xl hover:bg-white/10 transition-all"
              >
                <Lock className="w-3.5 h-3.5 text-[#2E6D22] bg-white rounded-full p-0.5" />
                <span>Portal Login</span>
              </Link>

              <button
                onClick={() => setIsAuditModalOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-[#2E6D22] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#23541A] shadow-md transition-all flex items-center gap-2 focus:ring-2 focus:ring-offset-2 focus:ring-[#2E6D22]"
              >
                <CheckCircle2 className="w-4 h-4" />
                Book an Audit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsAuditModalOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-[#2E6D22] text-white text-xs font-bold hover:bg-[#23541A] transition-all"
              >
                Book Audit
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0F2039] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 mt-3 animate-fadeIn">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-white hover:bg-white/10"
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
                to="/portal"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl border border-white/20 text-white font-semibold text-sm"
              >
                Client Portal Login
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAuditModalOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-[#2E6D22] text-white font-bold text-sm tracking-wider uppercase text-center flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                Book an Audit
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Audit Modal */}
      <BookAuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </>
  );
}
