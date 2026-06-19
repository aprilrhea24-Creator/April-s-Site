import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Stratum Studio",
  description:
    "A private high-end developer portfolio and B2B SaaS storefront for custom automated operational apps."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-aura-mesh font-body text-pearl">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
