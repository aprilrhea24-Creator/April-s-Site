import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FrameworkPreview } from "@/components/framework-preview";
import { frameworkPreviews, getFrameworkPreview } from "@/lib/framework-previews";

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

  return <FrameworkPreview framework={framework} />;
}
