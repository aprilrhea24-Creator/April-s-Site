import Image from "next/image";
import Link from "next/link";

import { contactInfo, existingFlowLinks } from "@/lib/chef-thai-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 text-sm font-semibold text-white/55 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src="/chef-thai-hero-logo.png"
              alt="Chef Thai logo"
              width={832}
              height={1258}
              className="h-16 w-12 rounded-sm object-contain"
            />
            <p className="text-2xl font-black uppercase italic text-white">
              Chef <span className="text-[#f00612]">Thai</span>
            </p>
          </div>
          <p className="mt-4 max-w-sm">Experience the best in Cajun & Thai cuisines through catering, private events, recipes, and seasoning.</p>
        </div>
        <div>
          <p className="font-black uppercase tracking-[0.2em] text-white">Contact</p>
          <p className="mt-2">{contactInfo.email}</p>
          <p>{contactInfo.phone}</p>
          <a href={contactInfo.tiktok} className="mt-3 inline-block text-white transition hover:text-[#ff2631]">
            TikTok
          </a>
        </div>
        <div>
          <p className="font-black uppercase tracking-[0.2em] text-white">Explore</p>
          <div className="mt-2 grid gap-2">
            <Link href="/catering" className="transition hover:text-white">Catering</Link>
            <Link href="/recipes" className="transition hover:text-white">Recipes</Link>
            <Link href="/store" className="transition hover:text-white">Store</Link>
            <a href={existingFlowLinks.about} className="transition hover:text-white">About Chef Thai</a>
            <Link href="/policy" className="transition hover:text-white">Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
