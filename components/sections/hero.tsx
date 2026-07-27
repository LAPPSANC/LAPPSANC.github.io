"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, ShoppingBag, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/layout/brand-mark";
import { Typewriter, typewriterDuration } from "@/components/ui/typewriter";
import { trustIndicators } from "@/lib/content";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/site-config";

const HEADLINE_LINE_1 = "LLEVA TU NEGOCIO AL SIGUIENTE NIVEL";
const HEADLINE_LINE_2 = "CON UNA PÁGINA WEB PROFESIONAL";
const LINE_1_DELAY = 0.5;
// La segunda línea empieza justo cuando termina de "escribirse" la primera,
// calculado a partir del propio texto en vez de repetir el número mágico
// de duración en dos lugares distintos.
const LINE_2_DELAY = LINE_1_DELAY + typewriterDuration(HEADLINE_LINE_1);

export function Hero() {
  return (
    <section
      id="inicio"
      className="section-anchor relative overflow-hidden pb-24 sm:pb-32"
      style={{ paddingTop: "calc(var(--nav-height) + 2rem)" }}
    >
      {/* Fondo: figuras geométricas discretas + un leve resplandor plateado
          para reforzar la identidad metálica del logotipo */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-3xl animate-blob" />
        <div className="absolute top-40 right-0 h-72 w-72 rounded-full bg-primary-light/[0.06] blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute top-10 left-[8%] h-64 w-64 rounded-full bg-silver/[0.08] blur-3xl animate-blob [animation-delay:-3s]" />
        <div
          aria-hidden
          className="absolute left-1/2 top-0 h-[26rem] w-[46rem] -translate-x-1/2 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse at top, color-mix(in srgb, var(--silver) 14%, transparent) 0%, transparent 68%)",
          }}
        />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.35] dark:opacity-[0.22]"
          aria-hidden
        >
          <defs>
            <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
              <path d="M 42 0 L 0 0 0 42" fill="none" stroke="var(--border)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Logotipo real de LAPP SANC, centrado y con más aire respecto al
          título. Flota de forma continua y muy sutil, con un brillo
          metálico ocasional sobre el icono. */}
      <div className="container-page flex flex-col items-center text-center mb-20 sm:mb-28">
        <BrandMark size="lg" float />
      </div>

      <div className="container-page grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        {/* Columna de texto. min-w-0 es la corrección real del desborde:
            por defecto, los hijos de un grid/flex nunca se encogen más
            allá del ancho de su contenido más largo sin salto de línea
            (min-width: auto implícito). Sin esto, un texto largo dentro
            empuja la columna — y con ella toda la sección — más ancha que
            el viewport. */}
        <div className="min-w-0">
          <h1 className="font-headline text-[clamp(2rem,7.2vw,3.6rem)] font-bold uppercase tracking-wide leading-[1.14] text-foreground text-balance">
            <Typewriter text={HEADLINE_LINE_1} delay={LINE_1_DELAY} />
            <br />
            <span className="text-silver-gradient">
              <Typewriter text={HEADLINE_LINE_2} delay={LINE_2_DELAY} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mt-6 text-base sm:text-lg text-foreground-muted leading-relaxed max-w-xl"
          >
            Creo páginas web y catálogos digitales para que tus clientes puedan conocer tus
            productos, servicios, promociones y formas de contacto desde cualquier dispositivo.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.75, duration: 0.6 }}
            className="mt-3 text-sm sm:text-base font-medium text-primary"
          >
            Convierte las visitas de Facebook, Instagram y WhatsApp en posibles clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.6 }}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            <Button
              href={buildWhatsAppLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer nofollow"
              size="lg"
            >
              Solicitar cotización <ArrowRight size={16} />
            </Button>
            <Button href="#proyectos" variant="secondary" size="lg">
              Ver proyectos
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.6 }}
            className="mt-10 grid grid-cols-1 xs:grid-cols-2 gap-x-6 gap-y-3"
          >
            {trustIndicators.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground-muted">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                <span className="min-w-0">{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Columna visual: composición de computadora + celular.
            overflow-hidden + padding interno reemplazan los offsets
            negativos "a ojo" que antes se dejaban recortar por el
            overflow-hidden de la sección completa (un parche, no una
            solución): ahora la propia composición reserva el espacio que
            sus elementos flotantes necesitan y nunca se ve cortada. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full min-w-0 max-w-md lg:max-w-none px-4 pb-8 pt-4"
        >
          {/* Mockup de navegador / computadora */}
          <motion.div
            className="animate-float rounded-2xl border border-border bg-surface card-shadow overflow-hidden"
            style={{ animationDuration: "7s" }}
          >
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3 bg-surface-alt">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-400" />
              <span className="ml-3 min-w-0 truncate text-[11px] text-foreground-subtle">
                tunegocio.com
              </span>
            </div>
            <div className="p-5 space-y-3">
              <div className="h-3 w-2/3 rounded-full bg-primary/25" />
              <div className="h-2 w-full rounded-full bg-border" />
              <div className="h-2 w-5/6 rounded-full bg-border" />
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="rounded-lg border border-border p-2.5 space-y-1.5">
                    <div className="h-10 w-full rounded-md bg-primary-soft flex items-center justify-center">
                      <ShoppingBag size={14} className="text-primary" />
                    </div>
                    <div className="h-1.5 w-3/4 rounded-full bg-border" />
                    <div className="h-1.5 w-1/2 rounded-full bg-border" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mockup de celular flotante */}
          <motion.div
            className="animate-float-slow absolute bottom-0 left-0 w-32 xs:w-36 sm:w-44 rounded-[1.8rem] border-4 border-[var(--accent-dark)] bg-surface card-shadow overflow-hidden"
            style={{ animationDuration: "8s" }}
          >
            <div className="flex items-center justify-center py-1.5 bg-surface-alt">
              <Smartphone size={11} className="text-foreground-subtle" />
            </div>
            <div className="p-3 space-y-2">
              <div className="h-2 w-2/3 rounded-full bg-primary/30" />
              <div className="h-8 w-full rounded-lg bg-primary-soft" />
              <div className="h-8 w-full rounded-lg bg-surface-alt border border-border" />
            </div>
          </motion.div>

          {/* Burbuja de WhatsApp flotante */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
            className="absolute top-0 right-0 flex max-w-[75%] items-center gap-2 rounded-2xl bg-[#25D366] px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-lg"
          >
            <MessageCircle size={16} className="shrink-0 text-white" fill="white" strokeWidth={0} />
            <span className="min-w-0 truncate text-xs font-medium text-white">
              ¡Hola! Quiero cotizar
            </span>
          </motion.div>

          {/* Etiqueta "en línea" */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            className="absolute -top-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 whitespace-nowrap rounded-full bg-surface border border-border px-3 py-1.5 card-shadow"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success animate-pulse-dot" />
            <span className="text-[11px] font-medium text-foreground">Disponible ahora</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
