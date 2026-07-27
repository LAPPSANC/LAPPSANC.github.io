"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageCircle, CheckCircle2, ArrowUpRight } from "lucide-react";
import { FacebookIcon, InstagramIcon, TiktokIcon } from "@/components/ui/social-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { siteConfig, buildWhatsAppLink } from "@/lib/site-config";

type FormState = {
  name: string;
  business: string;
  phone: string;
  businessType: string;
  service: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  business: "",
  phone: "",
  businessType: "",
  service: "",
  budget: "",
  message: "",
};

const contactLinks = [
  { icon: MessageCircle, label: "WhatsApp", href: buildWhatsAppLink("Hola, Carlos. Quiero hablar sobre un proyecto."), external: true },
  { icon: Mail, label: "Correo electrónico", href: `mailto:${siteConfig.email}`, external: false },
  { icon: FacebookIcon, label: "Facebook", href: siteConfig.social.facebook, external: true },
  { icon: InstagramIcon, label: "Instagram", href: siteConfig.social.instagram, external: true },
  { icon: TiktokIcon, label: "TikTok", href: siteConfig.social.tiktok, external: true },
];

export function Contact() {
  const [form, setForm] = React.useState<FormState>(initialState);
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function buildMessage() {
    const lines = [
      "Hola, Carlos. Quiero contarte sobre mi negocio:",
      `Nombre: ${form.name || "-"}`,
      `Negocio: ${form.business || "-"}`,
      `Teléfono: ${form.phone || "-"}`,
      `Tipo de negocio: ${form.businessType || "-"}`,
      `Servicio que necesita: ${form.service || "-"}`,
      form.budget ? `Presupuesto aproximado: ${form.budget}` : null,
      `Mensaje: ${form.message || "-"}`,
    ].filter(Boolean);
    return lines.join("\n");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    // Si se configuró un endpoint de Formspree, se envía también ahí.
    if (siteConfig.formspreeEndpoint) {
      try {
        await fetch(siteConfig.formspreeEndpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } catch {
        // El envío por WhatsApp funciona igual aunque Formspree falle.
      }
    }

    const whatsappUrl = buildWhatsAppLink(buildMessage());
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setStatus("sent");
    setForm(initialState);
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <section id="contacto" className="section-anchor py-24 sm:py-32 bg-background-alt">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contacto"
          title="Cuéntame sobre tu negocio"
          description="Envíame un mensaje con la idea de tu proyecto. Podemos revisar qué tipo de página se adapta mejor a tus necesidades."
        />

        <div className="mt-16 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <RevealGroup className="space-y-3" stagger={0.06}>
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <RevealItem key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-14px_color-mix(in_srgb,var(--primary)_45%,transparent)] active:scale-[0.98] active:border-primary/40 active:shadow-[0_12px_28px_-14px_color-mix(in_srgb,var(--primary)_45%,transparent)]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 group-active:scale-110 group-active:rotate-6">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1 text-sm font-medium text-foreground group-hover:text-primary group-active:text-primary transition-colors">
                      {link.label}
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-foreground-subtle opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary group-active:opacity-100 group-active:translate-x-0 group-active:text-primary"
                    />
                  </a>
                </RevealItem>
              );
            })}
          </RevealGroup>

          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8 card-shadow"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nombre" name="name" value={form.name} onChange={handleChange} required />
                <Field
                  label="Nombre del negocio"
                  name="business"
                  value={form.business}
                  onChange={handleChange}
                />
                <Field
                  label="Número de teléfono"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                />
                <Field
                  label="Tipo de negocio"
                  name="businessType"
                  value={form.businessType}
                  onChange={handleChange}
                />
                <Field
                  label="Servicio que necesita"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                />
                <Field
                  label="Presupuesto aproximado (opcional)"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-foreground-muted">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_4px_var(--primary-soft)]"
                  placeholder="Cuéntame brevemente qué necesitas para tu negocio"
                />
              </div>

              <motion.div whileTap={{ scale: 0.98 }} className="mt-6">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-white shadow-[0_8px_24px_-8px_var(--primary)] transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_10px_30px_-6px_var(--primary)] disabled:opacity-70 cursor-pointer"
                >
                  {status === "sent" ? (
                    <>
                      <CheckCircle2 size={16} /> Solicitud enviada
                    </>
                  ) : (
                    <>
                      Enviar solicitud por WhatsApp{" "}
                      <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </motion.div>
              <p className="mt-3 text-center text-xs text-foreground-subtle">
                Al enviar, se abrirá WhatsApp con tu mensaje ya preparado.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium text-foreground-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_4px_var(--primary-soft)]"
      />
    </div>
  );
}
