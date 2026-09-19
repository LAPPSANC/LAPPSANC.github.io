import localFont from "next/font/local";

/**
 * Tipografía de titulares: Space Grotesk (variable), autoalojada mediante
 * next/font/local para no depender de una conexión a Google Fonts.
 */
export const displayFont = localFont({
  src: "./fonts/space-grotesk-variable.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "300 700",
});

/** Tipografía de cuerpo de texto: Inter (variable), autoalojada. */
export const bodyFont = localFont({
  src: "./fonts/inter-variable.woff2",
  variable: "--font-body",
  display: "swap",
  weight: "300 700",
});
