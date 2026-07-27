"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/** Duración total de la pantalla de carga: una sola fuente de verdad,
 *  usada tanto para ocultarla como para sincronizar la barra de progreso. */
const LOADER_DURATION_MS = 1900;
const REDUCED_MOTION_DURATION_MS = 250;

/**
 * Pantalla de carga. Se muestra una sola vez al cargar el sitio: el
 * logotipo entra con un ligero acercamiento y un barrido de brillo
 * metálico, seguido del texto de bienvenida y una barra de progreso real
 * (no puntos genéricos) que se sincroniza con la duración total. Desaparece
 * con una transición suave.
 */
export function Loader() {
  const [visible, setVisible] = React.useState(true);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    const duration = shouldReduceMotion ? REDUCED_MOTION_DURATION_MS : LOADER_DURATION_MS;
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Logotipo grande, con acercamiento suave y un barrido de brillo
              metálico que solo ocurre una vez. */}
          <motion.div
            className="relative h-20 w-[240px] sm:h-24 sm:w-[288px] overflow-hidden"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/lapp-sanc-icon-loader.png"
              alt="LAPP SANC"
              fill
              priority
              className="object-contain"
            />
            {!shouldReduceMotion && (
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent mix-blend-overlay"
                initial={{ x: "-140%" }}
                animate={{ x: "140%" }}
                transition={{ duration: 1, delay: 0.55, ease: "easeInOut" }}
              />
            )}
          </motion.div>

          <motion.p
            className="mt-7 text-lg sm:text-xl font-semibold tracking-[0.15em] text-white"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            BIENVENIDOS
          </motion.p>
          <motion.p
            className="mt-2 text-sm text-white/50 tracking-wide"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.5 }}
          >
            Construyendo soluciones digitales
          </motion.p>

          {/* Barra de progreso real: se llena una sola vez, sincronizada
              con la duración total de la pantalla de carga. */}
          <motion.div
            className="mt-8 h-[3px] w-48 overflow-hidden rounded-full bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#5877ab] to-white/80"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: (shouldReduceMotion ? REDUCED_MOTION_DURATION_MS : LOADER_DURATION_MS - 400) / 1000,
                delay: 0.4,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
