import { CircleCheck, Sparkles } from "lucide-react";
import { requirements } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/reveal";

export function Requirements() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading eyebrow="Antes de empezar" title="¿Qué necesito para comenzar tu página?" />

        <RevealGroup
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto"
          stagger={0.03}
        >
          {requirements.map((item) => (
            <RevealItem key={item}>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5">
                <CircleCheck size={17} className="shrink-0 text-primary" />
                <span className="min-w-0 text-sm text-foreground-muted">{item}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary-soft px-6 py-5 max-w-2xl mx-auto">
            <Sparkles size={18} className="text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-foreground leading-relaxed">
              No te preocupes si todavía no tienes todo organizado. También puedo ayudarte a
              definir la estructura y los textos principales.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
