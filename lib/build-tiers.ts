export const buildTiers = {
  foundation: {
    label: "$3K-$7.5K foundation",
    checkoutName: "Foundation build reservation",
    depositCents: 50000
  },
  advanced: {
    label: "$7.5K-$15K advanced system",
    checkoutName: "Advanced system reservation",
    depositCents: 125000
  },
  privateSaas: {
    label: "$15K+ private SaaS build",
    checkoutName: "Private SaaS build reservation",
    depositCents: 250000
  }
} as const;

export type BuildTierKey = keyof typeof buildTiers;
