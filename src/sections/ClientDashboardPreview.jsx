import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Activity, 
  Server, 
  AlertTriangle, 
  XCircle, 
  CheckCircle2, 
  Clock, 
  RefreshCw, 
  Lock, 
  BarChart3,
  Download,
  Filter
} from 'lucide-react';
import { clientDashboardMock } from '../data/complianceData';
import StatusBadge from '../components/common/StatusBadge';

export default function ClientDashboardPreview() {
  const [activeRiskFilter, setActiveRiskFilter] = useState('All');
  const [simulatedScore, setSimulatedScore] = useState(clientDashboardMock.overallScore);

  const filteredRisks = clientDashboardMock.activeRisks.filter((risk) => {
    if (activeRiskFilter === 'All') return true;
    return risk.severity === activeRiskFilter;
  });

  return (
    <section id="dashboard-preview-section" className="py-20 bg-white border-y border-[#5C768D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B365D]/10 text-[#1B365D] text-xs font-bold uppercase tracking-wider">
            <Activity className="w-4 h-4 text-[#2E6D22]" />
            Continuous Compliance Platform
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B365D] tracking-tight font-heading">
            Interactive Client Portal Preview
          </h2>
          <p className="text-base text-[#5C768D]">
            Experience how enterprise compliance teams monitor live controls, track risk registers, and export audit evidence packages in real time.
          </p>
        </div>

        {/* Portal Interface Card Container */}
        <div className="bg-[#0F2039] rounded-2xl border border-white/15 p-6 sm:p-8 shadow-2xl text-white space-y-8">
          
          {/* Top Navbar Header inside portal */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#2E6D22]" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading">ApexPay Global Enterprise Workspace</h3>
                <p className="text-xs text-slate-400">Environment: Multi-Cloud Production (AWS, GCP, GitHub)</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <StatusBadge status="success" label="Audit Status: Ready" />
              <button 
                onClick={() => setSimulatedScore(98)}
                className="px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs font-semibold hover:bg-white/20 transition-colors flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#2E6D22]" />
                Run Control Sync
              </button>
            </div>
          </div>

          {/* Overview Metrics Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Score Card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 relative overflow-hidden">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Compliance Posture</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white font-heading">{simulatedScore}%</span>
                <span className="text-xs text-[#2E6D22] font-semibold flex items-center gap-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> +2% this week
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5 mt-3">
                <div className="bg-[#2E6D22] h-full rounded-full transition-all duration-500" style={{ width: `${simulatedScore}%` }} />
              </div>
            </div>

            {/* Monitored Controls */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Monitored Controls</div>
              <div className="text-3xl font-extrabold text-white font-heading">
                {clientDashboardMock.passingControls} / {clientDashboardMock.monitoredControls}
              </div>
              <div className="text-xs text-slate-400 mt-2">173 Passing • 8 Warning • 3 Gaps</div>
            </div>

            {/* Audit Countdown */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Target Audit Date</div>
              <div className="text-xl font-bold text-white font-heading mt-1">
                {clientDashboardMock.nextAuditDate}
              </div>
              <div className="text-xs text-[#2E6D22] font-semibold mt-2 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> CPA Firm Assigned
              </div>
            </div>

            {/* Active Risks Count */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Open Remediation Tasks</div>
              <div className="text-3xl font-extrabold text-white font-heading">
                {clientDashboardMock.activeRisks.length} Tasks
              </div>
              <div className="text-xs text-slate-400 mt-2">1 Critical • 1 Medium • 1 Low</div>
            </div>
          </div>

          {/* Cloud Infrastructure Telemetry & Risk Register Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Active Risk Register */}
            <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#C67D0A]" />
                  <h4 className="text-sm font-bold font-heading uppercase tracking-wider text-slate-200">
                    Active Risk Register & Remediation
                  </h4>
                </div>

                {/* Filter buttons */}
                <div className="flex items-center gap-1">
                  {['All', 'Critical', 'Medium'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveRiskFilter(filter)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors ${
                        activeRiskFilter === filter
                          ? 'bg-white text-[#1B365D]'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Risk Items List */}
              <div className="space-y-2.5">
                {filteredRisks.map((risk) => (
                  <div key={risk.id} className="p-3.5 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between gap-3 text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-slate-400">{risk.id}</span>
                        <span className="font-semibold text-white">{risk.title}</span>
                      </div>
                      <div className="text-[11px] text-slate-400">Framework: {risk.framework}</div>
                    </div>
                    <StatusBadge status={risk.severityType} label={risk.severity} size="sm" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Live Evidence Telemetry Stream */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#2E6D22]" />
                  <h4 className="text-sm font-bold font-heading uppercase tracking-wider text-slate-200">
                    Automated Evidence Telemetry
                  </h4>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                {clientDashboardMock.evidenceStream.map((item, idx) => (
                  <div key={idx} className="p-3 bg-white/5 border border-white/10 rounded-lg space-y-1">
                    <div className="flex justify-between text-slate-400 text-[11px]">
                      <span>{item.time}</span>
                      <span className="text-[#2E6D22] font-semibold">{item.status}</span>
                    </div>
                    <div className="text-slate-200 font-medium">{item.event}</div>
                    <div className="text-[10px] text-slate-400">Mapped: {item.framework}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
