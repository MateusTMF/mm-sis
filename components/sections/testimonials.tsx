'use client';

import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
            Depoimentos
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">O que nossos </span>
            <span className="text-gold">clientes dizem</span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mt-16">
          <div className="mx-auto max-w-4xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  'transition-all duration-500',
                  index === activeIndex
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 absolute inset-0 translate-y-4 pointer-events-none'
                )}
              >
                <div className="rounded-lg border border-border bg-card p-8 text-center sm:p-12">
                  <Quote className="mx-auto h-12 w-12 text-gold/30" />
                  <p className="mt-6 font-sans text-xl leading-relaxed text-card-foreground sm:text-2xl">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="mt-8">
                    <div className="mx-auto h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center">
                      <span className="font-serif text-2xl font-bold text-gold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <p className="mt-4 font-serif text-lg font-semibold text-card-foreground">
                      {testimonial.name}
                    </p>
                    <p className="font-sans text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-gold hover:bg-gold hover:text-primary"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    'h-2 w-2 rounded-full transition-all',
                    index === activeIndex
                      ? 'w-8 bg-gold'
                      : 'bg-border hover:bg-gold/50'
                  )}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-gold hover:bg-gold hover:text-primary"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
