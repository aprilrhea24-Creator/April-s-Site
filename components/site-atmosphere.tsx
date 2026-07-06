"use client";

import { usePathname } from "next/navigation";

import { BreathingBackground } from "@/components/breathing-background";

const excludedPrefixes = ["/preview"];

export function SiteAtmosphere() {
  const pathname = usePathname();

  if (excludedPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return null;
  }

  return <BreathingBackground />;
}
