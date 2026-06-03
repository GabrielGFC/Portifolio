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
  thumbnailKey:
    | "jac"
    | "fanstone"
    | "esports"
    | "maximiza"
    | "farma"
    | "cannasys";
  caseStudy: {
    tabs: CaseStudyTab[];
    referenceLink?: string;
  };
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "jac",
    title: "JAC – Jornada Acadêmica e Comunitária",
    badge: "Institucional / Privado — Owner",
    badgeType: "Institucional/Privado",
    impact:
      "Centraliza eventos e presença estudantil com check-in inteligente, eliminando processos manuais de registro e fornecendo visibilidade executiva sobre participação em eventos acadêmicos. Os dashboards estratégicos ajudam gestores a tomarem decisões baseadas em dados reais.",
    stack: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    roleShort:
      "Desenvolvi a arquitetura completa do sistema, modelando domínios de eventos e presença. Implementei proteções LGPD e fiz o handoff contínuo para a equipe de manutenção.",
    resultsPreview: [
      "Resultados acompanhados por meio de dashboards executivos e feedback da equipe de gestão.",
    ],
    owner: true,
    thumbnailKey: "jac",
    caseStudy: {
      referenceLink: "https://jac-front-end.vercel.app/",
      tabs: [
        {
          key: "problema",
          title: "Contexto",
          content:
            "Sistema de gestão de eventos acadêmicos com check-in validado e dashboards estratégicos para acompanhamento de participação estudantil.",
        },
        {
          key: "solucao",
          title: "Impacto",
          content:
            "Centraliza eventos e presença estudantil com check-in inteligente, eliminando processos manuais de registro e fornecendo visibilidade executiva sobre participação em eventos acadêmicos. Os dashboards estratégicos ajudam gestores a tomarem decisões baseadas em dados reais.",
        },
        {
          key: "arquitetura",
          title: "Stack",
          content:
            "Arquitetura service-oriented com React no front-end e Node.js/TypeScript no back-end, PostgreSQL como banco de dados, logs estruturados e auditoria. Implementação de LGPD com dados pessoais minimizados, consentimento explícito, criptografia em trânsito, políticas de retenção e controles de acesso por perfil.",
        },
        {
          key: "papel",
          title: "Papel do Gabriel",
          content:
            "Desenvolvi a arquitetura completa do sistema, modelando domínios de eventos e presença. Implementei proteções LGPD, desenvolvi APIs REST com Node.js e TypeScript, e fiz o handoff contínuo para a equipe de manutenção.",
        },
        {
          key: "resultados",
          title: "Resultados",
          content: [
            "Resultados acompanhados por meio de dashboards executivos e feedback da equipe de gestão.",
          ],
        },
      ],
    },
  },
  {
    id: "cannasys",
    title: "CannaSYS — Gestão para Terapia com Cannabis",
    badge: "Pesquisa / Privado — Backend Owner",
    badgeType: "Institucional/Privado",
    impact:
      "ERP modular para associações que ofertam terapia com cannabis medicinal, integrando prontuário, prescrição, produção de óleo, dispensação, financeiro e RH. Centraliza fluxos que antes viviam em planilhas e atende um nicho com forte exigência regulatória.",
    stack: ["Laravel", "Node.js", "PostgreSQL", "APIs REST", "Microserviços"],
    roleShort:
      "Desenvolvedor backend responsável pelo modelo de domínio, APIs REST e arquitetura modular do sistema, com foco em segurança de dados sensíveis de saúde.",
    resultsPreview: [
      "Sistema modular dividido em fases (prontuário/prescrição, produção/dispensação, financeiro/RH) com cronograma de 12 meses.",
    ],
    owner: true,
    thumbnailKey: "cannasys",
    caseStudy: {
      referenceLink: "https://github.com/GabrielGFC/restapi-cannays",
      tabs: [
        {
          key: "problema",
          title: "Contexto",
          content:
            "Associações sem fins lucrativos que fornecem cannabis medicinal enfrentam desafios significativos na automação e integração dos processos — paciente, médico, farmacêutico, produção de óleo, dispensação, financeiro e RH ainda vivem em planilhas desconectadas.",
        },
        {
          key: "solucao",
          title: "Impacto",
          content:
            "ERP modular que automatiza e integra as atividades dos diferentes setores, oferecendo controle abrangente da interação paciente-médico-farmacêutico, da produção e dispensação de medicamentos e da gestão financeira e de RH em um único fluxo.",
        },
        {
          key: "arquitetura",
          title: "Stack",
          content:
            "Arquitetura modular com microserviços, back-end em Laravel/Node.js sobre PostgreSQL, APIs REST documentadas, controle de acesso por permissões, criptografia de dados sensíveis e hospedagem em nuvem com backups regulares. Metodologia Scrum apoiada por Lean Inception, desenvolvimento incremental por módulo.",
        },
        {
          key: "papel",
          title: "Papel do Gabriel",
          content:
            "Backend developer: modelagem de domínio, construção das APIs REST de prontuário e receituário, integração entre módulos, controle de acesso, logging auditável e suporte à evolução incremental do sistema.",
        },
        {
          key: "resultados",
          title: "Resultados",
          content: [
            "Plano de trabalho aprovado dentro da iniciativa de pesquisa institucional.",
            "Arquitetura modular pronta pra escalar conforme novos módulos são incorporados.",
            "Repositório aberto do back-end: github.com/GabrielGFC/restapi-cannays.",
          ],
        },
      ],
    },
  },
  {
    id: "fanstone",
    title: "Sistema James Fanstone",
    badge: "Institucional / Privado",
    badgeType: "Institucional/Privado",
    impact:
      "Organiza processos de pesquisa institucional com fluxos auditáveis, garantindo rastreabilidade completa de aprovações e relatórios. A integração com o Lyceum elimina duplicação de dados e reduz erros manuais.",
    stack: ["Laravel", "Vue.js", "PostgreSQL", "Integrações internas"],
    roleShort:
      "Modelei o domínio do sistema, desenvolvi APIs REST em Laravel e implementei integrações acadêmicas auditáveis. Trabalhei com a equipe de pesquisa para validar requisitos e garantir que os fluxos atendessem às necessidades institucionais.",
    resultsPreview: [
      "Resultados acompanhados por meio de dashboards e feedback da equipe de pesquisa.",
    ],
    owner: false,
    thumbnailKey: "fanstone",
    caseStudy: {
      referenceLink: "https://plataformajf.unievangelica.edu.br/",
      tabs: [
        {
          key: "problema",
          title: "Contexto",
          content:
            "Sistema de gestão de pesquisa institucional com fluxos auditáveis e integração ao sistema acadêmico Lyceum.",
        },
        {
          key: "solucao",
          title: "Impacto",
          content:
            "Organiza processos de pesquisa institucional com fluxos auditáveis, garantindo rastreabilidade completa de aprovações e relatórios. A integração com o Lyceum elimina duplicação de dados e reduz erros manuais.",
        },
        {
          key: "arquitetura",
          title: "Stack",
          content:
            "Laravel + PostgreSQL, filas de processamento e sincronismo seguro com Lyceum. Controle granular de perfis, logs auditáveis e atendimento completo à LGPD.",
        },
        {
          key: "papel",
          title: "Papel do Gabriel",
          content:
            "Modelei o domínio do sistema, desenvolvi APIs REST em Laravel e implementei integrações acadêmicas auditáveis. Trabalhei com a equipe de pesquisa para validar requisitos e garantir que os fluxos atendessem às necessidades institucionais.",
        },
        {
          key: "resultados",
          title: "Resultados",
          content: [
            "Resultados acompanhados por meio de dashboards e feedback da equipe de pesquisa.",
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
      "Landing institucional publicada em Cloudflare Workers com foco em performance, SEO técnico e conversão. Entrega edge-first com TTFB baixo e build automatizado.",
    stack: ["Cloudflare Workers", "TypeScript", "Edge", "SEO"],
    roleShort:
      "Concebi a arquitetura serverless/edge, modelei o conteúdo e implementei a landing com pipeline de deploy automatizado.",
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
            "Landing institucional para corretora de seguros com requisitos de performance, SEO técnico e conversão de leads.",
        },
        {
          key: "solucao",
          title: "Impacto",
          content:
            "Entrega edge-first com TTFB baixo, SEO técnico bem estruturado e pipeline de deploy automatizado em Cloudflare Workers.",
        },
        {
          key: "arquitetura",
          title: "Stack",
          content:
            "Cloudflare Workers + TypeScript com renderização edge, build automatizado via Wrangler e otimizações de Core Web Vitals.",
        },
        {
          key: "papel",
          title: "Papel do Gabriel",
          content:
            "Concebi a arquitetura edge, implementei o front-end, configurei o pipeline de deploy e otimizei performance/SEO.",
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
    id: "farma",
    title: "Farm Automático de XP Dev",
    badge: "Produto Pessoal / Produção — Owner",
    badgeType: "Institucional/Publico",
    impact:
      "Portal gamificado com identidade visual pixel/dark que apresenta minha trajetória dev: missões, stack, perfil e contato em um fluxo de progressão. Mostra capacidade de criar produtos com identidade forte e narrativa.",
    stack: ["Cloudflare Workers", "TypeScript", "Edge", "UI/UX"],
    roleShort:
      "Concebi, desenhei e publiquei sozinho o produto — da identidade visual pixel-art à infraestrutura edge.",
    resultsPreview: [
      "Portal pessoal publicado e usado como vitrine narrativa do meu perfil técnico.",
    ],
    owner: true,
    thumbnailKey: "farma",
    caseStudy: {
      referenceLink: "https://farma.gabriel-fernandes-f48.workers.dev/",
      tabs: [
        {
          key: "problema",
          title: "Contexto",
          content:
            "Vitrine pessoal com identidade gamer/pixel que apresenta meu perfil dev em formato de quests e progressão, fugindo do currículo tradicional.",
        },
        {
          key: "solucao",
          title: "Impacto",
          content:
            "Narrativa diferenciada que comunica habilidades e personalidade em paralelo, com performance edge-first e zero servidor dedicado.",
        },
        {
          key: "arquitetura",
          title: "Stack",
          content:
            "Cloudflare Workers + TypeScript com renderização edge, identidade visual customizada e estado leve no navegador.",
        },
        {
          key: "papel",
          title: "Papel do Gabriel",
          content:
            "Concebi a identidade visual, modelei o conteúdo, implementei o front-end e publiquei o produto sozinho.",
        },
        {
          key: "resultados",
          title: "Resultados",
          content: [
            "Portal pessoal publicado e usado como vitrine narrativa do meu perfil técnico.",
          ],
        },
      ],
    },
  },
  {
    id: "esports",
    title: "Portal 4ª E-Sports UniEVANGÉLICA",
    badge: "Institucional / Publico",
    badgeType: "Institucional/Publico",
    impact:
      "Publica cronograma e inscrições do torneio com acesso claro em dispositivos móveis, facilitando a participação de estudantes e comunidade externa. O portal substituiu processos manuais de inscrição e comunicação.",
    stack: ["HTML", "SCSS", "JavaScript"],
    roleShort:
      "Desenvolvi o front-end responsivo com SCSS modular, implementei validação client-side e estruturei o código para acessibilidade. Trabalhei com designers para garantir uma experiência visual consistente.",
    resultsPreview: [
      "Portal publicado e utilizado durante eventos do torneio, com feedback positivo sobre acessibilidade mobile e facilidade de uso.",
    ],
    owner: false,
    thumbnailKey: "esports",
    caseStudy: {
      referenceLink: "https://esports.unievangelica.edu.br/",
      tabs: [
        {
          key: "problema",
          title: "Contexto",
          content:
            "Portal público para divulgação de cronograma e inscrições do torneio de e-sports da universidade, acessível a estudantes e comunidade externa.",
        },
        {
          key: "solucao",
          title: "Impacto",
          content:
            "Publica cronograma e inscrições do torneio com acesso claro em dispositivos móveis, facilitando a participação de estudantes e comunidade externa. O portal substituiu processos manuais de inscrição e comunicação.",
        },
        {
          key: "arquitetura",
          title: "Stack",
          content:
            "HTML semântico, SCSS modular e deploy estático. Cuidado com dados de inscrição e políticas de consentimento para LGPD.",
        },
        {
          key: "papel",
          title: "Papel do Gabriel",
          content:
            "Desenvolvi o front-end responsivo com SCSS modular, implementei validação client-side e estruturei o código para acessibilidade. Trabalhei com designers para garantir uma experiência visual consistente.",
        },
        {
          key: "resultados",
          title: "Resultados",
          content: [
            "Portal publicado e utilizado durante eventos do torneio, com feedback positivo sobre acessibilidade mobile e facilidade de uso.",
          ],
        },
      ],
    },
  },
];

