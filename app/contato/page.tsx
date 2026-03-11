import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContactForm } from '@/components/contact-form';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contato | MM Empreendimentos',
  description: 'Entre em contato com a MM Empreendimentos. Solicite um orçamento gratuito para Gesso 3D, Armazém, Espaço de Eventos ou MM Wear.',
  openGraph: {
    title: 'Contato | MM Empreendimentos',
    description: 'Entre em contato e solicite um orçamento gratuito.',
  },
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-primary pt-20">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:60px_60px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-2 font-sans text-sm font-medium text-gold">
              Fale Conosco
            </span>
            <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Entre em <span className="text-gold">Contato</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground">
              Estamos prontos para atender você. Envie sua mensagem ou entre em contato 
              diretamente por um de nossos canais de atendimento.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Info */}
              <div>
                <span className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
                  Informações de Contato
                </span>
                <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                  Como Podemos Ajudar?
                </h2>
                <p className="mt-4 font-sans text-lg leading-relaxed text-muted-foreground">
                  Nossa equipe está à disposição para esclarecer suas dúvidas e 
                  apresentar as melhores soluções para suas necessidades.
                </p>

                {/* Contact Cards */}
                <div className="mt-10 space-y-6">
                  <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-gold">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-card-foreground">
                        Telefone / WhatsApp
                      </h3>
                      <a
                        href="tel:+5517997888159"
                        className="mt-1 block font-sans text-muted-foreground hover:text-gold"
                      >
                        (17) 99788-8159
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-gold">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-card-foreground">
                        E-mail
                      </h3>
                      <a
                        href="mailto:contato@mmempreendimentos.com.br"
                        className="mt-1 block font-sans text-muted-foreground hover:text-gold"
                      >
                        contato@mmempreendimentos.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-gold">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-card-foreground">
                        Localização
                      </h3>
                      <p className="mt-1 font-sans text-muted-foreground">
                        Fernandópolis, SP - Brasil
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-gold">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-card-foreground">
                        Horário de Atendimento
                      </h3>
                      <p className="mt-1 font-sans text-muted-foreground">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 8h às 12h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-lg border border-border bg-card p-8 lg:p-10">
                <h3 className="font-serif text-2xl font-bold text-card-foreground">
                  Envie sua Mensagem
                </h3>
                <p className="mt-2 font-sans text-muted-foreground">
                  Preencha o formulário abaixo e retornaremos em até 24 horas úteis.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-secondary py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
                Nossa Localização
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Onde Estamos
              </h2>
            </div>
            <div className="mt-12 overflow-hidden rounded-lg border border-border">
              <div className="aspect-[16/9] bg-muted">
                <div className="flex h-full w-full items-center justify-center bg-primary/5">
                  <div className="text-center">
                    <MapPin className="mx-auto h-12 w-12 text-gold" />
                    <p className="mt-4 font-sans text-muted-foreground">
                      Mapa da localização
                    </p>
                    <p className="font-sans text-sm text-muted-foreground">
                      Fernandópolis, SP - Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton message="Olá! Gostaria de entrar em contato com a MM Empreendimentos." />
    </>
  );
}
