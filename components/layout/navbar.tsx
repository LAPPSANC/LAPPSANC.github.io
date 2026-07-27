"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/site-config";
import { useActiveSection } from "@/hooks/use-active-section";
import { useCssVarFromHeight } from "@/hooks/use-css-var-from-height";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { BrandMark } from "@/components/layout/brand-mark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.href.replace("#", "")));

  // Publica la altura real del navbar en --nav-height (ver globals.css). El
  // resto del sitio usa esa variable para su espaciado en vez de un valor
  // fijo adivinado, por lo que se mantiene correcto sin importar cómo se
  // reacomode el navbar (menú abierto, wrap de texto, zoom, etc.).
  const headerRef = useCssVarFromHeight<HTMLElement>("--nav-height", 88);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 inset-x-0 z-40 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "glass w-full max-w-6xl rounded-2xl border border-border transition-shadow duration-300",
          scrolled && "card-shadow"
        )}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6 py-3 min-w-0">
          <a href="#inicio" className="flex min-w-0 shrink-0">
            <BrandMark size="sm" tagline />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors",
                    isActive ? "text-primary" : "text-foreground-muted hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-primary-soft"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button
              href={buildWhatsAppLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer nofollow"
              size="md"
            >
              Solicitar cotización
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Abrir menú de navegación"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground cursor-pointer"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-border"
            >
              <div className="flex flex-col gap-1 px-4 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground-muted hover:bg-primary-soft hover:text-primary active:bg-primary-soft active:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  href={buildWhatsAppLink(whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 justify-center"
                >
                  Solicitar cotización
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
