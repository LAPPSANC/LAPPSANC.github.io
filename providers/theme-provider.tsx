"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Proveedor de tema (claro / oscuro). Utiliza el atributo "data-theme" para
 * coincidir con las variables definidas en globals.css y guarda la
 * preferencia del usuario automáticamente (localStorage, vía next-themes).
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
      {children}
    </NextThemesProvider>
  );
}
