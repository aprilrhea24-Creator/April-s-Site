export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 text-sm text-slate-300 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-xl font-semibold text-white">Aura App Studio</p>
          <p className="mt-2">Private automation systems, client portals, and B2B storefronts built by April.</p>
        </div>
        <div>
          <p className="font-medium text-white">Contact</p>
          <p className="mt-2">hello@auraappstudio.com</p>
          <p>Private consultations by request</p>
        </div>
        <div>
          <p className="font-medium text-white">Focus</p>
          <p className="mt-2">Operational apps for service businesses, teams, and founders who need cleaner systems.</p>
        </div>
      </div>
      <div className="border-t border-white/[0.06] px-4 py-5 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-medium text-violet-100/40">
          Engineered by April Rhea — Built with Stratum Studio
        </p>
      </div>
    </footer>
  );
}
