const now = new Date("2026-06-01T12:00:00.000Z");

export const demoMealPlans = [
  {
    id: "demo-meal-balanced-reset",
    name: "Balanced Weekly Reset",
    description: "Chef-crafted weekly meals for busy professionals.",
    mealsPerWeek: 10,
    calories: 1800,
    dietaryTags: ["high-protein", "gluten-free option"],
    price: 165,
    isSubscription: true,
    deliveryDays: ["Monday", "Thursday"],
    active: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "demo-meal-plant-forward",
    name: "Plant-Forward Signature",
    description: "Seasonal vegetarian dishes with premium produce.",
    mealsPerWeek: 12,
    calories: 1700,
    dietaryTags: ["vegetarian", "vegan-friendly"],
    price: 182,
    isSubscription: true,
    deliveryDays: ["Tuesday", "Friday"],
    active: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "demo-meal-family-drop",
    name: "One-Time Family Prep Drop",
    description: "A one-time stocked fridge with reheatable family meals.",
    mealsPerWeek: 8,
    calories: null,
    dietaryTags: ["family-style"],
    price: 140,
    isSubscription: false,
    deliveryDays: ["Wednesday"],
    active: true,
    createdAt: now,
    updatedAt: now
  }
];

export const demoCateringMenus = [
  {
    id: "demo-catering-boardroom",
    category: "Corporate",
    title: "Boardroom Lunch Service",
    description: "Elegant boxed lunches and buffet trays for business teams.",
    pricePerPerson: 24,
    minimumGuestCount: 15,
    serviceHours: 2,
    active: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "demo-catering-grazing",
    category: "Parties",
    title: "Celebration Grazing Spread",
    description: "Chef-hosted small bites and grazing tables for private events.",
    pricePerPerson: 38,
    minimumGuestCount: 20,
    serviceHours: 4,
    active: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "demo-catering-wedding",
    category: "Weddings",
    title: "Wedding Reception Menu",
    description: "Full-service plated or family-style wedding reception dining.",
    pricePerPerson: 72,
    minimumGuestCount: 40,
    serviceHours: 6,
    active: true,
    createdAt: now,
    updatedAt: now
  }
];

export const demoChefServices = [
  {
    id: "demo-chef-tasting-dinner",
    eventType: "Dinner Party",
    title: "Private Tasting Dinner",
    description: "Multi-course fine dining in your home with tableside presentation.",
    pricingModel: "flat",
    basePrice: 650,
    hourlyRate: null,
    minimumGuests: 2,
    durationHours: 4,
    active: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "demo-chef-table-two",
    eventType: "Romantic Dinner",
    title: "Chef's Table for Two",
    description: "An intimate personal chef experience with curated menu planning.",
    pricingModel: "flat",
    basePrice: 420,
    hourlyRate: null,
    minimumGuests: 2,
    durationHours: 3,
    active: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "demo-chef-cooking-class",
    eventType: "Cooking Class",
    title: "Interactive Cooking Experience",
    description: "Hands-on chef-led cooking lesson for small groups.",
    pricingModel: "hourly",
    basePrice: 250,
    hourlyRate: 110,
    minimumGuests: 4,
    durationHours: 3,
    active: true,
    createdAt: now,
    updatedAt: now
  }
];

export const demoAvailability = [
  {
    id: "demo-availability-1",
    date: new Date("2026-06-15T00:00:00.000Z"),
    startHour: 10,
    endHour: 20,
    isAvailable: true,
    timezone: "America/Los_Angeles",
    bufferHours: 2,
    notes: null,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "demo-availability-2",
    date: new Date("2026-06-16T00:00:00.000Z"),
    startHour: 11,
    endHour: 19,
    isAvailable: true,
    timezone: "America/Los_Angeles",
    bufferHours: 2,
    notes: null,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "demo-availability-3",
    date: new Date("2026-06-18T00:00:00.000Z"),
    startHour: 9,
    endHour: 18,
    isAvailable: true,
    timezone: "America/Los_Angeles",
    bufferHours: 2,
    notes: null,
    createdAt: now,
    updatedAt: now
  }
];
