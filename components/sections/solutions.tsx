"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { businessNeeds } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/site-config";

/**
 * Pensada para el visitante que todavía no sabe qué servicio pedir: en
 * vez de servicios, ofrece resultados ("quiero conseguir más clientes")
 * y cada opción arma su propio mensaje de WhatsApp.
 */
export function Solutions() {
  return (
    <section id="soluciones" className="section-anchor py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Soluciones"
          title="¿Qué necesita tu negocio?"
          description="Si todavía no sabes qué servicio pedir, elige lo que quieres lograr y hablamos desde ahí."
        />

        <RevealGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
          {businessNeeds.map((need) => {
            const Icon = need.icon;
            return (
              <RevealItem key={need.label} variant="premium">
                <motion.a
                  href={buildWhatsAppLink(whatsappMessages.need(need.label))}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98, y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-surface p-6 card-shadow transition-all duration-300 hover:border-primary/30 hover:shadow-[0_16px_36px_-16px_color-mix(in_srgb,var(--primary)_40%,transparent)] active:border-primary/30 active:shadow-[0_16px_36px_-16px_color-mix(in_srgb,var(--primary)_40%,transparent)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110 group-active:scale-110">
                    <Icon size={20} />
                  </span>
                  <span className="min-w-0 flex-1 font-display font-medium text-foreground">
                    {need.label}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-foreground-subtle transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-active:text-primary"
                  />
                </motion.a>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
