import {
  ShieldCheck,
  Lock,
  FileCheck,
  Building,
  AlertTriangle,
  Award,
  CheckCircle2,
  Clock,
  RefreshCw,
  Server,
  Database,
  Globe,
  Cpu,
  Zap,
  Users,
  Briefcase,
  Layers,
  BarChart3,
  HelpCircle
} from 'lucide-react';

export const companyDetails = {
  name: 'SNN Compliance Solutions',
  tagline: 'Enterprise Governance, Regulatory Rigor & Automated Continuous Compliance',
  email: 'compliance@snncompliance.com',
  phone: '+1 (800) 555-SNN-COMPLY',
  address: '100 Financial Center Blvd, Suite 2400, New York, NY 10005',
  founded: '2018',
  isoCertified: 'ISO 27001:2022 Certified Provider',
  soc2Status: 'SOC 2 Type II Audited & Verified',
};

export const trustMetrics = [
  {
    id: 'audit-rate',
    value: '99.8%',
    label: 'First-Time Audit Pass Rate',
    description: 'Across 500+ enterprise SOC 2 & ISO audits',
    icon: ShieldCheck,
  },
  {
    id: 'enterprises',
    value: '500+',
    label: 'Global Enterprises Secured',
    description: 'Fintech, Healthtech, SaaS & Defense partners',
    icon: Building,
  },
  {
    id: 'monitoring',
    value: '24/7/365',
    label: 'Continuous Automated Monitoring',
    description: 'Real-time telemetry across multi-cloud infrastructure',
    icon: RefreshCw,
  },
  {
    id: 'remediation',
    value: '< 4 Hours',
    label: 'Mean Risk Remediation Time',
    description: 'Rapid automated gap detection and task routing',
    icon: Clock,
  },
];

export const coreServices = [
  {
    id: 'gdpr-privacy',
    title: 'Data Privacy & GDPR / CCPA Compliance',
    shortDesc: 'Comprehensive privacy governance, DPO-as-a-Service, cross-border transfer mechanisms, and automated DPIA workflows.',
    fullDesc: 'End-to-end data privacy framework implementation aligning your enterprise operations with EU GDPR, California CCPA/CPRA, UK DPA, and global privacy mandates. Includes data mapping (RoPA), consent management architecture, and DSAR automation.',
    category: 'Privacy Governance',
    badgeText: 'Regulatory Mandatory',
    status: 'Verified Standard',
    statusType: 'success',
    deliverables: [
      'Record of Processing Activities (RoPA) Mapping',
      'Data Protection Impact Assessments (DPIA)',
      'Automated DSAR Management Portal',
      'Third-Party Data Processing Agreements (DPA)',
      'Annual Privacy Audit & Certification'
    ],
    timeline: '4 - 6 Weeks',
    iconName: 'Lock'
  },
  {
    id: 'soc2-readiness',
    title: 'SOC 2 Type I & Type II Readiness',
    shortDesc: 'Streamlined trust services criteria implementation, continuous evidence collection, and CPA audit facilitation.',
    fullDesc: 'Prepare, implement, and maintain your Security, Availability, Confidentiality, Processing Integrity, and Privacy controls for AICPA SOC 2 audits with zero business disruption.',
    category: 'Audit Readiness',
    badgeText: 'Enterprise Preferred',
    status: 'High Demand',
    statusType: 'success',
    deliverables: [
      'Gap Assessment & Remediation Roadmap',
      'Automated Control Telemetry Integration',
      'Policy & Standard Operating Procedure Library',
      'Mock Audit & CPA Auditor Matching',
      'SOC 2 Type II Continuous Compliance Monitoring'
    ],
    timeline: '6 - 8 Weeks',
    iconName: 'ShieldCheck'
  },
  {
    id: 'iso-27001',
    title: 'ISO 27001:2022 Certification Support',
    shortDesc: 'Complete Information Security Management System (ISMS) buildout, risk assessment matrix, and Annex A controls.',
    fullDesc: 'Establish an internationally recognized ISMS. We guide your organization from initial context analysis and risk treatment through Stage 1 & Stage 2 accreditation audits with certified registrars.',
    category: 'Information Security',
    badgeText: 'Global Benchmark',
    status: 'Full Accreditation',
    statusType: 'success',
    deliverables: [
      'ISMS Scope & Context Definition',
      'Risk Assessment & Statement of Applicability (SoA)',
      '93 Mandatory Annex A Control Implementations',
      'Internal Audit & Management Review Execution',
      'Stage 1 & Stage 2 Registrar Escort'
    ],
    timeline: '8 - 12 Weeks',
    iconName: 'Award'
  },
  {
    id: 'corporate-governance',
    title: 'Corporate Governance & Policy Rigor',
    shortDesc: 'Executive risk oversight, board compliance reporting, ESG frameworks, and internal controls architecture.',
    fullDesc: 'Align your executive leadership, board of directors, and operational teams around robust governance policies, ethics codes, whistleblower mechanisms, and statutory risk disclosures.',
    category: 'Enterprise Risk',
    badgeText: 'Board Level Oversight',
    status: 'Continuous Rigor',
    statusType: 'success',
    deliverables: [
      'Board Governance Charter & Risk Committee Setup',
      'Enterprise Policy Architecture (30+ Master SOPs)',
      'ESG Compliance & Sustainability Disclosures',
      'Whistleblower & Ethics Channel Deployment',
      'Quarterly Executive Risk Dashboards'
    ],
    timeline: '3 - 5 Weeks',
    iconName: 'Building'
  },
  {
    id: 'vendor-risk',
    title: 'Vendor Risk & Third-Party Management (TPRM)',
    shortDesc: 'Automated vendor onboarding assessment, SOC report review, continuous risk monitoring, and contract clause audit.',
    fullDesc: 'Mitigate supply chain security threats and third-party vulnerabilities with automated risk questionnaires, vendor SOC report evaluations, and continuous threat intelligence monitoring.',
    category: 'Supply Chain Risk',
    badgeText: 'Critical Defense',
    status: 'Automated Telemetry',
    statusType: 'success',
    deliverables: [
      'Vendor Tiering & Classification Matrix',
      'Automated SIG / CAIQ Risk Questionnaires',
      'Expert SOC 1 / SOC 2 & ISO Vendor Review',
      'Continuous Vendor Dark Web & Vulnerability Monitoring',
      'Contractual Security SLA Enforcement'
    ],
    timeline: '2 - 4 Weeks',
    iconName: 'Server'
  },
  {
    id: 'ai-governance',
    title: 'AI Governance & EU AI Act Compliance',
    shortDesc: 'Responsible AI frameworks, algorithmic auditability, model risk management, and EU AI Act classification.',
    fullDesc: 'Navigate the rapidly evolving artificial intelligence legal landscape. We perform risk categorization, bias auditing, transparency controls, and technical documentation for generative and predictive AI deployments.',
    category: 'Emerging Tech',
    badgeText: 'Next-Gen Regulatory',
    status: 'Newly Enforced',
    statusType: 'warning',
    deliverables: [
      'AI System Classification (Unacceptable, High, Limited Risk)',
      'Algorithmic Transparency & Bias Assessment',
      'AI Data Governance & Provenance Audits',
      'Technical Documentation for EU AI Act Conformity',
      'Model Lifecycle Risk Oversight Architecture'
    ],
    timeline: '4 - 8 Weeks',
    iconName: 'Cpu'
  }
];

export const regulatoryFrameworks = [
  {
    id: 'soc2',
    name: 'SOC 2 (Type I & II)',
    authority: 'AICPA',
    description: 'Security, Availability, Processing Integrity, Confidentiality, and Privacy controls for cloud and SaaS providers.',
    targetIndustries: ['SaaS', 'Fintech', 'Cloud Infrastructure', 'Enterprise Tech'],
    auditFrequency: 'Annual (Type II Observation Window: 6-12 Months)',
    keyRequirement: 'Trust Services Criteria (TSC 2017)',
    totalControls: 114,
    autoCollectEvidence: '94% Automated',
    badgeColor: 'navy'
  },
  {
    id: 'iso27001',
    name: 'ISO/IEC 27001:2022',
    authority: 'ISO / IEC',
    description: 'The international standard for establishing, operating, maintaining, and improving an ISMS.',
    targetIndustries: ['Global Enterprises', 'Government Contractors', 'Financial Services'],
    auditFrequency: '3-Year Recertification Cycle (Annual Surveillance)',
    keyRequirement: 'Mandatory ISMS Clauses 4-10 + 93 Annex A Controls',
    totalControls: 93,
    autoCollectEvidence: '91% Automated',
    badgeColor: 'navy'
  },
  {
    id: 'gdpr',
    name: 'EU GDPR & UK DPA',
    authority: 'European Data Protection Board (EDPB)',
    description: 'Comprehensive personal data protection regulations governing processing, storage, and user rights.',
    targetIndustries: ['E-Commerce', 'SaaS', 'Healthcare', 'Global Business'],
    auditFrequency: 'Continuous Internal & Supervisory Review',
    keyRequirement: 'Lawful Basis, Data Minimization, 72h Breach Notice',
    totalControls: 99,
    autoCollectEvidence: '88% Automated',
    badgeColor: 'forest'
  },
  {
    id: 'hipaa',
    name: 'HIPAA Security & Privacy Rule',
    authority: 'US HHS OCR',
    description: 'Safeguards for Protected Health Information (PHI) across Administrative, Physical, and Technical domains.',
    targetIndustries: ['Healthtech', 'Hospitals', 'Insurers', 'Business Associates'],
    auditFrequency: 'Annual Self-Assessment & OCR Audit Readiness',
    keyRequirement: 'PHI Encryption, Access Control, Business Associate Agreements (BAA)',
    totalControls: 78,
    autoCollectEvidence: '92% Automated',
    badgeColor: 'amber'
  },
  {
    id: 'pci-dss',
    name: 'PCI-DSS v4.0',
    authority: 'PCI Security Standards Council',
    description: 'Technical and operational requirements for entities accepting or processing payment card transactions.',
    targetIndustries: ['E-Commerce', 'Payment Processors', 'Retailers', 'Fintech'],
    auditFrequency: 'Annual QSA Assessment / SAQ Filing',
    keyRequirement: '12 Core Requirements & Multi-Factor Authentication',
    totalControls: 250,
    autoCollectEvidence: '85% Automated',
    badgeColor: 'navy'
  },
  {
    id: 'nist-csf',
    name: 'NIST CSF 2.0',
    authority: 'US NIST',
    description: 'Framework focusing on Governance, Identification, Protection, Detection, Response, and Recovery.',
    targetIndustries: ['Critical Infrastructure', 'Government', 'Defense', 'Enterprise Security'],
    auditFrequency: 'Continuous Risk Assessment',
    keyRequirement: 'GV (Govern), ID (Identify), PR (Protect), DE (Detect), RS (Respond), RC (Recover)',
    totalControls: 106,
    autoCollectEvidence: '90% Automated',
    badgeColor: 'navy'
  },
  {
    id: 'eu-ai-act',
    name: 'EU AI Act',
    authority: 'European Union',
    description: 'Risk-based regulatory framework for AI systems placed on or used in the EU market.',
    targetIndustries: ['AI Developers', 'Enterprise SaaS', 'Biometrics', 'Automated Decisioning'],
    auditFrequency: 'Pre-market Conformity Assessment & Continuous Post-market Monitoring',
    keyRequirement: 'Risk Management, Data Quality, Transparency, Human Oversight',
    totalControls: 65,
    autoCollectEvidence: '80% Automated',
    badgeColor: 'amber'
  }
];

export const estimatorData = {
  industries: [
    { id: 'fintech', label: 'Fintech & Financial Services', baseWeeks: 6, riskWeight: 1.3, primaryFrameworks: ['SOC 2', 'PCI-DSS', 'ISO 27001'] },
    { id: 'healthtech', label: 'Healthtech & Digital Health', baseWeeks: 5, riskWeight: 1.25, primaryFrameworks: ['HIPAA', 'SOC 2', 'GDPR'] },
    { id: 'saas', label: 'Enterprise SaaS & Cloud Infrastructure', baseWeeks: 4, riskWeight: 1.1, primaryFrameworks: ['SOC 2', 'ISO 27001', 'GDPR'] },
    { id: 'ecommerce', label: 'E-Commerce & Retail', baseWeeks: 4, riskWeight: 1.05, primaryFrameworks: ['PCI-DSS', 'GDPR', 'CCPA'] },
    { id: 'defense', label: 'Government & Defense Technology', baseWeeks: 8, riskWeight: 1.4, primaryFrameworks: ['NIST CSF', 'ISO 27001', 'SOC 2'] },
  ],
  companySizes: [
    { id: 'startup', label: '1 - 25 Employees', multiplier: 1.0, costTier: 'Starter' },
    { id: 'growth', label: '26 - 150 Employees', multiplier: 1.25, costTier: 'Growth' },
    { id: 'scaleup', label: '151 - 500 Employees', multiplier: 1.5, costTier: 'Enterprise' },
    { id: 'enterprise', label: '500+ Employees', multiplier: 2.0, costTier: 'Global Enterprise' },
  ],
  dataHandlingOptions: [
    { id: 'pii', label: 'Customer PII (Names, Emails, Identifiers)', weight: 1.1 },
    { id: 'phi', label: 'Protected Health Information (PHI)', weight: 1.3 },
    { id: 'financial', label: 'Payment Card Details & Financial Records', weight: 1.25 },
    { id: 'ai', label: 'AI Models & Proprietary ML Data', weight: 1.2 },
    { id: 'crossborder', label: 'Cross-Border Multi-Region Data Transfers', weight: 1.15 },
  ],
  securityStates: [
    { id: 'basic', label: 'Basic (SSO, basic cloud firewalls, informal policies)', addedWeeks: 3, gapScore: 45 },
    { id: 'moderate', label: 'Moderate (MFA enforced, written SOPs, quarterly reviews)', addedWeeks: 1.5, gapScore: 75 },
    { id: 'advanced', label: 'Advanced (Automated CI/CD security, SIEM, existing SOC 1/2)', addedWeeks: 0, gapScore: 92 },
  ]
};

export const clientDashboardMock = {
  overallScore: 94,
  status: 'Audit Ready',
  statusType: 'success',
  lastAuditDate: 'September 28, 2026',
  nextAuditDate: 'November 15, 2026',
  monitoredControls: 184,
  passingControls: 173,
  warningControls: 8,
  criticalGaps: 3,
  cloudCoverage: [
    { name: 'AWS Production', status: 'Compliant', score: 98, type: 'success' },
    { name: 'GCP Analytics', status: 'Compliant', score: 95, type: 'success' },
    { name: 'Azure Active Directory', status: 'Review Needed', score: 86, type: 'warning' },
    { name: 'GitHub Enterprise', status: 'Action Required', score: 72, type: 'error' }
  ],
  activeRisks: [
    { id: 'RISK-104', title: 'GitHub Repo MFA Enforcement', severity: 'Critical', severityType: 'error', framework: 'SOC 2 CC6.1', status: 'Pending Remediation', icon: 'XCircle' },
    { id: 'RISK-089', title: 'Vendor DPA Renewal - CloudFlare', severity: 'Medium', severityType: 'warning', framework: 'GDPR Art. 28', status: 'In Review', icon: 'AlertTriangle' },
    { id: 'RISK-076', title: 'Annual Penetration Test Retest', severity: 'Low', severityType: 'success', framework: 'ISO 27001 A.12.6', status: 'Scheduled', icon: 'CheckCircle2' },
  ],
  evidenceStream: [
    { time: '10 mins ago', event: 'Automated Evidence Collected: AWS KMS Encryption Key Rotation', framework: 'SOC 2 CC6.3', status: 'Verified Pass' },
    { time: '42 mins ago', event: 'User Access Review Completed: Production DB Access', framework: 'ISO 27001 A.9.2', status: 'Verified Pass' },
    { time: '2 hours ago', event: 'Automated Telemetry Alert: Unmapped S3 Bucket Detected', framework: 'NIST CSF PR.DS-1', status: 'Flagged for Review' }
  ]
};

export const pricingPlans = [
  {
    id: 'starter',
    name: 'Growth & Readiness',
    target: 'Emerging tech startups preparing for initial SOC 2 or ISO 27001 audit.',
    priceMonthly: '$1,850',
    priceAnnual: '$1,490',
    billingPeriod: 'billed annually',
    popular: false,
    features: [
      '1 Primary Framework (SOC 2 or ISO 27001)',
      'Automated Evidence Telemetry (5 Integrations)',
      'Pre-built SOP & Policy Document Library',
      'Quarterly Virtual DPO / CISO Guidance',
      'Dedicated Compliance Manager Support',
      'Standard Audit Escort Support'
    ],
    ctaText: 'Start Readiness',
    ctaVariant: 'secondary'
  },
  {
    id: 'scale',
    name: 'Enterprise Scaling',
    target: 'Mid-market enterprises with multiple frameworks & multi-cloud tech stack.',
    priceMonthly: '$3,950',
    priceAnnual: '$3,200',
    billingPeriod: 'billed annually',
    popular: true,
    badge: 'Most Preferred',
    features: [
      'Up to 3 Frameworks (SOC 2, ISO 27001, GDPR, HIPAA)',
      'Unlimited Cloud Telemetry & Automated Monitoring',
      'Vendor Risk Management (Up to 50 Vendors)',
      'Continuous Risk Register & SIEM Integration',
      'Bi-weekly Dedicated Lead Consultant Sessions',
      'Guaranteed Audit SLA & Registrar Escort',
      'Custom Board Risk Reporting Package'
    ],
    ctaText: 'Book Enterprise Audit',
    ctaVariant: 'primary'
  },
  {
    id: 'custom',
    name: 'Global Governance Tier',
    target: 'Multinational corporations requiring tailored advisory, AI & ESG governance.',
    priceMonthly: 'Custom',
    priceAnnual: 'Custom Quote',
    billingPeriod: 'tailored contract terms',
    popular: false,
    features: [
      'Unlimited Frameworks (Global Compliance Suite)',
      'EU AI Act & Algorithmic Governance Module',
      'On-Demand Designated Chief Information Security Officer (vCISO)',
      'Third-Party Vendor Audit & Physical Inspection Support',
      'Custom API Telemetry Connectors',
      '24/7 Priority Emergency Incident & Audit Support',
      'Legal Counsel Advisory Synchronization'
    ],
    ctaText: 'Contact Enterprise Advisory',
    ctaVariant: 'secondary'
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "SNN Compliance Solutions transformed our SOC 2 Type II audit from a 9-month nightmare into an effortless 6-week automated process. Their regulatory rigor and technical expertise are unmatched.",
    author: "Elena Rostova",
    role: "Chief Information Security Officer",
    company: "ApexPay Global (Fintech)",
    metrics: "100% Audit Pass | 6-Week Total Readiness",
    verified: true,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    quote: "Navigating EU GDPR and HIPAA simultaneously was daunting for our healthcare SaaS platform. SNN’s team implemented structured controls and automated continuous telemetry seamlessly.",
    author: "Marcus Vance",
    role: "VP of Engineering",
    company: "OmniHealth Cloud",
    metrics: "Zero Non-Conformities | GDPR & HIPAA Compliant",
    verified: true,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    quote: "When expanding into Europe, the EU AI Act requirements threatened our launch timeline. SNN provided precise model governance frameworks and risk documentation within three weeks.",
    author: "Dr. Aris Thorne",
    role: "Founder & Head of AI",
    company: "NeuralMatrix Labs",
    metrics: "EU AI Act Compliant | Fast-Tracked EU Expansion",
    verified: true,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  }
];

export const legalDocs = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'October 1, 2026',
    sections: [
      {
        heading: '1. Lawful Basis & Data Processing Principles',
        content: 'SNN Compliance Solutions ("SNN", "We", "Us") operates under strict adherence to the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and applicable global privacy legislation. Data is processed solely on explicit lawful bases including performance of contract, statutory compliance obligations, and legitimate enterprise interests.'
      },
      {
        heading: '2. Personal Data We Collect',
        content: 'We collect minimal necessary personal information required for provisioning compliance services, including account credentials, professional email addresses, organizational infrastructure metadata, telemetry audit logs, and authorized representative communication records.'
      },
      {
        heading: '3. Data Security & Encryption Standards',
        content: 'All client telemetry, policy documents, and communication streams are encrypted at rest using AES-256 and in transit using TLS 1.3 protocol. Access is strictly governed by zero-trust role-based access controls (RBAC) and multi-factor authentication (MFA).'
      },
      {
        heading: '4. User Rights & Data Subject Access Requests (DSAR)',
        content: 'You retain full statutory rights to request access to, rectification of, erasure of, or restriction of processing for your personal data. To submit a DSAR, email dpo@snncompliance.com. Requests are acknowledged within 24 hours and fulfilled within 30 statutory days.'
      },
      {
        heading: '5. Retention & Disposal Policies',
        content: 'Client data is retained only for the active duration of the compliance engagement plus statutory recordkeeping periods (typically 7 years for financial and audit logs). Disposed data undergoes NIST SP 800-88 compliant cryptographic wiping.'
      }
    ]
  },
  terms: {
    title: 'Terms of Service',
    lastUpdated: 'October 1, 2026',
    sections: [
      {
        heading: '1. Enterprise Platform Usage & Scope',
        content: 'These Terms of Service govern your access to and use of SNN Compliance Solutions platform services, continuous compliance tools, automated telemetry collectors, and advisory services. By accessing the platform, your organization agrees to bound by these terms.'
      },
      {
        heading: '2. Limitation of Liability & Warranties',
        content: 'SNN Compliance Solutions provides software tools and governance guidance designed to assist organizations in achieving regulatory readiness. While our audit pass rate is 99.8%, formal accreditation is ultimately issued by accredited third-party auditing bodies (CPAs, Registrars). SNN shall not be liable for indirect, incidental, or consequential damages.'
      },
      {
        heading: '3. Account Security & User Responsibilities',
        content: 'Organizations are responsible for maintaining the confidentiality of administrative credentials and ensuring that integration tokens and API keys are stored securely.'
      },
      {
        heading: '4. Intellectual Property Rights',
        content: 'All platform code, telemetry engines, compliance templates, and training materials remain the sole property of SNN Compliance Solutions. Generated compliance policy outputs and evidence packages remain the exclusive property of the client.'
      }
    ]
  },
  cookie: {
    title: 'Cookie & Tracking Policy',
    lastUpdated: 'October 1, 2026',
    sections: [
      {
        heading: '1. Overview of Cookie Usage',
        content: 'SNN Compliance Solutions utilizes essential operational cookies and optional analytical telemetries to deliver secure navigation, maintain session state, and evaluate platform usage efficiency.'
      },
      {
        heading: '2. Essential vs. Non-Essential Cookies',
        content: 'Essential cookies are strictly required for authentication, CSRF protection, and load balancing. Non-essential analytical cookies help us understand feature utilization and enhance UI ergonomics.'
      }
    ]
  },
  disclaimer: {
    title: 'Legal Disclaimer',
    lastUpdated: 'October 1, 2026',
    sections: [
      {
        heading: 'Regulatory Guidance & Legal Counsel Clarification',
        content: 'SNN Compliance Solutions provides compliance software, risk management frameworks, and regulatory readiness advisory services. SNN Compliance Solutions is NOT a licensed law firm and does NOT provide formal legal advice or statutory legal representation.'
      },
      {
        heading: 'Independent Third-Party Auditing',
        content: 'Final SOC 2 reports, ISO 27001 accredited certificates, and official regulatory filings are rendered by independent third-party licensed CPAs, accredited ISO Registrars, or qualified QSAs. SNN provides full preparation, evidence collection, and audit facilitation support.'
      }
    ]
  }
};
