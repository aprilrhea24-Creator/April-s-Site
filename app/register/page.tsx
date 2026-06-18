import Link from "next/link";

import { AuthForm } from "@/components/forms/auth-form";

export default function RegisterPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="glass-panel rounded-[2rem] p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Client onboarding</p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-white">Create your account and start a private build request.</h1>
          <p className="mt-6 max-w-lg text-slate-300">
            Save business requirements, review milestones, and access a premium workspace for your custom application project.
          </p>
        </div>
        <div>
          <AuthForm mode="register" />
          <p className="mt-4 text-sm text-slate-300">
            Already have an account?{" "}
            <Link href="/login" className="text-cyan-200">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
