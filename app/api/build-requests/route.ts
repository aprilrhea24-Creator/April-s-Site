import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    industry: String(formData.get("industry") ?? ""),
    budget: String(formData.get("budget") ?? ""),
    features: formData.getAll("features").map(String),
    notes: String(formData.get("notes") ?? ""),
    submittedAt: new Date().toISOString()
  };

  console.info("Build request received", payload);

  return NextResponse.redirect(new URL("/consultation?submitted=1", request.url), { status: 303 });
}
