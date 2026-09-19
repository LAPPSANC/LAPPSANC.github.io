import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

/**
 * Genera sitemap.xml en tiempo de build. Al ser un sitio de una sola
 * página, el mapa lista la portada y sus anclas principales — suficiente
 * para que los buscadores entiendan la estructura del sitio.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
  ];
}
