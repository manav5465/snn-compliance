import {
  Building2,
  Factory,
  Globe2,
  Laptop,
  Radio,
  Recycle,
  Scale,
  ShieldCheck,
  SolarPanel,
  TestTube2,
  Truck,
  Zap,
} from 'lucide-react'

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Why Choose Us', to: '/why-us' },
  { label: 'Contact', to: '/contact' },
]

export const serviceGroups = [
  {
    title: 'BIS & Product Certification',
    icon: ShieldCheck,
    services: [
      {
        name: 'BIS CRS Registration',
        items: [
          'Mobile phones',
          'Power banks',
          'Laptops & tablets',
          'LED TVs',
          'Smart wearables',
          'IT & electronic equipment',
        ],
      },
      {
        name: 'ISI Certification',
        items: [
          'Electrical appliances',
          'Industrial & steel products',
          'Cement products',
          'Batteries',
          'Cables & wires',
          'Mandatory QCO products',
        ],
      },
      {
        name: 'FMCS / Foreign Manufacturer ISI',
        items: [
          'Factory inspection coordination',
          'Testing & documentation',
          'Licence grant & renewal',
          'AIR support',
        ],
      },
      {
        name: 'BIS for Solar Products',
        items: ['Solar inverters', 'PV modules', 'Solar components', 'Energy storage products'],
      },
    ],
  },
  {
    title: 'Wireless & Telecom Approvals',
    icon: Radio,
    services: [
      {
        name: 'WPC-ETA Approval',
        items: [
          'Wi-Fi products',
          'Bluetooth devices',
          'RF equipment',
          'IoT devices',
          'Wireless modules',
        ],
      },
      {
        name: 'TEC / MTCTE Certification',
        items: [
          'Telecom equipment',
          'Network switches',
          'Routers & access points',
          'Optical equipment',
        ],
      },
      {
        name: 'TAC / IMEI Registration',
        items: ['Mobile phones', 'Wireless communication devices', 'IMEI database registration'],
      },
    ],
  },
  {
    title: 'Energy & Sustainability',
    icon: Recycle,
    services: [
      {
        name: 'BEE Star Rating',
        items: ['Home appliances', 'Lighting products', 'Solar equipment', 'Industrial equipment'],
      },
      {
        name: 'CPCB EPR Compliance',
        items: [
          'E-waste EPR',
          'Plastic waste EPR',
          'Battery waste EPR',
          'Annual filings',
          'EPR credit management',
        ],
      },
    ],
  },
  {
    title: 'Legal & Trade Compliance',
    icon: Scale,
    services: [
      {
        name: 'Legal Metrology / LMPC',
        items: ['Importer registration', 'Packaged commodity compliance', 'Label review'],
      },
      {
        name: 'DGFT Licences',
        items: [
          'PIMS registration',
          'Restricted import licence',
          'Export authorizations',
          'Import documentation',
        ],
      },
    ],
  },
  {
    title: 'International Certifications',
    icon: Globe2,
    services: [
      {
        name: 'CE Certification',
        items: ['EMC & safety compliance', 'Technical documentation', 'Declaration of Conformity'],
      },
      {
        name: 'UL Certification',
        items: ['North American compliance', 'Product safety certification'],
      },
      { name: 'RoHS & REACH', items: ['Hazardous substances', 'Environmental declarations'] },
      { name: 'CB Scheme', items: ['International safety', 'Multi-country approvals'] },
      {
        name: 'RBA Compliance',
        items: ['Supply chain compliance', 'Social & ethical audits', 'Factory assessments'],
      },
      {
        name: 'FCC Certification',
        items: ['RF testing', 'EMC testing', 'Equipment authorization'],
      },
    ],
  },
  {
    title: 'Industrial & Safety Approvals',
    icon: Factory,
    services: [
      {
        name: 'PESO Certification',
        items: ['Petroleum equipment', 'Gas cylinders & valves', 'Hazardous-area equipment'],
      },
      {
        name: 'Product Testing',
        items: ['NABL testing', 'EMC/EMI testing', 'Safety testing', 'Environmental testing'],
      },
    ],
  },
]

export const industries = [
  {
    name: 'Electronics & IT',
    icon: Laptop,
    text: 'Devices, components, computing and consumer electronics.',
  },
  {
    name: 'Telecom & Wireless',
    icon: Radio,
    text: 'Connected products, network equipment and RF devices.',
  },
  {
    name: 'Renewable Energy',
    icon: SolarPanel,
    text: 'Solar modules, inverters, batteries and energy storage.',
  },
  {
    name: 'Industrial Manufacturing',
    icon: Factory,
    text: 'Machinery, steel, electrical and safety-critical products.',
  },
  {
    name: 'Consumer Goods',
    icon: Building2,
    text: 'Appliances, packaged goods and household products.',
  },
  {
    name: 'Import & Export',
    icon: Truck,
    text: 'Market access, licensing and cross-border trade compliance.',
  },
]

export const benefits = [
  {
    title: 'Single-window support',
    text: 'One dependable partner across registrations, testing and renewals.',
    icon: ShieldCheck,
  },
  {
    title: 'Faster market access',
    text: 'Structured workflows help prevent avoidable delays and rework.',
    icon: Zap,
  },
  {
    title: 'Testing coordination',
    text: 'Clear support from sample planning through compliant reports.',
    icon: TestTube2,
  },
  {
    title: 'Global perspective',
    text: 'Indian and international pathways aligned to your target markets.',
    icon: Globe2,
  },
]
