export type CaseStudyTabKey =
  | "problema"
  | "solucao"
  | "arquitetura"
  | "papel"
  | "resultados";

export type CaseStudyTab = {
  key: CaseStudyTabKey;
  title: string;
  content: string | string[];
};

/** Shape of src/mocks/{portuguese,english}.json → featured.<i18nKey> — the localized text for one Featured project, including its case-study tabs. */
export type FeaturedText = {
  title: string;
  badge: string;
  problem: string;
  impact: string;
  roleShort: string;
  result: string;
  cta: string;
  caseStudy: {
    tabs: CaseStudyTab[];
  };
};

export type FeaturedProject = {
  id: string;
  /** Key matching src/mocks/{portuguese,english}.json → featured.<i18nKey>, used to render localized text. */
  i18nKey:
    | "aila"
    | "maximiza"
    | "pasteur"
    | "esports"
    | "jac"
    | "lionFanstone"
    | "coneleste"
    | "farmxp"
    | "fanstoneLegacy";
  title: string;
  badge: string;
  badgeType: "Institucional/Privado" | "Institucional/Publico";
  problem: string;
  impact: string;
  stack: string[];
  roleShort: string;
  resultsPreview: string[];
  owner: boolean;
  /** Whether a real product screenshot exists in src/assets/projects — false renders an honest placeholder instead of a fake preview. */
  hasRealMedia: boolean;
  thumbnailKey:
    | "jac"
    | "esports"
    | "maximiza"
    | "aila"
    | "pasteur"
    | "lion"
    | "coneleste"
    | "farmxp"
    | "fanstoneLegacy";
  /** Case-study tab content lives in the i18n JSON (featured.<i18nKey>.caseStudy.tabs) so the modal is bilingual too — only the structural link stays here. */
  caseStudy: {
    referenceLink?: string;
  };
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "aila",
    i18nKey: "aila",
    title: "Aila — Recomendação Inteligente de Pareceristas",
    badge: "Institucional / Plataforma Editorial",
    badgeType: "Institucional/Privado",
    problem:
      "Encontrar pareceristas qualificados e compatíveis com cada manuscrito é um trabalho manual e lento para a equipe editorial de uma revista científica.",
    impact:
      "Apoia a seleção de pareceristas científicos por meio de ranking, histórico editorial e análise de recorrência, permitindo decisões mais estruturadas durante o processo de revisão. Reduz a dependência de buscas manuais e melhora a rastreabilidade do processo de seleção.",
    stack: ["Python", "FastAPI", "Vue.js", "PostgreSQL", "Ollama/IA local"],
    roleShort:
      "Desenvolvi sozinho o sistema completo: backend em FastAPI/Python com classificação temática por IA local (Ollama), ranking de especialistas, histórico de convites e regras editoriais, além do frontend em Nuxt/Vue.",
    resultsPreview: [
      "Ranking de pareceristas compatível com manuscritos, com histórico de recorrência e convites, em uso por uma editora científica.",
    ],
    owner: true,
    hasRealMedia: true,
    thumbnailKey: "aila",
    caseStudy: {},
  },
  {
    id: "maximiza",
    i18nKey: "maximiza",
    title: "Maximiza Seguros",
    badge: "Cliente / Produção — Owner",
    badgeType: "Institucional/Publico",
    problem:
      "Uma corretora de seguros precisava de um site institucional capaz de apresentar seu catálogo de produtos e captar leads sem depender de atendimento manual para cada primeiro contato.",
    impact:
      "Plataforma institucional para uma empresa do setor de seguros, com catálogo de soluções, integrações comerciais, captação de leads e conteúdo corporativo. Evolução de interface, integração de formulários, páginas institucionais e integrações de parceiros, publicada em produção.",
    stack: ["Vue.js", "TypeScript", "Cloudflare", "SEO"],
    roleShort:
      "Concebi a arquitetura serverless/edge, evoluí a interface e integrei formulários e páginas institucionais, cuidando de performance e SEO técnico até a publicação em produção.",
    resultsPreview: [
      "Site em produção atendendo a estratégia comercial da Maximiza Seguros.",
    ],
    owner: true,
    hasRealMedia: true,
    thumbnailKey: "maximiza",
    caseStudy: {
      referenceLink: "https://maximiza-seguros.gabriel-fernandes-f48.workers.dev/",
    },
  },
  {
    id: "pasteur",
    i18nKey: "pasteur",
    title: "Pasteur",
    badge: "Projeto Público / Demonstração",
    badgeType: "Institucional/Publico",
    problem:
      "Sistemas de saúde frequentemente carecem de backends bem modelados para organizar prescrições e fluxos de atendimento clínico.",
    impact:
      "Backend de aplicação clínica com rotinas de prescrição e fluxos de atendimento, demonstrando modelagem de domínio e organização de APIs para sistemas de saúde.",
    stack: ["Node.js", "JavaScript"],
    roleShort:
      "Modelei o domínio e organizei as APIs REST do backend, cobrindo rotinas de prescrição e fluxos de atendimento.",
    resultsPreview: [
      "Backend funcional demonstrando modelagem de domínio aplicada a sistemas de saúde.",
    ],
    owner: true,
    hasRealMedia: true,
    thumbnailKey: "pasteur",
    caseStudy: {
      referenceLink: "https://github.com/GabrielGFC/pasteur-backend",
    },
  },
  {
    id: "esports",
    i18nKey: "esports",
    title: "Portal E-Sports UniEVANGÉLICA — 5ª edição",
    badge: "Institucional / Público",
    badgeType: "Institucional/Publico",
    problem:
      "Um torneio institucional de e-sports com múltiplas edições ao longo do tempo precisava de inscrição por modalidade, regulamentos próprios por edição e um histórico público das edições anteriores.",
    impact:
      "Sistema institucional de inscrição e gestão de torneio de e-sports, com um modelo de edições versionadas (tema, cronograma e regulamento isolados por edição) que permitiu arquivar a 4ª edição e lançar a 5ª sem perda de histórico público.",
    stack: ["NestJS", "Nuxt.js", "TypeScript", "PostgreSQL"],
    roleShort:
      "Autor principal do backend (NestJS/PostgreSQL) e do frontend (Nuxt), incluindo o sistema de edições versionadas e a camada de segurança do backend (sessão via cookie httpOnly, honeypot, rate limiting, auditoria).",
    resultsPreview: [
      "Sistema de edições versionadas em uso, com a 5ª edição publicada e a 4ª preservada como histórico.",
    ],
    owner: true,
    hasRealMedia: true,
    thumbnailKey: "esports",
    caseStudy: {
      referenceLink: "https://esports.unievangelica.edu.br/",
    },
  },
  {
    id: "jac",
    i18nKey: "jac",
    title: "JAC – Jornada Acadêmica e Comunitária",
    badge: "Projeto Pessoal / Avançado — Owner",
    badgeType: "Institucional/Privado",
    problem:
      "Controlar presença em eventos acadêmicos manualmente é lento e fácil de fraudar, sem visibilidade real de quem participou.",
    impact:
      "Sistema de gestão de eventos acadêmicos com check-in por QR code e geolocalização (geofencing), e recompensas gamificadas por pontos. Projeto pessoal avançado, com arquitetura em camadas, TypeScript estrito em múltiplos alvos de build e mais de 100 testes automatizados.",
    stack: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    roleShort:
      "Desenvolvi a arquitetura completa (backend Node/Express/Prisma e frontend React), o check-in geoespacial e por QR code, e conduzi remediação documentada de vulnerabilidades de segurança identificadas ao longo do projeto.",
    resultsPreview: [
      "Backend e frontend com testes automatizados (Jest, Vitest, Playwright) e pipelines de deploy configurados (Fly.io, Cloudflare Workers, Vercel).",
    ],
    owner: true,
    hasRealMedia: true,
    thumbnailKey: "jac",
    caseStudy: {
      referenceLink: "https://jac-front-end.vercel.app/",
    },
  },
  {
    id: "lion-fanstone",
    i18nKey: "lionFanstone",
    title: "Lion — Reescrita do Sistema James Fanstone",
    badge: "Institucional / Em Desenvolvimento",
    badgeType: "Institucional/Privado",
    problem:
      "Um sistema institucional de pesquisa acadêmica em Laravel precisava evoluir para uma base mais sustentável, migrando o domínio de pesquisa para uma nova arquitetura sem interromper o sistema em produção.",
    impact:
      "Reescrita do backend de uma plataforma institucional de pesquisa acadêmica (projetos, grupos, editais, planos de trabalho, avaliação por pareceristas), migrando de um sistema legado em produção para uma nova arquitetura em Java/Spring Boot, com integração real ao CNPq/Lattes via SOAP.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Flyway"],
    roleShort:
      "Lidero sozinho a reescrita arquitetural do backend: modelagem de domínio, migrations versionadas, integração com CNPq/Lattes e decisões de arquitetura documentadas via ADRs. Projeto ainda em desenvolvimento, não publicado em produção.",
    resultsPreview: [
      "Reescrita em andamento com autoria integral, CI configurado e testes automatizados (JUnit, Mockito, ArchUnit).",
    ],
    owner: true,
    hasRealMedia: true,
    thumbnailKey: "lion",
    caseStudy: {},
  },
  {
    id: "coneleste",
    i18nKey: "coneleste",
    title: "Landing Coneleste + Maximiza",
    badge: "Cliente / Colaboração",
    badgeType: "Institucional/Publico",
    problem:
      "Duas corretoras de seguros que se uniram precisavam comunicar a parceria rapidamente com uma landing page e direcionar o tráfego para o site principal.",
    impact:
      "Landing de campanha anunciando a parceria entre Coneleste e Maximiza Seguros, com pipeline de deploy automatizado via GitHub Actions para AWS S3/CloudFront.",
    stack: ["Vue.js", "TypeScript", "AWS S3", "CloudFront", "GitHub Actions"],
    roleShort:
      "Colaborei na finalização da landing (favicon, descrição e link externo) desenvolvida majoritariamente por outro desenvolvedor, dentro de um repositório compartilhado.",
    resultsPreview: [
      "Landing publicada em produção com pipeline de deploy automatizado.",
    ],
    owner: false,
    hasRealMedia: true,
    thumbnailKey: "coneleste",
    caseStudy: {
      referenceLink: "https://www.conelesteseguros.com.br/",
    },
  },
  {
    id: "farm-xp",
    i18nKey: "farmxp",
    title: "Farm Automático de XP Dev",
    badge: "Produto Pessoal / Produção — Owner",
    badgeType: "Institucional/Publico",
    problem:
      "Um currículo tradicional em PDF não comunica bem a trajetória e a personalidade de um desenvolvedor.",
    impact:
      "Portal gamificado com identidade visual pixel/dark que apresenta minha trajetória dev: missões, stack, perfil e contato em um fluxo de progressão.",
    stack: ["Cloudflare Workers", "TypeScript"],
    roleShort:
      "Concebi, desenhei e publiquei sozinho o produto — da identidade visual pixel-art à infraestrutura edge.",
    resultsPreview: [
      "Portal pessoal publicado e usado como vitrine narrativa do meu perfil técnico.",
    ],
    owner: true,
    hasRealMedia: true,
    thumbnailKey: "farmxp",
    caseStudy: {
      referenceLink: "https://farma.gabriel-fernandes-f48.workers.dev/",
    },
  },
  {
    id: "fanstone-legacy",
    i18nKey: "fanstoneLegacy",
    title: "Sistema James Fanstone (legado, em produção)",
    badge: "Institucional / Colaboração — Em Produção",
    badgeType: "Institucional/Privado",
    problem:
      "Uma plataforma institucional de pesquisa acadêmica já em produção precisava evoluir com novos relatórios sem interromper o uso diário da equipe.",
    impact:
      "Contribuí com features reais (relatórios de matrícula e edital) em uma plataforma institucional de pesquisa acadêmica da UniEVANGÉLICA já em produção, mantida por uma equipe.",
    stack: ["Laravel", "React", "MySQL"],
    roleShort:
      "Contribuí com funcionalidades específicas de relatórios em um sistema legado mantido por uma equipe maior — não sou autor principal deste sistema.",
    resultsPreview: [
      "Sistema em produção real na UniEVANGÉLICA, com minhas contribuições de relatórios em uso pela equipe de pesquisa.",
    ],
    owner: false,
    hasRealMedia: true,
    thumbnailKey: "fanstoneLegacy",
    caseStudy: {
      referenceLink: "https://plataformajf.unievangelica.edu.br/",
    },
  },
];
