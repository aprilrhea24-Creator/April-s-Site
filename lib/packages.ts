export type PackageDetail = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  features: string[];
  accent: string;
  popular?: boolean;
  price: {
    startingAt: string;
    reservation: string;
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
    title: "Premium Restaurant Package",
    industry: "Hospitality",
    summary:
      "A polished reservation, guest intelligence, and operations system for restaurants that want a premium digital front door.",
    features: ["Reservation logic", "VIP profiles", "Shift dashboards", "Automated deposits"],
    accent: "from-cyan-300/30 to-violet-500/10",
    popular: true,
    price: {
      startingAt: "$7,500",
      reservation: "$1,250",
      note: "Final scope is confirmed after discovery. Third-party platform and payment-processing fees are billed separately."
    },
    scope: [
      {
        title: "Guest-facing booking flow",
        description:
          "A branded reservation experience with party-size rules, service windows, deposits, confirmations, and cancellation guidance."
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
    title: "Enterprise Booking Matrix",
    industry: "Professional Services",
    summary: "Capacity-aware intake, approvals, scheduling, and forecasting for multi-service teams.",
    features: ["Capacity routing", "Custom intake rules", "Approval workflows", "Revenue forecasting"],
    accent: "from-fuchsia-300/30 to-violet-500/10",
    price: {
      startingAt: "$9,500",
      reservation: "$1,250",
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
    title: "Field Team Command Center",
    industry: "Operations",
    summary: "A dispatch and client-update system for teams coordinating work beyond the office.",
    features: ["Dispatch boards", "Asset status", "Client updates", "Exception alerts"],
    accent: "from-teal-300/30 to-emerald-500/10",
    price: {
      startingAt: "$8,500",
      reservation: "$1,250",
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
    title: "Founder SaaS Starter",
    industry: "B2B SaaS",
    summary: "A launch-ready product foundation for founders validating a focused subscription workflow.",
    features: ["Auth flows", "Billing paths", "Admin console", "Usage dashboards"],
    accent: "from-indigo-300/30 to-pink-500/10",
    price: {
      startingAt: "$15,000",
      reservation: "$2,500",
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
