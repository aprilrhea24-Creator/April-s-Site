import { SubscriptionOnboarding } from "@/components/subscription-onboarding";

export default function SubscriptionOnboardingPage() {
  return (
    <section className="command-page py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400">
            The Stratum Lifecycle Standard
          </p>
          <h1 className="font-sans text-4xl font-bold leading-tight text-white sm:text-5xl">
            Dedicated Structural Optimization &amp; Direct Health Surveillance
          </h1>

          <div className="mt-8 grid gap-6 text-base leading-8 text-zinc-300 lg:grid-cols-2">
            <div className="command-panel rounded-2xl p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">What it is</p>
              <p className="mt-3">
                The Stratum Subscription is an elite, hand-managed maintenance service designed to keep your digital asset
                operating at peak performance. By activating this layer, your platform is placed directly under my active
                monitoring matrix to ensure absolute uptime, swift error isolation, and continuous operational efficiency.
              </p>
            </div>

            <div className="command-panel rounded-2xl p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                How it works - the human workflow
              </p>
              <p className="mt-3">
                Simply log into your verified client account, drop your live production Web URL into the secure linkage tray
                below, and select your preferred service timeline. Once linked, I personally oversee your platform&apos;s system
                stability, handle ongoing layout updates, and run regular health diagnostics so your infrastructure never falls
                behind.
              </p>
            </div>
          </div>
        </div>

        <SubscriptionOnboarding />
      </div>
    </section>
  );
}
