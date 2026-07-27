import { FacebookIcon, InstagramIcon, TiktokIcon } from "@/components/ui/social-icons";
import { BrandMark } from "@/components/layout/brand-mark";
import { siteConfig } from "@/lib/site-config";

const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-alt">
      <div className="container-page py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-sm">
            <BrandMark size="sm" />
            <p className="mt-4 text-sm text-foreground-muted leading-relaxed">
              Diseño y desarrollo web para negocios que quieren crecer.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground-muted hover:text-primary hover:border-primary active:text-primary active:border-primary transition-colors"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground-muted hover:text-primary hover:border-primary active:text-primary active:border-primary transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground-muted hover:text-primary hover:border-primary active:text-primary active:border-primary transition-colors"
              >
                <TiktokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-foreground-subtle mb-1">
              Navegación
            </span>
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground-muted hover:text-primary active:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-foreground-subtle mb-1">
              Legal
            </span>
            <a href="#" className="text-sm text-foreground-muted hover:text-primary active:text-primary transition-colors">
              Aviso de privacidad
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border pt-6 text-xs text-foreground-subtle">
          <p>© 2026 {siteConfig.brand}. Todos los derechos reservados.</p>
          <p>Diseño y desarrollo web para negocios que quieren crecer.</p>
        </div>
      </div>
    </footer>
  );
}
