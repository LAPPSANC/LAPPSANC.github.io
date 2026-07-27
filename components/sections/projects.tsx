"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { projects, type Project } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ProjectModal } from "@/components/sections/project-modal";
import { ProjectShowcase } from "@/components/sections/project-showcase";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/site-config";

export function Projects() {
  const [selected, setSelected] = React.useState<Project | null>(null);

  return (
    <section id="proyectos" className="section-anchor py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Portafolio"
          title="Proyectos y ejemplos de trabajo"
          description="Cada proyecto responde a una necesidad real de un negocio distinto. Selecciona una tarjeta para ver el detalle completo."
        />

        <RevealGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.12}>
          {projects.map((project) => (
            <RevealItem key={project.slug} variant="premium">
              <motion.article
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98, y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group h-full overflow-hidden rounded-2xl border border-border bg-surface flex flex-col shadow-[0_1px_2px_hsl(var(--shadow-color)/0.3)] transition-shadow duration-300 hover:shadow-[0_20px_50px_-16px_color-mix(in_srgb,var(--primary)_35%,transparent)] hover:border-primary/30 active:shadow-[0_20px_50px_-16px_color-mix(in_srgb,var(--primary)_35%,transparent)] active:border-primary/30"
              >
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="relative w-full cursor-pointer"
                  aria-label={`Ver detalle del proyecto ${project.name}`}
                >
                  <ProjectShowcase
                    images={project.images}
                    name={project.name}
                    className="transition-transform duration-500 group-hover:scale-[1.03] group-active:scale-[1.03]"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity" />
                </button>

                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-medium uppercase tracking-wide text-primary">
                    {project.type}
                  </span>
                  <h3 className="mt-1.5 font-display font-semibold text-lg text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-foreground-muted leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={tech}
                        style={{ transitionDelay: `${i * 40}ms` }}
                        className="rounded-full bg-surface-alt border border-border px-2.5 py-0.5 text-[11px] text-foreground-muted transition-all duration-300 group-hover:border-primary/30 group-hover:text-foreground group-active:border-primary/30 group-active:text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-2 border-t border-border pt-4">
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      className="group/link inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary active:text-primary transition-colors cursor-pointer"
                    >
                      Ver proyecto{" "}
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-active/link:translate-x-0.5 group-active/link:-translate-y-0.5"
                      />
                    </button>
                    <a
                      href={buildWhatsAppLink(whatsappMessages.project(project.name))}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="group/link inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-hover active:text-primary-hover transition-colors"
                    >
                      Similar{" "}
                      <MessageCircle
                        size={14}
                        className="transition-transform duration-300 group-hover/link:scale-110 group-active/link:scale-110"
                      />
                    </a>
                  </div>
                </div>
              </motion.article>
            </RevealItem>
          ))}

          {/* Invitación al visitante: en vez de un espacio pasivo, una
              tarjeta que lo interpela directamente ("¿el tuyo es el
              siguiente?") con una llamada a la acción real. */}
          <RevealItem variant="premium">
            <motion.a
              href={buildWhatsAppLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer nofollow"
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98, y: -3 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative flex h-full min-h-[280px] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-dashed border-border-strong p-8 text-center transition-colors duration-300 hover:border-primary/40 hover:border-solid active:border-primary/40 active:border-solid"
            >
              <span
                aria-hidden
                className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 30%, color-mix(in srgb, var(--primary) 14%, transparent) 0%, transparent 70%)",
                }}
              />
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110 group-active:scale-110">
                <Sparkles size={20} />
              </span>
              <span className="font-display font-semibold text-foreground">
                ¿Tu negocio será el siguiente?
              </span>
              <p className="text-sm text-foreground-muted max-w-[16rem]">
                Este espacio está reservado para tu proyecto. Cuéntame sobre tu negocio y
                empecemos.
              </p>
              <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Hablar por WhatsApp
                <MessageCircle size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-active:translate-x-0.5" />
              </span>
            </motion.a>
          </RevealItem>
        </RevealGroup>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
