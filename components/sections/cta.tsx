import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:60px_60px]" />
      </div>

      {/* Gold Accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gold/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
          <span className="text-balance">Pronto para transformar seu </span>
          <span className="text-gold">projeto em realidade?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground">
          Entre em contato conosco e descubra como a MM Empreendimentos pode 
          ajudar você a alcançar seus objetivos com excelência e profissionalismo.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contato"
            className="group flex items-center gap-2 rounded-sm bg-gold px-8 py-4 font-sans text-base font-semibold text-primary transition-all hover:bg-gold-light"
          >
            Solicite um Orçamento Agora
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="https://wa.me/5517997888159"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-sm border border-primary-foreground/30 px-8 py-4 font-sans text-base font-medium text-primary-foreground transition-all hover:border-gold hover:text-gold"
          >
            <Phone className="h-5 w-5" />
            Fale pelo WhatsApp
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-border/20 pt-10">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="font-sans text-sm text-muted-foreground">Atendimento Imediato</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-gold" />
            <span className="font-sans text-sm text-muted-foreground">Orçamento Gratuito</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-500" />
            <span className="font-sans text-sm text-muted-foreground">Garantia de Qualidade</span>
          </div>
        </div>
      </div>
    </section>
  );
}
