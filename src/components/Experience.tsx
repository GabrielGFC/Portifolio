import React from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.scss';

type TimelineItem = {
  company: string;
  role: string;
  period: string;
  achievements: string[];
};

const timeline: TimelineItem[] = [
  {
    company: 'Fabrica de Tecnologias Turing (FTT) - UniEVANGELICA',
    role: 'Desenvolvedor Back-end',
    period: 'set/2023 - atual',
    achievements: [
      'Projetar APIs REST com Node.js e TypeScript; versionar contratos OpenAPI; reduzir retrabalho da squad.',
      'Orquestrar integracoes via mensageria e SSO interno; otimizar consultas PostgreSQL; manter latencia baixa.',
      'Guiar revisoes tecnicas e observabilidade com logs estruturados; antecipar incidentes em releases institucionais.',
    ],
  },
  {
    company: 'PROPPE - UniEVANGELICA',
    role: 'Analista/Dev de Pesquisa',
    period: 'mar/2024 - atual',
    achievements: [
      'Modelar fluxos de pesquisa com Laravel e PostgreSQL; automatizar aprovacoes multi etapa; gerar trilhas auditaveis.',
      'Integrar Lyceum e ERPs internos com APIs seguras e filas; eliminar cadastros manuais recorrentes.',
      'Criar dashboards de status com Vue.js; alinhar diretorias e pesquisadores; reduzir atrasos de relatorios.',
    ],
  },
  {
    company: 'Forca Aerea Brasileira',
    role: 'Colaborador Back-end',
    period: '2024',
    achievements: [
      'Implementar API de disponibilidade com .NET e JWT; controlar perfis; garantir rastreabilidade operacional.',
      'Definir pipelines de testes e cobertura automatica; documentar rotas com Swagger; suportar auditorias internas.',
      'Instrumentar logs no Elastic e alertas simples; reduzir tempo de resposta a incidentes de disponibilidade.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Experiencia
        </motion.h2>

        <div className={styles.timeline}>
          {timeline.map((item, index) => (
            <motion.article
              key={item.company}
              className={styles.item}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.header}>
                <div>
                  <p className={styles.role}>{item.role}</p>
                  <h3 className={styles.company}>{item.company}</h3>
                </div>
                <span className={styles.period}>{item.period}</span>
              </div>
              <ul className={styles.list}>
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
