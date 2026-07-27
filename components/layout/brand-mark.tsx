"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  size?: "sm" | "lg";
  float?: boolean;
  tagline?: boolean;
  className?: string;
};

// Proporción real del PNG del logo (ancho/alto ≈ 2.26), usada al elegir
// los pares alto/ancho de Tailwind más abajo.

/**
 * Marca de LAPP SANC: el logotipo completo (icono + letras) tal como fue
 * entregado, usado siempre como una sola imagen — no se recompone con
 * texto HTML aparte, para respetar el diseño original del logo. `float`
 * agrega la flotación y el brillo metálico sutil pensados para el Hero.
 * `tagline` agrega la leyenda "Desarrollo Web" junto al logo (pensada
 * para el navbar, donde el logo por sí solo queda muy compacto).
 *
 * El tamaño usa clases responsivas de Tailwind (no un único valor en px
 * calculado en JS) para que realmente se achique en teléfonos angostos.
 */
export function BrandMark({ size = "sm", float = false, tagline = false, className }: BrandMarkProps) {
  const shouldReduceMotion = useReducedMotion();

  const logo = (
    <motion.div
      className={cn(
        "relative shrink-0",
        size === "lg" ? "h-28 w-[253px] sm:h-36 sm:w-[325px] md:h-44 md:w-[398px]" : "h-8 w-[72px] sm:h-9 sm:w-[81px]"
      )}
      animate={
        float && !shouldReduceMotion
          ? { y: [0, -16, 2, -10, 0], x: [0, 4, -3, 2, 0], rotate: [0, 1.5, -1, 0.5, 0] }
          : undefined
      }
      transition={
        float && !shouldReduceMotion
          ? { duration: 8, repeat: Infinity, ease: "easeInOut" }
          : undefined
      }
    >
      <Image
        src="/images/lapp-sanc-logo.png"
        alt="LAPP SANC"
        fill
        sizes={size === "lg" ? "361px" : "81px"}
        className="object-contain"
        priority={size === "lg"}
      />
      {float && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 mix-blend-overlay animate-shimmer"
        />
      )}
    </motion.div>
  );

  if (!tagline) {
    return <div className={cn("min-w-0", className)}>{logo}</div>;
  }

  return (
    <div className={cn("flex min-w-0 items-center gap-2.5", className)}>
      {logo}
      <span className="h-6 w-px shrink-0 bg-border" aria-hidden />
      <span className="min-w-0 truncate text-[11px] sm:text-xs font-medium text-foreground-muted">
        Desarrollo Web
      </span>
    </div>
  );
}
