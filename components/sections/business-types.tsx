import { businessTypes } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function BusinessTypes() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading eyebrow="Para todo tipo de negocio" title="Páginas adaptadas a diferentes negocios" />

        <RevealGroup
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          stagger={0.03}
        >
          {businessTypes.map((type) => {
            const Icon = type.icon;
            return (
              <RevealItem key={type.label}>
                <div className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-surface px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary-soft active:-translate-y-1 active:border-primary/40 active:bg-primary-soft">
                  <Icon
                    size={22}
                    className="text-foreground-muted transition-colors group-hover:text-primary group-active:text-primary"
                  />
                  <span className="text-xs font-medium text-foreground-muted group-hover:text-primary group-active:text-primary">
                    {type.label}
                  </span>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <p className="mt-10 text-center text-sm sm:text-base text-foreground-muted max-w-xl mx-auto">
          Cada página se diseña de acuerdo con la identidad, necesidades y clientes de cada negocio.
        </p>
      </div>
    </section>
  );
}
