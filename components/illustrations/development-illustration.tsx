import { IconScene, LINE, LINE_STRONG, ACCENT } from "./shared";

/** Desarrollo: ventana de código con la etiqueta </> y un cursor activo. */
export function DevelopmentIllustration({ className }: { className?: string }) {
  return (
    <IconScene className={className}>
      {/* Ventana */}
      <rect x="14" y="24" width="92" height="72" rx="8" stroke={LINE_STRONG} strokeWidth="2.8" />
      <path d="M14 40h92" stroke={LINE_STRONG} strokeWidth="2.8" />
      <circle cx="24" cy="32" r="2.4" fill={LINE} stroke="none" />
      <circle cx="32" cy="32" r="2.4" fill={LINE} stroke="none" />
      <circle cx="40" cy="32" r="2.4" fill={LINE} stroke="none" />

      {/* Símbolo de código */}
      <path d="M46 58l-12 12 12 12" stroke={ACCENT} strokeWidth="3.2" />
      <path d="M74 58l12 12-12 12" stroke={ACCENT} strokeWidth="3.2" />
      <path d="M64 54l-8 32" stroke={LINE_STRONG} strokeWidth="3" />

      {/* Cursor parpadeante */}
      <rect x="24" y="80" width="10" height="3" rx="1.5" fill={LINE} stroke="none" />
    </IconScene>
  );
}
