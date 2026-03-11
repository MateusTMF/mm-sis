import type { Metadata } from 'next';
import { SegmentPage } from '@/components/segment-page';
import { segments, gessoFAQs } from '@/lib/data';


export const metadata: Metadata = {
  title: 'MM Gesso 3D | Placas de Gesso 3D, Fabricação e Instalação',
  description:
    'Especialistas em gesso 3D. Fabricação própria e instalação profissional. Transforme sua parede em uma obra de arte com acabamento moderno e sofisticado.',
  keywords: [
    'gesso 3D',
    'placas de gesso 3D',
    'parede 3D',
    'gesso decorativo',
    'decoração de parede',
    'gesso 3D Fernandópolis',
    'placas 3D',
    'decoração moderna',
  ],
  openGraph: {
    title: 'MM Gesso 3D | Transforme sua Parede em uma Obra de Arte',
    description:
      'Produção e instalação de placas de gesso 3D. Modernize seu ambiente com acabamento sofisticado e excelente custo-benefício.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function Gesso3DPage() {
  const segment = segments.find((s) => s.id === 'gesso-3d')!;

  return <SegmentPage segment={segment} faqs={gessoFAQs} />;
}
