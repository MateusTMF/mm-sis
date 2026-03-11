import Link from 'next/link';
import { ArrowRight, Layers, Warehouse, PartyPopper, Shirt } from 'lucide-react';
import { segments } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  layers: Layers,
  warehouse: Warehouse,
  party: PartyPopper,
  shirt: Shirt,
};

export function Segments() {
  return (
    <section id="segmentos" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
            Nossos Segmentos
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Soluções Completas para </span>
            <span className="text-gold">Cada Necessidade</span>
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-muted-foreground">
            Conheça nossos quatro segmentos de atuação e descubra como podemos 
            ajudar você a alcançar seus objetivos com excelência.
          </p>
        </div>

        {/* Segments Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {segments.map((segment) => {
            const Icon = iconMap[segment.icon];
            return (
              <div
                key={segment.id}
                className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-gold hover:shadow-xl"
              >
                <div className="p-8 lg:p-10">
                  {/* Icon & Title */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-primary">
                      <Icon className="h-8 w-8" />
                    </div>
                    <Link
                      href={segment.href}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-primary"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <span className="font-sans text-sm font-medium text-gold">
                      {segment.name}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl font-bold text-card-foreground">
                      {segment.title}
                    </h3>
                    <p className="mt-1 font-sans text-base text-muted-foreground">
                      {segment.subtitle}
                    </p>
                  </div>

                  {/* Value Proposition */}
                  <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
                    {segment.valueProposition}
                  </p>

                  {/* Services Preview */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {segment.services.slice(0, 3).map((service) => (
                      <span
                        key={service}
                        className="rounded-full bg-secondary px-3 py-1 font-sans text-xs font-medium text-secondary-foreground"
                      >
                        {service}
                      </span>
                    ))}
                    {segment.services.length > 3 && (
                      <span className="rounded-full bg-gold/10 px-3 py-1 font-sans text-xs font-medium text-gold">
                        +{segment.services.length - 3} mais
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href={segment.href}
                    className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold transition-colors hover:text-gold-dark"
                  >
                    Saiba mais
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Decorative Element */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/5 transition-transform group-hover:scale-150" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
