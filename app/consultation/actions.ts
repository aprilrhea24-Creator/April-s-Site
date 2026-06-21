"use server";

import { redirect } from "next/navigation";

import { requireUser } from "@/lib/auth";
import { getPrisma } from "@/lib/prisma";
import { buildRequestSchema } from "@/lib/validation";

export async function submitBuildRequest(formData: FormData) {
  let session;

  try {
    session = await requireUser();
  } catch {
    redirect("/register?next=%2Fconsultation");
  }

  const result = buildRequestSchema.safeParse({
    industry: formData.get("industry"),
    budget: formData.get("budget"),
    features: formData.getAll("features"),
    notes: formData.get("notes") || undefined
  });

  if (!result.success) {
    redirect("/consultation?status=invalid");
  }

  const prisma = getPrisma();
  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    select: { id: true, name: true, email: true }
  });

  if (!user) {
    redirect("/register?next=%2Fconsultation");
  }

  try {
    await prisma.buildRequest.create({
      data: {
        ...result.data,
        name: user.name,
        email: user.email,
        userId: user.id
      }
    });
  } catch {
    redirect("/consultation?status=error");
  }

  redirect("/consultation?status=success");
}
