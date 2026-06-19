"use client";

import { ArrowLeft, CalendarDays, CheckCircle2, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  {
    name: "Amber Tasting Menu",
    detail: "Five courses with seasonal pairings",
    price: "$148",
    tone: "from-amber-300/30 to-orange-500/10"
  },
  {
    name: "Private Garden Supper",
    detail: "Family-style service for intimate events",
    price: "$112",
    tone: "from-yellow-200/25 to-emerald-500/10"
  },
  {
    name: "Midnight Celebration",
    detail: "Cocktail reception and late-night dining",
    price: "$176",
    tone: "from-orange-300/25 to-rose-500/10"
  }
];

export default function HospitalityPreviewPage() {
  const [selectedMenu, setSelectedMenu] = useState(menuItems[0].name);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#090812]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(251,191,36,0.28),transparent_25%),radial-gradient(circle_at_84%_35%,rgba(249,115,22,0.16),transparent_24%),linear-gradient(180deg,#090812_0%,#17100b_50%,#080711_100%)]" />

      <Link
        href="/solutions"
        className="fixed left-4 top-20 z-40 inline-flex items-center gap-2 rounded-full border border-amber-100/20 bg-[rgba(26,18,12,0.72)] px-4 py-2.5 text-sm font-semibold text-amber-50 shadow-lg backdrop-blur-xl hover:bg-amber-100/10 sm:left-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Stratum Solutions
      </Link>

      <main className="relative mx-auto max-w-7xl px-4 pb-24 pt-36 sm:px-6 lg:px-8">
        <section className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-100/20 bg-amber-100/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-amber-100 backdrop-blur-lg">
            <Sparkles className="h-4 w-4" />
            Bespoke Hospitality
          </div>
          <h1 className="hospitality-serif mt-7 max-w-4xl text-5xl font-semibold leading-[1.04] text-amber-50 sm:text-7xl">
            Dining experiences designed to feel unforgettable before the first course.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-amber-50/70">
            A warm, editorial booking experience for elevated catering, private dining, and premium hospitality brands.
          </p>
        </section>

        <section className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-amber-200">Curated menu gallery</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Choose the atmosphere</h2>
            </div>
            <p className="text-sm text-amber-50/60">Selected: {selectedMenu}</p>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {menuItems.map((item) => {
              const selected = selectedMenu === item.name;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setSelectedMenu(item.name)}
                  className={`glass-panel bg-gradient-to-br ${item.tone} min-h-64 rounded-[2rem] p-6 text-left transition-transform hover:-translate-y-1 ${
                    selected ? "border-amber-200/60 shadow-[0_24px_80px_rgba(251,191,36,0.18)]" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-amber-50">
                      Signature
                    </span>
                    {selected ? <CheckCircle2 className="h-5 w-5 text-amber-100" /> : null}
                  </div>
                  <div className="mt-20">
                    <h3 className="hospitality-serif text-2xl font-semibold text-white">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-amber-50/70">{item.detail}</p>
                    <p className="mt-4 font-semibold text-amber-100">{item.price} per guest</p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass-panel rounded-[2rem] p-7">
            <p className="text-sm uppercase tracking-[0.22em] text-amber-200">VIP service</p>
            <h2 className="hospitality-serif mt-4 text-3xl font-semibold text-white">Reserve a private consultation.</h2>
            <p className="mt-4 text-sm leading-7 text-amber-50/65">
              Share your date, guest count, and selected menu direction. A concierge follows up with availability and a tailored
              proposal.
            </p>
            <div className="mt-7 space-y-3 text-sm text-amber-50/75">
              <p className="flex items-center gap-3"><CalendarDays className="h-5 w-5 text-amber-200" /> Priority date review</p>
              <p className="flex items-center gap-3"><Users className="h-5 w-5 text-amber-200" /> Guest-specific planning</p>
            </div>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
            className="glass-panel grid gap-5 rounded-[2rem] p-7 sm:grid-cols-2"
          >
            <input type="hidden" name="menu" value={selectedMenu} />
            <label className="space-y-2">
              <span className="text-sm text-amber-50/70">Full name</span>
              <input required className="glass-field" placeholder="Your name" />
            </label>
            <label className="space-y-2">
              <span className="text-sm text-amber-50/70">Business email</span>
              <input required type="email" className="glass-field" placeholder="you@company.com" />
            </label>
            <label className="space-y-2">
              <span className="text-sm text-amber-50/70">Preferred date</span>
              <input required type="date" className="glass-field" />
            </label>
            <label className="space-y-2">
              <span className="text-sm text-amber-50/70">Guest count</span>
              <input required type="number" min="2" className="glass-field" placeholder="24" />
            </label>
            <label className="space-y-2 sm:col-span-2">
              <span className="text-sm text-amber-50/70">Event vision</span>
              <textarea className="glass-field" rows={4} placeholder="Tell us about the atmosphere you want to create." />
            </label>
            <button className="rounded-full bg-amber-100 px-6 py-3 font-semibold text-amber-950 hover:bg-white sm:col-span-2">
              Request VIP Booking
            </button>
            {submitted ? (
              <p className="text-center text-sm text-amber-100 sm:col-span-2">
                Preview request received for {selectedMenu}.
              </p>
            ) : null}
          </form>
        </section>
      </main>
    </div>
  );
}
