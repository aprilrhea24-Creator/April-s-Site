import Link from "next/link";

import { AuthForm } from "@/components/forms/auth-form";
import { getDatabaseSetupMessage, isDatabaseConfigured } from "@/lib/env";

export default function RegisterPage() {
  const databaseReady = isDatabaseConfigured();

  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-ember">Client onboarding</p>
          <h1 className="mt-4 font-display text-5xl text-ink">Create your account and start booking chef services.</h1>
          <p className="mt-6 max-w-lg text-ink/70">
            Save event details, checkout faster, and access a dashboard for catering, meal prep, and private chef bookings.
          </p>
        </div>
        <div>
          <AuthForm
            mode="register"
            disabled={!databaseReady}
            disabledMessage={!databaseReady ? getDatabaseSetupMessage() : undefined}
          />
          <p className="mt-4 text-sm text-ink/70">
            Already have an account?{" "}
            <Link href="/login" className="text-ember">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
