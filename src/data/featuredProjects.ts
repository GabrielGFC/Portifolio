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
  thumbnailKey: "jac" | "fanstone" | "esports";
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
    id: "esports",
    title: "Portal 3rd E-Sports UniEVANGÉLICA",
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
      referenceLink: "https://3rd-e-sports-da-unievangelica.figma.site/",
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

