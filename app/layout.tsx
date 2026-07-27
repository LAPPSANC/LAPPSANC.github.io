import type { Metadata, Viewport } from "next";
import { displayFont, bodyFont, headlineFont } from "@/app/fonts";
import { ThemeProvider } from "@/providers/theme-provider";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const title = "LAPP SANC | Páginas web para negocios y emprendimientos";
const description =
  "Desarrollo de páginas web, catálogos digitales y portafolios profesionales para negocios, emprendimientos y prestadores de servicios.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: title,
    template: "%s | LAPP SANC",
  },
  description,
  keywords: [
    "páginas web para negocios",
    "desarrollador web México",
    "catálogo digital",
    "portafolio profesional",
    "páginas web Estado de México",
    "diseño web para emprendimientos",
    "desarrollo web GitHub Pages",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
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
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${bodyFont.variable} ${headlineFont.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
