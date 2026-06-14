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
            Chef <span className="text-[#f00612]">Thai</span>
          </h1>
          <p className="mt-10 max-w-2xl text-2xl font-semibold leading-relaxed text-white/62">
            Experience the best in Cajun & Thai cuisines. Chef Thai brings Cajun heat, soul food comfort, and
            Thai-inspired flavor into catering, private events, recipes, and seasoning.
          </p>
          <div className="mt-12 grid max-w-xl gap-5 sm:grid-cols-2">
            <Link
              href="/catering"
              className="inline-flex min-h-20 items-center justify-center rounded-3xl bg-[#f00612] px-8 text-center text-lg font-black uppercase tracking-[0.18em] text-white shadow-[0_24px_70px_rgba(240,6,18,0.32)] transition hover:bg-[#ff2631]"
            >
              View Catering
            </Link>
            <Link
              href="/personal-chef"
              className="inline-flex min-h-20 items-center justify-center rounded-3xl border border-white/15 bg-white/[0.03] px-8 text-center text-lg font-black uppercase tracking-[0.18em] text-white transition hover:border-[#f00612] hover:bg-[#f00612]"
            >
              Book Private Chef
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2.75rem] border border-white/15 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,6,18,0.18),transparent_48%)]" />
            <div className="relative flex min-h-[34rem] items-center justify-center p-4 sm:p-8 lg:min-h-[44rem]">
              <Image
                src="/chef-thai-hero-logo.png"
                alt="Chef Thai brand logo"
                width={832}
                height={1258}
                className="max-h-[32rem] w-auto object-contain drop-shadow-[0_0_45px_rgba(240,6,18,0.22)] sm:max-h-[38rem] lg:max-h-[42rem]"
                priority
              />
            </div>
            <div className="relative border-t border-white/10 bg-black/80 px-6 py-5 text-center sm:px-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ff2631]">Chef Thai Signature</p>
              <p className="mt-2 text-lg font-black uppercase italic leading-tight text-white sm:text-2xl">
                Cajun soul food, private dining, catering, recipes, and seasoning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
