import { IconScene, LINE, LINE_STRONG, ACCENT } from "./shared";

/** Conocemos tu negocio: un local con una conversación iniciando. */
export function MeetingIllustration({ className }: { className?: string }) {
  return (
    <IconScene className={className}>
      {/* Local: base + techo en arco */}
      <path d="M28 96V56" stroke={LINE_STRONG} strokeWidth="3" />
      <path d="M92 96V56" stroke={LINE_STRONG} strokeWidth="3" />
      <path d="M22 56 L60 30 L98 56" stroke={LINE_STRONG} strokeWidth="3" />
      <path d="M28 96H92" stroke={LINE_STRONG} strokeWidth="3" />
      <rect x="48" y="72" width="24" height="24" rx="2" stroke={LINE} strokeWidth="2.4" />
      <path d="M40 66H50M70 66H80" stroke={LINE} strokeWidth="2.4" />

      {/* Burbuja de conversación */}
      <path
        d="M64 12h30a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6H82l-8 8v-8h-10a6 6 0 0 1-6-6V18a6 6 0 0 1 6-6Z"
        stroke={LINE_STRONG}
        strokeWidth="2.6"
      />
      <circle cx="76" cy="25" r="2.6" fill={ACCENT} stroke="none" />
      <circle cx="86" cy="25" r="2.6" fill={LINE} stroke="none" />
      <circle cx="96" cy="25" r="2.6" fill={LINE} stroke="none" />
    </IconScene>
  );
}
