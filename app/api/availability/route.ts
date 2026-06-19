import { NextRequest, NextResponse } from "next/server";

import { getRequestBody } from "@/lib/http";
import { getPrisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { availabilitySchema } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function GET() {
  const prisma = getPrisma();
  const availability = await prisma.availability.findMany({
    orderBy: [{ date: "asc" }, { startHour: "asc" }]
  });

  return NextResponse.json({ availability });
}

export async function POST(request: NextRequest) {
  try {
    await requireAdmin();
    const body = availabilitySchema.parse(await getRequestBody(request));
    const prisma = getPrisma();

    const availability = await prisma.availability.create({
      data: {
        date: new Date(body.date),
        startHour: body.startHour,
        endHour: body.endHour,
        isAvailable: body.isAvailable,
        timezone: body.timezone,
        bufferHours: body.bufferHours,
        notes: body.notes
      }
    });

    if (request.headers.get("content-type")?.includes("application/json")) {
      return NextResponse.json({ ok: true, availability }, { status: 201 });
    }

    return NextResponse.redirect(new URL("/workspace", request.url));
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to save availability." },
      { status: 400 }
    );
  }
}
