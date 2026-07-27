"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProjectImage } from "@/lib/content";

type ProjectShowcaseProps = {
  images: ProjectImage[];
  name: string;
  /** "card": crossfade automático y ambiental, con leyenda superpuesta.
   *  "modal": transición deslizante con flechas, indicadores y una
   *  cédula descriptiva debajo, como en una exposición. */
  variant?: "card" | "modal";
  className?: string;
};

const AUTOPLAY_INTERVAL = 3800;

const fadeVariants = {
  enter: { opacity: 0, scale: 1.045 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 },
};

const slideVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 44 : -44 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -44 : 44 }),
};

const captionVariants = {
  enter: { opacity: 0, y: 8 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

/**
 * Muestra las capturas de un proyecto dentro de un marco tipo navegador,
 * como una pequeña exposición: cada captura va acompañada de una cédula
 * con una descripción breve, sincronizada con la transición de la imagen.
 *
 * En tarjetas (`variant="card"`) rota automáticamente con un crossfade muy
 * suave y la leyenda superpuesta sobre la imagen; en el modal
 * (`variant="modal"`) el visitante controla el avance con flechas o los
 * indicadores, con una transición deslizante y la cédula debajo de la
 * imagen, con más espacio para leerse.
 */
export function ProjectShowcase({ images, name, variant = "card", className }: ProjectShowcaseProps) {
  const [[index, direction], setIndex] = React.useState<[number, number]>([0, 0]);
  const [paused, setPaused] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();
  const hasMultiple = images.length > 1;
  const total = images.length;

  /** Avanza/retrocede una posición; la dirección viene del propio paso,
   *  nunca se infiere comparando índices (esa inferencia fallaba en el
   *  ciclo de vuelta al inicio: "anterior" desde el primer elemento se
   *  animaba como si fuera "siguiente"). */
  const advance = React.useCallback(
    (step: 1 | -1) => {
      setIndex(([current]) => [((current + step) % total + total) % total, step]);
    },
    [total]
  );

  /** Salta a una captura específica (clic en un indicador). */
  const jumpTo = React.useCallback((target: number) => {
    setIndex(([current]) => [target, target >= current ? 1 : -1]);
  }, []);

  React.useEffect(() => {
    if (variant !== "card" || !hasMultiple || shouldReduceMotion || paused) return;
    const timer = setInterval(() => advance(1), AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [variant, hasMultiple, shouldReduceMotion, paused, advance]);

  const isModal = variant === "modal";
  const current = images[index];
  const imageTransition = isModal
    ? { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    : { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div
      className={cn("relative overflow-hidden rounded-t-2xl border-b border-border bg-surface-alt", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Barra tipo navegador, consistente con el resto del sitio */}
      <div className="flex items-center gap-1.5 border-b border-border px-3.5 py-2.5 bg-surface-alt">
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-400/70" />
        <span className="ml-2 min-w-0 truncate text-[10px] text-foreground-subtle">{name}</span>
        {hasMultiple && (
          <span className="ml-auto shrink-0 text-[10px] tabular-nums text-foreground-subtle">
            {index + 1} / {total}
          </span>
        )}
      </div>

      {/* Imagen: la franja de flechas/indicadores vive DENTRO de este
          contenedor para quedar siempre sobre la imagen, sin importar qué
          más se agregue debajo (como la cédula del modal). */}
      <div className="relative w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            variants={isModal ? slideVariants : fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={imageTransition}
            className="relative aspect-[16/10] w-full"
          >
            <Image
              src={current.src}
              alt={`Captura del sitio de ${name}: ${current.caption}`}
              fill
              loading={index === 0 ? "eager" : "lazy"}
              className="object-cover object-top"
              sizes={isModal ? "(max-width: 768px) 100vw, 640px" : "(max-width: 768px) 100vw, 400px"}
            />
            {/* En tarjetas la cédula va superpuesta sobre la imagen, con
                un degradado para que el texto siga siendo legible. */}
            {!isModal && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pt-8 pb-2.5 px-3">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.35 }}
                    className="text-[11px] leading-snug text-white/90 line-clamp-2"
                  >
                    {current.caption}
                  </motion.p>
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {isModal && hasMultiple && (
          <>
            <button
              type="button"
              onClick={() => advance(-1)}
              aria-label="Captura anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 active:bg-black/60 cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => advance(1)}
              aria-label="Siguiente captura"
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 active:bg-black/60 cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {!isModal && hasMultiple && (
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((img, i) => (
              <span
                key={img.src}
                aria-hidden
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/50"
                )}
              />
            ))}
          </div>
        )}
      </div>

      {/* Cédula tipo exposición: solo en el modal, con más espacio para
          leerse. Se anima en sincronía con la imagen (mismo índice). */}
      {isModal && (
        <div className="relative border-t border-border bg-surface px-5 py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={captionVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-wide text-primary">
                Vista {index + 1} de {total}
              </span>
              <p className="mt-1 text-sm text-foreground-muted leading-relaxed">{current.caption}</p>
            </motion.div>
          </AnimatePresence>

          {hasMultiple && (
            <div className="mt-3 flex gap-1.5">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => jumpTo(i)}
                  aria-label={`Ir a la captura ${i + 1}`}
                  className={cn(
                    "h-1.5 flex-1 rounded-full transition-colors duration-300 cursor-pointer",
                    i === index ? "bg-primary" : "bg-border-strong hover:bg-foreground-subtle"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
