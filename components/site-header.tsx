import Image from "next/image";
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="relative isolate flex items-center gap-3">
          <span className="relative flex h-11 w-9 shrink-0 items-center justify-center sm:h-12 sm:w-10" aria-hidden="true">
            <Image
              src="/stratum-logo-mark.png"
              alt=""
              width={760}
              height={1024}
              priority
              className="h-11 w-auto object-contain sm:h-12"
            />
          </span>
          <span
            className="bg-gradient-to-r from-white via-zinc-100 to-cyan-300 bg-clip-text font-sans text-lg font-extrabold tracking-tight text-transparent transition-all duration-300 hover:from-cyan-300 hover:to-fuchsia-300 sm:text-xl"
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
        <div className="flex items-center">
          <Link
            href="/login"
            className="mr-6 font-sans text-xs font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Login
          </Link>
          <Link
            href="/consultation"
            className="stratum-action-gradient transform rounded-full px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 will-change-transform hover:scale-[1.03] active:scale-95"
          >
            Start Build
          </Link>
        </div>
      </div>
    </header>
  );
}
