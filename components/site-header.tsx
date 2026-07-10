import Link from "next/link";

const navItems = [
  { href: "/solutions", label: "Solutions" },
  { href: "/start", label: "Build Request" },
  { href: "/about", label: "About" },
  { href: "/policies", label: "Policies" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/25 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="relative isolate flex items-center" aria-label="Stratum Studio home">
          <span className="relative flex h-[112px] w-[112px] shrink-0 items-center justify-center overflow-hidden rounded-[1.9rem] bg-black shadow-[0_0_38px_rgba(34,211,238,0.18)]" aria-hidden="true">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              preload="auto"
              className="absolute left-1/2 top-[37%] h-[204px] w-[204px] -translate-x-1/2 -translate-y-1/2 object-cover"
            >
              <source src="/stratum-logo-loop.mp4" type="video/mp4" />
            </video>
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black via-black/95 to-transparent" />
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="font-stratum-tag transition hover:text-cyan-200">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center">
          <Link
            href="/login"
            className="mr-6 font-sans text-xs font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Login
          </Link>
          <Link
            href="/start"
            className="stratum-action-gradient transform rounded-full px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 will-change-transform hover:scale-[1.03] active:scale-95"
          >
            Start Build
          </Link>
        </div>
      </div>
    </header>
  );
}
