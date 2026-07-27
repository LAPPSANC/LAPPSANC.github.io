import { IconScene, LINE, LINE_STRONG, ACCENT } from "./shared";

/** Diseño: capas superpuestas y una pluma de diseño trazando una forma. */
export function DesignIllustration({ className }: { className?: string }) {
  return (
    <IconScene className={className}>
      {/* Capas apiladas */}
      <rect x="18" y="46" width="56" height="56" rx="8" stroke={LINE} strokeWidth="2.4" />
      <rect x="30" y="34" width="56" height="56" rx="8" stroke={LINE_STRONG} strokeWidth="2.6" fill="var(--background)" />
      <path d="M42 56h32M42 68h32M42 80h20" stroke={LINE} strokeWidth="2.2" />

      {/* Pluma de diseño */}
      <g transform="rotate(20 92 30)">
        <path d="M92 12v34" stroke={LINE_STRONG} strokeWidth="2.8" />
        <path d="M92 12l-6 12h12l-6-12Z" fill={LINE_STRONG} stroke="none" />
      </g>
      <circle cx="86" cy="86" r="4" fill={ACCENT} stroke="none" />
    </IconScene>
  );
}
