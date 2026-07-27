/**
 * Lenguaje visual compartido por los iconos del proceso de trabajo:
 * ilustraciones lineales minimalistas, monocromáticas (plata / blanco),
 * con un único acento en azul de marca. Son imágenes estáticas, sin
 * animación, pensadas para sentirse tan cuidadas como un set de iconos de
 * Linear o Vercel.
 */

export const LINE = "var(--foreground-muted)";
export const LINE_STRONG = "var(--foreground)";
export const ACCENT = "var(--primary)";

export function IconScene({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-hidden
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}
