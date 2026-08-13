/**
 * CONFIGURACIÓN DEL SITIO
 * ---------------------------------------------------------------------------
 * Aquí se concentran los datos que normalmente cambian: número de WhatsApp,
 * redes sociales, correo, usuario de GitHub, etc.
 *
 * IMPORTANTE: reemplaza los valores marcados como "[EDITAR]" antes de publicar.
 * No se inventó ningún dato sensible o de contacto real.
 */

export const siteConfig = {
  name: "Carlos Manuel Sánchez Martínez",
  displayName: "Carlos Sánchez", // Nombre del fundador (ya no se muestra en "Sobre LAPP SANC", que ahora presenta la agencia; disponible por si se usa en otro lugar del sitio)
  shortName: "Carlos",
  brand: "LAPP SANC", // [EDITAR] si cambia la marca
  role: "Desarrollador web y creador de soluciones digitales",
  location: "Estado de México, México",
  // [EDITAR] Reemplaza por tu URL real, por ejemplo "https://tu-usuario.github.io/tu-repo"
  siteUrl: "https://usuario-github.github.io",
  domain: "[DOMINIO]", // [EDITAR] dominio personalizado, si se contrata uno

  // Número de WhatsApp en formato internacional, sin espacios ni símbolos.
  // Ejemplo: "521XXXXXXXXXX"
  whatsappNumber: "[NUMERO_DE_WHATSAPP]", // [EDITAR]
  email: "[CORREO_ELECTRONICO]", // [EDITAR]

  social: {
    facebook: "[ENLACE_DE_FACEBOOK]", // [EDITAR]
    instagram: "[ENLACE_DE_INSTAGRAM]", // [EDITAR]
    tiktok: "[ENLACE_DE_TIKTOK]", // [EDITAR]
    github: "https://github.com/[USUARIO_DE_GITHUB]", // [EDITAR] — se usa solo internamente (ver README), ya no se muestra como canal de contacto
  },

  // Servicio externo opcional para el formulario de contacto (Formspree).
  // Deja vacío para usar únicamente el envío por WhatsApp.
  formspreeEndpoint: "", // [EDITAR] ej. "https://formspree.io/f/xxxxxxx"

  ogImage: "/images/og-image.jpg",
} as const;

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
    "¡Hola! 👋 Vi el portafolio de LAPP SANC y me gustaría solicitar información para crear una página web para mi negocio 🚀",
  cta: "¡Hola! 👋 Encontré el portafolio de LAPP SANC y quiero información sobre una página web para mi negocio 🚀",
  /** "¡Hola! 👋 Quiero información para Menú digital 🍽️" */
  service: (serviceName: string, emoji: string) =>
    `¡Hola! 👋 Quiero información para ${serviceName} ${emoji}`,
  project: (projectName: string) =>
    `¡Hola! 👋 Vi el proyecto "${projectName}" en el portafolio de LAPP SANC y me gustaría algo similar para mi negocio ✨`,
};
