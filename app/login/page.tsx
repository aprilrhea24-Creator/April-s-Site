import Link from "next/link";

import { AuthForm } from "@/components/forms/auth-form";

export default function LoginPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="glass-panel rounded-[2rem] p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Welcome back</p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-white">Sign in to manage your app workspace.</h1>
          <p className="mt-6 max-w-lg text-slate-300">
            Review build requests, project milestones, approvals, and private dashboard previews from one secure place.
          </p>
        </div>
        <div>
          <AuthForm mode="login" />
          <p className="mt-4 text-sm text-slate-300">
            Need an account?{" "}
            <Link href="/register" className="text-cyan-200">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
