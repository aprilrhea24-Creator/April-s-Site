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
        <input name="name" placeholder="Full name" className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none" required />
      ) : null}
      <input
        name="email"
        type="email"
        placeholder="Email address"
        className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none"
        required
      />
      {mode === "register" ? (
        <>
          <input name="phone" placeholder="Phone number" className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none" required />
          <textarea
            name="address"
            placeholder="Company or project context"
            className="min-h-24 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none"
            required
          />
        </>
      ) : null}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[linear-gradient(90deg,#67e8f9,#a78bfa,#f0abfc)] px-5 py-3 font-semibold text-slate-950 transition hover:brightness-110 disabled:opacity-60"
      >
        {loading ? "Please wait..." : mode === "login" ? "Sign in" : "Create account"}
      </button>
    </form>
  );
}
