import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isDatabaseConfigured } from "@/lib/env";
import { demoMealPlans } from "@/lib/demo-data";

export async function GET() {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(demoMealPlans);
  }

  const mealPlans = await prisma.mealPlan.findMany({
    where: { active: true },
    orderBy: { price: "asc" }
  });
  return NextResponse.json(mealPlans);
}
