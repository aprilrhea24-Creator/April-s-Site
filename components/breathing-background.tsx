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
      ctx.fillStyle = "rgba(34, 211, 238, 0.82)";
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
      particles = Array.from({ length: 145 }, () => new Particle(width, height));
    };

    const animate = () => {
      const { width, height } = bounds;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        particle.update(width, height, mouse);
        drawParticle(particle);

        for (let i = index + 1; i < particles.length; i += 1) {
          const linkedParticle = particles[i];
          const dx = particle.x - linkedParticle.x;
          const dy = particle.y - linkedParticle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 230) {
            ctx.beginPath();
            const hue = (index + i) % 4 === 0 ? "168, 85, 247" : "34, 211, 238";
            ctx.strokeStyle = `rgba(${hue}, ${0.34 * (1 - dist / 230)})`;
            ctx.lineWidth = 1.05;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(linkedParticle.x, linkedParticle.y);
            ctx.stroke();
          }
        }
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

    const resizeObserver = fixed || !containerRef.current ? null : new ResizeObserver(init);
    resizeObserver?.observe(containerRef.current);
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
  }, []);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none ${fixed ? "fixed" : "absolute"} inset-0 ${overlay ? "z-20 opacity-100 mix-blend-screen" : "z-0"} overflow-hidden`}
    >
      {overlay ? null : <div className="absolute inset-0 bg-[#050505]" />}
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div
        className={`absolute inset-0 ${overlay ? "opacity-[0.08]" : "opacity-[0.16]"} mix-blend-overlay`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)",
          backgroundSize: "4px 4px"
        }}
      />
      <div className={`absolute left-[-10%] top-[-20%] h-[80%] w-[80%] animate-pulse rounded-full ${overlay ? "bg-cyan-400/[0.15]" : "bg-cyan-500/[0.26]"} blur-[140px]`} />
      <div
        className={`absolute bottom-[-10%] right-[-10%] h-[60%] w-[60%] animate-pulse rounded-full ${overlay ? "bg-purple-500/[0.14]" : "bg-purple-500/[0.22]"} blur-[120px]`}
        style={{ animationDelay: "-4s" }}
      />
      <div
        className={`absolute left-[18%] bottom-[-18%] h-[44%] w-[54%] animate-pulse rounded-full ${overlay ? "bg-fuchsia-500/[0.1]" : "bg-fuchsia-500/[0.16]"} blur-[130px]`}
        style={{ animationDelay: "-7s" }}
      />
    </div>
  );
}
