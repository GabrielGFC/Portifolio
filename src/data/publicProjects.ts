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
    id: "robocode",
    title: "RoboCode",
    stack: ["Java", "robocode"],
    description:
      "Robô estratégico em Java que venceu etapas internas da UniEVANGÉLICA.",
    linkLabel: "Ver no GitHub (pesquisa)",
    url: "https://github.com/GabrielGFC/robocode",
    isFallback: true,
  },
  {
    id: "portfolio",
    title: "Portfólio Web",
    stack: ["HTML", "SCSS", "JavaScript"],
    description:
      "Portfólio pessoal publicado no GitHub Pages, reunindo projetos e contatos profissionais.",
    linkLabel: "Abrir portfólio",
    url: "https://gabrielgfc.github.io/Portifolio/",
  },
  {
    id: "product-api",
    title: "ProductAPI",
    stack: ["Node.js", "TypeScript", "PostgreSQL"],
    description:
      "API REST em Node.js com testes de regressão e documentação em OpenAPI para gestão de produtos.",
    linkLabel: "Ver repositório",
    url: "https://github.com/GabrielGFC/ProductAPI",
  },
  {
    id: "desafio-picpay",
    title: "Desafio PicPay",
    stack: ["Node.js", "TypeScript", "WebSockets"],
    description:
      "Replica fluxos do PicPay com autenticação, fila de transferências e comunicação em tempo real via WebSockets.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/Desafio-PicPay",
  },
  {
    id: "ecoalertas",
    title: "EcoAlertas Back",
    stack: ["Node.js", "Express", "TypeScript", "MySQL"],
    description:
      "Publica e gerencia alertas ambientais com filas no Express e persistência em banco relacional MySQL.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/EcoAlertas-Back",
  },
  {
    id: "teste-php-laravel",
    title: "Teste PHP Laravel",
    stack: ["PHP", "Laravel", "MySQL"],
    description:
      "Laboratório público em Laravel com APIs REST, autenticação e suíte de testes.",
    linkLabel: "Ver repositório",
    url: "https://github.com/GabrielGFC/teste-php-laravel",
  },
  {
    id: "projeto-estoque",
    title: "projetoestoque",
    stack: ["Node.js", "Express", "PostgreSQL"],
    description:
      "Sistema de gestão de estoque acadêmico com Express, PostgreSQL e autenticação JWT.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/projetoestoque",
  },
  {
    id: "padrao-commit",
    title: "Padrão de Commit Git",
    stack: ["Guia", "Git"],
    description:
      "Guia prático de mensagens de commit e convenções de versionamento para times de desenvolvimento.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/padrao-de-commit-git",
  },
  {
    id: "tiradentes",
    title: "TIRADENTES-gfc",
    stack: ["HTML", "SCSS", "JavaScript"],
    description:
      "Landing page responsiva desenvolvida para o evento acadêmico Tiradentes.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/TIRADENTES-gfc",
  },
  {
    id: "desafios-back",
    title: "desafios-back-unievangelica",
    stack: ["Python"],
    description:
      "Conjunto de desafios de back-end da UniEVANGÉLICA com foco em algoritmos e testes automatizados.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/desafios-back-unievangelica",
  },
  {
    id: "desafio-front",
    title: "desafio-front",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "Desafio de front-end com foco em HTML semântico, responsividade e boas práticas de layout.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/desafio-front",
  },
  {
    id: "tarefa-willan",
    title: "Tarefa-Willan",
    stack: ["C++"],
    description:
      "Coleção de tarefas em C++ desenvolvidas para disciplina de algoritmos e programação.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/Tarefa-Willan",
  },
  {
    id: "todo-sqlite",
    title: "To-do List com SQLite",
    stack: ["Python", "SQLite"],
    description:
      "Aplicação de lista de tarefas em Python com persistência em banco relacional SQLite.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/To-do-list-com-sqlite",
  },
  {
    id: "tarefa-eder-html5",
    title: "Tarefa-Eder-HTML5",
    stack: ["HTML", "CSS"],
    description:
      "Exercícios em HTML5 e CSS voltados para estruturação de páginas e boas práticas semânticas.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/Tarefa-Eder-HTML5",
  },
  {
    id: "node-cruid",
    title: "Node.CRUID",
    stack: ["Node.js", "Express", "SQL"],
    description:
      "API CRUD em Node.js e Express, focada em operações de criação, leitura, atualização e exclusão com banco relacional.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/Node.CRUID",
  },
  {
    id: "tarefas-python-henrique",
    title: "TAREFAS-Python-Henrique",
    stack: ["Python"],
    description:
      "Tarefas de algoritmos e programação em Python desenvolvidas em contexto acadêmico.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/TAREFAS-Python-Henrique",
  },
  {
    id: "pasteur-backend",
    title: "pasteur-backend",
    stack: ["Node.js", "JavaScript", "SQL"],
    description:
      "Back-end em Node.js para sistema acadêmico, com foco em rotas REST e persistência em banco relacional.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/pasteur-backend",
  },
  {
    id: "todo-angular",
    title: "To-do List Angular",
    stack: ["Angular", "TypeScript"],
    description:
      "Primeiro projeto em Angular, implementando uma lista de tarefas com componentes e data binding.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/To-do-List-Agular",
  },
  {
    id: "disponibilidade-baan-backend",
    title: "Disponibilidade-BAAN-backend",
    stack: ["JavaScript", "Node.js"],
    description:
      "CRUD de sistema de disponibilidade, expondo endpoints para cadastro e consulta em contexto acadêmico.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/Disponibilidade-BAAN-backend",
  },
  {
    id: "tarefa-poo-biblioteca",
    title: "Tarefa-POO-Biblioteca",
    stack: ["Java"],
    description:
      "Projeto em Java aplicando conceitos de programação orientada a objetos em um sistema de biblioteca.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/Tarefa-POO-Biblioteca",
  },
  {
    id: "tarefa-vinicius-poo",
    title: "Tarefa_VINICIUS-POO",
    stack: ["Java"],
    description:
      "Exercícios de POO em Java com foco em classes, herança e encapsulamento.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/Tarefa_VINICIUS-POO",
  },
  {
    id: "tarefa-carlos-cond",
    title: "tarefa-carlos-cond",
    stack: ["TypeScript"],
    description:
      "Exercícios em TypeScript com foco em estruturas condicionais e lógica de programação.",
    linkLabel: "Abrir no GitHub",
    url: "https://github.com/GabrielGFC/tarefa-carlos-cond",
  },
];
