export interface PublicProject {
  id: string;
  title: string;
  stack: string[];
  description: string;
  linkLabel?: string;
  url?: string;
}

export const publicProjects: PublicProject[] = [
  {
    id: 'robocode',
    title: 'robocode',
    stack: ['Java', 'AI'],
    description: 'Robo campeao 2024 UniEVANGELICA com estrategia adaptativa.',
  },
  {
    id: 'product-api',
    title: 'ProductAPI',
    stack: ['Node.js', 'TypeScript', 'PostgreSQL'],
    description: 'API REST pronta para producao com testes e documentacao.',
    linkLabel: 'Ver repositorio',
    url: 'https://github.com/GabrielGFC/ProductAPI',
  },
  {
    id: 'desafio-picpay',
    title: 'Desafio PicPay',
    stack: ['TypeScript', 'WebSockets'],
    description: 'Replica funcional com autenticacao e transacoes em tempo real.',
    linkLabel: 'Abrir no GitHub',
    url: 'https://github.com/GabrielGFC/Desafio-PicPay',
  },
  {
    id: 'ecoalertas',
    title: 'EcoAlertas Back',
    stack: ['Express', 'MongoDB'],
    description: 'Backend de alertas ambientais com monitoramento continuo.',
    linkLabel: 'Abrir no GitHub',
    url: 'https://github.com/GabrielGFC/EcoAlertas-Back',
  },
  {
    id: 'teste-php-laravel',
    title: 'teste-php-laravel',
    stack: ['PHP', 'Laravel', 'MySQL'],
    description: 'Laboratorio publico com APIs Laravel e suites de testes.',
    linkLabel: 'Ver repositorio',
    url: 'https://github.com/GabrielGFC/teste-php-laravel',
  },
  {
    id: 'projeto-estoque',
    title: 'projetoestoque',
    stack: ['Node.js', 'Express', 'PostgreSQL'],
    description: 'Sistema academico de estoque com APIs REST e autenticacao basica.',
    linkLabel: 'Abrir no GitHub',
    url: 'https://github.com/GabrielGFC/projetoestoque',
  },
  {
    id: 'padrao-commit',
    title: 'padrao-de-commit-git',
    stack: ['Guia', 'Git'],
    description: 'Guia pratico de mensagens de commit e convencoes de versionamento.',
    linkLabel: 'Abrir no GitHub',
    url: 'https://github.com/GabrielGFC/padrao-de-commit-git',
  },
  {
    id: 'tiradentes',
    title: 'TIRADENTES-gfc',
    stack: ['HTML', 'SCSS', 'JavaScript'],
    description: 'Landing page responsiva para evento academico tiradentes.',
    linkLabel: 'Abrir no GitHub',
    url: 'https://github.com/GabrielGFC/TIRADENTES-gfc',
  },
  {
    id: 'desafios-back',
    title: 'desafios-back-unievangelica',
    stack: ['Node.js', 'TypeScript'],
    description: 'Colecao de desafios backend realizados na UniEVANGELICA.',
    linkLabel: 'Abrir no GitHub',
    url: 'https://github.com/GabrielGFC/desafios-back-unievangelica',
  },
];
