import type { Metadata } from 'next';

/* Código antigo comentado
import { SegmentPage } from '@/components/segment-page';
import { segments, armazemFAQs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'MM Armazém | Armazenamento e Logística',
  description: 'Soluções inteligentes para armazenamento e logística...',
  openGraph: {
    title: 'MM Armazém | Armazenamento e Logística',
    description: 'Seu estoque seguro, organizado e pronto para crescer...',
  },
};

export default function ArmazemPage() {
  const segment = segments.find((s) => s.id === 'armazem')!;
  return <SegmentPage segment={segment} faqs={armazemFAQs} />;
}
*/

// Export mínimo obrigatório para Vercel
export default function ArmazemPage() {
  return <></>; // ou <></>
}