import { trustPoints } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

/**
 * Sección de confianza. A propósito NO incluye cifras, testimonios ni
 * clientes inventados — la persuasión viene de ser específicos sobre el
 * proceso real de trabajo, no de estadísticas que todavía no existen.
 */
export function Trust() {
  return (
    <section className="py-24 sm:py-32 border-y border-border bg-background-alt">
      <div className="container-page">
        <SectionHeading
          eyebrow="Por qué LAPP SANC"
          title="Lo que sí podemos prometerte"
          description="Sin cifras infladas ni testimonios de relleno — esto es lo que realmente puedes esperar al trabajar con nosotros."
        />

        <RevealGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <RevealItem key={point.title} variant="premium">
                <div className="group h-full rounded-2xl border border-border bg-surface p-6 card-shadow transition-all duration-300 hover:border-primary/25 hover:-translate-y-1 active:border-primary/25 active:-translate-y-1">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 group-active:scale-110 group-active:-rotate-6">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 font-display font-semibold text-foreground">{point.title}</h3>
                  <p className="mt-2 text-sm text-foreground-muted leading-relaxed">{point.description}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
