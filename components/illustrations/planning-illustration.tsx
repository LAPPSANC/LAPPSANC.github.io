import { IconScene, LINE, LINE_STRONG, ACCENT } from "./shared";

/** Planeamos tu proyecto: un checklist con una idea (foco) tomando forma. */
export function PlanningIllustration({ className }: { className?: string }) {
  return (
    <IconScene className={className}>
      {/* Portapapeles */}
      <rect x="26" y="20" width="56" height="80" rx="8" stroke={LINE_STRONG} strokeWidth="3" />
      <rect x="42" y="14" width="24" height="12" rx="4" fill="var(--background)" stroke={LINE_STRONG} strokeWidth="2.6" />

      {/* Líneas de checklist */}
      <path d="M38 42h10M56 42h20" stroke={LINE} strokeWidth="2.6" />
      <path d="M38 58h10M56 58h20" stroke={LINE} strokeWidth="2.6" />
      <circle cx="41" cy="76" r="4" stroke={ACCENT} strokeWidth="2.4" />
      <path d="M56 76h20" stroke={LINE} strokeWidth="2.6" />

      {/* Idea / foco */}
      <circle cx="92" cy="34" r="14" stroke={LINE_STRONG} strokeWidth="2.6" />
      <path d="M92 44v6M87 52h10" stroke={LINE_STRONG} strokeWidth="2.6" />
      <path d="M86 30l4 6 4-6" stroke={ACCENT} strokeWidth="2.2" />
    </IconScene>
  );
}
