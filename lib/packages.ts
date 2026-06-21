import type { BuildTierKey } from "@/lib/build-tiers";

export type PackageDetail = {
  slug: string;
  consultationPackage: string;
  consultationTier: BuildTierKey;
  title: string;
  industry: string;
  summary: string;
  features: string[];
  industryFit: string;
  accent: string;
  popular?: boolean;
  price: {
    startingAt: string;
    reservation: string;
    depositDescription: string;
    note: string;
  };
  scope: Array<{
    title: string;
    description: string;
  }>;
  timeline: Array<{
    phase: string;
    window: string;
    description: string;
  }>;
};

export const packages: PackageDetail[] = [
  {
    slug: "premium-restaurant",
    consultationPackage: "hospitality",
    consultationTier: "bookingCore",
    title: "Stratum Booking Core",
    industry: "Hospitality",
    summary:
      "A precision booking foundation that turns complex availability, client details, and protected payments into one polished operating flow.",
    features: [
      "Smart Allocation / Scheduling",
      "Client Intelligence Records",
      "Operational Analytics",
      "Secure Escrow / Payment Gates"
    ],
    industryFit:
      "Target Industries: Luxury Hospitality, Medical & Wellness Clinics, Premium Salons, Boutique Hotels, Elite Event Spaces.",
    accent: "from-cyan-300/30 to-violet-500/10",
    popular: true,
    price: {
      startingAt: "$3,500",
      reservation: "$1,050",
      depositDescription: "30% Initialization Deposit ($1,050 upfront commitment to secure pipeline placement).",
      note: "Final scope is confirmed after discovery. Third-party platform and payment-processing fees are billed separately."
    },
    scope: [
      {
        title: "Guest-facing booking flow",
        description:
          "A branded reservation experience with party-size rules, service windows, confirmations, cancellation guidance, and a clearly disclosed 30% initialization deposit."
      },
      {
        title: "Secure escrow initialization",
        description: "30% Initialization Deposit ($1,050 upfront commitment to secure pipeline placement)."
      },
      {
        title: "VIP guest profiles",
        description:
          "Centralized preference, visit-history, occasion, and service-note records so teams can deliver more personal hospitality."
      },
      {
        title: "Operations dashboard",
        description:
          "A focused command view for upcoming covers, booking status, capacity signals, deposits, and high-priority guest notes."
      },
      {
        title: "Automation layer",
        description:
          "Confirmation, reminder, exception, and internal handoff triggers designed around the restaurant's real service rhythm."
      },
      {
        title: "Admin controls",
        description:
          "Private tools for updating availability, blackout periods, booking policies, service windows, and operational messaging."
      },
      {
        title: "Launch support",
        description:
          "Production deployment, workflow testing, team handoff, and a focused stabilization window after launch."
      }
    ],
    timeline: [
      {
        phase: "Discovery and workflow map",
        window: "Week 1",
        description: "Document reservation rules, service constraints, guest journeys, and success metrics."
      },
      {
        phase: "Experience prototype",
        window: "Week 2",
        description: "Review the booking flow, dashboard hierarchy, visual system, and core data model."
      },
      {
        phase: "Application build",
        window: "Weeks 3-5",
        description: "Implement guest, operations, administrative, and automation workflows."
      },
      {
        phase: "QA and launch",
        window: "Week 6",
        description: "Test booking scenarios, permissions, payment paths, responsive layouts, and production deployment."
      }
    ]
  },
  {
    slug: "enterprise-booking",
    consultationPackage: "professional-services",
    consultationTier: "enterpriseMatrix",
    title: "Secure Console",
    industry: "Professional Services",
    summary:
      "A coordinated enterprise layer for routing demand, aligning teams, governing approvals, and forecasting operational growth.",
    features: [
      "Multi-Location Capacity Routing",
      "Cross-Team Sync Calendars",
      "Multi-Tier Approval Chains",
      "Automated Revenue Forecasting"
    ],
    industryFit:
      "Target Industries: Multi-Location Professional Firms, Logistics Systems, Enterprise Agency Workforces, Commercial Providers.",
    accent: "from-fuchsia-300/30 to-violet-500/10",
    price: {
      startingAt: "$5,500",
      reservation: "$1,650",
      depositDescription: "30% mandatory down payment to activate development cycle.",
      note: "Pricing scales with team roles, approval depth, integrations, and reporting requirements."
    },
    scope: [
      { title: "Qualified intake", description: "Custom forms route each request by service, urgency, geography, and capacity." },
      { title: "Approval controls", description: "Internal review stages keep commitments and scope visible before scheduling." },
      { title: "Forecasting", description: "Pipeline and capacity views support clearer staffing and revenue decisions." }
    ],
    timeline: [
      { phase: "Process mapping", window: "Week 1", description: "Define service rules, roles, and approval paths." },
      { phase: "Build and integration", window: "Weeks 2-5", description: "Implement intake, scheduling, and reporting." },
      { phase: "Launch", window: "Week 6", description: "Validate permissions, train the team, and deploy." }
    ]
  },
  {
    slug: "field-team-command",
    consultationPackage: "operations",
    consultationTier: "flowAutomation",
    title: "Dispatch Autonomous",
    industry: "Operations",
    summary:
      "An automation command layer that keeps mobile operations, client records, active work, and protected files moving together.",
    features: [
      "Automated Work Queues",
      "Custom CRM Sync Engine",
      "Live Dispatch Dashboards",
      "Secure Document Drop-Zones"
    ],
    industryFit:
      "Target Industries: Premium Catering Operations, Field Engineering Teams, Private Fleets, White-Glove Delivery Logistics.",
    accent: "from-teal-300/30 to-emerald-500/10",
    price: {
      startingAt: "$4,500",
      reservation: "$1,350",
      depositDescription: "30% mandatory down payment to activate development cycle.",
      note: "Hardware, mapping, and third-party field-service integrations are scoped separately."
    },
    scope: [
      { title: "Dispatch workspace", description: "Coordinate assignments, timing, ownership, and job status from one view." },
      { title: "Field updates", description: "Capture progress, notes, exceptions, and completion evidence from mobile devices." },
      { title: "Client visibility", description: "Deliver timely status updates without exposing internal operational detail." }
    ],
    timeline: [
      { phase: "Workflow audit", window: "Week 1", description: "Map dispatch, field, and client communication loops." },
      { phase: "System build", window: "Weeks 2-5", description: "Implement operational views and mobile workflows." },
      { phase: "Rollout", window: "Week 6", description: "Pilot with the team, resolve exceptions, and launch." }
    ]
  },
  {
    slug: "founder-saas",
    consultationPackage: "b2b-saas",
    consultationTier: "platformSuite",
    title: "Global Intelligence",
    industry: "B2B SaaS",
    summary:
      "A scalable digital product foundation for organizations launching private portals, subscription systems, and cloud-backed platforms.",
    features: [
      "Multi-Tenant Database Layers",
      "Custom Analytics Graphs",
      "Client Portal Interfaces",
      "Scalable Cloud Server Deployment"
    ],
    industryFit:
      "Target Industries: Tech Startups, Custom Client Portals, Subscription Membership Networks, B2B Management Softwares.",
    accent: "from-indigo-300/30 to-pink-500/10",
    price: {
      startingAt: "$7,500",
      reservation: "$2,250",
      depositDescription: "30% mandatory down payment to activate development cycle.",
      note: "Complex integrations, advanced compliance, and native mobile applications require expanded scope."
    },
    scope: [
      { title: "Product foundation", description: "Authentication, account structure, core workflow, and production-ready data patterns." },
      { title: "Billing journey", description: "Subscription entry points, plan logic, checkout, and customer account paths." },
      { title: "Founder controls", description: "A private console for customer visibility, usage signals, and operational support." }
    ],
    timeline: [
      { phase: "Product definition", window: "Weeks 1-2", description: "Narrow the offer, users, workflow, and release boundary." },
      { phase: "MVP build", window: "Weeks 3-7", description: "Implement the product, billing, and administration layers." },
      { phase: "Launch readiness", window: "Week 8", description: "Complete QA, deployment, analytics, and founder handoff." }
    ]
  }
];

export function getPackage(slug: string) {
  return packages.find((item) => item.slug === slug);
}
