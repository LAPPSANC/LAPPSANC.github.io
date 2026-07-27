import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase mb-5",
              light
                ? "border-white/15 text-primary-light bg-white/5"
                : "border-border-strong text-primary bg-primary-soft"
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]",
            light ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-4 text-base sm:text-lg leading-relaxed",
              light ? "text-white/70" : "text-foreground-muted"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
