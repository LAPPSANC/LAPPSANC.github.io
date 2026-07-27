import { AlertCircle, ArrowRight } from "lucide-react";
import { problems } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

export function Problem() {
  return (
    <section className="py-24 sm:py-32 bg-background-alt">
      <div className="container-page">
        <SectionHeading
          eyebrow="El punto de partida"
          title="¿Tu negocio depende solamente de las redes sociales?"
          description="Facebook, Instagram y WhatsApp son excelentes herramientas para promocionar un negocio, pero las publicaciones pueden perderse rápidamente. Una página web permite organizar toda la información importante de tu negocio en un solo lugar y compartirla mediante un enlace."
        />

        <RevealGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.06}>
          {problems.map((problem) => (
            <RevealItem key={problem}>
              <div className="group h-full flex items-start gap-3 rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 active:-translate-y-1 active:border-primary/30 card-shadow">
                <AlertCircle size={18} className="mt-0.5 shrink-0 text-primary-light" />
                <p className="min-w-0 text-sm text-foreground-muted leading-relaxed">{problem}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-14 flex items-center justify-center gap-3 text-center">
            <p className="inline-flex max-w-full items-center gap-2 rounded-full bg-primary px-6 py-3 text-center text-sm sm:text-base font-medium text-white">
              <span className="min-w-0">Una página web puede ayudarte a solucionar estos problemas</span>
              <ArrowRight size={16} className="shrink-0" />
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
