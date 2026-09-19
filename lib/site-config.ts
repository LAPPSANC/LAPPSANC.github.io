/**
 * CONFIGURACIÓN DEL SITIO
 * ---------------------------------------------------------------------------
 * Única fuente de verdad para los datos que identifican a la empresa: el
 * WhatsApp Business de LAPP SANC, correo, dominio y redes OFICIALES de la
 * marca. Ningún componente debe usar un número o enlace escrito a mano —
 * todos deben leer de aquí, para que cambiarlo en un solo lugar actualice
 * todo el sitio.
 *
 * IMPORTANTE: reemplaza los valores marcados como "[EDITAR]" antes de
 * publicar. No se inventó ningún dato sensible o de contacto real.
 */

export const siteConfig = {
  brand: "LAPP SANC",
  legalName: "LAPP SANC", // Razón/nombre para el aviso de copyright del footer
  tagline: "Tecnología para hacer crecer tu negocio",
  location: "Estado de México, México",
  siteUrl: "https://lappsanc.github.io",
  domain: "[DOMINIO]", // [EDITAR] dominio personalizado, si se contrata uno

  // WhatsApp Business de LAPP SANC — número empresarial, no personal.
  // Formato internacional, sin espacios ni símbolos. Ejemplo: "521XXXXXXXXXX"
  whatsappNumber: "+5217204735879",
  email: "[CORREO_ELECTRONICO]", // [EDITAR]

  // Redes OFICIALES de la marca únicamente (no perfiles personales). Deja
  // el valor vacío ("") si todavía no existe la cuenta oficial: los
  // componentes que consumen esto no muestran el enlace hasta que tenga
  // un valor real (ver `hasLink` más abajo), así nunca se publica un
  // enlace roto o un placeholder sin llenar.
  social: {
    facebook: "", // [EDITAR] página oficial de LAPP SANC, cuando exista
  },

  // Uso interno (no se muestra como canal de contacto en el sitio).
  githubUser: "[USUARIO_DE_GITHUB]", // [EDITAR]

  // Servicio externo opcional para el formulario de contacto (Formspree).
  // Deja vacío para usar únicamente el envío por WhatsApp.
  formspreeEndpoint: "", // [EDITAR] ej. "https://formspree.io/f/xxxxxxx"

  ogImage: "/images/og-image.jpg",
} as const;

/** True si un valor de configuración ya fue llenado (no es "" ni un
 *  marcador [EDITAR] sin completar). Úsalo antes de renderizar cualquier
 *  enlace opcional para no publicar un placeholder como si fuera real. */
export function hasLink(value: string): value is string {
  return value.trim().length > 0 && !/^\[.*\]$/.test(value.trim());
}

/** Construye un enlace de WhatsApp con un mensaje predefinido. */
export function buildWhatsAppLink(message: string) {
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  const encoded = encodeURIComponent(message);
  // Si el número todavía no fue reemplazado, el enlace usa wa.me sin número
  // para no romper el sitio, pero se recomienda completarlo antes de publicar.
  return number ? `https://wa.me/${number}?text=${encoded}` : `https://wa.me/?text=${encoded}`;
}

export const whatsappMessages = {
  general:
    "¡Hola! 👋 Vi el sitio de LAPP SANC y me gustaría solicitar una cotización para mi proyecto 🚀",
  cta: "¡Hola! 👋 Quiero hablar con LAPP SANC sobre mi proyecto 🚀",
  /** "¡Hola! 👋 Quiero información para Menú digital 🍽️" */
  service: (serviceName: string, emoji: string) =>
    `¡Hola! 👋 Quiero información para ${serviceName} ${emoji}`,
  project: (projectName: string) =>
    `¡Hola! 👋 Vi el proyecto "${projectName}" en el portafolio de LAPP SANC y me gustaría algo similar para mi negocio ✨`,
  /** Usado por el plan/tarjeta de precios: "Cotizar este plan". */
  plan: (planName: string) =>
    `¡Hola! 👋 Me interesa el ${planName} de LAPP SANC. ¿Podrían darme más información? 📋`,
  /** Usado por la sección de diagnóstico "¿Qué necesita tu negocio?". */
  need: (needLabel: string) =>
    `¡Hola! 👋 ${needLabel} ¿Podrían ayudarme? 🙌`,
};
