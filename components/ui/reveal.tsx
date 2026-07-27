"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span";
  once?: boolean;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/** Entrada más cinematográfica: además de desvanecer y desplazar, escala
 *  ligeramente desde abajo y pasa de desenfocado a nítido. Pensada para
 *  contenido que merece un poco más de protagonismo al aparecer, como las
 *  tarjetas de proyectos. */
const premiumVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.94, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
};

/** Envuelve contenido para que aparezca con un desvanecimiento y desplazamiento al hacer scroll. */
export function Reveal({ children, delay = 0, className, once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Contenedor que escalona la aparición de sus hijos directos. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ staggerChildren: stagger }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "premium";
}) {
  const isPremium = variant === "premium";
  return (
    <motion.div
      className={className}
      variants={isPremium ? premiumVariants : variants}
      transition={
        isPremium
          ? { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
          : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  );
}
