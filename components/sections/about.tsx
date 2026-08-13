"use client";

import { agencyIntro, agencyPillars, skillCategories } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { BrandMark } from "@/components/layout/brand-mark";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="sobre-mi" className="section-anchor py-24 sm:py-32 bg-background-alt">
      <div className="container-page">
        <SectionHeading eyebrow="Sobre LAPP SANC" title={agencyIntro.tagline} />

        <div className="mt-16 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
          <Reveal>
            <div className="relative mx-auto flex w-full max-w-sm items-center justify-center rounded-3xl border border-border bg-surface px-8 py-16 card-shadow">
              <div className="relative flex items-center justify-center">
                {/* Resplandor "neón" detrás del logotipo, con el mismo
                    azul de marca — un acento llamativo que no rompe la
                    paleta. */}
                <span className="neon-ring" aria-hidden />
                <BrandMark size="lg" float />
              </div>

              <div className="absolute -bottom-5 -right-5 rounded-2xl border border-border bg-surface px-5 py-4 card-shadow">
                <p className="text-2xl font-display font-semibold text-primary">100%</p>
                <p className="text-xs text-foreground-muted">A la medida</p>
              </div>
            </div>
          </Reveal>

          <div className="min-w-0">
            {agencyIntro.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph} delay={i * 0.05}>
                <p className="mt-4 first:mt-0 text-base sm:text-lg text-foreground-muted leading-relaxed">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.15}>
              <p className="mt-6 border-l-2 border-primary pl-4 text-base font-medium text-foreground italic">
                {agencyIntro.quote}
              </p>
            </Reveal>

            <RevealGroup className="mt-9 grid gap-4 sm:grid-cols-2" stagger={0.06}>
              {agencyPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <RevealItem key={pillar.title} variant="premium">
                    <div className="group flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 transition-all duration-300 hover:border-primary/30 hover:-translate-y-0.5 active:border-primary/30 active:-translate-y-0.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110 group-active:scale-110">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-foreground">{pillar.title}</span>
                        <span className="block text-xs text-foreground-muted leading-relaxed">
                          {pillar.description}
                        </span>
                      </span>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>

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

            <Reveal delay={0.3}>
              <div className="mt-9">
                <Button href="#servicios" variant="neon" size="md">
                  Conoce nuestros servicios
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
