import Link from "next/link";

import { AuthForm } from "@/components/forms/auth-form";

export default function RegisterPage() {
  return (
    <section className="command-page px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
        <div className="command-panel relative overflow-hidden rounded-2xl p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(124,58,237,0.09),transparent_44%)]" />
          <div className="relative z-10">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Client onboarding</p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-white">Create your account and start a private build request.</h1>
          <p className="mt-6 max-w-lg text-zinc-400">
            Save business requirements, review milestones, and access a premium workspace for your custom application project.
          </p>
          </div>
        </div>
        <div>
          <AuthForm mode="register" />
          <p className="mt-4 text-sm text-zinc-400">
            Already have an account?{" "}
            <Link href="/login" className="text-cyan-300 transition-colors hover:text-white">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
