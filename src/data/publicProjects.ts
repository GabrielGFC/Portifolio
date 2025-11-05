export interface PublicProject {
  id: string;
  title: string;
  stack: string[];
  description: string;
  linkLabel?: string;
  url?: string;
  isFallback?: boolean;
}

export const publicProjects: PublicProject[] = [
  {
    id: "product-api",
    title: "ProductAPI",
    stack: ["Node.js", "TypeScript", "PostgreSQL"],
    description:
      "API REST completa para gestão de produtos com operações CRUD, validações, tratamento de erros, paginação e documentação OpenAPI. Demonstra capacidade de desenvolver APIs bem estruturadas e documentadas.",
    linkLabel: "Ver repositório",
    url: "https://github.com/GabrielGFC/ProductAPI",
  },
  {
    id: "desafio-picpay",
    title: "Desafio PicPay",
    stack: ["Node.js", "TypeScript", "WebSockets"],
    description:
      "Replica fluxos do PicPay com autenticação, fila de transferências e comunicação em tempo real via WebSockets. Demonstra conhecimento em comunicação assíncrona e sistemas de pagamento.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/Desafio-PicPay",
  },
  {
    id: "ecoalertas",
    title: "EcoAlertas Back",
    stack: ["Node.js", "Express", "TypeScript", "MySQL"],
    description:
      "Backend para sistema de alertas ambientais com filas de processamento e persistência em banco relacional. Demonstra capacidade de trabalhar com processamento assíncrono e integrações.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/EcoAlertas-Back",
  },
  {
    id: "teste-php-laravel",
    title: "Teste PHP Laravel",
    stack: ["PHP", "Laravel", "MySQL"],
    description:
      "Laboratório público em Laravel com APIs REST, autenticação e suíte de testes. Demonstra conhecimento prático em Laravel e boas práticas de desenvolvimento backend.",
    linkLabel: "Ver repositório",
    url: "https://github.com/GabrielGFC/teste-php-laravel",
  },
  {
    id: "padrao-commit",
    title: "Padrão de Commit Git",
    stack: ["Guia", "Git"],
    description:
      "Guia prático de mensagens de commit e convenções de versionamento para times de desenvolvimento. Demonstra preocupação com qualidade de código e padronização em equipes.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/padrao-de-commit-git",
  },
];

