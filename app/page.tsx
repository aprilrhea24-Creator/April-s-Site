import Link from "next/link";
import { ArrowRight, ChartNoAxesCombined, MonitorSmartphone, ShieldCheck } from "lucide-react";

import { MaintenanceBanner } from "@/components/maintenance-banner";
import { PackageGrid } from "@/components/package-grid";
import { ParallaxHero } from "@/components/parallax-hero";
import { WhyStratum } from "@/components/why-stratum";

const outcomes = [
  {
    icon: ChartNoAxesCombined,
    title: "Engineered for Conversion",
    text: "Convert target inbound traffic into highly structured operational assets with an optimized onboarding pipeline built directly into your platform core."
  },
  {
    icon: MonitorSmartphone,
    title: "Universal Responsive Architecture",
    text: "Maintain pristine asset aspect ratios and fluid typography scaling natively across ultra-wide desktop monitors, mobile arrays, and high-fidelity displays."
  },
  {
    icon: ShieldCheck,
    title: "Secure Financial Pipelines",
    text: "Integrate transactional logic, multi-tier checkout layers, and encrypted automated balance settlements cleanly alongside your current administrative workflows."
  }
];

const process = [
  {
    title: "Share your blueprint",
    description: "Upload your operational requirements and brand assets."
  },
  {
    title: "Preview the experience",
    description: "Review your custom interactive layout prototype live."
  },
  {
    title: "Approve your staging site",
    description: "Test your workflows inside a private, high-security sandbox."
  },
  {
    title: "Launch with confidence",
    description: "Direct production deployment to your official live web domain."
  }
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#000000_0%,#070a10_56%,#000000_100%)]">
      <ParallaxHero>
        {/* Foreground column 1: agency positioning and conversion actions. */}
        <div className="relative isolate">
          <div
            className="pointer-events-none absolute left-0 top-1/2 z-0 h-[120%] w-full max-w-3xl -translate-y-1/2 blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(5, 5, 8, 0.75) 0%, rgba(5, 5, 8, 0.58) 38%, rgba(5, 5, 8, 0) 76%)"
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="w-full">
              <h1 className="font-sans text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
                <span className="block text-white">Engineered Workflows.</span>
                <span
                  className="mt-2 block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #22d3ee, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  Hyper-Personalized Brands.
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:mx-0 md:text-lg">
                Stratum Studio builds high-performance web applications, premium portals, and automated booking systems tailored
                to your unique operations. We eliminate friction from your day-to-day workflow while designing an elite digital
                presence that makes your brand unforgettable.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Link
                href="/consultation"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00D4E8] via-[#168BFF] to-[#7C3AED] px-6 py-3 font-bold text-white shadow-glow transition-all hover:brightness-110"
              >
                Explore Packages
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/solutions"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10"
              >
                View Solution Systems
              </Link>
            </div>
          </div>
        </div>

        {/* Foreground column 2: existing Stratum Framework roadmap interface. */}
        <div className="rounded-2xl border border-white/10 bg-zinc-950/50 p-8 shadow-[0_28px_80px_rgba(8,145,178,0.14),0_18px_56px_rgba(126,34,206,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/20">
          <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Our Live Execution Roadmap
                </span>
                <p className="text-xl font-bold tracking-tight text-white">The Stratum Framework</p>
              </div>
              <div className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-3 py-1 text-sm text-cyan-100">Live preview</div>
            </div>
            <div className="mt-5 grid gap-3">
              {process.map((step, index) => (
                <div
                  key={step.title}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4 backdrop-blur-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-mono font-bold text-cyan-100">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-white">{step.title}</p>
                    <p className="text-sm text-slate-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-fuchsia-200/20 bg-fuchsia-300/10 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-100">Protected every step</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Payments, approvals, and final ownership stay clear from your first preview through launch day.
              </p>
            </div>
          </div>
        </div>
      </ParallaxHero>

      <section className="relative bg-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Signature packages</p>
            <h2 className="mt-4 font-sans text-4xl font-bold normal-case leading-snug text-white">
              Choose a strong starting point, then make it unmistakably yours.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Compare clear package options, see what is included, and choose the best fit for your goals.
            </p>
          </div>
          <PackageGrid />
          <MaintenanceBanner />
          <WhyStratum />
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">A clear path forward</p>
          <h2 className="mt-4 font-sans text-4xl font-bold normal-case leading-snug text-white">From Blueprint to Launch.</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            We turn your idea into a polished customer experience that is easy to use, easy to manage, and ready to grow.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {outcomes.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/5 bg-zinc-950/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/10"
            >
              <item.icon className="h-7 w-7 text-cyan-200" />
              <h3 className="mt-5 font-sans text-xl font-bold normal-case leading-snug text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/5 bg-zinc-950/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/10">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-200">Our philosophy</p>
              <h2 className="mt-4 max-w-xl font-sans text-4xl font-bold normal-case leading-snug text-white">
                High-Performance Infrastructure. Tailored to Your Vision.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                Your business deserves more than a one-size-fits-all website. Stratum Studio pairs dependable behind-the-scenes
                tools with a distinctive customer experience designed around your brand.
              </p>
              <p>
                Payment milestones, scheduling, and intake forms work together automatically, while every screen is shaped to
                feel personal, polished, and unmistakably yours in a crowded digital era.
              </p>
              <p className="font-medium text-cyan-100">
                The result is a beautiful digital home that saves time, supports growth, and gives customers a clear next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-2xl border border-white/5 bg-zinc-950/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Built to monetize</p>
            <h2 className="mt-4 font-sans text-3xl font-bold normal-case leading-snug text-white">
              A clear path from first inquiry to ongoing support.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "30% Initialization Deposit",
                text: "Secure pipeline placement with a transparent upfront commitment applied directly to your build."
              },
              {
                title: "Secure Client Portal",
                text: "Track real-time progress milestones and test your live staging links securely."
              },
              {
                title: "Transparent Milestones",
                text: "Review and approve progress dynamically before signing your final handover."
              },
              {
                title: "Ironclad Protection",
                text: "Clear refund policies and guaranteed ownership transfer upon project completion."
              }
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm text-slate-200">
                <ShieldCheck className="mb-3 h-5 w-5 text-teal-200" />
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-2 leading-6 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
