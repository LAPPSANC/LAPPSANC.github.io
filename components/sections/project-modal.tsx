"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle, Target, Lightbulb, Layers } from "lucide-react";
import type { Project } from "@/lib/content";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { ProjectShowcase } from "@/components/sections/project-showcase";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (project) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Detalle del proyecto ${project.name}`}
            className="relative z-10 w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-border bg-surface card-shadow"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-surface/90 border border-border text-foreground-muted hover:text-primary active:text-primary cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="relative">
              <ProjectShowcase images={project.images} name={project.name} variant="modal" className="rounded-t-2xl" />
            </div>

            <div className="p-6 sm:p-8">
              <span className="text-xs font-medium uppercase tracking-wide text-primary">
                {project.type}
              </span>
              <h3 className="mt-1 font-display text-2xl font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="mt-3 text-sm text-foreground-muted leading-relaxed">
                {project.description}
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-border p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Target size={15} className="text-primary" /> Necesidad del negocio
                  </div>
                  <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Lightbulb size={15} className="text-primary" /> Solución propuesta
                  </div>
                  <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Layers size={15} className="text-primary" /> Herramientas utilizadas
                </div>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="rounded-full bg-surface-alt border border-border px-3 py-1 text-xs font-medium text-foreground-muted">
                    Diseño responsive
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  href={buildWhatsAppLink(whatsappMessages.project(project.name))}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Solicitar algo similar <MessageCircle size={15} />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
