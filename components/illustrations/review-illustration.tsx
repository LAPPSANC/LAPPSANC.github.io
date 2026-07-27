import { IconScene, LINE, LINE_STRONG, ACCENT } from "./shared";

/** Revisión: ventana con checklist observada por una lupa. */
export function ReviewIllustration({ className }: { className?: string }) {
  return (
    <IconScene className={className}>
      {/* Ventana con lista */}
      <rect x="14" y="18" width="70" height="66" rx="8" stroke={LINE_STRONG} strokeWidth="2.8" />
      <path d="M14 32h70" stroke={LINE_STRONG} strokeWidth="2.8" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(26, ${44 + i * 14})`}>
          <rect width="9" height="9" rx="2.5" stroke={LINE} strokeWidth="2" />
          <path d="M18 4.5h34" stroke={LINE} strokeWidth="2.2" />
        </g>
      ))}

      {/* Lupa */}
      <circle cx="82" cy="76" r="18" fill="var(--background)" stroke={LINE_STRONG} strokeWidth="3" />
      <path d="M95 89l11 11" stroke={LINE_STRONG} strokeWidth="4" />
      <path d="M75 76l5 5 9-10" stroke={ACCENT} strokeWidth="2.8" />
    </IconScene>
  );
}
