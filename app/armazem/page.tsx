/*import type { Metadata } from 'next';
import { SegmentPage } from '@/components/segment-page';
import { segments, armazemFAQs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'MM Armazém | Armazenamento e Logística',
  description: 'Soluções inteligentes para armazenamento e logística. Espaço seguro, organizado e pronto para crescer com seu negócio.',
  openGraph: {
    title: 'MM Armazém | Armazenamento e Logística',
    description: 'Seu estoque seguro, organizado e pronto para crescer com seu negócio.',
  },
};

export default function ArmazemPage() {
  const segment = segments.find((s) => s.id === 'armazem')!;

  return <SegmentPage segment={segment} faqs={armazemFAQs} />;
}
