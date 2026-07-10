"use client";

import { useEffect, useRef } from "react";

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 1.5;
  }

  update(width: number, height: number, mouse: { x: number; y: number; active: boolean }) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;

    if (mouse.active) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 150) {
        this.x -= dx * 0.015;
        this.y -= dy * 0.015;
      }
    }
  }
}

type BreathingBackgroundProps = {
  fixed?: boolean;
  overlay?: boolean;
};

export function BreathingBackground({ fixed = true, overlay = false }: BreathingBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let particles: Particle[] = [];
    let bounds = { width: 0, height: 0 };
    const mouse = { x: 0, y: 0, active: false };

    const drawParticle = (particle: Particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(34, 211, 238, 0.25)";
      ctx.fill();
    };

    const init = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const rect = fixed ? null : containerRef.current?.getBoundingClientRect();
      const width = fixed ? window.innerWidth : Math.max(rect?.width ?? 0, 1);
      const height = fixed ? window.innerHeight : Math.max(rect?.height ?? 0, 1);

      bounds = { width, height };

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      const viewportArea = window.innerWidth * window.innerHeight;
      const surfaceArea = width * height;
      const particleCount = fixed
        ? 120
        : Math.min(260, Math.max(120, Math.round(120 * (surfaceArea / viewportArea))));
      particles = Array.from({ length: particleCount }, () => new Particle(width, height));
    };

    const animate = () => {
      const { width, height } = bounds;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update(width, height, mouse);
        drawParticle(particle);

        particles.forEach((linkedParticle) => {
          const dx = particle.x - linkedParticle.x;
          const dy = particle.y - linkedParticle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.12 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(linkedParticle.x, linkedParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    init();
    animate();

    const observedContainer = containerRef.current;
    const resizeObserver = fixed || !observedContainer ? null : new ResizeObserver(init);
    if (resizeObserver && observedContainer) {
      resizeObserver.observe(observedContainer);
    }
    window.addEventListener("resize", init);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [fixed]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none ${fixed ? "fixed" : "absolute"} inset-0 ${overlay ? "z-20 opacity-45 mix-blend-screen" : "z-0"} overflow-hidden`}
    >
      {overlay ? null : <div className="absolute inset-0 bg-[#050505]" />}
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div
        className={`absolute inset-0 ${overlay ? "opacity-[0.08]" : "opacity-20"} mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]`}
      />
      <div className={`absolute left-[-10%] top-[-20%] h-[80%] w-[80%] animate-pulse rounded-full ${overlay ? "bg-cyan-400/[0.035]" : "bg-cyan-500/10"} blur-[140px]`} />
      <div
        className={`absolute bottom-[-10%] right-[-10%] h-[60%] w-[60%] animate-pulse rounded-full ${overlay ? "bg-purple-500/[0.035]" : "bg-purple-500/5"} blur-[120px]`}
        style={{ animationDelay: "-4s" }}
      />
    </div>
  );
}
