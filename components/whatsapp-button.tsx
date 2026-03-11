'use client';

import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  message?: string;
}

export function WhatsAppButton({ message = 'Olá! Gostaria de saber mais sobre os serviços da MM Empreendimentos.' }: WhatsAppButtonProps) {
  const phoneNumber = '5511999999999';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
