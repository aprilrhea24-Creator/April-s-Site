export const buildTiers = {
  bookingCore: {
    label: "Stratum Booking Core (From $3,500)",
    checkoutName: "Stratum Booking Core production reservation",
    depositCents: 50000
  },
  flowAutomation: {
    label: "Stratum Flow Automation (From $4,500)",
    checkoutName: "Stratum Flow Automation production reservation",
    depositCents: 75000
  },
  enterpriseMatrix: {
    label: "Stratum Enterprise Matrix (From $5,500)",
    checkoutName: "Stratum Enterprise Matrix production reservation",
    depositCents: 125000
  },
  platformSuite: {
    label: "Stratum Platform Suite (From $7,500)",
    checkoutName: "Stratum Platform Suite production reservation",
    depositCents: 250000
  }
} as const;

export type BuildTierKey = keyof typeof buildTiers;
