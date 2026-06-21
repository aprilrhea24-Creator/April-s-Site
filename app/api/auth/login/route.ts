import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { createSession, verifyPassword } from "@/lib/auth";
import { getPrisma } from "@/lib/prisma";
import { getValidationMessage, loginSchema } from "@/lib/validation";

export const dynamic = "force-dynamic";

function getSafeRedirect(next: string | undefined) {
  return next?.startsWith("/") && !next.startsWith("//") ? next : null;
}

export async function POST(request: Request) {
  try {
    const body = loginSchema.parse(await request.json());
    const prisma = getPrisma();
    const user = await prisma.user.findUnique({ where: { email: body.email } });

    if (!user || !(await verifyPassword(body.password, user.passwordHash))) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

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
      { error: error instanceof Error ? error.message : "Unable to sign in." },
      { status: 400 }
    );
  }
}
