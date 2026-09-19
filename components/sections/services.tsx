"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { services, serviceCategoryMeta, type ServiceCategoryId } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/reveal";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const MAX_VISIBLE_ITEMS = 4;

// La IA se muestra en segundo lugar (justo después de Desarrollo web), no
// al final de la lista — es parte central de la propuesta, no un extra.
const categoryOrder: ServiceCategoryId[] = ["desarrollo", "ia", "conversion", "infraestructura"];

export function Services() {
  return (
    <section id="servicios" className="section-anchor py-24 sm:py-32 bg-background-alt">
      <div className="container-page">
        <SectionHeading
          eyebrow="Servicios"
          title="Elige lo que tu negocio necesita"
          description="Desarrollo web, conversión, inteligencia artificial e infraestructura — cada servicio se cotiza a la medida de tu proyecto."
        />

        <div className="mt-14 space-y-16">
          {categoryOrder.map((categoryId) => {
            const meta = serviceCategoryMeta[categoryId];
            const categoryServices = services.filter((s) => s.category === categoryId);
            const isAI = categoryId === "ia";

            return (
              <div key={categoryId}>
                <Reveal>
                  <div className="flex items-baseline gap-3">
                    <h3
                      className={cn(
                        "font-display text-xl sm:text-2xl font-semibold",
                        isAI ? "text-neon" : "text-foreground"
                      )}
                    >
                      {meta.label}
                    </h3>
                    <span className="h-px flex-1 bg-border" aria-hidden />
                  </div>
                  <p className="mt-1.5 text-sm text-foreground-muted">{meta.description}</p>
                </Reveal>

                <RevealGroup className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.05}>
                  {categoryServices.map((service) => {
                    const Icon = service.icon;
                    const visibleItems = service.items.slice(0, MAX_VISIBLE_ITEMS);
                    const remaining = service.items.length - visibleItems.length;

                    return (
                      <RevealItem key={service.title}>
                        <motion.article
                          whileHover={{ y: -6 }}
                          whileTap={{ scale: 0.98, y: -3 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className={cn(
                            "group h-full flex flex-col rounded-2xl border bg-surface p-6 card-shadow transition-shadow duration-300",
                            isAI
                              ? "border-primary/25 hover:border-primary/50 active:border-primary/50"
                              : "border-border hover:border-primary/25 active:border-primary/25"
                          )}
                        >
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 group-active:scale-110 group-active:-rotate-6">
                            <Icon size={20} />
                          </span>
                          <h4 className="mt-5 font-display font-semibold text-lg text-foreground">
                            {service.title}
                          </h4>
                          <p className="mt-1.5 text-sm text-foreground-muted">{service.description}</p>

                          <ul className="mt-4 space-y-1.5 flex-1">
                            {visibleItems.map((item) => (
                              <li key={item} className="flex items-center gap-2 text-sm text-foreground-muted">
                                <Check size={14} className="shrink-0 text-primary" />
                                <span className="min-w-0">{item}</span>
                              </li>
                            ))}
                            {remaining > 0 && (
                              <li className="pl-[22px] text-xs text-foreground-subtle">+{remaining} más</li>
                            )}
                          </ul>

                          {service.note && (
                            <p className="mt-4 text-xs text-foreground-muted italic border-t border-border pt-3">
                              {service.note}
                            </p>
                          )}

                          <a
                            href={buildWhatsAppLink(whatsappMessages.service(service.title, service.emoji))}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
