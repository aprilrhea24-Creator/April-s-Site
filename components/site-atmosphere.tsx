"use client";

import { usePathname } from "next/navigation";

import { BreathingBackground } from "@/components/breathing-background";

const excludedPrefixes = [
  "/preview",
  "/solutions/booking-core",
  "/solutions/dispatch-autonomous",
  "/solutions/secure-console",
  "/solutions/global-intelligence"
];

export function SiteAtmosphere() {
  const pathname = usePathname();

  if (pathname === "/solutions" || excludedPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return null;
  }

  return <BreathingBackground />;
}
