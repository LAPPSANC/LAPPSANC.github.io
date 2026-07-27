"use client";

import { motion } from "framer-motion";
import { benefits } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function Benefits() {
  return (
    <section id="beneficios" className="section-anchor py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Beneficios"
          title="¿Qué puede hacer una página web por tu negocio?"
          description="Cada beneficio está pensado para resolver una necesidad real de negocios que hoy solo venden por redes sociales."
        />

        <RevealGroup
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          stagger={0.06}
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <RevealItem key={benefit.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98, y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group h-full rounded-2xl border border-border bg-surface p-6 card-shadow transition-shadow duration-300 hover:border-primary/25 active:border-primary/25"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 group-active:scale-110 group-active:-rotate-6">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 font-display font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
