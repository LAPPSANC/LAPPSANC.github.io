import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  TrendingUp,
  BadgeCheck,
  Clock3,
  Smartphone as SmartphoneIcon,
  Share2,
  ImageIcon,
  ListChecks,
  MessageCircle,
  ShoppingBag,
  Briefcase,
  User,
  UtensilsCrossed,
  RefreshCcw,
  Rocket,
  Wrench,
  PartyPopper,
  QrCode,
  Palette as PaletteIcon,
  Shirt,
  Smartphone,
  Hammer,
  ChefHat,
  Coffee,
  Cake,
  Scissors,
  Sparkle,
  Car,
  Palette,
  Scale,
  Calculator,
  Camera,
  Dumbbell,
  BookOpen,
  Store,
  Lightbulb,
  Globe2,
  Bot,
  PhoneCall,
  Building2,
  Search,
  ClipboardCheck,
  Workflow,
  Server,
  LayoutTemplate,
  Sparkles,
} from "lucide-react";

export const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#soluciones", label: "Soluciones" },
  { href: "#planes", label: "Planes" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "FAQ" },
];

export const trustIndicators = [
  "Diseño adaptable a celulares",
  "Contacto directo por WhatsApp",
  "Publicación profesional",
  "Atención personalizada",
];

export const problems = [
  "Los clientes preguntan constantemente por precios.",
  "Las publicaciones antiguas son difíciles de encontrar.",
  "Los productos están desorganizados.",
  "No existe un lugar con toda la información del negocio.",
  "Se pierden posibles clientes por respuestas tardías.",
  "El negocio no transmite suficiente confianza.",
  "Los clientes no encuentran fácilmente la ubicación o los contactos.",
];

export type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    icon: ShieldCheck,
    title: "Mayor confianza",
    description: "Un sitio propio transmite seriedad y respaldo frente a tus clientes.",
  },
  {
    icon: TrendingUp,
    title: "Más clientes",
    description: "Llega a personas nuevas que te encuentran por primera vez en internet.",
  },
  {
    icon: BadgeCheck,
    title: "Presencia profesional",
    description: "Una imagen cuidada que refleja la calidad real de tu negocio.",
  },
  {
    icon: Clock3,
    title: "Disponible 24/7",
    description: "Tu información sigue trabajando por ti incluso cuando no estás conectado.",
  },
  {
    icon: SmartphoneIcon,
    title: "Compatible con todos los dispositivos",
    description: "Se ve igual de bien en celular, tableta y computadora.",
  },
  {
    icon: Share2,
    title: "Fácil de compartir",
    description: "Un solo enlace para todas tus redes, tarjetas y conversaciones.",
  },
  {
    icon: ImageIcon,
    title: "Mejor imagen digital",
    description: "Fotografías, textos y colores ordenados en un mismo lugar.",
  },
  {
    icon: ListChecks,
    title: "Información organizada",
    description: "Productos, precios y contacto siempre claros y a la mano.",
  },
];

export type ServiceCategoryId = "desarrollo" | "conversion" | "ia" | "infraestructura";

export const serviceCategoryMeta: Record<ServiceCategoryId, { label: string; shortLabel: string; description: string }> = {
  desarrollo: {
    label: "Desarrollo web",
    shortLabel: "Desarrollo web",
    description: "Páginas, catálogos y experiencias digitales a la medida de tu negocio.",
  },
  conversion: {
    label: "Conversión y crecimiento",
    shortLabel: "Conversión",
    description: "Herramientas para convertir visitas en clientes reales.",
  },
  ia: {
    label: "Inteligencia artificial y automatización",
    shortLabel: "IA y automatización",
    description: "Que tu negocio atienda y trabaje solo, sin perder el trato humano.",
  },
  infraestructura: {
    label: "Infraestructura",
    shortLabel: "Infraestructura",
    description: "Todo lo necesario para que tu sitio funcione y siga vigente.",
  },
};

export type Service = {
  icon: LucideIcon;
  title: string;
  category: ServiceCategoryId;
  /** Usado en el mensaje de WhatsApp: "Quiero información para {title} {emoji}" */
  emoji: string;
  description: string;
  items: string[];
  note?: string;
};

export const services: Service[] = [
  {
    icon: LayoutTemplate,
    title: "Landing Pages Premium",
    category: "desarrollo",
    emoji: "✨",
    description: "Una sola página, diseñada para convertir:",
    items: ["Presenta una marca, producto o campaña", "Enfocada en un solo objetivo", "Diseño a la medida", "Optimizada para WhatsApp"],
  },
  {
    icon: Building2,
    title: "Sitios corporativos",
    category: "desarrollo",
    emoji: "🌐",
    description: "Presencia digital completa para negocios que necesitan mostrar:",
    items: [
      "Quiénes son",
      "Qué servicios ofrecen",
      "Horarios",
      "Ubicación",
      "Información de contacto",
      "Fotografías",
      "Redes sociales",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Catálogo digital",
    category: "desarrollo",
    emoji: "🛍️",
    description: "Ideal para mostrar:",
    items: ["Productos", "Fotografías", "Precios", "Características", "Categorías", "Promociones", "Botón de WhatsApp"],
    note: "El catálogo puede funcionar sin carrito de compras ni pagos en línea.",
  },
  {
    icon: Briefcase,
    title: "Página para servicios profesionales",
    category: "desarrollo",
    emoji: "💼",
    description: "Dirigida a:",
    items: ["Abogados", "Contadores", "Arquitectos", "Técnicos", "Fotógrafos", "Profesores", "Consultores", "Profesionistas independientes"],
  },
  {
    icon: User,
    title: "Portafolio profesional",
    category: "desarrollo",
    emoji: "📁",
    description: "Para mostrar:",
    items: ["Experiencia", "Trabajos realizados", "Habilidades", "Proyectos", "Información de contacto"],
  },
  {
    icon: UtensilsCrossed,
    title: "Menú digital",
    category: "desarrollo",
    emoji: "🍽️",
    description: "Para restaurantes, cafeterías, reposterías y negocios de comida:",
    items: ["Platillos", "Precios", "Bebidas", "Promociones", "Horarios", "Pedidos mediante WhatsApp"],
  },
  {
    icon: PartyPopper,
    title: "Invitaciones digitales para eventos",
    category: "desarrollo",
    emoji: "🎉",
    description: "Ideal para celebrar sin imprimir nada:",
    items: ["Bodas", "XV años", "Bautizos", "Cumpleaños", "Graduaciones", "Eventos empresariales"],
    note: "Se comparten con un enlace, sin costo de impresión ni envíos.",
  },
  {
    icon: Search,
    title: "Optimización SEO",
    category: "conversion",
    emoji: "🔍",
    description: "Para que tu negocio aparezca cuando lo buscan:",
    items: ["Optimización técnica", "Metadatos y descripciones", "Estructura pensada para buscadores", "Buenas prácticas de contenido"],
  },
  {
    icon: MessageCircle,
    title: "Integración con WhatsApp",
    category: "conversion",
    emoji: "💬",
    description: "Conecta tu sitio con WhatsApp Business:",
    items: ["Botones directos en cada sección", "Mensajes pre-armados por producto o servicio", "Contacto en un solo toque", "Sin perder al visitante en el camino"],
  },
  {
    icon: ClipboardCheck,
    title: "Formularios inteligentes",
    category: "conversion",
    emoji: "📝",
    description: "Diseñados para capturar oportunidades reales:",
    items: ["Solo los campos necesarios", "Envío directo a WhatsApp", "Validación y buena experiencia móvil", "Sin fricción para el visitante"],
  },
  {
    icon: Bot,
    title: "Asistentes de IA para WhatsApp y web",
    category: "ia",
    emoji: "🤖",
    description: "Atención automática, entrenada con la información real de tu negocio:",
    items: [
      "Responde preguntas frecuentes",
      "Disponible las 24 horas",
      "Conoce tu catálogo, precios y horarios",
      "Mantiene el contexto de la conversación",
      "Deriva a una persona cuando hace falta",
    ],
    note: "La IA solo usa la información que tú le proporciones — nunca inventa datos.",
  },
  {
    icon: PhoneCall,
    title: "Atención telefónica con IA",
    category: "ia",
    emoji: "📞",
    description: "Un asistente que también puede contestar llamadas:",
    items: [
      "Responde llamadas entrantes por voz",
      "Informa horarios, ubicación y precios",
      "Recopila los datos del cliente",
      "Transfiere la llamada a una persona si hace falta",
      "Puede funcionar fuera de tu horario habitual",
    ],
    note: "Ideal para negocios que no siempre pueden contestar el teléfono a tiempo.",
  },
  {
    icon: Workflow,
    title: "Automatización de procesos",
    category: "ia",
    emoji: "⚙️",
    description: "Menos tareas repetitivas, más tiempo para tu negocio:",
    items: ["Captura de clientes potenciales", "Notificaciones automáticas", "Organización de datos", "Seguimiento de clientes"],
    note: "Cada automatización se diseña según el proceso específico del negocio.",
  },
  {
    icon: Globe2,
    title: "Dominios",
    category: "infraestructura",
    emoji: "🌍",
    description: "Registro y configuración de tu dominio propio.",
    items: ["Asesoría para elegir el dominio correcto", "Configuración técnica incluida", "Conexión directa con tu sitio"],
  },
  {
    icon: Server,
    title: "Hosting",
    category: "infraestructura",
    emoji: "🖥️",
    description: "Alojamiento y configuración para publicar tu sitio.",
    items: ["Publicación y configuración inicial", "Certificado de seguridad (HTTPS)", "Acompañamiento en la puesta en marcha"],
  },
  {
    icon: Rocket,
    title: "Publicación de páginas",
    category: "infraestructura",
    emoji: "🚀",
    description: "Incluye:",
    items: ["Configuración de hosting", "Vinculación de dominio, cuando el cliente tenga uno", "Optimización básica", "Configuración de enlaces y botones"],
  },
  {
    icon: RefreshCcw,
    title: "Rediseño de páginas",
    category: "infraestructura",
    emoji: "🔄",
    description: "Para mejorar sitios antiguos o poco adaptables a teléfonos.",
    items: ["Diseño moderno", "Optimización móvil", "Mejora de velocidad", "Actualización de contenido"],
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    category: "infraestructura",
    emoji: "🛠️",
    description: "Servicio opcional que incluye:",
    items: ["Cambio de precios", "Actualización de productos", "Modificación de fotografías", "Nuevas promociones", "Ajustes de textos", "Corrección de enlaces"],
  },
];

export type InvitationBenefit = { icon: LucideIcon; label: string };

/** Ventajas específicas del servicio de invitaciones digitales. */
export const invitationBenefits: InvitationBenefit[] = [
  { icon: PaletteIcon, label: "Diseño personalizado" },
  { icon: MessageCircle, label: "Confirmación por WhatsApp" },
  { icon: QrCode, label: "Compartir mediante QR" },
  { icon: SmartphoneIcon, label: "Compatible con celular" },
  { icon: BadgeCheck, label: "Diseño elegante" },
  { icon: Share2, label: "Fácil de compartir" },
];

export type BusinessType = { icon: LucideIcon; label: string };

export const businessTypes: BusinessType[] = [
  { icon: Shirt, label: "Tiendas de ropa" },
  { icon: Smartphone, label: "Venta de celulares" },
  { icon: Hammer, label: "Ferreterías" },
  { icon: Store, label: "Casas de materiales" },
  { icon: ChefHat, label: "Restaurantes" },
  { icon: Coffee, label: "Cafeterías" },
  { icon: Cake, label: "Reposterías" },
  { icon: Scissors, label: "Barberías" },
  { icon: Sparkle, label: "Salones de belleza" },
  { icon: Car, label: "Talleres mecánicos" },
  { icon: Palette, label: "Artesanos" },
  { icon: Scale, label: "Abogados" },
  { icon: Calculator, label: "Contadores" },
  { icon: Camera, label: "Fotógrafos" },
  { icon: Dumbbell, label: "Gimnasios" },
  { icon: BookOpen, label: "Papelerías" },
  { icon: Store, label: "Negocios locales" },
  { icon: Lightbulb, label: "Emprendimientos" },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  illustration: "meeting" | "design" | "development" | "launch" | "review";
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Hablamos",
    description: "Conocemos tu negocio, qué necesitas mostrar y qué quieres conseguir.",
    illustration: "meeting",
  },
  {
    number: "02",
    title: "Diseñamos",
    description: "Definimos estructura, identidad visual y experiencia adaptada a tu negocio.",
    illustration: "design",
  },
  {
    number: "03",
    title: "Desarrollamos",
    description: "Construimos y optimizamos la solución para que funcione en cualquier dispositivo.",
    illustration: "development",
  },
  {
    number: "04",
    title: "Publicamos",
    description: "Lanzamos tu proyecto, ya configurado y listo para compartirse.",
    illustration: "launch",
  },
  {
    number: "05",
    title: "Evolucionamos",
    description: "Mantenimiento, mejoras, SEO, IA o nuevas funciones conforme tu negocio crece.",
    illustration: "review",
  },
];

export const requirements = [
  "Nombre del negocio",
  "Logotipo, en caso de tenerlo",
  "Colores del negocio",
  "Descripción",
  "Productos o servicios",
  "Precios, cuando sea necesario",
  "Fotografías",
  "Horarios",
  "Dirección",
  "Número de WhatsApp",
  "Redes sociales",
  "Promociones",
  "Ejemplos de páginas que le gusten al cliente",
];

export type FAQ = { question: string; answer: string };

export const faqs: FAQ[] = [
  {
    question: "¿La página funciona en celulares?",
    answer: "Sí. Todas las páginas se diseñan para funcionar en celulares, tabletas y computadoras.",
  },
  {
    question: "¿Puedo vender directamente desde la página?",
    answer:
      "Los catálogos básicos permiten mostrar productos y contactar por WhatsApp. Los pagos y carritos de compra requieren una solución más avanzada.",
  },
  {
    question: "¿Necesito tener un dominio?",
    answer:
      "No necesariamente. La página puede publicarse inicialmente con GitHub Pages. También se puede configurar un dominio personalizado.",
  },
  {
    question: "¿Puedo cambiar productos después?",
    answer: "Sí. Se pueden contratar actualizaciones o mantenimiento.",
  },
  {
    question: "¿La página incluye WhatsApp?",
    answer: "Sí. Se pueden agregar botones directos con mensajes preparados.",
  },
  {
    question: "¿Debo entregar fotografías?",
    answer:
      "Es recomendable contar con fotografías reales del negocio. También se pueden utilizar imágenes temporales durante el desarrollo.",
  },
  {
    question: "¿Cuánto tarda una página?",
    answer:
      "El tiempo dependerá del tamaño, la cantidad de secciones y la rapidez con la que el cliente entregue la información.",
  },
  {
    question: "¿Cómo se realiza el pago?",
    answer: "Esta sección se definirá directamente contigo: anticipos, pagos y condiciones según el proyecto.",
  },
  {
    question: "¿La cotización tiene costo?",
    answer: "La primera conversación para conocer tu proyecto y preparar una cotización no tiene costo.",
  },
  {
    question: "¿Cuánto cuesta una página web?",
    answer:
      "Depende del plan y los servicios que tu proyecto necesite. Cuéntanos qué necesitas y te preparamos una cotización a la medida.",
  },
  {
    question: "¿El dominio y el hosting están incluidos?",
    answer:
      "Depende del plan que elijas. También se pueden contratar por separado como servicios de infraestructura.",
  },
  {
    question: "¿Puedo contratar solo un servicio, sin un plan completo?",
    answer:
      "Sí. Servicios como SEO, WhatsApp, IA, automatización o mantenimiento también se pueden contratar de forma individual.",
  },
];

export type SkillCategory = { category: string; items: string[] };

export const skillCategories: SkillCategory[] = [
  { category: "Desarrollo", items: ["Next.js", "React", "TypeScript"] },
  { category: "Diseño", items: ["UI / UX", "Canva", "Diseño responsive"] },
  {
    category: "Herramientas",
    items: [
      "GitHub",
      "Visual Studio Code",
      "Inteligencia artificial",
      "Automatización",
      "IA aplicada a negocios",
      "Optimización de procesos",
    ],
  },
];

/**
 * Presentación de la agencia para la sección "Sobre LAPP SANC". Resume el
 * documento de marca sin duplicar contenido que ya vive en otras
 * secciones del sitio (el proceso de trabajo ya está en "Proceso" y el
 * detalle de servicios ya está en "Servicios").
 */
export const agencyIntro = {
  tagline: "Tecnología, diseño y estrategia para hacer crecer tu negocio",
  paragraphs: [
    "LAPP SANC es una agencia digital enfocada en ayudar a pequeños negocios, emprendimientos y profesionales a construir una presencia digital profesional.",
    "No nos limitamos a crear páginas web. Diseñamos soluciones pensadas para las necesidades reales de cada negocio: catálogos digitales, automatización y soluciones con inteligencia artificial.",
  ],
  quote:
    "No creamos páginas genéricas. Cada proyecto responde a lo que el negocio necesita, lo que el cliente busca, y cómo la tecnología puede ayudar a ambos.",
};

export type AgencyPillar = { icon: LucideIcon; title: string; description: string };

export const agencyPillars: AgencyPillar[] = [
  {
    icon: Globe2,
    title: "Presencia digital",
    description: "Páginas web, catálogos, menús digitales, portafolios e invitaciones.",
  },
  {
    icon: Bot,
    title: "Automatización e IA",
    description: "Chatbots y asistentes de WhatsApp que responden y organizan clientes.",
  },
  {
    icon: PaletteIcon,
    title: "Diseño y experiencia",
    description: "Interfaces modernas, responsive y adaptadas a cada identidad.",
  },
  {
    icon: TrendingUp,
    title: "Soluciones para negocios",
    description: "No solo un sitio: una solución que el negocio realmente usa.",
  },
];

/**
 * Planes comerciales. Sin precios (todavía no están definidos): la
 * prioridad de esta etapa es la estructura y la conversión, no el número.
 * Cuando exista una tarifa real, agrégala en el campo `price` de cada
 * plan y se mostrará automáticamente en la tarjeta.
 */
export type Plan = {
  name: string;
  tagline: string;
  audience: string;
  features: string[];
  featured?: boolean;
  price?: string;
};

export const plans: Plan[] = [
  {
    name: "Plan Start",
    tagline: "Para comenzar bien en internet",
    audience: "Negocios y proyectos que necesitan una primera presencia digital profesional.",
    features: [
      "Landing page",
      "Diseño responsive",
      "Integración con WhatsApp Business",
      "Formulario de contacto",
      "SEO básico",
      "Publicación del sitio",
    ],
  },
  {
    name: "Plan Business",
    tagline: "Presencia digital completa",
    audience: "Negocios que necesitan más profundidad de contenido y una imagen más sólida.",
    features: [
      "Todo lo del Plan Start",
      "Más secciones y contenido",
      "Diseño personalizado",
      "SEO optimizado",
      "Formularios inteligentes",
      "Configuración de dominio y hosting",
      "Animaciones y microinteracciones",
    ],
    featured: true,
  },
  {
    name: "Plan SANC Premium",
    tagline: "Nuestro producto insignia",
    audience: "Marcas y empresas que quieren una experiencia digital completamente personalizada.",
    features: [
      "Diseño UI/UX 100% a la medida",
      "Arquitectura personalizada",
      "Animaciones y microinteracciones avanzadas",
      "Efectos de profundidad y scroll",
      "SEO avanzado y optimización de rendimiento",
      "IA y automatización integradas",
      "Dominio, hosting y publicación incluidos",
    ],
  },
];

/**
 * Sección de diagnóstico ("¿Qué necesita tu negocio?") para el visitante
 * que todavía no sabe qué servicio pedir. Cada opción arma su propio
 * mensaje de WhatsApp con `whatsappMessages.need`.
 */
export type BusinessNeed = { icon: LucideIcon; label: string };

export const businessNeeds: BusinessNeed[] = [
  { icon: Globe2, label: "Necesito una página web" },
  { icon: ShoppingBag, label: "Quiero mostrar mis productos" },
  { icon: TrendingUp, label: "Quiero conseguir más clientes" },
  { icon: Workflow, label: "Quiero automatizar mi negocio" },
  { icon: Bot, label: "Quiero implementar inteligencia artificial" },
  { icon: RefreshCcw, label: "Necesito mejorar mi página actual" },
];

/**
 * Sección de confianza: argumentos verificables sobre cómo trabajamos —
 * sin cifras, clientes ni testimonios inventados. La persuasión viene de
 * ser específicos sobre el proceso real, no de estadísticas que no
 * existen todavía.
 */
export type TrustPoint = { icon: LucideIcon; title: string; description: string };

export const trustPoints: TrustPoint[] = [
  {
    icon: Sparkles,
    title: "Tecnología moderna, no plantillas",
    description: "Construimos con Next.js y React: sitios rápidos y a la medida, no una plantilla reciclada.",
  },
  {
    icon: Clock3,
    title: "Proceso claro, sin sorpresas",
    description: "Sabes qué pasa en cada etapa, desde la primera conversación hasta la publicación.",
  },
  {
    icon: MessageCircle,
    title: "Comunicación directa",
    description: "Hablas por WhatsApp con quien construye tu proyecto — sin intermediarios ni tickets.",
  },
  {
    icon: SmartphoneIcon,
    title: "Diseño 100% responsive",
    description: "Tu sitio se ve y funciona igual de bien en celular, tablet y computadora.",
  },
  {
    icon: ShieldCheck,
    title: "Cotización sin costo",
    description: "La primera conversación para entender tu proyecto no tiene costo ni compromiso.",
  },
  {
    icon: Wrench,
    title: "Acompañamiento después de publicar",
    description: "Ofrecemos mantenimiento y mejoras continuas — no desaparecemos al entregar el sitio.",
  },
];
