export type CaseStudyTab = {
  key: string;
  title: string;
  content: string | string[];
};

export type FeaturedProject = {
  id: string;
  title: string;
  badge: string;
  impact: string;
  stack: string[];
  roleShort: string;
  resultsPreview: string[];
  owner: boolean;
  thumbnailKey: 'jac' | 'fanstone' | 'esports';
  caseStudy: {
    tabs: CaseStudyTab[];
    referenceLink?: string;
  };
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'jac',
    title: 'JAC - Jornada Academica e Comunitaria',
    badge: 'Institucional / Privado • Owner',
    impact: 'Centraliza eventos e presenca com geofencing, QR Code, gamificacao e dashboards em tempo real.',
    stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    roleShort:
      'Owner; desenho de arquitetura, implementacao dos dominios de eventos/presenca, protecoes LGPD e handoff com design (Figma -> dev).',
    resultsPreview: [
      'Resultados monitorados no dashboard executivo.',
      'Dashboards em tempo real para direcao e coordenacoes.',
    ],
    owner: true,
    thumbnailKey: 'jac',
    caseStudy: {
      tabs: [
        {
          key: 'problema',
          title: 'Problema',
          content:
            'Fragmentacao de informacoes, controle de presenca manual e pouco confiavel, baixa visibilidade gerencial e dificuldade de comprovacao de horas.',
        },
        {
          key: 'solucao',
          title: 'Solucao',
          content:
            'Plataforma unificada com autenticacao institucional, cadastro de eventos, check-in por geofencing e QR Code dinamico, gamificacao e relatorios.',
        },
        {
          key: 'arquitetura',
          title: 'Arquitetura e Seguranca (LGPD)',
          content:
            'Arquitetura service-oriented com React no front e Node.js/TypeScript no back, PostgreSQL, logs e auditoria; dados pessoais minimizados, consentimento explicito, criptografia em transito, politicas de retencao e controles de acesso por perfil (LGPD).',
        },
        {
          key: 'papel',
          title: 'Papel do Gabriel',
          content:
            'Desenho de arquitetura, implementacao dos dominios de eventos e presenca, definicao de contratos de API, integracoes e handoff do Figma para desenvolvimento.',
        },
        {
          key: 'resultados',
          title: 'Resultados',
          content: [
            'Resultados monitorados no dashboard executivo.',
            '{{JAC_METRICA_1}}',
            '{{JAC_METRICA_2}}',
            'Dashboards em tempo real para manter direcao e coordenadores alinhados.',
          ],
        },
      ],
    },
  },
  {
    id: 'fanstone',
    title: 'Sistema James Fanstone',
    badge: 'Institucional / Privado',
    impact: 'Gestao integral de pesquisa com fluxos auditaveis integrados ao Lyceum.',
    stack: ['Laravel', 'Vue.js', 'PostgreSQL', 'Integracoes internas'],
    roleShort: 'Back-end e modelagem de fluxos institucionais.',
    resultsPreview: ['{{FANSTONE_METRICA_1}}', '{{FANSTONE_METRICA_2}}'],
    owner: false,
    thumbnailKey: 'fanstone',
    caseStudy: {
      tabs: [
        {
          key: 'contexto',
          title: 'Contexto PROPPE/UniEVANGELICA',
          content:
            'Modernizacao da gestao de pesquisa para suportar PROPPE, grupos e comites de etica com rastreabilidade institucional.',
        },
        {
          key: 'fluxos',
          title: 'Fluxos Modelados',
          content:
            'Modelagem de dominio completa: cadastro de projetos, gestao de recursos, etapas de relatorios e aprovacao com SLA visivel.',
        },
        {
          key: 'integracoes',
          title: 'Integracoes',
          content:
            'APIs REST internas para sincronizar dados academicos e financeiros; integracao com Lyceum, provisionamento de permissoes em lote.',
        },
        {
          key: 'beneficios',
          title: 'Beneficios',
          content: [
            '{{FANSTONE_METRICA_1}}',
            '{{FANSTONE_METRICA_2}}',
            'Fases auditaveis e historico centralizado.',
          ],
        },
      ],
    },
  },
  {
    id: 'esports',
    title: 'Portal 3rd E-Sports UniEVANGELICA',
    badge: 'Institucional / Publico',
    impact: 'Site oficial do torneio com cronograma, inscricoes e regulamento atualizados.',
    stack: ['HTML', 'SCSS', 'JavaScript'],
    roleShort: 'Front-end e responsividade real.',
    resultsPreview: ['{{RESULTADO_ESPORTS_1}}'],
    owner: false,
    thumbnailKey: 'esports',
    caseStudy: {
      referenceLink: 'https://3rd-e-sports-da-unievangelica.figma.site/',
      tabs: [
        {
          key: 'objetivo',
          title: 'Objetivo',
          content:
            'Construir landing institucional para o torneio E-Sports com atualizacoes rapidas e comunicacao clara para equipes inscritas.',
        },
        {
          key: 'componentes',
          title: 'Componentes',
          content:
            'Cronograma interativo, cards de modalidades, formulario validado e modal de regras acessivel.',
        },
        {
          key: 'acessibilidade',
          title: 'Acessibilidade e Responsividade',
          content:
            'Layout mobile-first com testes em dispositivos, contraste AA, navegacao por teclado e leitura clara em modo de alto contraste.',
        },
        {
          key: 'resultado',
          title: 'Resultado',
          content: [
            'Tempo de publicacao alinhado ao kick-off do torneio.',
            'Equipe de comunicacao atualiza conteudo sem apoio dev.',
            'Base para proximas edicoes da liga E-Sports.',
          ],
        },
      ],
    },
  },
];

