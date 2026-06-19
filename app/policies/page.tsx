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
    text: "Clients own final paid deliverables created specifically for their project after outstanding invoices are paid. Pre-existing frameworks, reusable components, know-how, system foundations, and studio tooling remain the studio's property unless expressly transferred in writing."
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

const completionPolicies = [
  {
    step: "01",
    title: "Final routing steps",
    text: "Upon final contract execution and balance clearance, the system automatically triggers a comprehensive Production Welcome Package email containing full system links and account management keys."
  },
  {
    step: "02",
    title: "Domain configuration policy",
    text: "Clients are responsible for securing their own domain name registration to guarantee complete brand ownership. Stratum Studio provides full DNS configuration and deployment connection assistance into Vercel at no extra cost during the launch window."
  },
  {
    step: "03",
    title: "Ongoing subscriptions",
    text: "Ongoing third-party domain renewal fees and hosting platform tier costs are the sole financial responsibility of the client following live deployment."
  }
];

export default function PoliciesPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="glass-panel rounded-[2rem] p-8">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Policies</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-white">Modern SaaS and freelance application terms.</h1>
        <p className="mt-5 text-sm leading-7 text-slate-400">
          This policy page contains Stratum Studio&apos;s operational terms and should be reviewed by a qualified attorney before
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

        <section className="mt-10 rounded-[2rem] border border-cyan-200/15 bg-[linear-gradient(145deg,rgba(34,211,238,0.08),rgba(139,92,246,0.08),rgba(3,7,18,0.26))] p-6 shadow-[0_24px_80px_rgba(2,8,23,0.3)] backdrop-blur-xl sm:p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Completion and ownership</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white">Launch routing, domains, and ongoing costs.</h2>
          <div className="mt-7 grid gap-4">
            {completionPolicies.map((policy) => (
              <article
                key={policy.title}
                className="grid gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 sm:grid-cols-[3rem_1fr]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-200/25 bg-violet-300/10 text-xs font-semibold text-violet-100">
                  {policy.step}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{policy.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{policy.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
