"use client";

import * as React from "react";
import { motion } from "framer-motion";

type TypewriterProps = {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
};

export const TYPEWRITER_DEFAULT_SPEED = 0.028;

/**
 * Calcula cuánto tarda en terminar de "escribirse" un texto, para poder
 * encadenar animaciones sin duplicar números mágicos en cada lugar que
 * usa <Typewriter />.
 */
export function typewriterDuration(text: string, speed: number = TYPEWRITER_DEFAULT_SPEED) {
  return Array.from(text).length * speed;
}

/**
 * Efecto de escritura letra por letra, reservado para el título principal.
 *
 * Cada letra se anima por separado, PERO los espacios se dejan como
 * espacios normales (no \u00A0) para que el navegador conserve sus puntos
 * de salto de línea naturales. Usar espacios no separables aquí convertía
 * el titular en una sola cadena inquebrantable que se desbordaba en
 * pantallas angostas.
 */
export function Typewriter({ text, className, delay = 0, speed = TYPEWRITER_DEFAULT_SPEED }: TypewriterProps) {
  const [reduceMotion, setReduceMotion] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- solo se ejecuta una vez al montar, para leer una preferencia del sistema
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  // Se anima por palabras (no por letra dentro de un span individual) para
  // que cada palabra siga siendo una unidad atómica que el navegador puede
  // envolver a la línea siguiente; dentro de cada palabra se anima letra
  // por letra igual que antes.
  const words = text.split(" ");
  // Precalcula, de forma pura, en qué índice de letra global empieza cada
  // palabra (para escalonar el delay de la animación) sin reasignar una
  // variable durante el render.
  const wordStartIndex = words.reduce<number[]>((acc, word, i) => {
    const prevStart = i === 0 ? 0 : acc[i - 1];
    const prevLength = i === 0 ? 0 : Array.from(words[i - 1]).length + 1;
    acc.push(prevStart + prevLength);
    return acc;
  }, []);

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wordIdx) => {
        const letters = Array.from(word);
        return (
          <React.Fragment key={wordIdx}>
            <span className="inline-block whitespace-nowrap" aria-hidden>
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: delay + (wordStartIndex[wordIdx] + i) * speed, duration: 0.01 }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            {wordIdx < words.length - 1 ? " " : null}
          </React.Fragment>
        );
      })}
    </span>
  );
}
