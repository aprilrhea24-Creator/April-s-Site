import { redirect } from "next/navigation";
import { CheckCircle2, LockKeyhole } from "lucide-react";

import { approveBooking } from "@/app/workspace/actions";
import { requireAdmin } from "@/lib/auth";
import { getPrisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const MONTHLY_REVENUE_TARGET = 25000;
const ACTIVE_PROJECT_TARGET = 12;
const SIGN_OFF_TARGET = 8;

type ProgressRingProps = {
  accent: "gold" | "cyan" | "violet";
  label: string;
  progress: number;
  supportingText: string;
  value: string;
};

const ringStyles = {
  gold: {
    gradient: ["#fde68a", "#f59e0b"],
    glow: "drop-shadow-[0_0_10px_rgba(245,158,11,0.72)]",
    text: "text-amber-200"
  },
  cyan: {
    gradient: ["#67e8f9", "#06b6d4"],
    glow: "drop-shadow-[0_0_10px_rgba(34,211,238,0.72)]",
    text: "text-cyan-200"
  },
  violet: {
    gradient: ["#c4b5fd", "#8b5cf6"],
    glow: "drop-shadow-[0_0_10px_rgba(139,92,246,0.78)]",
    text: "text-violet-200"
  }
} as const;

function ProgressRing({ accent, label, progress, supportingText, value }: ProgressRingProps) {
  const safeProgress = Math.min(100, Math.max(0, progress));
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (safeProgress / 100) * circumference;
  const style = ringStyles[accent];
  const gradientId = `metric-${accent}`;

  return (
    <article className="command-panel grid min-h-48 grid-cols-[auto_1fr] items-center gap-5 rounded-2xl p-6">
      <div className="relative h-28 w-28 shrink-0">
        <svg className="-rotate-90" viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={style.gradient[0]} />
              <stop offset="100%" stopColor={style.gradient[1]} />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
          <circle
            className={style.glow}
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            strokeWidth="7"
          />
        </svg>
        <span className={`absolute inset-0 flex items-center justify-center text-lg font-bold ${style.text}`}>
          {Math.round(safeProgress)}%
        </span>
      </div>
      <div>
        <p className="text-sm font-medium text-zinc-300">{label}</p>
        <p className="mt-2 font-display text-3xl font-bold text-white">{value}</p>
        <p className="mt-2 text-xs leading-5 text-zinc-500">{supportingText}</p>
      </div>
    </article>
  );
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

export default async function WorkspacePage() {
  try {
    await requireAdmin();
  } catch {
    redirect("/login");
  }

  const prisma = getPrisma();
  const monthStart = new Date();
  monthStart.setDate(1);
  monthStart.setHours(0, 0, 0, 0);

  const [monthlyRevenueResult, activeProjects, pendingSignOffs, pendingBookings] = await Promise.all([
    prisma.payment.aggregate({
      where: {
        status: "PAID",
        paidAt: { gte: monthStart }
      },
      _sum: { amount: true }
    }),
    prisma.clientProject.count({
      where: {
        status: { in: ["DISCOVERY", "IN_PROGRESS", "CLIENT_REVIEW"] }
      }
    }),
    prisma.clientProject.count({
      where: {
        status: "CLIENT_REVIEW",
        signOff: { is: null }
      }
    }),
    prisma.booking.findMany({
      where: { status: "PENDING" },
      include: {
        user: {
          select: {
            name: true,
            email: true
          }
        }
      },
      orderBy: { createdAt: "asc" },
      take: 8
    })
  ]);

  const monthlyRevenue = Number(monthlyRevenueResult._sum.amount ?? 0);

  return (
    <section className="command-page px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Private workspace</p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-white">Premium analytics dashboard preview.</h1>
          <p className="mt-4 max-w-2xl text-zinc-400">
            This guarded module demonstrates the executive dashboard clients receive when their operational system goes live.
          </p>
        </div>
        <div className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-2 text-sm text-cyan-100">
          <LockKeyhole className="mr-2 inline h-4 w-4" />
          Admin only
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <ProgressRing
          accent="gold"
          label="Total Revenue Transacted"
          progress={(monthlyRevenue / MONTHLY_REVENUE_TARGET) * 100}
          supportingText={`${formatCurrency(MONTHLY_REVENUE_TARGET)} monthly earnings target`}
          value={formatCurrency(monthlyRevenue)}
        />
        <ProgressRing
          accent="cyan"
          label="Active Projects"
          progress={(activeProjects / ACTIVE_PROJECT_TARGET) * 100}
          supportingText={`${ACTIVE_PROJECT_TARGET} concurrent-project capacity`}
          value={String(activeProjects)}
        />
        <ProgressRing
          accent="violet"
          label="Pending Sign-Offs"
          progress={(pendingSignOffs / SIGN_OFF_TARGET) * 100}
          supportingText="Clients currently waiting at Milestone 4"
          value={String(pendingSignOffs)}
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="command-panel rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-white">Implementation timeline</h2>
          <div className="mt-6 space-y-4">
            {["Discovery approved", "Prototype review", "Automation QA", "Launch and training"].map((stage, index) => (
              <div key={stage} className="command-surface rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-white">{stage}</p>
                  <p className="text-sm text-cyan-100">{25 * (index + 1)}%</p>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/80">
                  <div className="stratum-progress h-2 rounded-full" style={{ width: `${25 * (index + 1)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="command-panel rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-white">Client intelligence</h2>
          <div className="mt-6 space-y-4 text-sm text-zinc-300">
            <p className="command-surface rounded-xl p-4">At-risk scope changes are flagged before they become unpaid labor.</p>
            <p className="command-surface rounded-xl p-4">Deposits, milestones, and approvals remain attached to the project record.</p>
            <p className="command-surface rounded-xl p-4">Executive reporting can be customized for each client&apos;s industry.</p>
          </div>
        </div>
      </div>

      <div className="command-panel mt-8 overflow-hidden rounded-2xl">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 p-6">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Request workflow</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-white">Pending booking approvals</h2>
          </div>
          <p className="text-sm text-zinc-500">{pendingBookings.length} awaiting review</p>
        </div>

        {pendingBookings.length ? (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead className="border-b border-zinc-800/70 bg-black/40 text-xs uppercase tracking-[0.16em] text-zinc-500">
                <tr>
                  <th className="px-6 py-4 font-medium">Client</th>
                  <th className="px-6 py-4 font-medium">Service</th>
                  <th className="px-6 py-4 font-medium">Scheduled</th>
                  <th className="px-6 py-4 font-medium">Total</th>
                  <th className="px-6 py-4 text-right font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/70">
                {pendingBookings.map((booking) => (
                  <tr key={booking.id} className="transition-colors hover:bg-white/[0.025]">
                    <td className="px-6 py-5">
                      <p className="font-medium text-white">{booking.user.name}</p>
                      <p className="mt-1 text-sm text-zinc-500">{booking.user.email}</p>
                    </td>
                    <td className="px-6 py-5 text-sm text-zinc-300">{booking.type.replaceAll("_", " ")}</td>
                    <td className="px-6 py-5 text-sm text-zinc-300">
                      {booking.startAt.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </td>
                    <td className="px-6 py-5 text-sm font-medium text-white">{formatCurrency(Number(booking.totalPrice))}</td>
                    <td className="px-6 py-5 text-right">
                      <form action={approveBooking}>
                        <input type="hidden" name="bookingId" value={booking.id} />
                        <button
                          type="submit"
                          className="stratum-action-gradient inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all hover:brightness-110"
                        >
                          <CheckCircle2 className="h-4 w-4" />
                          Approve Booking
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center">
            <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-300" />
            <p className="mt-4 font-medium text-white">All booking requests are up to date.</p>
            <p className="mt-2 text-sm text-zinc-500">New pending requests will appear here automatically.</p>
          </div>
        )}
      </div>
      </div>
    </section>
  );
}
