import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_72%_18%,rgba(240,6,18,0.26),transparent_28%),linear-gradient(120deg,#020202_0%,#0d0505_52%,#2a0205_100%)] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.62))]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-[1560px] items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-3 rounded-full border border-[#f00612]/35 bg-[#f00612]/10 px-5 py-3 text-xs font-black uppercase tracking-[0.34em] text-[#ff2631]">
            <span className="h-3 w-3 rounded-full bg-[#f00612]" />
            Chef-led hospitality
          </p>
          <h1 className="mt-12 max-w-3xl text-6xl font-black uppercase italic leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl">
            Elevate your <span className="block text-[#f00612]">flavors.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-2xl font-semibold leading-relaxed text-white/62">
            From signature oxtail stew to custom meal plans, we bring the premium chef experience directly to your table
            with a polished, modern touch.
          </p>
          <div className="mt-12 grid max-w-xl gap-5 sm:grid-cols-2">
            <Link
              href="/meal-prep"
              className="inline-flex min-h-20 items-center justify-center rounded-3xl bg-[#f00612] px-8 text-center text-lg font-black uppercase tracking-[0.18em] text-white shadow-[0_24px_70px_rgba(240,6,18,0.32)] transition hover:bg-[#ff2631]"
            >
              View Meal Plans
            </Link>
            <Link
              href="/catering"
              className="inline-flex min-h-20 items-center justify-center rounded-3xl border border-white/15 bg-white/[0.03] px-8 text-center text-lg font-black uppercase tracking-[0.18em] text-white transition hover:border-[#f00612] hover:bg-[#f00612]"
            >
              Book Catering
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-8 -top-10 hidden w-40 rotate-[-5deg] rounded-2xl bg-white p-3 shadow-[0_0_60px_rgba(240,6,18,0.35)] lg:block">
            <Image
              src="/chef-thai-logo.png"
              alt="Chef Thai logo"
              width={160}
              height={230}
              className="w-full object-contain"
              priority
            />
          </div>
          <div className="relative overflow-hidden rounded-[2.75rem] border border-white/15 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
            <div
              className="min-h-[28rem] bg-cover bg-center lg:min-h-[34rem]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1400&q=80')"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] border border-white/10 bg-black/70 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-md">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#ff2631]">Weekly Special</p>
              <p className="mt-4 text-4xl font-black uppercase italic leading-tight text-white sm:text-5xl">
                Signature Smoked Ribs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
