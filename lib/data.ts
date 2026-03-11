import type { Segment, Testimonial, NavigationItem, FAQ } from '@/types';

export const navigation: NavigationItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Gesso 3D', href: '/gesso-3d' },
  { label: 'Armazém', href: '/armazem' },
  { label: 'Espaço & Lazer', href: '/espaco-lazer' },
  { label: 'MM Wear', href: '/mm-wear' },
  { label: 'Contato', href: '/contato' },
];

export const segments: Segment[] = [
  {
    id: 'gesso-3d',
    name: 'MM Gesso 3D',
    title: 'Transforme Seus Ambientes',
    subtitle: 'Decoração e acabamento de alto padrão',
    description: 'Especializada em decoração e acabamento de alto padrão, a MM Gesso 3D transforma ambientes comuns em espaços sofisticados e valorizados. Nossos projetos personalizados elevam o padrão estético de qualquer ambiente.',
    services: [
      'Gesso 3D decorativo',
      'Rebaixamento de teto',
      'Sancas iluminadas',
      'Molduras elegantes',
      'Projetos personalizados',
    ],
    differentials: [
      'Acabamento premium',
      'Execução rápida e limpa',
      'Materiais de alta qualidade',
      'Profissionais qualificados',
      'Projetos modernos e personalizados',
    ],
    valueProposition: 'Transformamos ambientes comuns em espaços sofisticados e valorizados.',
    href: '/gesso-3d',
    icon: 'layers',
  },
  {
    id: 'armazem',
    name: 'MM Armazém',
    title: 'Armazenamento Inteligente',
    subtitle: 'Soluções completas para seu estoque',
    description: 'Oferecemos soluções inteligentes para armazenamento e logística. Com espaço seguro, organização eficiente e controle prático, seu estoque estará sempre pronto para crescer junto com seu negócio.',
    services: [
      'Guarda de mercadorias',
      'Aluguel de espaço para estoque',
      'Apoio a e-commerces',
      'Suporte a distribuidores',
    ],
    differentials: [
      'Espaço seguro',
      'Organização eficiente',
      'Controle e praticidade',
      'Estrutura confiável',
    ],
    valueProposition: 'Seu estoque seguro, organizado e pronto para crescer com seu negócio.',
    href: '/armazem',
    icon: 'warehouse',
  },
  {
    id: 'espaco-lazer',
    name: 'MM Espaço & Lazer',
    title: 'Momentos Inesquecíveis',
    subtitle: 'O espaço perfeito para seus eventos',
    description: 'Oferecemos o espaço ideal para transformar momentos especiais em lembranças inesquecíveis. Com ambiente confortável, estrutura completa e total segurança, seus eventos serão memoráveis.',
    services: [
      'Festas familiares',
      'Aniversários',
      'Eventos corporativos',
      'Confraternizações',
    ],
    differentials: [
      'Ambiente confortável',
      'Estrutura completa',
      'Segurança total',
      'Experiência memorável',
    ],
    valueProposition: 'O espaço ideal para transformar momentos especiais em lembranças inesquecíveis.',
    href: '/espaco-lazer',
    icon: 'party',
  },
  {
    id: 'mm-wear',
    name: 'MM Wear',
    title: 'Vista-se com Atitude',
    subtitle: 'Moda que expressa personalidade',
    description: 'Marca de roupas moderna e exclusiva que expressa atitude, estilo e confiança. Nossas peças são criadas com design atual e qualidade superior para quem busca versatilidade e personalidade.',
    services: [
      'Coleções exclusivas',
      'Peças versáteis',
      'Moda masculina e feminina',
      'Acessórios',
    ],
    differentials: [
      'Design atual',
      'Qualidade superior',
      'Peças versáteis',
      'Estilo e personalidade',
    ],
    valueProposition: 'Moda que expressa atitude, estilo e confiança.',
    href: '/mm-wear',
    icon: 'shirt',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carolina Silva',
    role: 'Arquiteta',
    content: 'O trabalho da MM Gesso 3D superou todas as expectativas. O acabamento é impecável e a equipe foi extremamente profissional.',
    segment: 'gesso-3d',
  },
  {
    id: '2',
    name: 'Ricardo Mendes',
    role: 'Empresário',
    content: 'O MM Armazém foi a solução perfeita para meu e-commerce. Espaço organizado, seguro e com excelente custo-benefício.',
    segment: 'armazem',
  },
  {
    id: '3',
    name: 'Fernanda Costa',
    role: 'Cliente',
    content: 'Celebramos o aniversário de 15 anos da minha filha no MM Espaço & Lazer. Foi tudo perfeito, desde a estrutura até o atendimento.',
    segment: 'espaco-lazer',
  },
  {
    id: '4',
    name: 'Lucas Almeida',
    role: 'Designer',
    content: 'As peças da MM Wear têm qualidade excepcional. Design moderno e tecidos de primeira. Virei cliente fiel.',
    segment: 'mm-wear',
  },
];

export const companyDifferentials = [
  {
    title: 'Compromisso com Qualidade',
    description: 'Excelência em cada detalhe, do início ao fim de cada projeto.',
  },
  {
    title: 'Atendimento Personalizado',
    description: 'Entendemos suas necessidades e oferecemos soluções sob medida.',
  },
  {
    title: 'Profissionalismo',
    description: 'Equipe qualificada e comprometida com resultados excepcionais.',
  },
  {
    title: 'Credibilidade',
    description: 'Anos de experiência e clientes satisfeitos comprovam nossa excelência.',
  },
];

export const gessoFAQs: FAQ[] = [
  {
    question: 'Qual o prazo médio de execução de um projeto de gesso 3D?',
    answer: 'O prazo varia de acordo com a complexidade e tamanho do projeto. Em média, trabalhos residenciais levam de 3 a 7 dias úteis.',
  },
  {
    question: 'Vocês oferecem garantia nos serviços?',
    answer: 'Sim, oferecemos garantia de 2 anos em todos os nossos serviços, cobrindo defeitos de material e mão de obra.',
  },
  {
    question: 'É possível instalar gesso 3D em ambientes úmidos?',
    answer: 'Sim, utilizamos materiais especiais resistentes à umidade para banheiros e áreas externas cobertas.',
  },
  {
    question: 'Vocês fazem projeto personalizado?',
    answer: 'Absolutamente! Nossa equipe de design cria projetos exclusivos de acordo com suas preferências e necessidades.',
  },
];

export const armazemFAQs: FAQ[] = [
  {
    question: 'Qual o tamanho mínimo de espaço disponível para aluguel?',
    answer: 'Oferecemos espaços a partir de 10m², ideais para pequenos e-commerces e empreendedores.',
  },
  {
    question: 'O espaço é seguro?',
    answer: 'Sim, contamos com monitoramento 24h, controle de acesso e seguro contra incêndio e roubo.',
  },
  {
    question: 'Posso acessar meu estoque a qualquer momento?',
    answer: 'O acesso é permitido em horário comercial estendido. Para necessidades especiais, oferecemos planos com acesso 24h.',
  },
  {
    question: 'Vocês oferecem serviços de logística?',
    answer: 'Sim, temos parcerias com transportadoras para facilitar a logística do seu negócio.',
  },
];

export const espacoLazerFAQs: FAQ[] = [
  {
    question: 'Qual a capacidade máxima do espaço?',
    answer: 'Nosso espaço comporta confortavelmente até 150 pessoas em eventos em pé ou 100 pessoas sentadas.',
  },
  {
    question: 'O que está incluso no aluguel?',
    answer: 'Inclui mobiliário básico, som ambiente, churrasqueira, cozinha equipada e estacionamento.',
  },
  {
    question: 'Posso contratar decoração e buffet?',
    answer: 'Sim, temos parceiros de confiança para decoração, buffet e outros serviços. Também aceita fornecedores externos.',
  },
  {
    question: 'Qual o horário de funcionamento?',
    answer: 'O espaço pode ser reservado das 8h às 2h. Horários especiais podem ser negociados.',
  },
];

export const mmWearFAQs: FAQ[] = [
  {
    question: 'Como funciona a entrega?',
    answer: 'Entregamos para todo o Brasil via Correios ou transportadora. Frete grátis para compras acima de R$299.',
  },
  {
    question: 'Qual a política de trocas?',
    answer: 'Aceitamos trocas em até 30 dias após a compra, desde que o produto esteja com etiqueta e sem uso.',
  },
  {
    question: 'Vocês têm loja física?',
    answer: 'Atualmente operamos exclusivamente online, o que nos permite oferecer preços mais competitivos.',
  },
  {
    question: 'As peças têm tabela de medidas?',
    answer: 'Sim, cada produto possui tabela de medidas detalhada. Em caso de dúvida, nossa equipe está disponível para ajudar.',
  },
];
