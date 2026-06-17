"use client";

import { useState } from "react";

type CateringMenuSection = {
  title: string;
  note?: string;
  items: Array<{
    title: string;
    description: string;
    luxury?: boolean;
    imageUrl?: string;
  }>;
};

type CateringMenuTabsProps = {
  sections: CateringMenuSection[];
};

const labelMap: Record<string, string> = {
  "Seafood Boil": "Seafood Boil",
  Protein: "Proteins",
  Sides: "Sides",
  Appetizers: "Appetizers",
  "Pasta & More": "Pasta & More",
  Dessert: "Desserts"
};

export function CateringMenuTabs({ sections }: CateringMenuTabsProps) {
  const [activeTitle, setActiveTitle] = useState(sections[0]?.title ?? "");
  const activeSection = sections.find((section) => section.title === activeTitle) ?? sections[0];

  if (!activeSection) {
    return null;
  }

  return (
    <div className="mt-12">
      <div className="flex gap-3 overflow-x-auto pb-3">
        {sections.map((section) => {
          const isActive = section.title === activeSection.title;

          return (
            <button
              key={section.title}
              type="button"
              onClick={() => setActiveTitle(section.title)}
              className={`min-h-14 shrink-0 rounded-full px-6 text-xs font-black uppercase tracking-[0.18em] sm:px-8 ${
                isActive
                  ? "bg-[#f00612] text-white shadow-[0_18px_45px_rgba(240,6,18,0.22)]"
                  : "border border-white/10 bg-white/[0.05] text-white/55 hover:border-[#f00612]/50 hover:text-white"
              }`}
            >
              {labelMap[section.title] ?? section.title}
            </button>
          );
        })}
      </div>

      {activeSection.title === "Seafood Boil" ? (
        <div className="mt-14 mb-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-black p-6">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#ff2631]">Starting Point</p>
            <p className="mt-4 text-3xl font-black uppercase italic">$80 per person</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-black p-6">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#ff2631]">Minimum</p>
            <p className="mt-4 text-3xl font-black uppercase italic">10 people</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-black p-6">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#ff2631]">Service Style</p>
            <p className="mt-4 text-3xl font-black uppercase italic">Setup ready</p>
          </div>
        </div>
      ) : null}

      <article className="mt-8 rounded-[2.25rem] border border-white/10 bg-[radial-gradient(circle_at_90%_20%,rgba(240,6,18,0.18),transparent_28%),#08090b] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.28)] sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="h-1 w-16 rounded-full bg-[#f00612]" />
            <h2 className="mt-8 text-4xl font-black uppercase italic leading-none text-white sm:text-5xl">
              {activeSection.title}
            </h2>
          </div>
          {activeSection.note ? (
            <span className="rounded-full border border-[#f00612]/35 bg-[#f00612]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white/75">
              {activeSection.note}
            </span>
          ) : null}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {activeSection.items.map((item, index) => (
            <article
              key={item.title}
              className={`overflow-hidden rounded-[2rem] border shadow-[0_25px_80px_rgba(0,0,0,0.28)] ${
                item.luxury
                  ? "border-[#f00612]/25 bg-[#1b0808]"
                  : "border-white/10 bg-black"
              }`}
            >
              {item.imageUrl ? (
                <img src={item.imageUrl} alt={item.title} className="h-48 w-full object-cover" />
              ) : (
                <div className="h-48 w-full bg-white/5 flex items-center justify-center">
                   <p className="text-xs font-black uppercase tracking-[0.18em] text-white/35">Image Preview Coming Soon</p>
                </div>
              )}
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-black uppercase italic leading-tight text-white">{item.title}</h2>
                  {item.luxury ? (
                    <span className="rounded-full border border-[#f00612]/40 px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.16em] text-[#ff343d]">
                      Luxury
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/52">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </article>
    </div>
  );
}
