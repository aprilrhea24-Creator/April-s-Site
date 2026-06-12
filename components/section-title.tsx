import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light"
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="text-sm font-black uppercase tracking-[0.35em] text-[#f00612]">{eyebrow}</p>
      <h2
        className={cn(
          "mt-4 text-4xl font-black uppercase italic leading-[0.95] tracking-wide sm:text-6xl",
          tone === "dark" ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-5 text-base font-semibold leading-8", tone === "dark" ? "text-white/55" : "text-ink/70")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
