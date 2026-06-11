import { timingSafeEqual } from "node:crypto";

import { NextResponse } from "next/server";

import { createSession, hashPassword } from "@/lib/auth";
import { getDatabaseSetupMessage, isDatabaseConfigured } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { adminSetupSchema } from "@/lib/validation";

function isValidSetupToken(input: string) {
  const expected = process.env.ADMIN_SETUP_TOKEN;

  if (!expected || expected.length < 16) {
    return false;
  }

  const inputBuffer = Buffer.from(input);
  const expectedBuffer = Buffer.from(expected);

  return inputBuffer.length === expectedBuffer.length && timingSafeEqual(inputBuffer, expectedBuffer);
}

export async function POST(request: Request) {
  try {
    if (!isDatabaseConfigured()) {
      return NextResponse.json({ error: getDatabaseSetupMessage() }, { status: 503 });
    }

    const body = adminSetupSchema.parse(await request.json());

    if (!isValidSetupToken(body.setupToken)) {
      return NextResponse.json({ error: "Invalid admin setup token." }, { status: 403 });
    }

    const passwordHash = await hashPassword(body.password);
    const user = await prisma.user.upsert({
      where: { email: body.email },
      update: {
        name: body.name,
        phone: body.phone,
        address: body.address,
        passwordHash,
        role: "ADMIN"
      },
      create: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        address: body.address,
        passwordHash,
        role: "ADMIN"
      }
    });

    await createSession({ userId: user.id, email: user.email, role: user.role });

    return NextResponse.json({ ok: true, redirectTo: "/admin" });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to configure admin account." },
      { status: 400 }
    );
  }
}
