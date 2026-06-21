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
    <section className="min-h-screen bg-[#050508] px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-zinc-800/40 bg-[#0c0d12] p-6 shadow-2xl sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(0,0,0,0.08),rgba(0,0,0,0.78)_76%)]" />
        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#22d3ee] animate-pulse" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">
              Live Framework Legal
            </span>
          </div>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Policies</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-white">
            Modern SaaS and freelance application terms.
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400">
            This policy page contains Stratum Studio&apos;s operational terms and should be reviewed by a qualified attorney
            before being used as binding legal terms.
          </p>
          <div className="mt-8 grid gap-4">
            {sections.map((section) => (
              <article
                key={section.title}
                className="relative overflow-hidden rounded-2xl border border-zinc-900/60 bg-black/60 p-5 backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(0,0,0,0.04),rgba(0,0,0,0.58)_88%)]" />
                <div className="relative z-10">
                  <h2 className="font-semibold text-white">{section.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">{section.text}</p>
                </div>
              </article>
            ))}
          </div>

          <section className="relative mt-10 overflow-hidden rounded-2xl border border-zinc-800/40 bg-zinc-950/95 p-6 backdrop-blur-xl sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(0,0,0,0.08),rgba(0,0,0,0.82)_80%)]" />
            <div className="relative z-10">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#22d3ee] animate-pulse" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">
                  Operational Protocol
                </span>
              </div>
              <p className="mt-6 text-sm uppercase tracking-[0.25em] text-cyan-200">Completion and ownership</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">
                Launch routing, domains, and ongoing costs.
              </h2>
              <div className="mt-7 grid gap-4">
                {completionPolicies.map((policy) => (
                  <article
                    key={policy.title}
                    className="relative overflow-hidden rounded-2xl border border-zinc-900/60 bg-black/60 p-5 backdrop-blur-xl"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_45%,rgba(0,0,0,0.02),rgba(0,0,0,0.62)_90%)]" />
                    <div className="relative z-10 grid gap-4 sm:grid-cols-[3rem_1fr]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800/70 bg-zinc-950/80 text-xs font-semibold text-cyan-100">
                        {policy.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{policy.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-zinc-400">{policy.text}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
