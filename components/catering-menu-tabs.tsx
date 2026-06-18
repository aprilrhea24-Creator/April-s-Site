"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type CateringMenuSection = {
  title: string;
  note?: string;
  items: Array<{
    title: string;
    description: string;
    luxury?: boolean;
    image?: string | null;
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
  const router = useRouter();
  const [activeTitle, setActiveTitle] = useState(sections[0]?.title ?? "");

  // State to track selected items per category
  const [selectedItems, setSelectedItems] = useState<Record<string, string[]>>({});
  const [customNotes, setCustomNotes] = useState("");
  const [headcount, setHeadcount] = useState(10);

  const activeSection = sections.find((section) => section.title === activeTitle) ?? sections[0];

  if (!activeSection) {
    return null;
  }

  // Determine if Seafood Boil package is currently selected
  const isSeafoodBoilSelected = (selectedItems["Seafood Boil"]?.length || 0) > 0;

  const handleItemToggle = (category: string, itemTitle: string) => {
      // If Seafood boil is toggled, manage exclusivity
      if (category === "Seafood Boil") {
          const currentSelected = selectedItems[category] || [];
          const isSelected = currentSelected.includes(itemTitle);

          if (isSelected) {
              // Deselect it
              setSelectedItems({
                  ...selectedItems,
                  [category]: currentSelected.filter(t => t !== itemTitle)
              });
          } else {
              // Select it, and CLEAR all other tabs
              setSelectedItems({
                  "Seafood Boil": [itemTitle] // Clear everything else and set this
              });
          }
          return;
      }

      // If a standard item is toggled, and Seafood boil is active, CLEAR Seafood Boil first
      const updatedItems = { ...selectedItems };
      if (isSeafoodBoilSelected) {
          updatedItems["Seafood Boil"] = [];
      }

      const currentSelected = updatedItems[category] || [];
      const isSelected = currentSelected.includes(itemTitle);

      let maxLimit = Infinity;
      if (category === "Protein") maxLimit = 4;
      if (category === "Sides" || category === "Appetizers") maxLimit = 4;
      if (category === "Pasta & More") maxLimit = 4;
      if (category === "Dessert") maxLimit = 4;

      if (!isSelected && currentSelected.length >= maxLimit) {
          return;
      }

      const newSelected = isSelected
          ? currentSelected.filter(t => t !== itemTitle)
          : [...currentSelected, itemTitle];

      setSelectedItems({
          ...updatedItems,
          [category]: newSelected
      });
  };

  const currentCategorySelected = selectedItems[activeSection.title] || [];

  let showLimitWarning = false;
  let maxLimitForCategory = Infinity;
  if (activeSection.title === "Protein") maxLimitForCategory = 4;
  if (activeSection.title === "Sides" || activeSection.title === "Appetizers" || activeSection.title === "Pasta & More" || activeSection.title === "Dessert") maxLimitForCategory = 4;

  // Also check if we should disable standard items because Seafood Boil is selected
  const isStandardSectionDisabled = isSeafoodBoilSelected && activeSection.title !== "Seafood Boil";

  if (!isStandardSectionDisabled && currentCategorySelected.length >= maxLimitForCategory) {
      showLimitWarning = true;
  }

  // Pricing Logic
  const isLuxurySelected = Object.values(selectedItems).some(items =>
      items.some(itemTitle => {
         const section = sections.find(s => s.items.some(i => i.title === itemTitle));
         const item = section?.items.find(i => i.title === itemTitle);
         return item?.luxury;
      })
  );

  let basePrice = 45; // Standard starting
  if (isSeafoodBoilSelected) basePrice = 95; // Dedicated premium pricing for Seafood Boil
  else if (isLuxurySelected) basePrice = 85;
  else {
      // If they selected anything, base might change. Let's say standard custom menu is $60 if they pick >= 3 proteins
      const proteinCount = selectedItems["Protein"]?.length || 0;
      if (proteinCount >= 3) basePrice = 60;
  }

  // Package Type resolution
  let packageType = "Standard Custom Menu";
  if (isSeafoodBoilSelected) packageType = "Premium Seafood Boil Package";
  else if (basePrice === 85) packageType = "Luxury Custom Menu";

  const handleBookNow = () => {
    // Compile and save to sessionStorage
    const draftData = {
        packageType,
        headcount,
        basePrice,
        selections: selectedItems,
        customNotes
    };
    sessionStorage.setItem("catering_draft", JSON.stringify(draftData));

    // Redirect to booking flow (assume it's /checkout for catering)
    router.push("/checkout");
  };

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
            <p className="mt-4 text-3xl font-black uppercase italic">$95 per person</p>
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
            {isStandardSectionDisabled && (
                <p className="mt-4 text-sm font-semibold text-[#f00612] bg-[#f00612]/10 p-3 rounded-lg border border-[#f00612]/20">
                    Seafood Boil Package is currently selected. To build a standard custom menu instead, deselect your Seafood Boil package.
                </p>
            )}
            {!isStandardSectionDisabled && showLimitWarning && (
                <p className="mt-4 text-sm font-semibold text-[#f00612] bg-[#f00612]/10 p-3 rounded-lg border border-[#f00612]/20">
                    Standard packages include up to {maxLimitForCategory} selections per section. Please note any additional dish requests in the Custom Notes box below for Chef Thai to manually review.
                </p>
            )}
          </div>
          {activeSection.note ? (
            <span className="rounded-full border border-[#f00612]/35 bg-[#f00612]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white/75">
              {activeSection.note}
            </span>
          ) : null}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {activeSection.items.map((item, index) => {
            const isSelected = currentCategorySelected.includes(item.title);
            // Item is disabled if it's not selected and we've reached the limit, OR if we're on a standard tab and Seafood boil is selected
            const isDisabled = (!isSelected && currentCategorySelected.length >= maxLimitForCategory) || (isStandardSectionDisabled && !isSelected);

            return (
              <article
                key={item.title}
                onClick={() => {
                    if (!isDisabled || isStandardSectionDisabled) handleItemToggle(activeSection.title, item.title);
                }}
                className={`cursor-pointer overflow-hidden rounded-[2rem] border shadow-[0_25px_80px_rgba(0,0,0,0.28)] transition-all ${
                  isSelected ? "border-[#f00612] shadow-[0_0_20px_rgba(240,6,18,0.4)]" :
                  item.luxury
                    ? "border-[#f00612]/25 bg-[#1b0808]"
                    : "border-white/10 bg-black"
                } ${isDisabled && !isStandardSectionDisabled ? "opacity-50 cursor-not-allowed" : "hover:border-[#f00612]/50"} ${isStandardSectionDisabled ? "opacity-30" : ""}`}
              >
                {item.image ? (
                  <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
                ) : (
                  <div className="h-48 w-full bg-white/5 flex items-center justify-center">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-white/35">Image Preview Coming Soon</p>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-white/35">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? "bg-[#f00612] border-[#f00612]" : "border-white/20"}`}>
                          {isSelected && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
                      </div>
                  </div>
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
            );
          })}
        </div>
      </article>

      {/* Custom Notes Section */}
      <div className="mt-8 rounded-[2rem] border border-white/10 bg-black p-6 sm:p-8">
          <label className="block text-sm font-black uppercase tracking-[0.18em] text-white/70 mb-4">
              Custom Notes / Additional Requests
          </label>
          <textarea
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              placeholder="Let Chef Thai know if you need more than 4 items, have allergies, or specific event requirements..."
              className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-4 text-white min-h-[120px] outline-none focus:border-[#f00612]/50 transition-colors"
          ></textarea>
      </div>

      {/* Dynamic Checkout Summary Card */}
      <div className="mt-12 p-8 rounded-[2rem] border border-[#f00612]/30 bg-black shadow-[0_30px_100px_rgba(240,6,18,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f00612]/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
              <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ff2631] mb-2">Your Selection</p>
                  <h3 className="text-3xl font-black uppercase italic text-white">{packageType}</h3>

                  <div className="mt-4 flex items-center gap-4">
                      <div className="flex flex-col">
                          <label className="text-[10px] font-black uppercase tracking-[0.15em] text-white/50 mb-1">Guest Count</label>
                          <input
                              type="number"
                              min="10"
                              value={headcount}
                              onChange={(e) => setHeadcount(parseInt(e.target.value) || 10)}
                              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white w-24 outline-none focus:border-[#f00612]"
                          />
                      </div>
                      <div className="flex flex-col">
                          <label className="text-[10px] font-black uppercase tracking-[0.15em] text-white/50 mb-1">Base Price Estimate</label>
                          <p className="text-2xl font-black text-white">${basePrice}<span className="text-sm text-white/50 font-medium ml-1">/ person</span></p>
                      </div>
                  </div>
              </div>

              <div className="w-full md:w-auto flex flex-col gap-3">
                  <button onClick={handleBookNow} className="w-full md:w-auto rounded-full bg-[#f00612] px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-[0_18px_45px_rgba(240,6,18,0.24)] transition hover:bg-[#ff2631]">
                      Continue to Booking
                  </button>
                  <p className="text-[10px] font-semibold text-white/40 text-center uppercase tracking-wider">Estimated total: ${(basePrice * headcount).toLocaleString()}</p>
              </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 grid md:grid-cols-3 gap-4 text-xs font-semibold text-white/50 leading-relaxed">
              <div className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f00612] mt-1.5 shrink-0"></div>
                  <p>All bookings require a 50% non-refundable deposit to secure your date.</p>
              </div>
              <div className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f00612] mt-1.5 shrink-0"></div>
                  <p>Travel and vehicle fees may apply depending on the event location.</p>
              </div>
              <div className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f00612] mt-1.5 shrink-0"></div>
                  <p>A standard 3% credit card processing fee is applied to all invoices.</p>
              </div>
          </div>
      </div>
    </div>
  );
}
