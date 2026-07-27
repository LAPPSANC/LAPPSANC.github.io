"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-[0_8px_24px_-8px_var(--primary)] hover:bg-primary-hover hover:shadow-[0_10px_30px_-6px_var(--primary)] active:bg-primary-hover active:shadow-[0_10px_30px_-6px_var(--primary)]",
  secondary:
    "bg-[var(--surface)] text-foreground border border-border-strong hover:border-primary hover:text-primary active:border-primary active:text-primary",
  outline:
    "bg-transparent text-foreground border border-foreground/25 hover:border-foreground hover:bg-foreground/5 active:border-foreground active:bg-foreground/5",
  ghost: "bg-transparent text-foreground-muted hover:text-primary active:text-primary",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type ButtonProps = HTMLMotionProps<"a" | "button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Botón con micro-interacción magnética sutil: sigue ligeramente al cursor
 * y regresa a su posición con un resorte suave.
 */
export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const ref = React.useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.28;
    setOffset({ x, y });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-200 cursor-pointer select-none",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const Comp = motion[href ? "a" : "button"] as typeof motion.a;

  return (
    <Comp
      ref={ref as never}
      href={href}
      className={classes}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      whileTap={{ scale: 0.96 }}
      {...(props as object)}
    >
      {children}
    </Comp>
  );
}
