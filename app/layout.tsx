import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MM Empreendimentos | Excelência em Cada Projeto',
  description: 'MM Empreendimentos - Especialistas em Gesso 3D, Armazenamento, Espaços para Eventos e Moda. Qualidade, confiança e excelência em todos os segmentos.',
  keywords: ['MM Empreendimentos', 'Gesso 3D', 'Armazém', 'Espaço de Eventos', 'MM Wear', 'Moda'],
  authors: [{ name: 'MM Empreendimentos' }],
  openGraph: {
    title: 'MM Empreendimentos | Excelência em Cada Projeto',
    description: 'Especialistas em Gesso 3D, Armazenamento, Espaços para Eventos e Moda.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
