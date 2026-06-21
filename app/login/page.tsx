import Link from "next/link";

import { AuthForm } from "@/components/forms/auth-form";

export default function LoginPage() {
  return (
    <section className="command-page px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
        <div className="command-panel relative overflow-hidden rounded-2xl p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(0,212,232,0.08),transparent_42%)]" />
          <div className="relative z-10">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Welcome back</p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-white">Sign in to manage your app workspace.</h1>
          <p className="mt-6 max-w-lg text-zinc-400">
            Review build requests, project milestones, approvals, and private dashboard previews from one secure place.
          </p>
          </div>
        </div>
        <div>
          <AuthForm mode="login" />
          <p className="mt-4 text-sm text-zinc-400">
            Need an account?{" "}
            <Link href="/register" className="text-cyan-300 transition-colors hover:text-white">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
