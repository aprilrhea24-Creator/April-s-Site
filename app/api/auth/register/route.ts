import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { createSession, hashPassword } from "@/lib/auth";
import { getPrisma } from "@/lib/prisma";
import { getValidationMessage, registerSchema } from "@/lib/validation";

export const dynamic = "force-dynamic";

function getSafeRedirect(next: string | undefined) {
  return next?.startsWith("/") && !next.startsWith("//") ? next : null;
}

export async function POST(request: Request) {
  try {
    const body = registerSchema.parse(await request.json());
    const prisma = getPrisma();
    const existingUser = await prisma.user.findUnique({ where: { email: body.email } });

    if (existingUser) {
      return NextResponse.json({ error: "An account already exists with that email." }, { status: 409 });
    }

    const role = body.email === process.env.ADMIN_EMAIL ? "ADMIN" : "CUSTOMER";
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        address: body.address,
        role,
        passwordHash: await hashPassword(body.password)
      }
    });

    await createSession({ userId: user.id, email: user.email, role: user.role });

    return NextResponse.json({
      ok: true,
      redirectTo: getSafeRedirect(body.next) ?? (user.role === "ADMIN" ? "/workspace" : "/client-dashboard")
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: getValidationMessage(error) }, { status: 400 });
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to register account." },
      { status: 400 }
    );
  }
}
