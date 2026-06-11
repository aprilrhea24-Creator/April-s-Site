"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AdminSetupForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/admin/setup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (!response.ok) {
      setError(result.error ?? "Unable to configure admin account.");
      setLoading(false);
      return;
    }

    router.push(result.redirectTo ?? "/admin");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-[2rem] border border-ink/10 bg-white p-8 shadow-soft">
      <input
        name="setupToken"
        type="password"
        placeholder="Admin setup token"
        className="w-full rounded-2xl border border-ink/10 px-4 py-3 outline-none"
        required
      />
      <input
        name="name"
        placeholder="Chef or admin name"
        className="w-full rounded-2xl border border-ink/10 px-4 py-3 outline-none"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Admin email address"
        className="w-full rounded-2xl border border-ink/10 px-4 py-3 outline-none"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="New admin password"
        className="w-full rounded-2xl border border-ink/10 px-4 py-3 outline-none"
        required
      />
      <input
        name="phone"
        placeholder="Phone number"
        className="w-full rounded-2xl border border-ink/10 px-4 py-3 outline-none"
        required
      />
      <textarea
        name="address"
        placeholder="Business or primary address"
        className="min-h-24 w-full rounded-2xl border border-ink/10 px-4 py-3 outline-none"
        required
      />
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-ink px-5 py-3 font-medium text-cream transition hover:bg-olive disabled:opacity-60"
      >
        {loading ? "Saving..." : "Create Admin Access"}
      </button>
    </form>
  );
}
