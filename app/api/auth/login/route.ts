import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { createSession, verifyPassword } from "@/lib/auth";
import { supabase } from "@/lib/supabase/client";
import { getValidationMessage, loginSchema } from "@/lib/validation";

export const dynamic = "force-dynamic";

function getSafeRedirect(next: string | undefined) {
  return next?.startsWith("/") && !next.startsWith("//") ? next : null;
}

export async function POST(request: Request) {
  try {
    const body = loginSchema.parse(await request.json());

    const { data: user, error: findError } = await supabase
      .from("User")
      .select("*")
      .eq("email", body.email)
      .maybeSingle();

    if (findError) {
      console.error(findError);
      return NextResponse.json({ error: "Unable to verify existing account." }, { status: 500 });
    }

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
