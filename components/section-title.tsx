import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-bold normal-case leading-snug text-white sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-300">{description}</p> : null}
    </div>
  );
}
