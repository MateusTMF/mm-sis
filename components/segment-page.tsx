import Link from 'next/link';
import { ArrowRight, Check, Phone, ChevronDown } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import type { Segment, FAQ } from '@/types';

interface SegmentPageProps {
  segment: Segment;
  faqs: FAQ[];
  galleryImages?: string[];
}

export function SegmentPage({ segment, faqs }: SegmentPageProps) {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-primary pt-20">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:60px_60px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
            <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-2 font-sans text-sm font-medium text-gold">
              {segment.name}
            </span>
            <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              {segment.title}
            </h1>
            <p className="mt-4 font-sans text-xl text-muted-foreground">
              {segment.subtitle}
            </p>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground">
              {segment.description}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/5517997888159"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-sm bg-gold px-8 py-4 font-sans text-base font-semibold text-primary transition-all hover:bg-gold-light"
              >
                <Phone className="h-5 w-5" />
                Solicitar Orçamento via WhatsApp
              </a>
              <Link
                href="/contato"
                className="rounded-sm border border-primary-foreground/30 px-8 py-4 font-sans text-base font-medium text-primary-foreground transition-all hover:border-gold hover:text-gold"
              >
                Enviar Mensagem
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
                  Nossos Serviços
                </span>
                <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                  O que oferecemos
                </h2>
                <p className="mt-4 font-sans text-lg leading-relaxed text-muted-foreground">
                  {segment.valueProposition}
                </p>
                <ul className="mt-8 space-y-4">
                  {segment.services.map((service) => (
                    <li key={service} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                        <Check className="h-4 w-4 text-gold" />
                      </div>
                      <span className="font-sans text-base text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                  <div className="flex h-full w-full items-center justify-center bg-primary/5">
                    <span className="font-sans text-muted-foreground">Galeria de Projetos</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 h-48 w-48 rounded-lg border border-gold/30 bg-gold/5" />
              </div>
            </div>
          </div>
        </section>

        {/* Differentials Section */}
        <section className="bg-secondary py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
                Diferenciais
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Por que escolher a {segment.name}?
              </h2>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {segment.differentials.map((differential, index) => (
                <div
                  key={differential}
                  className="rounded-lg border border-border bg-card p-6 text-center transition-all hover:border-gold hover:shadow-lg"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <span className="font-serif text-xl font-bold text-gold">{index + 1}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-card-foreground">
                    {differential}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
                Portfólio
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Nossos Projetos
              </h2>
            </div>
            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-muted"
                >
                  <div className="flex h-full w-full items-center justify-center bg-primary/5">
                    <span className="font-sans text-muted-foreground">Projeto {item}</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/80 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                      <span className="font-serif text-xl font-semibold text-primary-foreground">
                        Projeto {item}
                      </span>
                      <span className="mt-2 font-sans text-sm text-muted-foreground">
                        Clique para ver detalhes
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-secondary py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
                Dúvidas Frequentes
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Perguntas Frequentes
              </h2>
            </div>
            <div className="mx-auto mt-16 max-w-3xl">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group rounded-lg border border-border bg-card"
                  >
                    <summary className="flex cursor-pointer items-center justify-between p-6">
                      <span className="font-sans text-base font-medium text-card-foreground">
                        {faq.question}
                      </span>
                      <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="border-t border-border px-6 pb-6 pt-4">
                      <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl">
              <span className="text-balance">Pronto para começar seu </span>
              <span className="text-gold">projeto?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground">
              Entre em contato conosco agora mesmo e solicite um orçamento sem compromisso.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/5517997888159"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-sm bg-gold px-8 py-4 font-sans text-base font-semibold text-primary transition-all hover:bg-gold-light"
              >
                Falar no WhatsApp
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/contato"
                className="rounded-sm border border-primary-foreground/30 px-8 py-4 font-sans text-base font-medium text-primary-foreground transition-all hover:border-gold hover:text-gold"
              >
                Enviar Mensagem
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton message={`Olá! Gostaria de saber mais sobre a ${segment.name}.`} />
    </>
  );
}
