export type FrameworkPreview = {
  slug: string;
  tier: string;
  niche: string;
  eyebrow: string;
  headline: string;
  summary: string;
  dashboardTitle: string;
  accent: "cyan" | "emerald" | "violet" | "fuchsia";
  modes: Array<{
    id: string;
    label: string;
    title: string;
    description: string;
    routes: Array<{
      name: string;
      detail: string;
      state: string;
    }>;
  }>;
};

export const frameworkPreviews: FrameworkPreview[] = [
  {
    slug: "flow-automation",
    tier: "Stratum Flow Automation",
    niche: "Biotech Operations",
    eyebrow: "Controlled workflow automation",
    headline: "Operational handoffs move with laboratory-grade precision.",
    summary:
      "A guarded automation layer for regulated work queues, document states, equipment handoffs, and exception-driven team coordination.",
    dashboardTitle: "Biotech Workflow Command",
    accent: "emerald",
    modes: [
      {
        id: "queues",
        label: "Work Queues",
        title: "Controlled Process Sequencing",
        description: "Each operational stage advances only after its required verification state and assigned ownership are present.",
        routes: [
          { name: "Intake qualification", detail: "Scope, custody, and priority validation", state: "Validated" },
          { name: "Protocol assignment", detail: "Approved operating sequence and ownership", state: "Assigned" },
          { name: "Exception routing", detail: "Nonconforming states isolated for review", state: "Monitored" }
        ]
      },
      {
        id: "records",
        label: "Records",
        title: "Secure Document State Engine",
        description: "Version-aware records remain attached to their workflow stage, approval history, and authorized team.",
        routes: [
          { name: "Controlled documents", detail: "Current approved records only", state: "Current" },
          { name: "Review chain", detail: "Role-specific verification sequence", state: "Enforced" },
          { name: "Audit visibility", detail: "Immutable event and ownership context", state: "Available" }
        ]
      }
    ]
  },
  {
    slug: "enterprise-matrix",
    tier: "Stratum Enterprise Matrix",
    niche: "Media Networks",
    eyebrow: "Multi-team capacity orchestration",
    headline: "Campaign operations align across every market and approval layer.",
    summary:
      "An enterprise command matrix for distributed production calendars, campaign intake, approval chains, and cross-market capacity decisions.",
    dashboardTitle: "Media Operations Matrix",
    accent: "violet",
    modes: [
      {
        id: "capacity",
        label: "Capacity",
        title: "Cross-Market Production Routing",
        description: "Requests are matched to market availability, specialist teams, delivery windows, and campaign priority.",
        routes: [
          { name: "Market capacity", detail: "Regional availability and delivery windows", state: "Synchronized" },
          { name: "Production ownership", detail: "Specialist team and accountable lead", state: "Assigned" },
          { name: "Release calendar", detail: "Campaign dependencies and launch sequence", state: "Aligned" }
        ]
      },
      {
        id: "approvals",
        label: "Approvals",
        title: "Multi-Tier Governance Chain",
        description: "Creative, legal, commercial, and executive review states remain visible without collapsing into email threads.",
        routes: [
          { name: "Creative validation", detail: "Brand and channel requirements", state: "In review" },
          { name: "Commercial clearance", detail: "Scope and commitment authority", state: "Guarded" },
          { name: "Launch authorization", detail: "Final production release control", state: "Restricted" }
        ]
      }
    ]
  },
  {
    slug: "platform-suite",
    tier: "Stratum Platform Suite",
    niche: "B2B Portal",
    eyebrow: "Multi-tenant platform infrastructure",
    headline: "Private client environments operate as one sovereign platform.",
    summary:
      "A scalable B2B portal foundation with tenant isolation, role-aware interfaces, protected administration, and production deployment controls.",
    dashboardTitle: "Tenant Infrastructure Console",
    accent: "fuchsia",
    modes: [
      {
        id: "tenants",
        label: "Tenants",
        title: "Isolated Account Architecture",
        description: "Every organization receives a bounded data context, permission model, operational workspace, and administrative surface.",
        routes: [
          { name: "Tenant boundary", detail: "Organization-scoped records and settings", state: "Isolated" },
          { name: "Role authority", detail: "Permission-aware interface and actions", state: "Enforced" },
          { name: "Client workspace", detail: "Dedicated operational command surface", state: "Active" }
        ]
      },
      {
        id: "deployment",
        label: "Deployment",
        title: "Production Release Governance",
        description: "Environment promotion, configuration ownership, and client handoff remain explicit from staging through production.",
        routes: [
          { name: "Environment control", detail: "Private staging and production boundaries", state: "Guarded" },
          { name: "Configuration custody", detail: "Client-owned production credentials", state: "Documented" },
          { name: "Release authorization", detail: "Verified handoff and deployment approval", state: "Controlled" }
        ]
      }
    ]
  }
];

export function getFrameworkPreview(slug: string) {
  return frameworkPreviews.find((framework) => framework.slug === slug);
}
