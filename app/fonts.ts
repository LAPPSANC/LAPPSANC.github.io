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

/**
 * Tipografía del titular principal del Hero: Orbitron (variable), un
 * geométrico de carácter tecnológico/automotriz que combina con el trazo
 * del logotipo. Se usa únicamente en el H1, no en toda la interfaz, para
 * no perder la limpieza tipográfica del resto del sitio.
 */
export const headlineFont = localFont({
  src: "./fonts/orbitron-variable.woff2",
  variable: "--font-headline",
  display: "swap",
  weight: "400 900",
});
