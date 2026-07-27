"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/site-config";

/**
 * Banda de contraste: el resto del sitio es negro profundo, así que un
 * panel plateado/blanco fijo (independiente del tema claro/oscuro) crea un
 * momento premium de alto contraste, tal como pide la identidad ("blanco
 * únicamente para generar contraste").
 */
export function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#f2f2f4] py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl animate-blob" />
        <motion.div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,10,12,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,12,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container-page text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#0a0a0c] leading-[1.15]">
            Tu negocio merece algo más que una publicación perdida en redes sociales
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg text-[#0a0a0c]/60">
            Organiza tus productos, servicios y contactos en una página profesional que puedas
            compartir con cualquier persona.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href={buildWhatsAppLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer nofollow"
              size="lg"
            >
              Cotizar mi página <ArrowRight size={16} />
            </Button>
            <a
              href={buildWhatsAppLink(whatsappMessages.cta)}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0a0a0c]/15 px-7 py-3.5 text-base font-medium text-[#0a0a0c] transition-colors hover:bg-[#0a0a0c]/5 active:bg-[#0a0a0c]/10"
            >
              Hablar por WhatsApp <MessageCircle size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
