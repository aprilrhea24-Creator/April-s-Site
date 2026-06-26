import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { frameworkPreviews, getFrameworkPreview } from "@/lib/framework-previews";

const previewRedirects: Record<string, string> = {
  "booking-core": "/preview/booking-core",
  "enterprise-matrix": "/preview/secure-console",
  "flow-automation": "/preview/dispatch-autonomous",
  "platform-suite": "/preview/global-intelligence"
};

export function generateStaticParams() {
  return frameworkPreviews.map((framework) => ({ package: framework.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ package: string }>;
}): Promise<Metadata> {
  const { package: packageSlug } = await params;
  const framework = getFrameworkPreview(packageSlug);

  return {
    title: framework ? `${framework.tier} Preview | Stratum Studio` : "Framework Preview | Stratum Studio",
    description: framework?.summary
  };
}

export default async function FrameworkPreviewPage({
  params
}: {
  params: Promise<{ package: string }>;
}) {
  const { package: packageSlug } = await params;
  const framework = getFrameworkPreview(packageSlug);

  if (!framework) {
    notFound();
  }

  redirect(previewRedirects[packageSlug] ?? "/solutions");
}
