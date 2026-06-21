export type FrameworkPreview = {
  slug: string;
  packageSlug: string;
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
    slug: "booking-core",
    packageSlug: "premium-restaurant",
    tier: "Stratum Booking Core",
    niche: "Hospitality Allocation",
    eyebrow: "Reservation and service orchestration",
    headline: "Every reservation becomes an orchestrated service event.",
    summary:
      "A hospitality allocation workspace for service windows, guest intelligence, protected payment gates, and live capacity decisions.",
    dashboardTitle: "Hospitality Allocation Workspace",
    accent: "cyan",
    modes: [
      {
        id: "allocation",
        label: "Allocation Grid",
        title: "Interactive Gantt Scheduler Grid",
        description: "Service windows, party demand, table inventory, and team readiness resolve inside one live allocation surface.",
        routes: [
          { name: "Service window routing", detail: "Capacity, duration, and arrival sequencing", state: "Routed" },
          { name: "VIP experience preparation", detail: "Guest history, preferences, and occasion context", state: "Prepared" },
          { name: "Protected payment gate", detail: "30% initialization and reservation controls", state: "Protected" }
        ]
      },
      {
        id: "concierge",
        label: "Concierge Mode",
        title: "Guest Intelligence Command",
        description: "High-value guest context remains attached to every booking stage without exposing private notes outside authorized roles.",
        routes: [
          { name: "Preference intelligence", detail: "Dietary, seating, and service history", state: "Available" },
          { name: "Arrival coordination", detail: "Host, kitchen, and service team handoff", state: "Synchronized" },
          { name: "Exception response", detail: "Late arrivals and capacity conflicts", state: "Monitored" }
        ]
      }
    ]
  },
  {
    slug: "flow-automation",
    packageSlug: "field-team-command",
    tier: "Dispatch Autonomous",
    niche: "Fleet Operations",
    eyebrow: "Real-time logistics geometry",
    headline: "Every moving asset follows the strongest available route.",
    summary:
      "A dispatch command layer for route optimization, live fleet telemetry, delivery exceptions, and field-team coordination.",
    dashboardTitle: "Fleet Geometry Console",
    accent: "emerald",
    modes: [
      {
        id: "dispatch",
        label: "Dispatch Map",
        title: "Real-Time Route Optimization",
        description: "Active jobs are sequenced against location, capacity, urgency, traffic state, and accountable field ownership.",
        routes: [
          { name: "Route geometry", detail: "Travel window, distance, and stop sequence", state: "Optimized" },
          { name: "Fleet assignment", detail: "Asset capacity and operator availability", state: "Assigned" },
          { name: "Exception routing", detail: "Delay, access, and delivery conflicts", state: "Monitored" }
        ]
      },
      {
        id: "telemetry",
        label: "Fleet Telemetry",
        title: "Live Asset Tracking",
        description: "Location, job state, completion evidence, and client-facing updates remain synchronized across the dispatch cycle.",
        routes: [
          { name: "Position stream", detail: "Current location and route progress", state: "Live" },
          { name: "Completion evidence", detail: "Timestamped notes and secure files", state: "Captured" },
          { name: "Client visibility", detail: "Approved delivery status updates", state: "Published" }
        ]
      }
    ]
  },
  {
    slug: "enterprise-matrix",
    packageSlug: "enterprise-booking",
    tier: "Secure Console",
    niche: "Administrative Security",
    eyebrow: "Role-based command authority",
    headline: "Every privileged action is bounded, verified, and auditable.",
    summary:
      "An administrative command center for role-based access control, protected records, approval authority, and cryptographic audit history.",
    dashboardTitle: "RBAC Permissions Gate",
    accent: "violet",
    modes: [
      {
        id: "permissions",
        label: "Permissions",
        title: "Role-Based Access Control",
        description: "Every interface, record, and command resolves against explicit organizational roles and least-privilege authority.",
        routes: [
          { name: "Command override", detail: "Executive authority and escalation boundary", state: "Restricted" },
          { name: "Permissions gate", detail: "Role, team, and record-level access", state: "Enforced" },
          { name: "Session custody", detail: "Authentication and privileged session state", state: "Verified" }
        ]
      },
      {
        id: "audit",
        label: "Audit Vault",
        title: "Cryptographic Audit Vault",
        description: "Sensitive administrative actions retain immutable actor, timestamp, approval, and affected-record context.",
        routes: [
          { name: "Action ledger", detail: "Privileged command and actor history", state: "Sealed" },
          { name: "Approval chain", detail: "Required authorization sequence", state: "Guarded" },
          { name: "Vault export", detail: "Controlled compliance evidence package", state: "Available" }
        ]
      }
    ]
  },
  {
    slug: "platform-suite",
    packageSlug: "founder-saas",
    tier: "Global Intelligence",
    niche: "Predictive Operations",
    eyebrow: "Demand and yield intelligence",
    headline: "Future demand becomes a visible operational advantage.",
    summary:
      "A predictive analysis layer for demand curves, capacity scenarios, pricing signals, and dynamic yield adjustment.",
    dashboardTitle: "Predictive Analysis Deck",
    accent: "fuchsia",
    modes: [
      {
        id: "forecast",
        label: "Forecast",
        title: "Predictive Demand Modeling",
        description: "Historical velocity, current pipeline, seasonality, and capacity signals converge into an actionable demand curve.",
        routes: [
          { name: "Demand curve", detail: "Forward volume and conversion probability", state: "Modeled" },
          { name: "Capacity pressure", detail: "Resource constraint and saturation risk", state: "Measured" },
          { name: "Revenue scenario", detail: "Projected yield by operating decision", state: "Available" }
        ]
      },
      {
        id: "yield",
        label: "Yield Adjuster",
        title: "Dynamic Yield Optimization",
        description: "Decision controls expose how pricing, allocation, timing, and offer structure influence projected return.",
        routes: [
          { name: "Price sensitivity", detail: "Demand response across rate scenarios", state: "Calculated" },
          { name: "Allocation mix", detail: "Capacity distribution by opportunity class", state: "Balanced" },
          { name: "Yield target", detail: "Recommended operating threshold", state: "Optimized" }
        ]
      }
    ]
  }
];

export function getFrameworkPreview(slug: string) {
  return frameworkPreviews.find((framework) => framework.slug === slug);
}
