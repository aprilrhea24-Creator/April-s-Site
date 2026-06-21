"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AuthForm({ mode, redirectTo }: { mode: "login" | "register"; redirectTo?: string }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    if (redirectTo) {
      payload.next = redirectTo;
    }

    const response = await fetch(`/api/auth/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (!response.ok) {
      setError(result.error ?? "Something went wrong.");
      setLoading(false);
      return;
    }

    router.push(result.redirectTo ?? "/client-dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="command-panel space-y-4 rounded-2xl p-8">
      {mode === "register" ? (
        <label className="block space-y-2">
          <span className="text-sm font-semibold text-zinc-200">Full name</span>
          <input
            name="name"
            autoComplete="name"
            placeholder="Your full legal name"
            minLength={2}
            className="glass-field"
            required
          />
        </label>
      ) : null}
      <label className="block space-y-2">
        <span className="text-sm font-semibold text-zinc-200">Email address</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          className="glass-field"
          required
        />
      </label>
      <label className="block space-y-2">
        <span className="text-sm font-semibold text-zinc-200">Password</span>
        <input
          name="password"
          type="password"
          autoComplete={mode === "login" ? "current-password" : "new-password"}
          placeholder="At least 8 characters"
          minLength={8}
          className="glass-field"
          required
        />
      </label>
      {mode === "register" ? (
        <>
          <label className="block space-y-2">
            <span className="text-sm font-semibold text-zinc-200">Phone number</span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Best number for project updates"
              minLength={7}
              className="glass-field"
              required
            />
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-semibold text-zinc-200">Company or project context</span>
            <textarea
              name="address"
              placeholder="Example: Website, booking portal, or operational dashboard"
              minLength={2}
              className="glass-field min-h-24"
              required
            />
            <span className="block text-xs leading-5 text-zinc-500">
              A short description is enough. You will provide full specifications on the next screen.
            </span>
          </label>
        </>
      ) : null}
      {error ? (
        <p role="alert" className="rounded-xl border border-rose-400/25 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={loading}
        className="stratum-action-gradient w-full rounded-full px-5 py-3 font-semibold transition hover:brightness-110 disabled:opacity-60"
      >
        {loading ? "Please wait..." : mode === "login" ? "Sign in" : "Create account"}
      </button>
    </form>
  );
}
