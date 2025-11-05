import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import styles from "./Experience.module.scss";

type TimelineItem = {
  company: string;
  role: string;
  period: string;
  achievements: string[];
};

const timeline: TimelineItem[] = [
  {
    company: "Fábrica de Tecnologias Turing (FTT) – UniEVANGÉLICA",
    role: "Desenvolvedor Back-end",
    period: "set/2023–atual",
    achievements: [
      "Projetei APIs REST com Node.js e TypeScript, versionando contratos OpenAPI e cortando retrabalho da squad.",
      "Orquestrei integrações via mensageria e SSO interno, otimizando consultas PostgreSQL e mantendo latência baixa.",
      "Liderei revisões técnicas e observabilidade com logs estruturados, antecipando incidentes em releases institucionais.",
    ],
  },
  {
    company: "PROPPE – UniEVANGÉLICA",
    role: "Analista/Dev de Pesquisa",
    period: "mar/2024–atual",
    achievements: [
      "Modelei fluxos de pesquisa com Laravel e PostgreSQL, automatizando aprovações multi etapa e trilhas auditáveis.",
      "Integrei Lyceum e ERPs com APIs seguras e filas, eliminando cadastros manuais recorrentes.",
      "Construí dashboards em Vue.js para diretorias e pesquisadores, reduzindo atrasos de relatórios.",
    ],
  },
  {
    company: "Força Aérea Brasileira",
    role: "Colaborador Back-end",
    period: "2024",
    achievements: [
      "Implementei API de disponibilidade em .NET e JWT, controlando perfis e garantindo rastreabilidade operacional.",
      "Defini pipelines de testes e cobertura automática, documentando rotas com Swagger para auditorias internas.",
      "Instrumentei logs no Elastic e alertas objetivos, reduzindo tempo de resposta a incidentes de disponibilidade.",
    ],
  },
];

const Experience: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className={`${styles.section} pageSection`}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Experiência
        </motion.h2>

        <div className={styles.timeline}>
          {timeline.map((item, index) => (
            <motion.article
              key={item.company}
              className={styles.item}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
              whileInView={
                prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      duration: 0.45,
                      delay: prefersReducedMotion ? 0 : index * 0.08,
                    }
              }
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
