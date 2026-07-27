"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skillCategories } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="sobre-mi" className="section-anchor py-24 sm:py-32 bg-background-alt">
      <div className="container-page">
        <SectionHeading eyebrow="Sobre mí" title="Conoce a la persona detrás de cada proyecto" />

        <div className="mt-16 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
          <Reveal>
            <motion.div
              className="relative mx-auto w-full max-w-sm animate-float"
              style={{ animationDuration: "8s" }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border card-shadow">
                <Image
                  src="/images/foto-carlos.jpg"
                  alt={`Fotografía de ${siteConfig.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 400px"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-2xl border border-border bg-surface px-5 py-4 card-shadow">
                <p className="text-2xl font-display font-semibold text-primary">100%</p>
                <p className="text-xs text-foreground-muted">Diseño responsive</p>
              </div>
            </motion.div>
          </Reveal>

          <div className="min-w-0">
            <Reveal>
              <p className="font-display text-2xl sm:text-3xl font-semibold uppercase tracking-tight text-foreground">
                {siteConfig.displayName}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="mt-4 text-base sm:text-lg text-foreground-muted leading-relaxed">
                Desarrollador web y emprendedor interesado en la tecnología, el diseño, las
                finanzas y la inteligencia artificial.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-base sm:text-lg text-foreground-muted leading-relaxed">
                Me enfoco en crear soluciones digitales para pequeños negocios, emprendimientos y
                proyectos que quieren mejorar su presencia en internet.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-base sm:text-lg text-foreground-muted leading-relaxed">
                Mi objetivo es ayudar a que cada negocio pueda presentar sus productos y servicios
                de una forma moderna, organizada y profesional.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 border-l-2 border-primary pl-4 text-base font-medium text-foreground italic">
                No creo páginas genéricas. Busco que cada sitio represente la esencia y las
                necesidades de cada negocio.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-9 grid gap-6 sm:grid-cols-3">
                {skillCategories.map((group) => (
                  <div key={group.category} className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {group.category}
                    </p>
                    <ul className="mt-2.5 space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="text-sm text-foreground-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
