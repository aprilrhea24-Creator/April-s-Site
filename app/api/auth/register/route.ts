import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { createSession, hashPassword } from "@/lib/auth";
import { supabase } from "@/lib/supabase/client";
import { getValidationMessage, registerSchema } from "@/lib/validation";

export const dynamic = "force-dynamic";

function getSafeRedirect(next: string | undefined) {
  return next?.startsWith("/") && !next.startsWith("//") ? next : null;
}

export async function POST(request: Request) {
  try {
    const body = registerSchema.parse(await request.json());

    const { data: existingUser, error: findError } = await supabase
      .from("User")
      .select("id")
      .eq("email", body.email)
      .maybeSingle();

    if (findError) {
      console.error(findError);
      return NextResponse.json({ error: "Unable to verify existing account." }, { status: 500 });
    }

    if (existingUser) {
      return NextResponse.json({ error: "An account already exists with that email." }, { status: 409 });
    }

    const role = body.email === process.env.ADMIN_EMAIL ? "ADMIN" : "CUSTOMER";
    const passwordHash = await hashPassword(body.password);

    const randomId = "c" + crypto.randomUUID().replace(/-/g, "").substring(0, 24);

    const { data: user, error: createError } = await supabase
      .from("User")
      .insert({
        id: randomId,
        name: body.name,
        email: body.email,
        phone: body.phone,
        address: body.address,
        role,
        passwordHash,
        updatedAt: new Date().toISOString()
      })
      .select()
      .single();

    if (createError || !user) {
      console.error(createError);
      return NextResponse.json({ error: "Unable to create account." }, { status: 500 });
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
      { error: error instanceof Error ? error.message : "Unable to register account." },
      { status: 400 }
    );
  }
}
