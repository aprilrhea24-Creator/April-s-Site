export const buildTiers = {
  bookingCore: {
    label: "Stratum Booking Core (From $3,500)",
    checkoutName: "Stratum Booking Core 30% initialization deposit",
    depositCents: 105000
  },
  flowAutomation: {
    label: "Dispatch Autonomous (From $4,500)",
    checkoutName: "Dispatch Autonomous 30% initialization deposit",
    depositCents: 135000
  },
  enterpriseMatrix: {
    label: "Secure Console (From $5,500)",
    checkoutName: "Secure Console 30% initialization deposit",
    depositCents: 165000
  },
  platformSuite: {
    label: "Global Intelligence (From $7,500)",
    checkoutName: "Global Intelligence 30% initialization deposit",
    depositCents: 225000
  }
} as const;

export type BuildTierKey = keyof typeof buildTiers;
