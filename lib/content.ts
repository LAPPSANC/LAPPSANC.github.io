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
  FileText,
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
} from "lucide-react";

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
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

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  note?: string;
};

export const services: Service[] = [
  {
    icon: FileText,
    title: "Página web informativa",
    description: "Ideal para negocios que necesitan mostrar:",
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
    description: "Ideal para mostrar:",
    items: ["Productos", "Fotografías", "Precios", "Características", "Categorías", "Promociones", "Botón de WhatsApp"],
    note: "El catálogo puede funcionar sin carrito de compras ni pagos en línea.",
  },
  {
    icon: Briefcase,
    title: "Página para servicios profesionales",
    description: "Dirigida a:",
    items: ["Abogados", "Contadores", "Arquitectos", "Técnicos", "Fotógrafos", "Profesores", "Consultores", "Profesionistas independientes"],
  },
  {
    icon: User,
    title: "Portafolio profesional",
    description: "Para mostrar:",
    items: ["Experiencia", "Trabajos realizados", "Habilidades", "Proyectos", "Información de contacto"],
  },
  {
    icon: UtensilsCrossed,
    title: "Menú digital",
    description: "Para restaurantes, cafeterías, reposterías y negocios de comida:",
    items: ["Platillos", "Precios", "Bebidas", "Promociones", "Horarios", "Pedidos mediante WhatsApp"],
  },
  {
    icon: RefreshCcw,
    title: "Rediseño de páginas",
    description: "Para mejorar sitios antiguos o poco adaptables a teléfonos.",
    items: ["Diseño moderno", "Optimización móvil", "Mejora de velocidad", "Actualización de contenido"],
  },
  {
    icon: Rocket,
    title: "Publicación de páginas",
    description: "Incluye:",
    items: ["Configuración de GitHub Pages", "Vinculación de dominio, cuando el cliente tenga uno", "Optimización básica", "Configuración de enlaces y botones"],
  },
  {
    icon: PartyPopper,
    title: "Invitaciones digitales para eventos",
    description: "Ideal para celebrar sin imprimir nada:",
    items: ["Bodas", "XV años", "Bautizos", "Cumpleaños", "Graduaciones", "Eventos empresariales"],
    note: "Se comparten con un enlace, sin costo de impresión ni envíos.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
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

export type ProjectImage = { src: string; caption: string };

export type Project = {
  slug: string;
  name: string;
  type: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  /** Capturas reales del sitio, en el orden en que deben mostrarse, cada
   *  una con una descripción breve de lo que muestra. */
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "tecnomax",
    name: "TecnoMax",
    type: "Tienda de celulares y accesorios",
    description:
      "Catálogo de teléfonos nuevos y seminuevos con accesorios, promociones activas, contacto y ubicación de la tienda.",
    problem: "Los clientes preguntaban precios repetidamente por mensaje directo sin un catálogo claro ni promociones visibles.",
    solution:
      "Catálogo filtrable por marca y estado del equipo, sección de promociones con temporizador, y contacto directo por WhatsApp con ubicación de la tienda física.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    images: [
      {
        src: "/images/projects/tecnomax/1-inicio.jpg",
        caption: "Hero con las marcas disponibles y accesos directos por categoría.",
      },
      {
        src: "/images/projects/tecnomax/2-telefonos.jpg",
        caption: "Catálogo de equipos nuevos y seminuevos, filtrable por marca y estado.",
      },
      {
        src: "/images/projects/tecnomax/3-accesorios.jpg",
        caption: "Fundas, cargadores y audífonos organizados por categoría.",
      },
      {
        src: "/images/projects/tecnomax/4-promociones.jpg",
        caption: "Ofertas activas con temporizador de tiempo límite.",
      },
      {
        src: "/images/projects/tecnomax/5-contacto.jpg",
        caption: "Formulario de contacto que envía el mensaje directo por WhatsApp.",
      },
      {
        src: "/images/projects/tecnomax/6-ubicacion.jpg",
        caption: "Mapa con la dirección de la tienda física y horarios de atención.",
      },
    ],
  },
  {
    slug: "lux-rohe",
    name: "Lux ROHE",
    type: "Marca de velas artesanales",
    description:
      "Proyecto enfocado en presentar productos artesanales, identidad visual, catálogo, información de la marca y contacto.",
    problem:
      "La marca solo vendía a través de redes sociales y sus productos se perdían entre publicaciones antiguas.",
    solution:
      "Un catálogo visual y elegante que refleja la identidad artesanal de la marca, con contacto directo por WhatsApp.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    images: [
      {
        src: "/images/projects/lux-rohe/1-inicio.jpg",
        caption: "Inicio con la esencia de la marca y su colección destacada.",
      },
      {
        src: "/images/projects/lux-rohe/2-coleccion.jpg",
        caption: "Las tres líneas de producto: velas, plantas y aceites esenciales.",
      },
      {
        src: "/images/projects/lux-rohe/3-catalogo.jpg",
        caption: "Catálogo filtrable con fotografía, nombre y precio de cada pieza.",
      },
    ],
  },
  {
    slug: "block-master",
    name: "Block Master",
    type: "Fábrica de blocks para construcción",
    description:
      "Sitio para una fábrica de blocks de concreto: catálogo de productos con precios, ventajas de la marca, cobertura de entrega y cotización en línea.",
    problem:
      "El negocio no tenía forma de mostrar su catálogo completo ni de recibir cotizaciones fuera del mostrador o por llamada.",
    solution:
      "Catálogo filtrable por tipo de block con precios, sección de cobertura con mapa de entregas, y un formulario de cotización express conectado a WhatsApp.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    images: [
      {
        src: "/images/projects/block-master/1-inicio.jpg",
        caption: "Presentación de la marca con cifras de experiencia y cobertura.",
      },
      {
        src: "/images/projects/block-master/2-catalogo.jpg",
        caption: "Catálogo de blocks filtrable por tipo, con medidas, resistencia y precio.",
      },
      {
        src: "/images/projects/block-master/3-ventajas.jpg",
        caption: "Cinco razones que distinguen a la marca frente a la competencia.",
      },
      {
        src: "/images/projects/block-master/4-cotizacion.jpg",
        caption: "Formulario de cotización express conectado directo a WhatsApp.",
      },
      {
        src: "/images/projects/block-master/5-ubicacion.jpg",
        caption: "Mapa de cobertura de entregas, con dirección y horarios.",
      },
    ],
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  illustration: "meeting" | "planning" | "design" | "development" | "review" | "launch";
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Conocemos tu negocio",
    description: "Me explicas qué vendes, qué servicios ofreces y qué necesitas mostrar.",
    illustration: "meeting",
  },
  {
    number: "02",
    title: "Planeamos tu proyecto",
    description: "Definimos secciones, productos, colores, textos, fotografías y formas de contacto.",
    illustration: "planning",
  },
  {
    number: "03",
    title: "Diseño",
    description: "Desarrollo una propuesta visual adaptada a la identidad de tu negocio.",
    illustration: "design",
  },
  {
    number: "04",
    title: "Desarrollo",
    description: "Construyo el sitio para que funcione correctamente en celulares y computadoras.",
    illustration: "development",
  },
  {
    number: "05",
    title: "Revisión",
    description: "Puedes solicitar correcciones antes de la publicación final.",
    illustration: "review",
  },
  {
    number: "06",
    title: "Publicación",
    description: "Configuro el sitio para que pueda compartirse mediante un enlace.",
    illustration: "launch",
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
