import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard } from "lucide-react";

import { getSession } from "@/lib/auth";

const navItems = [
  { href: "/catering", label: "Catering" },
  { href: "/store", label: "Store" },
  { href: "/about", label: "About" },
  { href: "/policy", label: "Policy" }
];

export async function SiteHeader() {
  const session = await getSession();

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/95 shadow-[0_16px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      <div className="mx-auto max-w-[1560px] px-4 py-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-3 sm:gap-5">
          <Link href="/" className="flex min-w-0 shrink items-center gap-2 sm:gap-5">
            <Image
              src="/chef-thai-hero-logo.png"
              alt="Chef Thai logo"
              width={832}
              height={1258}
              className="h-16 w-12 rounded-sm object-contain shadow-[0_0_32px_rgba(240,6,18,0.28)] sm:h-24 sm:w-16 lg:h-28 lg:w-[4.75rem]"
              priority
            />
            <span className="min-w-0 text-2xl font-black uppercase italic leading-none tracking-tight text-white sm:text-3xl lg:text-5xl">
              Chef <span className="text-[#f00612]">Thai</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-black uppercase tracking-[0.18em] text-white/65 transition hover:text-white 2xl:text-base"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2 sm:gap-5">
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
                <Link href="/login" className="text-xs font-black uppercase tracking-[0.1em] text-white/70 transition hover:text-white sm:text-sm sm:tracking-[0.12em]">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="rounded-full bg-[#f00612] px-4 py-3 text-xs font-black uppercase tracking-[0.1em] text-white shadow-[0_18px_50px_rgba(240,6,18,0.35)] transition hover:bg-[#ff2631] sm:px-5 sm:text-sm sm:tracking-[0.12em]"
                >
                  Book Now
                </Link>
              </>
            )}
          </div>
        </div>
        <nav className="mt-4 flex gap-3 overflow-x-auto pb-1 xl:hidden">
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
