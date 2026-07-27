import { MessageSquareText } from "lucide-react";
import { processSteps } from "@/lib/content";
import { processIllustrations } from "@/components/illustrations";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

export function Process() {
  return (
    <section id="proceso" className="section-anchor py-24 sm:py-32 bg-background-alt">
      <div className="container-page">
        <SectionHeading
          eyebrow="Proceso de trabajo"
          title="Así trabajaremos en tu página"
          description="Un proceso claro, ordenado por pasos, para que sepas exactamente qué esperar en cada etapa del proyecto."
        />

        <RevealGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
          {processSteps.map((step) => {
            const Illustration = processIllustrations[step.illustration];
            return (
              <RevealItem key={step.number}>
                <div className="group h-full rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 active:-translate-y-1 active:border-primary/25 card-shadow">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-surface-alt transition-colors duration-300 group-hover:bg-primary-soft group-active:bg-primary-soft">
                    <Illustration className="h-12 w-12" />
                  </div>
                  <div className="mt-6 flex items-center gap-2.5">
                    <span className="font-display text-xs font-semibold text-primary">
                      {step.number}
                    </span>
                    <span className="h-px flex-1 bg-border" aria-hidden />
                  </div>
                  <h3 className="mt-3 font-display font-semibold text-lg text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-foreground-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-10 flex items-center justify-center gap-3 rounded-2xl border border-border bg-surface px-6 py-4 max-w-xl mx-auto text-center card-shadow">
            <MessageSquareText size={18} className="shrink-0 text-primary" />
            <p className="min-w-0 text-sm text-foreground-muted">
              La comunicación durante el proyecto se realiza principalmente por WhatsApp. Después
              de publicar, también puedes contratar actualizaciones cuando las necesites.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
