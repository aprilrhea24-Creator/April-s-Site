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
        <Link href="/" className="relative isolate">
          <span
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[35px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/20 via-indigo-500/15 to-fuchsia-500/20 blur-[22px] mix-blend-screen"
            style={{ background: "linear-gradient(90deg,rgba(6,182,212,0.2),rgba(99,102,241,0.15),rgba(217,70,239,0.2))" }}
            aria-hidden="true"
          />
          <span
            className="bg-gradient-to-r from-white via-zinc-100 to-cyan-300 bg-clip-text font-sans text-xl font-extrabold tracking-tight text-transparent transition-all duration-300 hover:from-cyan-300 hover:to-fuchsia-300"
            style={{
              backgroundImage: "linear-gradient(90deg,#ffffff,#f4f4f5,#67e8f9)",
              WebkitBackgroundClip: "text"
            }}
          >
            Stratum Studio
          </span>
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
            className="rounded-full bg-[linear-gradient(90deg,#22d3ee,#6366f1,#d946ef)] px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            Start Build
          </Link>
        </div>
      </div>
    </header>
  );
}
