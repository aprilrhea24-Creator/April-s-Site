import Link from "next/link";
import type { ReactNode } from "react";

export function ServiceCard({
  title,
  subtitle,
  price,
  href,
  imageUrl,
  children
}: {
  title: string;
  subtitle: string;
  price: string;
  href: string;
  imageUrl: string;
  children: ReactNode;
}) {
  return (
    <article className="group overflow-hidden rounded-[2.5rem] border border-white/10 bg-black p-5 shadow-[0_28px_90px_rgba(0,0,0,0.45)] transition hover:-translate-y-1 hover:border-[#f00612]/40">
      <div
        className="relative min-h-[23rem] overflow-hidden rounded-[2rem] bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-black/90" />
        <div className="absolute inset-x-6 bottom-8">
          <p className="inline-flex rounded-full border border-white/20 bg-white/25 px-5 py-2 text-xs font-black uppercase tracking-[0.12em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur">
            {subtitle}
          </p>
          <p className="mt-5 text-4xl font-black text-[#ff2631]">{price}</p>
        </div>
      </div>
      <div className="px-5 py-8">
        <h3 className="max-w-sm text-5xl font-black uppercase italic leading-[0.95] tracking-wide text-white">
          {title}
        </h3>
        <div className="mt-8 space-y-3 text-lg font-semibold leading-8 text-white/55">{children}</div>
      </div>
      <Link
        href={href}
        className="mx-5 mb-6 inline-flex min-h-16 items-center justify-center rounded-3xl border border-white/15 px-9 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-[#f00612] hover:bg-[#f00612]"
      >
        Explore Service
      </Link>
    </article>
  );
}
