import type { NextConfig } from "next";

/**
 * Configuración para publicar el sitio como export estático, compatible
 * con GitHub Pages (y con cualquier hosting estático).
 *
 * Si publicas en un repositorio de proyecto (usuario.github.io/mi-repo),
 * define la variable de entorno NEXT_PUBLIC_BASE_PATH="/mi-repo" antes de
 * ejecutar "npm run build" (ver README.md). Si publicas en un repositorio
 * de usuario (usuario.github.io), no es necesario definirla.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    // El optimizador de imágenes de Next.js requiere un servidor; en un
    // export estático (GitHub Pages) las imágenes se sirven tal cual.
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
