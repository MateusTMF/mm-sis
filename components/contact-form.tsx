'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import type { ContactFormData } from '@/types';
import { segments } from '@/lib/data';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  segment?: string;
  message?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    segment: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nome deve ter pelo menos 3 caracteres';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!/^[\d\s()+-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Telefone inválido';
    }

    if (!formData.segment) {
      newErrors.segment = 'Selecione um segmento de interesse';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('submitting');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate success
    setStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      segment: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-8 text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">
          Mensagem Enviada!
        </h3>
        <p className="mt-2 font-sans text-muted-foreground">
          Obrigado pelo contato. Nossa equipe retornará em breve.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 rounded-sm bg-primary px-6 py-3 font-sans text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
        >
          Enviar Nova Mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="flex items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-4">
          <AlertCircle className="h-5 w-5 text-destructive" />
          <p className="font-sans text-sm text-destructive">
            Ocorreu um erro ao enviar. Tente novamente.
          </p>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block font-sans text-sm font-medium text-foreground">
          Nome Completo *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`mt-2 block w-full rounded-sm border bg-background px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold ${
            errors.name ? 'border-destructive' : 'border-input'
          }`}
          placeholder="Seu nome completo"
        />
        {errors.name && (
          <p className="mt-1 font-sans text-sm text-destructive">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-sans text-sm font-medium text-foreground">
          E-mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-2 block w-full rounded-sm border bg-background px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold ${
            errors.email ? 'border-destructive' : 'border-input'
          }`}
          placeholder="seu@email.com"
        />
        {errors.email && (
          <p className="mt-1 font-sans text-sm text-destructive">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block font-sans text-sm font-medium text-foreground">
          Telefone / WhatsApp *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`mt-2 block w-full rounded-sm border bg-background px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold ${
            errors.phone ? 'border-destructive' : 'border-input'
          }`}
          placeholder="(11) 99999-9999"
        />
        {errors.phone && (
          <p className="mt-1 font-sans text-sm text-destructive">{errors.phone}</p>
        )}
      </div>

      {/* Segment */}
      <div>
        <label htmlFor="segment" className="block font-sans text-sm font-medium text-foreground">
          Segmento de Interesse *
        </label>
        <select
          id="segment"
          name="segment"
          value={formData.segment}
          onChange={handleChange}
          className={`mt-2 block w-full rounded-sm border bg-background px-4 py-3 font-sans text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold ${
            errors.segment ? 'border-destructive' : 'border-input'
          }`}
        >
          <option value="">Selecione um segmento</option>
          {segments.map((segment) => (
            <option key={segment.id} value={segment.id}>
              {segment.name}
            </option>
          ))}
          <option value="outros">Outros</option>
        </select>
        {errors.segment && (
          <p className="mt-1 font-sans text-sm text-destructive">{errors.segment}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-sans text-sm font-medium text-foreground">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`mt-2 block w-full resize-none rounded-sm border bg-background px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold ${
            errors.message ? 'border-destructive' : 'border-input'
          }`}
          placeholder="Descreva seu projeto ou dúvida..."
        />
        {errors.message && (
          <p className="mt-1 font-sans text-sm text-destructive">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 font-sans text-base font-semibold text-primary transition-all hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Enviar Mensagem
          </>
        )}
      </button>
    </form>
  );
}
