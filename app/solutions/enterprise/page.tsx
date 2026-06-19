"use client";

import { ArrowLeft, CheckCircle2, FileUp, FolderLock, LayoutDashboard, UploadCloud } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const metrics = [
  { label: "Workflow health", value: 92, color: "#34d399" },
  { label: "Team capacity", value: 76, color: "#60a5fa" },
  { label: "Files secured", value: 88, color: "#2dd4bf" }
];

const initialTasks = [
  { id: 1, name: "Approve vendor access", done: true },
  { id: 2, name: "Review Q3 automation map", done: false },
  { id: 3, name: "Publish operations summary", done: false }
];

export default function EnterprisePreviewPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  function acceptFile(file?: File) {
    if (file) {
      setUploadedFile(file.name);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060a14]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,rgba(59,130,246,0.25),transparent_24%),radial-gradient(circle_at_85%_65%,rgba(16,185,129,0.16),transparent_25%),linear-gradient(180deg,#060a14_0%,#071322_50%,#050811_100%)]" />

      <Link
        href="/solutions"
        className="fixed left-4 top-20 z-40 inline-flex items-center gap-2 rounded-full border border-blue-200/20 bg-[rgba(7,18,34,0.8)] px-4 py-2.5 text-sm font-semibold text-blue-50 shadow-lg backdrop-blur-xl hover:bg-blue-300/10 sm:left-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Stratum Solutions
      </Link>

      <main className="relative mx-auto max-w-7xl px-4 pb-24 pt-36 sm:px-6 lg:px-8">
        <section className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.26em] text-emerald-200">
              <LayoutDashboard className="h-5 w-5" />
              Matrix Operations
            </p>
            <h1 className="mt-5 text-5xl font-semibold text-white sm:text-6xl">Operational clarity, without the clutter.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              A clean command environment for live metrics, automated work queues, and secure company files.
            </p>
          </div>
          <div className="rounded-full border border-emerald-200/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100 backdrop-blur-lg">
            All systems operational
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {metrics.map((metric) => (
            <article key={metric.label} className="glass-panel grid grid-cols-[7rem_1fr] items-center gap-5 rounded-[2rem] p-6">
              <div
                className="flex h-24 w-24 items-center justify-center rounded-full"
                style={{
                  background: `conic-gradient(${metric.color} ${metric.value * 3.6}deg, rgba(255,255,255,0.08) 0deg)`
                }}
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0a1120] text-xl font-semibold text-white">
                  {metric.value}%
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-400">{metric.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">Healthy</p>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-blue-200">Automated task board</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Today&apos;s operations</h2>
              </div>
              <CheckCircle2 className="h-7 w-7 text-emerald-300" />
            </div>
            <div className="mt-7 space-y-3">
              {tasks.map((task) => (
                <button
                  key={task.id}
                  type="button"
                  onClick={() =>
                    setTasks((current) =>
                      current.map((item) => (item.id === task.id ? { ...item, done: !item.done } : item))
                    )
                  }
                  className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left ${
                    task.done
                      ? "border-emerald-200/25 bg-emerald-300/10"
                      : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                      task.done ? "border-emerald-200 bg-emerald-300 text-emerald-950" : "border-white/20"
                    }`}
                  >
                    {task.done ? <CheckCircle2 className="h-4 w-4" /> : null}
                  </span>
                  <span className={task.done ? "text-slate-400 line-through" : "text-slate-200"}>{task.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <FolderLock className="h-7 w-7 text-blue-200" />
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-emerald-200">Secure files</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">Upload simulation</h2>
              </div>
            </div>

            <input
              ref={fileInput}
              type="file"
              className="hidden"
              onChange={(event) => acceptFile(event.target.files?.[0])}
            />
            <button
              type="button"
              onClick={() => fileInput.current?.click()}
              onDragEnter={(event) => {
                event.preventDefault();
                setDragging(true);
              }}
              onDragOver={(event) => event.preventDefault()}
              onDragLeave={() => setDragging(false)}
              onDrop={(event) => {
                event.preventDefault();
                setDragging(false);
                acceptFile(event.dataTransfer.files[0]);
              }}
              className={`mt-7 flex min-h-56 w-full flex-col items-center justify-center rounded-2xl border border-dashed p-6 text-center ${
                dragging
                  ? "border-emerald-200/60 bg-emerald-300/15"
                  : "border-blue-200/25 bg-blue-300/[0.06] hover:bg-blue-300/10"
              }`}
            >
              {uploadedFile ? (
                <>
                  <FileUp className="h-10 w-10 text-emerald-300" />
                  <p className="mt-4 font-semibold text-white">{uploadedFile}</p>
                  <p className="mt-2 text-sm text-emerald-100">Secure upload simulation complete</p>
                </>
              ) : (
                <>
                  <UploadCloud className="h-10 w-10 text-blue-200" />
                  <p className="mt-4 font-semibold text-white">Drop a file or browse</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">Files remain local in this visual preview.</p>
                </>
              )}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
