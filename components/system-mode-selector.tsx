"use client";

import { useState } from "react";

type SystemModeSelectorProps = {
  label: string;
  options: readonly [string, string];
  accent: "cyan" | "emerald" | "violet" | "fuchsia";
};

const activeGlow = {
  cyan: "shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.5),0_0_12px_rgba(34,211,238,0.15)]",
  emerald: "shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.5),0_0_12px_rgba(52,211,153,0.15)]",
  violet: "shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.5),0_0_12px_rgba(139,92,246,0.17)]",
  fuchsia: "shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.5),0_0_12px_rgba(217,70,239,0.16)]"
} as const;

export function SystemModeSelector({ label, options, accent }: SystemModeSelectorProps) {
  const [activeOption, setActiveOption] = useState(options[0]);

  return (
    <div
      className="inline-flex max-w-full gap-1 rounded-xl border border-zinc-800/50 bg-zinc-950/60 p-1 backdrop-blur-md"
      role="group"
      aria-label={`${label} operating mode`}
    >
      {options.map((option) => {
        const active = option === activeOption;

        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => setActiveOption(option)}
            className={`min-h-9 rounded-lg border px-3 py-2 font-mono text-[0.65rem] uppercase tracking-wider transition-all sm:px-4 sm:text-xs ${
              active
                ? `border-zinc-700/30 bg-gradient-to-b from-zinc-800/50 to-zinc-900/50 text-white ${activeGlow[accent]}`
                : "border-transparent text-zinc-500 hover:text-zinc-200"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
