import { NextResponse } from "next/server";

import { requireAdmin } from "@/lib/auth";
import { cateringMenuDefaults } from "@/lib/catering-menu-defaults";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    await requireAdmin();

    const editableCategories = cateringMenuDefaults.map((section) => section.title);
    const existingCount = await prisma.cateringMenu.count({
      where: { category: { in: editableCategories } }
    });

    if (existingCount > 0) {
      return NextResponse.json(
        { error: "Editable menu items already exist. Remove existing items before loading defaults." },
        { status: 400 }
      );
    }

    await prisma.cateringMenu.createMany({
      data: cateringMenuDefaults.flatMap((section) =>
        section.items.map((item) => ({
          category: section.title,
          title: item.title,
          description: item.description,
          pricePerPerson: section.title === "Seafood Boil" ? 80 : 0,
          minimumGuestCount: section.title === "Seafood Boil" ? 10 : 1,
          serviceHours: 4,
          active: true
        }))
      )
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to load default menu." },
      { status: 400 }
    );
  }
}
