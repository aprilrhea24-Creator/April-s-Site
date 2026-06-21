"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

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
    <form onSubmit={handleSubmit} className="glass-panel space-y-4 rounded-[2rem] p-8">
      {mode === "register" ? (
        <input name="name" placeholder="Full name" className="glass-field" required />
      ) : null}
      <input
        name="email"
        type="email"
        placeholder="Email address"
        className="glass-field"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="glass-field"
        required
      />
      {mode === "register" ? (
        <>
          <input name="phone" placeholder="Phone number" className="glass-field" required />
          <textarea
            name="address"
            placeholder="Company or project context"
            className="glass-field min-h-24"
            required
          />
        </>
      ) : null}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
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
