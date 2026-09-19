"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { MotionConfig } from "framer-motion";

/**
 * Proveedor de tema (claro / oscuro) + configuración global de animación.
 *
 * `MotionConfig reducedMotion="user"` hace que TODAS las animaciones de
 * Framer Motion del sitio (elevaciones al pasar el mouse, la inclinación
 * 3D de la tarjeta de Planes, las entradas al hacer scroll, el botón
 * magnético) respeten automáticamente "prefers-reduced-motion" del
 * sistema operativo. La regla CSS en globals.css ya cubría las
 * animaciones puramente CSS (el brillo neón, por ejemplo), pero Framer
 * Motion anima mediante JavaScript y no obedecía esa regla por sí solo —
 * sin esto, alguien con esa preferencia activada seguía viendo el resto
 * del movimiento del sitio.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </NextThemesProvider>
  );
}
