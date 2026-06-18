import {
  demoAvailability,
  demoCateringMenus,
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
const sectionNotes = new Map(
  cateringMenuDefaults.map((section) => [section.title, section.note])
);
const luxuryItemTitles = new Set(
  cateringMenuDefaults.flatMap((section) =>
    section.items.filter((item) => item.luxury).map((item) => item.title.toLowerCase())
  )
);

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
    const isLuxury = luxuryItemTitles.has(menu.title.toLowerCase()) || menu.title.toLowerCase().includes("luxury");

    if (existing) {
      existing.items.push({
        title: menu.title,
        image: menu.image,
        description: menu.description,
        luxury: isLuxury
      });
      continue;
    }

    grouped.set(menu.category, {
      title: menu.category,
      note: sectionNotes.get(menu.category),
      items: [
        {
          title: menu.title,
        image: menu.image,
          description: menu.description,
          luxury: isLuxury
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
  const [mealPlans, cateringMenus, availability] = await Promise.all([
    getActiveMealPlans(),
    getActiveCateringMenus(),
    getUpcomingAvailability()
  ]);

  return {
    mealPlans,
    cateringMenus,
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
          payments: true
        },
        orderBy: { startAt: "desc" }
      }
    }
  });
}

export async function getAdminData() {
  const [mealPlans, cateringMenus, bookings, availability, users] =
    await Promise.all([
      prisma.mealPlan.findMany({ orderBy: { createdAt: "desc" } }),
      prisma.cateringMenu.findMany({ orderBy: { createdAt: "desc" } }),
      prisma.booking.findMany({
        include: {
          user: true,
          mealPlan: true,
          cateringMenu: true,
          payments: true
        },
        orderBy: { startAt: "asc" }
      }),
      prisma.availability.findMany({ orderBy: [{ date: "asc" }, { startHour: "asc" }] }),
      prisma.user.findMany({ orderBy: { createdAt: "desc" } })
    ]);

  return { mealPlans, cateringMenus, bookings, availability, users };
}
