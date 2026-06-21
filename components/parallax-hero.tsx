"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";

type ParallaxHeroProps = {
  children: ReactNode;
};

const PARALLAX_FACTOR = 0.2;
const EASING = 0.085;

export function ParallaxHero({ children }: ParallaxHeroProps) {
  const rootRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const background = backgroundRef.current;

    if (!root || !background) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let currentOffset = 0;
    let targetOffset = 0;
    let animationFrame = 0;

    const measureTarget = () => {
      if (reducedMotion.matches) {
        targetOffset = 0;
        return;
      }

      const bounds = root.getBoundingClientRect();
      const sectionProgress = Math.min(Math.max(-bounds.top, 0), bounds.height);
      targetOffset = sectionProgress * PARALLAX_FACTOR;
    };

    const render = () => {
      currentOffset += (targetOffset - currentOffset) * EASING;
      background.style.transform = `translate3d(0, ${currentOffset.toFixed(2)}px, 0)`;

      if (Math.abs(targetOffset - currentOffset) > 0.1) {
        animationFrame = window.requestAnimationFrame(render);
      } else {
        currentOffset = targetOffset;
        background.style.transform = `translate3d(0, ${currentOffset.toFixed(2)}px, 0)`;
        animationFrame = 0;
      }
    };

    const requestRender = () => {
      measureTarget();

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    const resetMotion = () => {
      currentOffset = 0;
      targetOffset = 0;
      background.style.transform = "translate3d(0, 0, 0)";
      requestRender();
    };

    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender, { passive: true });
    reducedMotion.addEventListener("change", resetMotion);
    requestRender();

    return () => {
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      reducedMotion.removeEventListener("change", resetMotion);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section ref={rootRef} className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#07070a]">
      <div
        ref={backgroundRef}
        className="pointer-events-none absolute inset-x-0 -inset-y-[20%] z-0 will-change-transform"
        aria-hidden="true"
      >
        <Image
          src="/backgroundidea1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(7,7,10,0.52)_46%,rgba(3,7,18,0.32)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(34,211,238,0.04),transparent_32%),linear-gradient(180deg,rgba(7,7,10,0.12),rgba(7,7,10,0.42))]" />
      </div>

      {/* Existing hero copy and framework card columns plug into this full-speed foreground layer. */}
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        {children}
      </div>
    </section>
  );
}
