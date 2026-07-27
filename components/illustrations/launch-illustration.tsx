import { IconScene, LINE, LINE_STRONG, ACCENT } from "./shared";

/** Publicación: un cohete despega desde una ventana de navegador. */
export function LaunchIllustration({ className }: { className?: string }) {
  return (
    <IconScene className={className}>
      {/* Ventana / plataforma de publicación */}
      <rect x="16" y="70" width="88" height="30" rx="8" stroke={LINE_STRONG} strokeWidth="2.8" />
      <path d="M30 84h20M56 84h12" stroke={LINE} strokeWidth="2.4" />
      <path d="M84 84l4 4 7-8" stroke={ACCENT} strokeWidth="2.6" />

      {/* Cohete */}
      <g transform="translate(60,42) rotate(0)">
        <path
          d="M0 -28c9 8 9 24 0 34c-9 -10 -9 -26 0 -34Z"
          stroke={LINE_STRONG}
          strokeWidth="2.6"
          fill="var(--background)"
        />
        <circle cx="0" cy="-10" r="4.2" stroke={ACCENT} strokeWidth="2.2" />
        <path d="M-6 4l-7 10M6 4l7 10" stroke={LINE} strokeWidth="2.4" />
      </g>

      {/* Estela */}
      <path d="M60 78v14" stroke={LINE} strokeWidth="2.2" strokeDasharray="1 6" />
    </IconScene>
  );
}
