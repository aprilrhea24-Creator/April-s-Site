import Link from "next/link";

const navItems = [
  { href: "/solutions", label: "Solutions" },
  { href: "/consultation", label: "Build Request" },
  { href: "/about", label: "About" },
  { href: "/policies", label: "Policies" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/25 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight text-white">
          Stratum Studio
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-200/80 transition hover:text-cyan-200">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm text-slate-200/80 transition hover:text-white">
            Login
          </Link>
          <Link
            href="/consultation"
            className="rounded-full bg-[linear-gradient(90deg,#67e8f9,#a78bfa,#f0abfc)] px-4 py-2 text-sm font-semibold text-slate-950 shadow-glow transition hover:brightness-110"
          >
            Start Build
          </Link>
        </div>
      </div>
    </header>
  );
}
