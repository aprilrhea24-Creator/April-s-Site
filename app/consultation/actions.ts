"use server";

import { redirect } from "next/navigation";

import { getPrisma } from "@/lib/prisma";
import { buildRequestSchema } from "@/lib/validation";

export async function submitBuildRequest(formData: FormData) {
  const result = buildRequestSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    industry: formData.get("industry"),
    budget: formData.get("budget"),
    features: formData.getAll("features"),
    notes: formData.get("notes") || undefined
  });

  if (!result.success) {
    redirect("/consultation?status=invalid");
  }

  try {
    await getPrisma().buildRequest.create({
      data: result.data
    });
  } catch {
    redirect("/consultation?status=error");
  }

  redirect("/consultation?status=success");
}
