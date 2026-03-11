import { Shield, Users, Award, Clock } from 'lucide-react';
import { companyDifferentials } from '@/lib/data';

const icons = [Shield, Users, Award, Clock];

export function About() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
            Sobre Nós
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Por que escolher a </span>
            <span className="text-gold">MM Empreendimentos?</span>
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-muted-foreground">
            Há mais de uma década, a MM Empreendimentos constrói uma trajetória de 
            excelência, oferecendo soluções premium em quatro segmentos estratégicos. 
            Nosso compromisso é transformar cada projeto em uma experiência única.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {companyDifferentials.map((differential, index) => {
            const Icon = icons[index];
            return (
              <div
                key={differential.title}
                className="group rounded-lg border border-border bg-card p-8 transition-all hover:border-gold hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-primary">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-card-foreground">
                  {differential.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                  {differential.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 rounded-lg bg-primary p-8 sm:p-12 lg:p-16">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary-foreground sm:text-3xl">
                Nossa Missão
              </h3>
              <p className="mt-4 font-sans text-lg leading-relaxed text-muted-foreground">
                Entregar soluções que superem expectativas, construindo relacionamentos 
                duradouros baseados em confiança, qualidade e resultados excepcionais.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <div className="rounded-lg bg-secondary/10 p-6 text-center">
                <p className="font-serif text-3xl font-bold text-gold">100%</p>
                <p className="mt-1 font-sans text-sm text-muted-foreground">Comprometimento</p>
              </div>
              <div className="rounded-lg bg-secondary/10 p-6 text-center">
                <p className="font-serif text-3xl font-bold text-gold">24/7</p>
                <p className="mt-1 font-sans text-sm text-muted-foreground">Suporte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
