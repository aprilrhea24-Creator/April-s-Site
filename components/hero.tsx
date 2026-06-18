import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-aura-mesh text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.25),transparent_40%,rgba(34,211,238,0.08))]" />
      <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="relative">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Aura App Studio</p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Private operational apps with a polished, modern touch.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Designed for teams who want cleaner intake, smarter automation, and premium client experiences from the first
            click to final delivery.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/solutions" className="rounded-full bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-100">
              Solution Templates
            </Link>
            <Link href="/consultation" className="rounded-full border border-white/20 px-6 py-3 font-medium transition hover:bg-white/5">
              Build Request
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div
              className="h-[420px] rounded-[2rem] bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(236,72,153,0.16)), radial-gradient(circle at 30% 30%, rgba(255,255,255,0.26), transparent 18%)"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
