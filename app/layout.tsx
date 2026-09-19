import type { Metadata, Viewport } from "next";
import { displayFont, bodyFont } from "@/app/fonts";
import { ThemeProvider } from "@/providers/theme-provider";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const title = "LAPP SANC | Desarrollo web, IA y automatización para negocios";
const description =
  "Agencia digital: páginas web, catálogos digitales, inteligencia artificial y automatización para negocios, emprendimientos y prestadores de servicios.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: title,
    template: "%s | LAPP SANC",
  },
  description,
  keywords: [
    "desarrollo web para negocios",
    "landing pages premium",
    "sitios corporativos",
    "catálogo digital",
    "inteligencia artificial para negocios",
    "automatización de procesos",
    "asistentes de IA para WhatsApp",
    "páginas web Estado de México",
    "agencia digital México",
  ],
  authors: [{ name: siteConfig.brand }],
  creator: siteConfig.brand,
  applicationName: siteConfig.brand,
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteConfig.siteUrl,
    siteName: siteConfig.brand,
    title,
    description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#07080C" },
  ],
};

// Datos estructurados (JSON-LD) para que los buscadores entiendan que
// LAPP SANC es una organización de servicios digitales — sin inventar
// datos (sin reseñas, calificaciones ni cifras que no existen).
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.brand,
  url: siteConfig.siteUrl,
  description,
  areaServed: siteConfig.location,
  sameAs: [] as string[],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${displayFont.variable} ${bodyFont.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
