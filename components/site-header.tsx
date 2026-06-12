import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard } from "lucide-react";

import { getSession } from "@/lib/auth";

const navItems = [
  { href: "/meal-prep", label: "Meal Prep" },
  { href: "/catering", label: "Catering" },
  { href: "/personal-chef", label: "Personal Chef" }
];

export async function SiteHeader() {
  const session = await getSession();

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/95 shadow-[0_16px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      <div className="mx-auto max-w-[1560px] px-4 py-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-5">
        <Link href="/" className="flex shrink-0 items-center gap-4">
          <Image
            src="/chef-thai-logo.png"
            alt="Chef Thai logo"
            width={80}
            height={96}
            className="h-20 w-16 rounded-sm bg-white object-contain p-1 shadow-[0_0_32px_rgba(240,6,18,0.28)] sm:h-24 sm:w-20"
            priority
          />
          <span className="hidden text-3xl font-black uppercase italic tracking-tight text-white sm:inline lg:text-5xl">
            Chef <span className="text-[#f00612]">Thai</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-black uppercase tracking-[0.22em] text-white/65 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 sm:gap-5">
          {session ? (
            <>
              <Link
                href={session.role === "ADMIN" ? "/admin" : "/dashboard"}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:border-[#f00612] hover:bg-[#f00612] sm:px-7 sm:text-sm"
              >
                <LayoutDashboard className="h-5 w-5" aria-hidden="true" />
                Dashboard
              </Link>
              <form action="/api/auth/logout" method="POST">
                <button className="rounded-full bg-[#f00612] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-white shadow-[0_18px_50px_rgba(240,6,18,0.35)] transition hover:bg-[#ff2631] sm:px-8 sm:text-sm">
                  Logout
                </button>
              </form>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm font-black uppercase tracking-[0.12em] text-white/70 transition hover:text-white">
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-[#f00612] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_18px_50px_rgba(240,6,18,0.35)] transition hover:bg-[#ff2631]"
              >
                Book Now
              </Link>
            </>
          )}
        </div>
      </div>
        <nav className="mt-4 flex gap-3 overflow-x-auto pb-1 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/70"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
