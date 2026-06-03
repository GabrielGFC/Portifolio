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
    id: "pasteur-backend",
    title: "Pasteur Backend",
    stack: ["Node.js", "JavaScript"],
    description:
      "Backend de aplicação clínica com rotinas de prescrição e fluxos de atendimento. Demonstra modelagem de domínio e organização de APIs para sistemas de saúde.",
    linkLabel: "Ver repositório",
    url: "https://github.com/GabrielGFC/pasteur-backend",
  },
  {
    id: "todo-angular",
    title: "To-do List Angular",
    stack: ["Angular", "TypeScript"],
    description:
      "Primeiro projeto em Angular: aplicação de tarefas com componentização, formulários reativos e gerenciamento de estado. Demonstra adoção de novas stacks e boas práticas do framework.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/To-do-List-Agular",
  },
  {
    id: "disponibilidade-baan",
    title: "Disponibilidade BAAN — Backend",
    stack: ["Node.js", "JavaScript"],
    description:
      "CRUD do sistema de disponibilidade utilizado na BAAN, com gestão de horários e regras de negócio. Demonstra capacidade de entregar soluções backend aplicadas ao contexto corporativo.",
    linkLabel: "Ver repositório",
    url: "https://github.com/GabrielGFC/Disponibilidade-BAAN-backend",
  },
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
    id: "teste-php-laravel",
    title: "Teste PHP Laravel",
    stack: ["PHP", "Laravel", "MySQL"],
    description:
      "Laboratório público em Laravel com APIs REST, autenticação e suíte de testes. Demonstra conhecimento prático em Laravel e boas práticas de desenvolvimento backend.",
    linkLabel: "Ver repositório",
    url: "https://github.com/GabrielGFC/teste-php-laravel",
  },
];
