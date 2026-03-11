import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:60px_60px]" />
      </div>

      {/* Gold Accent Lines */}
      <div className="absolute left-0 top-1/4 h-px w-32 bg-gold/30 lg:w-64" />
      <div className="absolute right-0 bottom-1/4 h-px w-32 bg-gold/30 lg:w-64" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="font-sans text-sm font-medium text-gold">
            Excelência em Cada Projeto
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Excelência, Estrutura e</span>
          <span className="mt-2 block text-gold">Sofisticação</span>
          <span className="block">em Cada Projeto</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground sm:text-xl">
          A MM Empreendimentos atua em quatro segmentos estratégicos, oferecendo 
          soluções premium com qualidade, confiança e profissionalismo incomparáveis.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contato"
            className="group flex items-center gap-2 rounded-sm bg-gold px-8 py-4 font-sans text-base font-semibold text-primary transition-all hover:bg-gold-light"
          >
            Solicite um Orçamento
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#segmentos"
            className="rounded-sm border border-primary-foreground/30 px-8 py-4 font-sans text-base font-medium text-primary-foreground transition-all hover:border-gold hover:text-gold"
          >
            Conheça Nossos Segmentos
          </Link>
        </div>

        {/* Stats */}
        {/*<div className="mt-20 grid grid-cols-2 gap-8 border-t border-border/20 pt-12 sm:grid-cols-4">
          <div>
            <p className="font-serif text-4xl font-bold text-gold">1+</p>
            <p className="mt-2 font-sans text-sm text-muted-foreground">Ano de Experiência</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-bold text-gold">10+</p>
            <p className="mt-2 font-sans text-sm text-muted-foreground">Projetos Realizados</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-bold text-gold">1</p>
            <p className="mt-2 font-sans text-sm text-muted-foreground">Segmentos de Atuação</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-bold text-gold">98%</p>
            <p className="mt-2 font-sans text-sm text-muted-foreground">Clientes Satisfeitos</p>
          </div>
        </div>*/}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-12 w-6 items-start justify-center rounded-full border-2 border-gold/50 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
}
