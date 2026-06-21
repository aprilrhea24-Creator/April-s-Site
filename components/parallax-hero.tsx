import type { ReactNode } from "react";

type ParallaxHeroProps = {
  children: ReactNode;
};

export function ParallaxHero({ children }: ParallaxHeroProps) {
  return (
    <section
      className="relative min-h-[58rem] overflow-hidden bg-[#050508] sm:min-h-[56rem] md:min-h-[calc(100vh-5rem)]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0% 100%, rgba(34, 211, 238, 0.08) 0%, transparent 48%), radial-gradient(circle at 100% 0%, rgba(168, 85, 247, 0.08) 0%, transparent 46%)"
      }}
    >
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.02] mix-blend-soft-light [transform:translateZ(0)]"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <filter id="hero-fractal-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-fractal-noise)" />
      </svg>

      <div className="relative z-10 mx-auto grid min-h-[58rem] max-w-7xl grid-cols-1 items-center gap-12 px-4 py-14 sm:min-h-[56rem] sm:px-6 md:min-h-[calc(100vh-5rem)] md:grid-cols-2 md:py-16 lg:px-8">
        {children}
      </div>
    </section>
  );
}
