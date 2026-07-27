"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { services, invitationBenefits } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/reveal";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/site-config";

export function Services() {
  return (
    <section id="servicios" className="section-anchor py-24 sm:py-32 bg-background-alt">
      <div className="container-page">
        <SectionHeading
          eyebrow="Servicios"
          title="Servicios para tu negocio"
          description="Desde una página informativa hasta un catálogo digital completo, cada servicio se adapta al tamaño y necesidades de tu negocio."
        />

        <RevealGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.05}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <RevealItem key={service.title}>
                <motion.article
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98, y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group h-full flex flex-col rounded-2xl border border-border bg-surface p-6 card-shadow transition-shadow duration-300 hover:border-primary/25 active:border-primary/25"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 group-active:scale-110 group-active:-rotate-6">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 font-display font-semibold text-lg text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-foreground-muted">{service.description}</p>

                  <ul className="mt-4 space-y-1.5 flex-1">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground-muted">
                        <Check size={14} className="shrink-0 text-primary" />
                        <span className="min-w-0">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {service.note && (
                    <p className="mt-4 text-xs text-foreground-subtle italic border-t border-border pt-3">
                      {service.note}
                    </p>
                  )}

                  <a
                    href={buildWhatsAppLink(whatsappMessages.service(service.title))}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 group-active:gap-2.5 transition-all"
                  >
                    Solicitar información <ArrowUpRight size={15} />
                  </a>
                </motion.article>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {/* Ventajas de las invitaciones digitales: una franja compacta, no
            una sección nueva completa, para no saturar el diseño. */}
        <Reveal delay={0.1}>
          <div className="mt-8 rounded-2xl border border-border bg-surface px-6 py-6 sm:px-8 sm:py-7 card-shadow">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Invitaciones digitales
            </p>
            <p className="mt-1 text-sm text-foreground-muted">
              Las ventajas de celebrar tu evento sin papel:
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {invitationBenefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <li key={benefit.label} className="flex items-center gap-2 text-sm text-foreground-muted">
                    <Icon size={16} className="shrink-0 text-primary" />
                    <span className="min-w-0">{benefit.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
