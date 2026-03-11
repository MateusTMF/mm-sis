import type { Metadata } from 'next';
import { SegmentPage } from '@/components/segment-page';
import { segments, mmWearFAQs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'MM Wear | Moda com Atitude e Estilo',
  description: 'Marca de roupas moderna e exclusiva que expressa atitude, estilo e confiança. Design atual e qualidade superior.',
  openGraph: {
    title: 'MM Wear | Moda com Atitude e Estilo',
    description: 'Moda que expressa atitude, estilo e confiança.',
  },
};

export default function MMWearPage() {
  const segment = segments.find((s) => s.id === 'mm-wear')!;

  return <SegmentPage segment={segment} faqs={mmWearFAQs} />;
}
