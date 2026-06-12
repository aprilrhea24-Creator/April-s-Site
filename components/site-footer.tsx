import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 text-sm font-semibold text-white/55 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src="/chef-thai-logo.png"
              alt="Chef Thai logo"
              width={48}
              height={64}
              className="h-16 w-12 rounded-sm bg-white object-contain p-1"
            />
            <p className="text-2xl font-black uppercase italic text-white">
              Chef <span className="text-[#f00612]">Thai</span>
            </p>
          </div>
          <p className="mt-4 max-w-sm">Premium meal prep, refined catering, and unforgettable chef-led events.</p>
        </div>
        <div>
          <p className="font-black uppercase tracking-[0.2em] text-white">Contact</p>
          <p className="mt-2">hello@emberandthyme.com</p>
          <p>(555) 555-0186</p>
        </div>
        <div>
          <p className="font-black uppercase tracking-[0.2em] text-white">Service Region</p>
          <p className="mt-2">Greater Los Angeles, Orange County, and destination private events by request.</p>
        </div>
      </div>
    </footer>
  );
}
