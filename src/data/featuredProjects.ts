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
      "Centraliza eventos e presença com check-in inteligente e dashboards estratégicos.",
    stack: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    roleShort:
      "Owner: arquitetura, domínios de eventos/presença e proteções LGPD com handoff contínuo.",
    resultsPreview: [
      "Resultados monitorados no dashboard executivo.",
      "Dashboards em tempo real para direção e coordenações.",
    ],
    owner: true,
    thumbnailKey: "jac",
    caseStudy: {
      tabs: [
        {
          key: "problema",
          title: "Problema",
          content:
            "Fragmentação de informações, controle de presença manual e pouco confiável, baixa visibilidade gerencial e dificuldade de comprovação de horas.",
        },
        {
          key: "solucao",
          title: "Solucao",
          content:
            "Plataforma unificada com autenticação institucional, cadastro de eventos, check-in por geofencing e QR Code dinâmico, gamificação e relatórios.",
        },
        {
          key: "arquitetura",
          title: "Arquitetura e Seguranca (LGPD)",
          content:
            "Arquitetura service-oriented com React no front e Node.js/TypeScript no back, PostgreSQL, logs e auditoria; dados pessoais minimizados, consentimento explícito, criptografia em trânsito, políticas de retenção e controles de acesso por perfil (LGPD).",
        },
        {
          key: "papel",
          title: "Papel do Gabriel",
          content:
            "Desenho de arquitetura, implementação dos domínios de eventos e presença, definição de contratos de API, integrações e handoff do Figma para desenvolvimento.",
        },
        {
          key: "resultados",
          title: "Resultados",
          content: [
            "{{JAC_METRICA_1}}",
            "{{JAC_METRICA_2}}",
            "Dashboards em tempo real para manter direção e coordenadores alinhados.",
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
      "Organiza a pesquisa institucional com fluxos auditaveis e integracao ao Lyceum.",
    stack: ["Laravel", "Vue.js", "PostgreSQL", "Integrações internas"],
    roleShort:
      "Modelagem de domínio, APIs em Laravel e integrações acadêmicas auditáveis.",
    resultsPreview: ["{{FANSTONE_METRICA_1}}"],
    owner: false,
    thumbnailKey: "fanstone",
    caseStudy: {
      tabs: [
        {
          key: "problema",
          title: "Problema",
          content:
            "PROPPE dependia de planilhas espalhadas e aprovava projetos sem rastreabilidade única nem trilhas auditáveis.",
        },
        {
          key: "solucao",
          title: "Solucao",
          content:
            "Desenhei o Sistema James Fanstone com fluxo completo de cadastro, aprovação e relatórios com SLA monitorado.",
        },
        {
          key: "arquitetura",
          title: "Arquitetura e Seguranca (LGPD)",
          content:
            "Laravel + PostgreSQL, filas e sincronismo seguro com Lyceum; controle granular de perfis, logs auditáveis e atendimento LGPD.",
        },
        {
          key: "papel",
          title: "Papel do Gabriel",
          content:
            "Modelei domínios, construí APIs REST, configurei filas de processamento e alinhei handoff com pesquisadores PROPPE.",
        },
        {
          key: "resultados",
          title: "Resultados",
          content: [
            "{{FANSTONE_METRICA_1}}",
            "{{FANSTONE_METRICA_2}}",
            "Fases auditáveis e histórico centralizado.",
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
      "Publica cronograma e inscrições do torneio com acesso claro em dispositivos móveis.",
    stack: ["HTML", "SCSS", "JavaScript"],
    roleShort: "Front-end responsivo com SCSS modular e validação client-side.",
    resultsPreview: ["{{RESULTADO_ESPORTS_1}}"],
    owner: false,
    thumbnailKey: "esports",
    caseStudy: {
      referenceLink: "https://3rd-e-sports-da-unievangelica.figma.site/",
      tabs: [
        {
          key: "problema",
          title: "Problema",
          content:
            "A liga dependia de PDFs e mensagens dispersas, dificultando acompanhar prazos e regras do torneio.",
        },
        {
          key: "solucao",
          title: "Solucao",
          content:
            "Implementei portal responsivo com inscrições, cronograma e regulamento acessível com atualização rápida.",
        },
        {
          key: "arquitetura",
          title: "Arquitetura e Seguranca (LGPD)",
          content:
            "HTML semântico, SCSS modular e deploy estático com cuidado a dados de inscrição e políticas de consentimento.",
        },
        {
          key: "papel",
          title: "Papel do Gabriel",
          content:
            "Desenvolvi componentes, tratei responsividade real e deixei SEO e assets configurados.",
        },
        {
          key: "resultados",
          title: "Resultados",
          content: [
            "{{RESULTADO_ESPORTS_1}}",
            "Equipe de comunicação atualiza conteúdo sem apoio contínuo de desenvolvimento.",
            "Base para próximas edições da liga E-Sports.",
          ],
        },
      ],
    },
  },
];
