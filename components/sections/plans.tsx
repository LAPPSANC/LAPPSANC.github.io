"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, MessageCircle, Sparkles } from "lucide-react";
import { plans } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/** Tarjeta con una inclinación 3D muy sutil que sigue al cursor — solo
 *  para la tarjeta destacada, como un pequeño "premium moment". */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -4, y: px * 4 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Plans() {
  return (
    <section id="planes" className="section-anchor py-24 sm:py-32 bg-background-alt">
      <div className="container-page">
        <SectionHeading
          eyebrow="Planes"
          title="Un punto de partida para cada proyecto"
          description="Cada plan se ajusta a tu negocio — el precio se cotiza según lo que necesites, sin sorpresas."
        />

        <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-start" stagger={0.08}>
          {plans.map((plan) => {
            const card = (
              <motion.article
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.99, y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-7 transition-shadow duration-300",
                  plan.featured
                    ? "border-primary/60 bg-surface animate-neon-box-pulse lg:-translate-y-3"
                    : "border-border bg-surface card-shadow hover:border-primary/25 active:border-primary/25"
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    <Sparkles size={12} /> Recomendado
                  </span>
                )}

                <h3 className="font-display text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{plan.tagline}</p>
                <p className="mt-3 text-sm text-foreground-muted leading-relaxed">{plan.audience}</p>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground-muted">
                      <Check size={14} className="mt-0.5 shrink-0 text-primary" />
                      <span className="min-w-0">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs text-foreground-subtle">
                  {plan.price ?? "Precio a cotizar según tu proyecto"}
                </p>

                <div className="mt-4">
                  <Button
                    href={buildWhatsAppLink(whatsappMessages.plan(plan.name))}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    variant={plan.featured ? "primary" : "secondary"}
                    className="w-full justify-center"
                  >
                    Cotizar este plan <MessageCircle size={15} />
                  </Button>
                </div>
              </motion.article>
            );

            return (
              <RevealItem key={plan.name} variant="premium">
                {plan.featured ? <TiltCard className="[transform-style:preserve-3d]">{card}</TiltCard> : card}
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
