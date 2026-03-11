import Link from 'next/link';
import { navigation, segments } from '@/lib/data';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-serif text-3xl font-bold tracking-tight text-primary-foreground">
                MM
              </span>
              <span className="font-serif text-lg font-medium text-gold">
                Empreendimentos
              </span>
            </Link>
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
              Excelência, estrutura e sofisticação em cada projeto. Há anos transformando sonhos em realidade.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-primary-foreground transition-colors hover:bg-gold hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-primary-foreground transition-colors hover:bg-gold hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold">Navegação</h3>
            <nav className="mt-4 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-sans text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Segments */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold">Segmentos</h3>
            <nav className="mt-4 flex flex-col gap-3">
              {segments.map((segment) => (
                <Link
                  key={segment.id}
                  href={segment.href}
                  className="font-sans text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  {segment.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold">Contato</h3>
            <div className="mt-4 flex flex-col gap-4">
              <a
                href="tel:+5517997888159"
                className="flex items-center gap-3 font-sans text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 text-gold" />
                (17) 99788-8159
              </a>
              <a
                href="mailto:contato@mmempreendimentos.com.br"
                className="flex items-center gap-3 font-sans text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 text-gold" />
                contato@mmempreendimentos.com.br
              </a>
              <div className="flex items-start gap-3 font-sans text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <span>Fernandópolis, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-sans text-sm text-muted-foreground">
              © {new Date().getFullYear()} MM Empreendimentos. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="/politica-privacidade"
                className="font-sans text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos-uso"
                className="font-sans text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
