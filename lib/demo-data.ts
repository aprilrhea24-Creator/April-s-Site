const now = new Date("2026-06-01T12:00:00.000Z");

export const demoMealPlans = [
  {
    id: "demo-meal-balanced-reset",
    name: "Cajun Comfort Meal Prep",
    description: "Chef Thai weekly prep with Cajun soul food favorites and balanced sides.",
    mealsPerWeek: 10,
    calories: 1800,
    dietaryTags: ["high-protein", "comfort food"],
    price: 165,
    isSubscription: true,
    deliveryDays: ["Monday", "Thursday"],
    active: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "demo-meal-plant-forward",
    name: "Thai-Inspired Prep Box",
    description: "Bold Thai-inspired flavor with vegetables, rice, protein options, and chef sauces.",
    mealsPerWeek: 12,
    calories: 1700,
    dietaryTags: ["thai-inspired", "veggie-forward"],
    price: 182,
    isSubscription: true,
    deliveryDays: ["Tuesday", "Friday"],
    active: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "demo-meal-family-drop",
    name: "Family Soul Food Drop",
    description: "A one-time family-style prep drop with reheatable Chef Thai favorites.",
    mealsPerWeek: 8,
    calories: null,
    dietaryTags: ["family-style", "soul food"],
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
    category: "Catering",
    title: "Cajun Catering Package",
    description: "Event trays, setup support, and bold Cajun flavor for meetings and celebrations.",
    pricePerPerson: 24,
    minimumGuestCount: 15,
    serviceHours: 2,
    active: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "demo-catering-grazing",
    category: "Seafood",
    title: "Seafood Tray Service",
    description: "Seafood alfredo, salmon trays, fried seafood, rice, mac and cheese, and custom notes.",
    pricePerPerson: 38,
    minimumGuestCount: 20,
    serviceHours: 4,
    active: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "demo-catering-wedding",
    category: "Private Event",
    title: "Soul Food Celebration Menu",
    description: "Chicken, lamb, steak, sides, appetizers, and family-style service for larger events.",
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
    title: "Intimate Dinner",
    description: "A private Chef Thai dinner with custom Cajun, soul food, and Thai-inspired courses.",
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
    title: "Chef Thai Table for Two",
    description: "A private chef experience for two with curated menu planning and elevated service.",
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
    title: "Recipe and Flavor Session",
    description: "A hands-on chef-led experience focused on seasonings, sauces, and signature flavor.",
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
