const sections = [
  {
    title: "Independent contractor relationship",
    text: "Projects are provided by an independent developer studio. Engagements do not create employment, partnership, joint venture, or agency authority unless a separate written agreement says otherwise."
  },
  {
    title: "Confidentiality and non-disclosure",
    text: "Business processes, credentials, private documentation, client data, and proprietary workflows shared for a project are treated as confidential. Mutual non-disclosure terms may be added for sensitive work."
  },
  {
    title: "Intellectual property boundaries",
    text: "Clients own final paid deliverables created specifically for their project after outstanding invoices are paid. Pre-existing frameworks, reusable components, know-how, templates, and studio tooling remain the studio's property unless expressly transferred in writing."
  },
  {
    title: "Deposits and project launch",
    text: "Most builds require a 50% booking deposit before implementation begins. Deposits reserve production time, start discovery, and may be non-refundable once work has begun."
  },
  {
    title: "Uptime and third-party systems",
    text: "Software may rely on hosting providers, payment processors, databases, APIs, email services, and other third-party platforms. No uninterrupted uptime is guaranteed unless a dedicated service-level agreement is signed."
  },
  {
    title: "Scope changes",
    text: "New features, workflow changes, additional integrations, redesign requests, and revisions beyond the agreed scope may require a written change order and additional fees."
  }
];

export default function PoliciesPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="glass-panel rounded-[2rem] p-8">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Policies</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-white">Modern SaaS and freelance application terms.</h1>
        <p className="mt-5 text-sm leading-7 text-slate-400">
          This policy page is starter business language for April&apos;s Site and should be reviewed by a qualified attorney before
          being used as binding legal terms.
        </p>
        <div className="mt-8 grid gap-4">
          {sections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <h2 className="font-semibold text-white">{section.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-300">{section.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
