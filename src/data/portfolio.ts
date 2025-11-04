export interface Project {
  id: string;
  title: string;
  stack: string[];
  description: string;
  problem: string;
  solution: string;
  tags: string[];
  isPrivate: boolean;
  githubLink?: string;
  image?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  activities: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
}

export const portfolioData = {
  hero: {
    name: 'Gabriel Fernandes de Carvalho',
    role: 'Desenvolvedor Backend | Laravel, NodeJS, Python, .NET, PHP, Java',
    location: 'Anápolis - GO',
    tagline: 'Transformo ideias em código limpo e funcional',
    email: 'bibigfc@gmail.com',
    linkedin: 'https://www.linkedin.com/in/gabrielgfc1',
    resume: '/Portifolio/Gabriel_Fernandes_de_Carvalho.pdf',
  },
  
  about: {
    paragraphs: [
      'Desenvolvedor Backend com experiência sólida em Laravel, NodeJS, .NET, Python, PHP e Java. Atuo na Fábrica de Tecnologias Turing (FTT) da UniEVANGÉLICA, contribuindo em sistemas robustos para instituições educacionais e de pesquisa.',
      'Com certificações em Laravel 11, Fundamentos do C# e Remote Work, aplico as melhores práticas de desenvolvimento em projetos reais que impactam milhares de usuários.',
      'Minha experiência inclui desenvolvimento de APIs RESTful, integração com serviços externos, automações e sistemas de gestão acadêmica. Participo ativamente de projetos institucionais e mantenho código limpo, testável e bem documentado.',
    ],
  },

  projects: [
    {
      id: 'jac',
      title: 'JAC – Jornada Acadêmica e Comunitária',
      stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Kubernetes'],
      description: 'Plataforma web institucional para gerenciamento de eventos acadêmicos e comunitários.',
      problem: 'Necessidade de uma plataforma unificada para gerenciar eventos acadêmicos com check-in automatizado e gamificação.',
      solution: 'Desenvolvi uma solução completa com geofencing, QR Code, sistema de pontos e dashboards gerenciais. Implementei backend principal com Node.js e TypeScript, arquitetura escalável com Docker e Kubernetes, e integração SSO.',
      tags: ['Institucional', 'NodeJS', 'React', 'TypeScript'],
      isPrivate: true,
    },
    {
      id: 'james-fanstone',
      title: 'Sistema James Fanstone',
      stack: ['Laravel', 'Vue.js', 'PostgreSQL'],
      description: 'Plataforma institucional para gerenciamento completo da pesquisa científica e inovação.',
      problem: 'Falta de um sistema centralizado para gerenciar projetos de pesquisa, grupos, editais e relatórios acadêmicos.',
      solution: 'Desenvolvi backend em Laravel com integração ao sistema Lyceum, modelagem de fluxos institucionais e APIs RESTful para gestão de pesquisas, grupos de pesquisa e formulários de ética.',
      tags: ['Institucional', 'Laravel', 'Vue.js'],
      isPrivate: true,
    },
    {
      id: 'desafio-picpay',
      title: 'Desafio PicPay Clone',
      stack: ['TypeScript', 'Node.js', 'WebSockets', 'PostgreSQL'],
      description: 'Clone funcional do PicPay com autenticação e comunicação em tempo real.',
      problem: 'Desafio técnico para criar um sistema de pagamentos com funcionalidades similares ao PicPay.',
      solution: 'Implementei API RESTful com Node.js e TypeScript, sistema de autenticação JWT, WebSockets para notificações em tempo real, e integração com banco de dados PostgreSQL.',
      tags: ['Academic', 'NodeJS', 'TypeScript', 'WebSockets'],
      isPrivate: false,
      githubLink: 'https://github.com/GabrielGFC/Desafio-PicPay',
    },
    {
      id: 'product-api',
      title: 'ProductAPI',
      stack: ['Node.js', 'TypeScript', 'PostgreSQL'],
      description: 'API REST completa para gerenciamento de produtos com operações CRUD.',
      problem: 'Necessidade de uma API robusta e escalável para gerenciar produtos em um sistema de e-commerce.',
      solution: 'Desenvolvi API RESTful com Node.js e TypeScript, implementando validações, tratamento de erros, paginação e documentação com Swagger.',
      tags: ['Academic', 'NodeJS', 'TypeScript', 'PostgreSQL'],
      isPrivate: false,
      githubLink: 'https://github.com/GabrielGFC/ProductAPI',
    },
    {
      id: 'ecoalertas',
      title: 'EcoAlertas Backend',
      stack: ['Express.js', 'MongoDB', 'Node.js'],
      description: 'Backend para sistema de alertas ambientais com monitoramento em tempo real.',
      problem: 'Sistema para monitorar e alertar sobre riscos ambientais em tempo real.',
      solution: 'Desenvolvi API com Express.js e MongoDB, implementando sistema de alertas em tempo real, processamento de dados ambientais e notificações automáticas.',
      tags: ['Academic', 'NodeJS', 'MongoDB'],
      isPrivate: false,
      githubLink: 'https://github.com/GabrielGFC/EcoAlertas-Back',
    },
    {
      id: 'robocode',
      title: 'Robocode Champion 2024',
      stack: ['Java'],
      description: 'Robô de batalha campeão do torneio acadêmico 2024.',
      problem: 'Desafio acadêmico de criar um robô de batalha estratégico para competição.',
      solution: 'Desenvolvi algoritmo de IA para estratégia de batalha, implementando sistema de detecção de inimigos, cálculo de trajetórias e otimização de movimentos.',
      tags: ['Academic', 'Java'],
      isPrivate: false,
      githubLink: 'https://github.com/GabrielGFC/robocode',
    },
  ] as Project[],

  experience: [
    {
      company: 'Fábrica de Tecnologias Turing',
      position: 'Desenvolvedor Sênior',
      period: 'Set 2023 - Atualmente',
      activities: [
        'Desenvolvimento de sistemas robustos para instituições educacionais e de pesquisa',
        'Arquitetura e implementação de APIs RESTful com .NET Core e Laravel',
        'Coordenação técnica de projetos institucionais e mentoria de desenvolvedores júnior',
      ],
    },
    {
      company: 'UniEVANGÉLICA',
      position: 'Estagiário Backend',
      period: 'Out 2024 - Atualmente',
      activities: [
        'Desenvolvimento de soluções backend para projetos acadêmicos',
        'Suporte na modelagem de fluxos institucionais e integração de sistemas',
        'Manutenção e evolução de plataformas educacionais',
      ],
    },
    {
      company: 'Força Aérea Brasileira',
      position: 'Dev Backend',
      period: 'Jan 2024 - Dez 2024',
      activities: [
        'Desenvolvimento de API backend para controle de disponibilidade de recursos',
        'Implementação de autenticação JWT e controle de permissões',
        'Integração com sistemas internos e documentação técnica',
      ],
    },
    {
      company: 'Leomed Drogarias',
      position: 'Assistente de Compras',
      period: 'Jan 2023 - Ago 2023',
      activities: [
        'Gestão de processos de compras e estoque',
        'Análise de fornecedores e negociação de contratos',
        'Suporte operacional e administrativo',
      ],
    },
    {
      company: 'Tecpress Tecnologia',
      position: 'Suporte Técnico Sênior',
      period: 'Jan 2019 - Dez 2022',
      activities: [
        'Gestão de equipe de suporte técnico e atendimento ao cliente',
        'Resolução de problemas técnicos complexos e treinamento de usuários',
        'Análise e documentação de processos de suporte',
      ],
    },
  ] as Experience[],

  education: {
    degree: 'Bacharelado em Engenharia de Software',
    institution: 'UniEVANGÉLICA',
    period: '2023 - 2027',
  },

  certifications: [
    {
      title: 'Curso Laravel 11 - Completo e Gratuito',
      issuer: 'Curso Online',
    },
    {
      title: 'Fundamentos do C#',
      issuer: 'Certificação',
    },
    {
      title: 'Curso de Remote Work',
      issuer: 'Certificação',
    },
  ] as Certification[],

  contact: {
    message: 'Vamos conversar?',
    email: 'bibigfc@gmail.com',
    linkedin: 'https://www.linkedin.com/in/gabrielgfc1',
    whatsapp: 'https://wa.me/5562999999999', // Atualize com o número real
  },
};

