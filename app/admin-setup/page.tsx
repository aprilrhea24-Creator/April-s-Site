import { AdminSetupForm } from "@/components/forms/admin-setup-form";

export const dynamic = "force-dynamic";

export default function AdminSetupPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-ember">Private Setup</p>
          <h1 className="mt-4 font-display text-5xl text-ink">Create or reset chef admin access.</h1>
          <p className="mt-6 max-w-lg text-ink/70">
            Use this page only during launch setup. The private setup token is required before an account can become an
            admin.
          </p>
        </div>
        <AdminSetupForm />
      </div>
    </section>
  );
}
