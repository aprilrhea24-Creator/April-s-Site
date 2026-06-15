import {
  demoAvailability,
  demoCateringMenus,
  demoChefServices,
  demoMealPlans
} from "@/lib/demo-data";
import { isDatabaseConfigured } from "@/lib/env";
import { cateringMenuDefaults, type CateringMenuSection } from "@/lib/catering-menu-defaults";
import { prisma } from "@/lib/prisma";

export async function getActiveMealPlans() {
  if (!isDatabaseConfigured()) {
    return demoMealPlans;
  }

  return prisma.mealPlan.findMany({ where: { active: true }, orderBy: { price: "asc" } });
}

export async function getActiveCateringMenus() {
  if (!isDatabaseConfigured()) {
    return demoCateringMenus;
  }

  return prisma.cateringMenu.findMany({ where: { active: true }, orderBy: { pricePerPerson: "asc" } });
}

const cateringCategoryOrder = new Map(
  cateringMenuDefaults.map((section, index) => [section.title.toLowerCase(), index])
);
const editableCateringCategories = cateringMenuDefaults.map((section) => section.title);

export async function getPublicCateringMenuSections(): Promise<CateringMenuSection[]> {
  if (!isDatabaseConfigured()) {
    return cateringMenuDefaults;
  }

  const menus = await prisma.cateringMenu.findMany({
    where: { active: true, category: { in: editableCateringCategories } },
    orderBy: [{ category: "asc" }, { createdAt: "asc" }]
  });

  if (menus.length === 0) {
    return cateringMenuDefaults;
  }

  const grouped = new Map<string, CateringMenuSection>();

  for (const menu of menus) {
    const existing = grouped.get(menu.category);

    if (existing) {
      existing.items.push({
        title: menu.title,
        description: menu.description,
        luxury: menu.pricePerPerson ? Number(menu.pricePerPerson) >= 80 : false
      });
      continue;
    }

    grouped.set(menu.category, {
      title: menu.category,
      note: Number(menu.pricePerPerson) > 0 ? `$${Number(menu.pricePerPerson).toFixed(2)} per person | Minimum ${menu.minimumGuestCount} people` : undefined,
      items: [
        {
          title: menu.title,
          description: menu.description,
          luxury: menu.pricePerPerson ? Number(menu.pricePerPerson) >= 80 : false
        }
      ]
    });
  }

  return Array.from(grouped.values()).sort((a, b) => {
    const aOrder = cateringCategoryOrder.get(a.title.toLowerCase()) ?? 999;
    const bOrder = cateringCategoryOrder.get(b.title.toLowerCase()) ?? 999;
    return aOrder - bOrder || a.title.localeCompare(b.title);
  });
}

export async function getActiveChefServices() {
  if (!isDatabaseConfigured()) {
    return demoChefServices;
  }

  return prisma.chefService.findMany({ where: { active: true }, orderBy: { basePrice: "asc" } });
}

export async function getUpcomingAvailability() {
  if (!isDatabaseConfigured()) {
    return demoAvailability;
  }

  return prisma.availability.findMany({
    where: { isAvailable: true },
    orderBy: [{ date: "asc" }, { startHour: "asc" }],
    take: 7
  });
}

export async function getLandingData() {
  const [mealPlans, cateringMenus, chefServices, availability] = await Promise.all([
    getActiveMealPlans(),
    getActiveCateringMenus(),
    getActiveChefServices(),
    getUpcomingAvailability()
  ]);

  return {
    mealPlans,
    cateringMenus,
    chefServices,
    availability
  };
}

export async function getDashboardData(userId: string) {
  return prisma.user.findUnique({
    where: { id: userId },
    include: {
      bookings: {
        include: {
          mealPlan: true,
          cateringMenu: true,
          chefService: true,
          payments: true
        },
        orderBy: { startAt: "desc" }
      }
    }
  });
}

export async function getAdminData() {
  const [mealPlans, cateringMenus, chefServices, bookings, availability, users] =
    await Promise.all([
      prisma.mealPlan.findMany({ orderBy: { createdAt: "desc" } }),
      prisma.cateringMenu.findMany({ orderBy: { createdAt: "desc" } }),
      prisma.chefService.findMany({ orderBy: { createdAt: "desc" } }),
      prisma.booking.findMany({
        include: {
          user: true,
          mealPlan: true,
          cateringMenu: true,
          chefService: true,
          payments: true
        },
        orderBy: { startAt: "asc" }
      }),
      prisma.availability.findMany({ orderBy: [{ date: "asc" }, { startHour: "asc" }] }),
      prisma.user.findMany({ orderBy: { createdAt: "desc" } })
    ]);

  return { mealPlans, cateringMenus, chefServices, bookings, availability, users };
}
