import type { Metadata } from 'next';
import { SegmentPage } from '@/components/segment-page';
import { segments, gessoFAQs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'MM Gesso 3D | Decoração e Acabamento Premium',
  description: 'Especializada em gesso 3D, rebaixamento de teto, sancas e molduras. Transformamos ambientes comuns em espaços sofisticados e valorizados.',
  openGraph: {
    title: 'MM Gesso 3D | Decoração e Acabamento Premium',
    description: 'Transformamos ambientes comuns em espaços sofisticados e valorizados.',
  },
};

export default function Gesso3DPage() {
  const segment = segments.find((s) => s.id === 'gesso-3d')!;

  return <SegmentPage segment={segment} faqs={gessoFAQs} />;
}
