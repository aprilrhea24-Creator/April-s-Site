"use client";

import { CheckCircle2, FileSignature, LockKeyhole, X } from "lucide-react";
import { useEffect, useState } from "react";

import { signOffProject } from "@/app/portal/[project_id]/actions";
import { projectSignOffAgreementTitle, projectSignOffTerms } from "@/lib/contracts";

export function SignOffModal({
  projectId,
  projectName,
  signed,
  canSignOff
}: {
  projectId: string;
  projectName: string;
  signed: boolean;
  canSignOff: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [legalName, setLegalName] = useState("");
  const canSubmit = confirmed && legalName.trim().length >= 2;

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  if (signed) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-emerald-300/10 px-5 py-3 text-sm font-semibold text-emerald-100">
        <CheckCircle2 className="h-4 w-4" />
        Project Signed Off
      </div>
    );
  }

  if (!canSignOff) {
    return (
      <button
        type="button"
        disabled
        className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 font-semibold text-slate-500"
      >
        <LockKeyhole className="h-5 w-5" />
        Review &amp; Sign Off Project
      </button>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#67e8f9,#a78bfa,#f0abfc)] px-6 py-3 font-semibold text-slate-950 shadow-glow hover:brightness-110"
      >
        <FileSignature className="h-5 w-5" />
        Review &amp; Sign Off Project
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="sign-off-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-md"
        >
          <div className="glass-panel max-h-full w-full max-w-2xl overflow-y-auto rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">Final release</p>
                <h2 id="sign-off-title" className="mt-3 text-3xl font-semibold text-white">
                  Review {projectName}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close sign-off dialog"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-slate-300 hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form action={signOffProject} className="mt-7 space-y-6">
              <input type="hidden" name="projectId" value={projectId} />

              <label className="feature-option flex cursor-pointer items-start gap-3 rounded-2xl p-4 text-sm leading-6 text-slate-200">
                <input
                  type="checkbox"
                  name="testingConfirmed"
                  checked={confirmed}
                  onChange={(event) => setConfirmed(event.target.checked)}
                  className="glass-checkbox mt-0.5"
                  required
                />
                <span>
                  I confirm that final testing is complete, I have reviewed the staging build, and all agreed acceptance criteria
                  have been satisfied.
                </span>
              </label>

              <div className="rounded-2xl border border-violet-200/20 bg-violet-300/[0.08] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-violet-100">{projectSignOffAgreementTitle}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  By executing this digital signature, the Client explicitly affirms the following binding terms:
                </p>
                <ol className="mt-4 space-y-3">
                  {projectSignOffTerms.map((term, index) => (
                    <li key={term.title} className="text-sm leading-7 text-slate-300">
                      <span className="font-semibold text-white">
                        {index + 1}. {term.title}:
                      </span>{" "}
                      {term.text}
                    </li>
                  ))}
                </ol>
              </div>

              <label className="block space-y-2">
                <span className="text-sm text-slate-300">Full legal name</span>
                <input
                  name="legalName"
                  value={legalName}
                  onChange={(event) => setLegalName(event.target.value)}
                  placeholder="Type your full legal name"
                  autoComplete="name"
                  className="glass-field"
                  required
                />
              </label>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Digital signature preview</p>
                <p className="mt-4 min-h-10 font-display text-2xl italic text-cyan-100">
                  {legalName.trim() || "Your signature will appear here"}
                </p>
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  Submitting creates a timestamped cryptographic receipt tied to your account and this project.
                </p>
              </div>

              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full rounded-full bg-[linear-gradient(90deg,#67e8f9,#a78bfa,#f0abfc)] px-6 py-3 font-semibold text-slate-950 shadow-glow hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Sign &amp; Release Project
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
