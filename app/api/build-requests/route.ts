import { NextResponse } from "next/server";

import { requireUser } from "@/lib/auth";
import { getPrisma } from "@/lib/prisma";
import { buildRequestSchema } from "@/lib/validation";

export async function POST(request: Request) {
  let session;

  try {
    session = await requireUser();
  } catch {
    return NextResponse.json({ error: "Authentication is required." }, { status: 401 });
  }

  const formData = await request.formData();
  const result = buildRequestSchema.safeParse({
    industry: String(formData.get("industry") ?? ""),
    budget: String(formData.get("budget") ?? ""),
    features: formData.getAll("features").map(String),
    notes: String(formData.get("notes") ?? "") || undefined
  });

  if (!result.success) {
    return NextResponse.json({ error: "Invalid build request." }, { status: 400 });
  }

  const prisma = getPrisma();
  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    select: { id: true, name: true, email: true }
  });

  if (!user) {
    return NextResponse.json({ error: "Client profile was not found." }, { status: 404 });
  }

  const buildRequest = await prisma.buildRequest.create({
    data: {
      ...result.data,
      name: user.name,
      email: user.email,
      userId: user.id
    }
  });

  return NextResponse.json({ ok: true, id: buildRequest.id }, { status: 201 });
}
