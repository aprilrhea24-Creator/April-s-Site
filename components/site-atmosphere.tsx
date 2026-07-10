"use client";

import { usePathname } from "next/navigation";

import { BreathingBackground } from "@/components/breathing-background";

const excludedPrefixes = ["/preview", "/solutions"];

export function SiteAtmosphere() {
  const pathname = usePathname();

  if (pathname === "/" || excludedPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return null;
  }

  return <BreathingBackground overlay />;
}
