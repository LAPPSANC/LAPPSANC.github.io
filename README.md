# Carlos | Desarrollo Web — Portafolio comercial

Portafolio profesional construido con **Next.js 15 (App Router)**, **React**, **TypeScript**,
**Tailwind CSS** y **Framer Motion**, pensado para convertir visitas de Facebook, Instagram y
WhatsApp en clientes potenciales.

---

## 1. Requisitos

- Node.js 18.18 o superior (recomendado 20+)
- npm (incluido con Node.js)

## 2. Instalación

```bash
npm install
```

## 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## 4. Compilar para producción

```bash
npm run build
```

Esto genera una **exportación estática** en la carpeta `out/`, lista para publicarse en
GitHub Pages o cualquier hosting estático (ya está configurado `output: "export"` en
`next.config.ts`).

---

## 5. Estructura del proyecto

```
carlos-portfolio/
├── app/
│   ├── layout.tsx          # Metadatos SEO / Open Graph, fuentes, tema
│   ├── page.tsx             # Ensambla todas las secciones de la página
│   ├── globals.css          # Variables de color, animaciones, estilos base
│   ├── fonts.ts              # Configuración de tipografías (next/font/local)
│   └── fonts/                 # Archivos de fuente autoalojados (.woff2)
├── components/
│   ├── layout/               # Navbar, Footer, Loader, WhatsApp flotante, ThemeToggle
│   ├── sections/              # Hero, Beneficios, Servicios, Proyectos, Proceso, etc.
│   └── ui/                     # Button, Reveal, SectionHeading, Typewriter, iconos
├── lib/
│   ├── site-config.ts        # ⭐ Datos de contacto y marcadores editables
│   ├── content.ts              # Todo el contenido de texto del sitio
│   └── utils.ts
├── hooks/
│   └── use-active-section.ts # Detecta la sección visible para la navegación
├── providers/
│   └── theme-provider.tsx    # Modo claro / oscuro
└── public/images/             # Imágenes (actualmente con marcadores/placeholders)
```

---

## 6. Datos que debes reemplazar antes de publicar

Todo se encuentra centralizado en **`lib/site-config.ts`**. Busca los comentarios
`// [EDITAR]` y reemplaza:

| Marcador | Dónde se usa |
|---|---|
| `whatsappNumber` | Todos los botones de WhatsApp del sitio (formato internacional, ej. `521XXXXXXXXXX`) |
| `email` | Sección de contacto |
| `social.facebook` / `social.instagram` | Pie de página |
| `social.tiktok` | Pie de página y sección de contacto |
| `social.github` | Uso interno del repositorio (ya no se muestra como canal público de contacto) |
| `siteUrl` | Metadatos SEO / Open Graph (usa la URL final donde publiques el sitio) |
| `domain` | Referencia opcional a un dominio propio |
| `formspreeEndpoint` | Opcional: si quieres que el formulario también envíe a [Formspree](https://formspree.io) |

El formulario de contacto **funciona sin necesidad de backend**: al enviarse, arma un
mensaje con los datos capturados y abre WhatsApp automáticamente. Si defines
`formspreeEndpoint`, además se enviará una copia a ese servicio.

### Imágenes

- `foto-carlos.jpg` → fotografía real ya integrada en la sección "Sobre mí" (formato 4:5).
- El logotipo de LAPP SANC (`public/images/lapp-sanc-logo.png`) ya está integrado en el
  navbar, el Hero y el pie de página mediante el componente `components/layout/brand-mark.tsx`.
- `og-image.jpg` → imagen real de vista previa al compartir en Facebook/WhatsApp (1200×630px),
  generada con el logotipo sobre el fondo de marca.
- `proyecto-celulares.svg` y `proyecto-materiales.svg` → siguen siendo marcadores de
  posición; reemplázalos por capturas reales cuando las tengas (ver sección "Proyectos
  del portafolio" más abajo — ahora cada proyecto usa un arreglo `images`, no un solo
  archivo `cover`).
- `public/images/projects/lux-rohe/` → capturas reales ya integradas.

### Proyectos del portafolio

Edita el arreglo `projects` en `lib/content.ts` para actualizar nombre, descripción,
problema, solución, tecnologías y capturas de cada proyecto. Cada proyecto tiene un
arreglo `images` con las rutas de sus capturas de pantalla (una o varias — si hay más de
una, la tarjeta las rota automáticamente y el modal permite navegarlas con flechas):

```ts
images: [
  "/images/projects/mi-proyecto/1-inicio.jpg",
  "/images/projects/mi-proyecto/2-catalogo.jpg",
],
```

Coloca las capturas en `public/images/projects/<nombre-del-proyecto>/`. Para agregar un
proyecto nuevo, copia un objeto existente y ajústalo; la sección de Proyectos se genera
automáticamente a partir de esta lista.

---

## 7. Modo claro / oscuro

El botón de la barra de navegación cambia entre modo claro y oscuro. La preferencia se
guarda automáticamente en el navegador del visitante (mediante la librería `next-themes`).

## 8. Colores y tipografía

Todos los colores están definidos como variables CSS en `app/globals.css` (`:root` para
modo claro, `[data-theme="dark"]` para modo oscuro). Cambiar, por ejemplo, `--primary`
actualiza el azul eléctrico en todo el sitio.

Las tipografías (Space Grotesk para títulos, Inter para texto) están autoalojadas en
`app/fonts/` mediante `next/font/local`, por lo que el sitio no depende de conexión a
Google Fonts para funcionar.

---

## 9. Publicar en GitHub Pages

1. Sube el proyecto a un repositorio de GitHub.
2. Si vas a publicar en un **repositorio de proyecto**
   (`https://tu-usuario.github.io/nombre-del-repo`), define la variable de entorno antes
   de compilar:

   ```bash
   export NEXT_PUBLIC_BASE_PATH="/nombre-del-repo"
   npm run build
   ```

   Si vas a publicar en un **repositorio de usuario**
   (`https://tu-usuario.github.io`), no necesitas definir esta variable.

3. El sitio estático se genera en `out/`. Puedes publicarlo con GitHub Actions o
   manualmente:

   **Opción A — GitHub Actions (recomendada):**
   Crea `.github/workflows/deploy.yml` con un flujo que ejecute `npm run build` y publique
   la carpeta `out/` usando la acción oficial `actions/deploy-pages`. En la configuración
   del repositorio, activa **Settings → Pages → Source: GitHub Actions**.

   **Opción B — Manual:**
   ```bash
   npm run build
   npx gh-pages -d out
   ```

4. Verifica que el sitio cargue correctamente en la URL publicada y que los botones de
   WhatsApp abran con tu número real.

## 10. Dominio personalizado (opcional)

Si contratas un dominio propio, agrégalo en **Settings → Pages → Custom domain** del
repositorio y actualiza `siteUrl` y `domain` en `lib/site-config.ts`.

---

## 11. Accesibilidad y rendimiento

- Navegación completa con teclado y foco visible.
- Se respeta `prefers-reduced-motion` para desactivar animaciones si el usuario lo prefiere.
- Imágenes con texto alternativo y carga diferida (`next/image`).
- Contraste de color verificado para texto y botones.

## 12. Alcance del sitio

Este sitio **no incluye** carrito de compras, pagos en línea, registro de usuarios ni
inicio de sesión, conforme al alcance definido para este portafolio comercial.

---

© 2026 Carlos Manuel Sánchez Martínez.
