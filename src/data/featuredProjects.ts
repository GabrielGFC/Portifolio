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

export type FeaturedProject = {
  id: string;
  title: string;
  badge: string;
  badgeType: "Institucional/Privado" | "Institucional/Publico";
  impact: string;
  stack: string[];
  roleShort: string;
  resultsPreview: string[];
  owner: boolean;
  thumbnailKey: "jac" | "esports" | "maximiza" | "aila" | "fronteiras" | "lion";
  caseStudy: {
    tabs: CaseStudyTab[];
    referenceLink?: string;
  };
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "aila",
    title: "Aila — Recomendação Inteligente de Pareceristas",
    badge: "Institucional / Plataforma Editorial",
    badgeType: "Institucional/Privado",
    impact:
      "Apoia a seleção de pareceristas científicos por meio de ranking, histórico editorial e análise de recorrência, permitindo decisões mais estruturadas durante o processo de revisão. Reduz a dependência de buscas manuais e melhora a rastreabilidade do processo de seleção.",
    stack: ["Python", "FastAPI", "Vue.js", "PostgreSQL", "Ollama/IA local"],
    roleShort:
      "Desenvolvi sozinho o sistema completo: backend em FastAPI/Python com classificação temática por IA local (Ollama), ranking de especialistas, histórico de convites e regras editoriais, além do frontend em Nuxt/Vue.",
    resultsPreview: [
      "Ranking de pareceristas compatível com manuscritos, com histórico de recorrência e convites, em uso por uma editora científica.",
    ],
    owner: true,
    thumbnailKey: "aila",
    caseStudy: {
      tabs: [
        {
          key: "problema",
          title: "Contexto",
          content:
            "Plataforma voltada ao apoio do processo editorial científico, utilizando dados acadêmicos e histórico de avaliações para auxiliar na identificação de pareceristas compatíveis com manuscritos.",
        },
        {
          key: "solucao",
          title: "Impacto",
          content:
            "O sistema trabalha com classificação temática de manuscritos via IA local, ranking de especialistas, histórico de convites, recorrência de avaliadores e regras editoriais, reduzindo dependência de buscas manuais e melhorando a rastreabilidade do processo de seleção.",
        },
        {
          key: "arquitetura",
          title: "Stack",
          content:
            "Backend em Python/FastAPI sobre PostgreSQL, com IA local via Ollama (e fallback em nuvem) para classificação temática, embeddings semânticos para ranking de avaliadores, e frontend em Nuxt/Vue. Autenticação com Argon2, RBAC e auditoria próprios.",
        },
        {
          key: "papel",
          title: "Papel do Gabriel",
          content:
            "Autoria integral do sistema (backend, frontend e testes): modelagem do domínio de pareceristas, ranking, histórico de convites, integração com IA local e regras editoriais.",
        },
        {
          key: "resultados",
          title: "Resultados",
          content: [
            "Ranking estruturado de pareceristas compatíveis com manuscritos, reduzindo buscas manuais no processo editorial de uma editora científica.",
          ],
        },
      ],
    },
  },
  {
    id: "maximiza",
    title: "Maximiza Seguros",
    badge: "Cliente / Produção — Owner",
    badgeType: "Institucional/Publico",
    impact:
      "Plataforma institucional para uma empresa do setor de seguros, com catálogo de soluções, integrações comerciais, captação de leads e conteúdo corporativo. Evolução de interface, integração de formulários, páginas institucionais e integrações de parceiros, publicada em produção.",
    stack: ["Vue.js", "TypeScript", "Cloudflare", "SEO"],
    roleShort:
      "Concebi a arquitetura serverless/edge, evoluí a interface e integrei formulários e páginas institucionais, cuidando de performance e SEO técnico até a publicação em produção.",
    resultsPreview: [
      "Site em produção atendendo a estratégia comercial da Maximiza Seguros.",
    ],
    owner: true,
    thumbnailKey: "maximiza",
    caseStudy: {
      referenceLink: "https://maximiza-seguros.gabriel-fernandes-f48.workers.dev/",
      tabs: [
        {
          key: "problema",
          title: "Contexto",
          content:
            "Plataforma institucional para uma corretora de seguros, com catálogo de soluções, captação de leads e conteúdo corporativo.",
        },
        {
          key: "solucao",
          title: "Impacto",
          content:
            "Evolução de interface, integração de formulários, páginas institucionais e integrações de parceiros, com foco em performance, SEO técnico e conversão de leads.",
        },
        {
          key: "arquitetura",
          title: "Stack",
          content:
            "Vue.js e TypeScript publicados em Cloudflare Workers/edge, build automatizado via Wrangler e otimizações de Core Web Vitals.",
        },
        {
          key: "papel",
          title: "Papel do Gabriel",
          content:
            "Evoluí a interface, integrei formulários e páginas institucionais, configurei o pipeline de deploy e otimizei performance/SEO.",
        },
        {
          key: "resultados",
          title: "Resultados",
          content: [
            "Site em produção atendendo a estratégia comercial da Maximiza Seguros.",
          ],
        },
      ],
    },
  },
  {
    id: "fronteiras",
    title: "Automação Editorial — Revista Fronteiras",
    badge: "Cliente / Automação",
    badgeType: "Institucional/Privado",
    impact:
      "Automação que desbloqueou um backlog real de submissões científicas paradas há mais de um ano em um sistema editorial OJS, eliminando trabalho manual repetitivo de designação de participantes e cobrança de retorno.",
    stack: ["Python", "Selenium", "Pandas", "OpenPyXL"],
    roleShort:
      "Desenvolvi sozinho a automação completa: busca de submissões via API REST do OJS, criação de contas e designação de participantes via Selenium, e geração de relatórios executivos em Excel, com tolerância a falhas e execução resumível.",
    resultsPreview: [
      "Dezenas de submissões reais desbloqueadas, com relatórios e logs de execução comprovando o uso em produção.",
    ],
    owner: true,
    thumbnailKey: "fronteiras",
    caseStudy: {
      tabs: [
        {
          key: "problema",
          title: "Contexto",
          content:
            "Revista científica com submissões paradas há mais de um ano no sistema OJS por falta de designação de coautores como participantes do fluxo de avaliação.",
        },
        {
          key: "solucao",
          title: "Impacto",
          content:
            "Script que localiza submissões atrasadas via API REST do OJS, cria contas para coautores sem acesso, designa participantes e envia mensagem de discussão automática, gerando relatório executivo em Excel ao final.",
        },
        {
          key: "arquitetura",
          title: "Stack",
          content:
            "Python com Selenium (interação com a interface web do OJS) e Requests/BeautifulSoup (API REST), Pandas/OpenPyXL para relatórios, execução resumível com controle de estado em arquivo e retry automático em falhas.",
        },
        {
          key: "papel",
          title: "Papel do Gabriel",
          content:
            "Autoria integral do script: lógica de busca em cascata de autores, criação de contas, designação de participantes, geração de relatórios e mecanismos de tolerância a falhas.",
        },
        {
          key: "resultados",
          title: "Resultados",
          content: [
            "Dezenas de submissões reais desbloqueadas em execuções comprovadas por relatórios e logs de status.",
          ],
        },
      ],
    },
  },
  {
    id: "esports",
    title: "Portal E-Sports UniEVANGÉLICA — 5ª edição",
    badge: "Institucional / Público",
    badgeType: "Institucional/Publico",
    impact:
      "Sistema institucional de inscrição e gestão de torneio de e-sports, com um modelo de edições versionadas (tema, cronograma e regulamento isolados por edição) que permitiu arquivar a 4ª edição e lançar a 5ª sem perda de histórico público.",
    stack: ["NestJS", "Nuxt.js", "TypeScript", "PostgreSQL"],
    roleShort:
      "Autor principal do backend (NestJS/PostgreSQL) e do frontend (Nuxt), incluindo o sistema de edições versionadas e a camada de segurança do backend (sessão via cookie httpOnly, honeypot, rate limiting, auditoria).",
    resultsPreview: [
      "Sistema de edições versionadas em uso, com a 5ª edição publicada e a 4ª preservada como histórico.",
    ],
    owner: true,
    thumbnailKey: "esports",
    caseStudy: {
      referenceLink: "https://esports.unievangelica.edu.br/",
      tabs: [
        {
          key: "problema",
          title: "Contexto",
          content:
            "Torneio institucional de e-sports com múltiplas edições ao longo do tempo, exigindo inscrição por modalidade, regulamentos próprios e um histórico público das edições anteriores.",
        },
        {
          key: "solucao",
          title: "Impacto",
          content:
            "Modelo de edições versionadas (tema, cronograma e regulamento isolados por edição) que permitiu lançar a 5ª edição na home mantendo a 4ª acessível como histórico, com inscrição por modalidade e área administrativa.",
        },
        {
          key: "arquitetura",
          title: "Stack",
          content:
            "Backend em NestJS com Sequelize/PostgreSQL, autenticação por sessão em cookie httpOnly, honeypot e rate limiting por rota. Frontend em Nuxt com Tailwind CSS.",
        },
        {
          key: "papel",
          title: "Papel do Gabriel",
          content:
            "Autor principal em backend e frontend: modelagem do sistema de edições, inscrição por modalidade, regulamentos versionados e camada de segurança (sessão, honeypot, rate limiting, auditoria).",
        },
        {
          key: "resultados",
          title: "Resultados",
          content: [
            "5ª edição publicada com sistema de edições versionadas, preservando o histórico da 4ª edição.",
          ],
        },
      ],
    },
  },
  {
    id: "jac",
    title: "JAC – Jornada Acadêmica e Comunitária",
    badge: "Projeto Pessoal / Avançado — Owner",
    badgeType: "Institucional/Privado",
    impact:
      "Sistema de gestão de eventos acadêmicos com check-in por QR code e geolocalização (geofencing), e recompensas gamificadas por pontos. Projeto pessoal avançado, com arquitetura em camadas, TypeScript estrito em múltiplos alvos de build e mais de 100 testes automatizados.",
    stack: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    roleShort:
      "Desenvolvi a arquitetura completa (backend Node/Express/Prisma e frontend React), o check-in geoespacial e por QR code, e conduzi remediação documentada de vulnerabilidades de segurança identificadas ao longo do projeto.",
    resultsPreview: [
      "Backend e frontend com testes automatizados (Jest, Vitest, Playwright) e pipelines de deploy configurados (Fly.io, Cloudflare Workers, Vercel).",
    ],
    owner: true,
    thumbnailKey: "jac",
    caseStudy: {
      tabs: [
        {
          key: "problema",
          title: "Contexto",
          content:
            "Projeto pessoal para gestão de eventos acadêmicos, explorando check-in verificável e engajamento de participantes por meio de gamificação.",
        },
        {
          key: "solucao",
          title: "Impacto",
          content:
            "Check-in por QR code e geolocalização (geofencing), sistema de pontos e recompensas, e painel administrativo com dashboards, construído com disciplina de engenharia (testes, remediação de vulnerabilidades documentada).",
        },
        {
          key: "arquitetura",
          title: "Stack",
          content:
            "Backend em Node.js/Express com Prisma e PostgreSQL, TypeScript estrito validado em três alvos de build distintos (Node, Cloudflare Workers, produção). Frontend em React/Vite/Tailwind com Vitest e Playwright.",
        },
        {
          key: "papel",
          title: "Papel do Gabriel",
          content:
            "Autoria integral da arquitetura, do backend e do frontend, incluindo o check-in geoespacial, o sistema de pontos e a correção de vulnerabilidades de segurança identificadas e documentadas ao longo do desenvolvimento.",
        },
        {
          key: "resultados",
          title: "Resultados",
          content: [
            "Mais de 100 testes automatizados entre backend e frontend, com pipelines de deploy configurados em múltiplas plataformas.",
          ],
        },
      ],
    },
  },
  {
    id: "lion-fanstone",
    title: "Lion — Reescrita do Sistema James Fanstone",
    badge: "Institucional / Em Desenvolvimento",
    badgeType: "Institucional/Privado",
    impact:
      "Reescrita do backend de uma plataforma institucional de pesquisa acadêmica (projetos, grupos, editais, planos de trabalho, avaliação por pareceristas), migrando de um sistema legado em produção para uma nova arquitetura em Java/Spring Boot, com integração real ao CNPq/Lattes via SOAP.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Flyway"],
    roleShort:
      "Lidero sozinho a reescrita arquitetural do backend: modelagem de domínio, migrations versionadas, integração com CNPq/Lattes e decisões de arquitetura documentadas via ADRs. Projeto ainda em desenvolvimento, não publicado em produção.",
    resultsPreview: [
      "Reescrita em andamento com autoria integral, CI configurado e testes automatizados (JUnit, Mockito, ArchUnit).",
    ],
    owner: true,
    thumbnailKey: "lion",
    caseStudy: {
      tabs: [
        {
          key: "problema",
          title: "Contexto",
          content:
            "O sistema institucional de pesquisa acadêmica da UniEVANGÉLICA (onde contribuí com features específicas, como relatórios de matrícula e edital, no sistema legado em Laravel) precisava evoluir para uma base mais sustentável, migrando o domínio de pesquisa para uma nova arquitetura.",
        },
        {
          key: "solucao",
          title: "Impacto",
          content:
            "Reescrita incremental do backend em Java/Spring Boot cobrindo pesquisadores, produção acadêmica, classificação Qualis/CAPES, projetos, grupos, editais, planos de trabalho e avaliação por pareceristas externos via token seguro, com importação de currículo via integração real com CNPq/Lattes (SOAP).",
        },
        {
          key: "arquitetura",
          title: "Stack",
          content:
            "Java 21, Spring Boot 4, PostgreSQL com Flyway (migrations versionadas, sem alteração automática de schema), Spring Security por sessão/cookie, ArchUnit para regras de arquitetura, CI via GitHub Actions.",
        },
        {
          key: "papel",
          title: "Papel do Gabriel",
          content:
            "Autoria integral da reescrita: arquitetura, modelagem de domínio, migrations, integração SOAP com CNPq/Lattes e decisões documentadas via ADRs. Trabalho ainda em desenvolvimento (fase intermediária de uma migração planejada em módulos), sem publicação em produção até o momento.",
        },
        {
          key: "resultados",
          title: "Resultados",
          content: [
            "Reescrita em andamento, com CI configurado e testes automatizados (JUnit, Mockito, ArchUnit) cobrindo o domínio já migrado.",
          ],
        },
      ],
    },
  },
];
