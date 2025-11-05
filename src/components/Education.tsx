import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import styles from "./Education.module.scss";

type Degree = {
  course: string;
  institution: string;
  period: string;
  summaries: string[];
};

type Certification = {
  title: string;
  issuer: string;
  year?: string;
  detail?: string;
};

const degree: Degree = {
  course: "Bacharelado em Engenharia de Software",
  institution: "Universidade Evangélica de Goiás (UniEVANGÉLICA)",
  period: "2023-2027",
  summaries: [
    "Grade curricular com engenharia de requisitos, arquitetura orientada a serviços e governança de TI aplicada a projetos institucionais.",
    "Atuo na Fábrica de Tecnologias Turing, desenvolvendo APIs escaláveis e sistemas com observabilidade para educação e governo digital.",
  ],
};

const certifications: Certification[] = [
  {
    title: "Laravel 11 - Framework Full Stack",
    issuer: "EspecializaTi",
    year: "2024",
    detail:
      "Construção de APIs REST, filas, autenticação e testes automatizados alinhados ao ambiente corporativo.",
  },
  {
    title: "Fundamentos do C#",
    issuer: "Digital Innovation One",
    year: "2024",
    detail:
      "Programação orientada a objetos, coleções genéricas e boas práticas para serviços .NET.",
  },
  {
    title: "Remote Work Professional",
    issuer: "Remote Skills Academy",
    year: "2023",
    detail:
      "Comunicação assíncrona, governança de rituais distribuídos e documentação operacional para trabalho remoto.",
  },
];

const MortarboardIcon: React.FC = () => (
  <svg
    className={styles.icon}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M12 4L3 8.5 12 13l9-4.5L12 4z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 10v4.5C5 16.985 8.134 19 12 19s7-2.015 7-4.5V10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CertificateIcon: React.FC = () => (
  <svg
    className={styles.icon}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M7 3h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2.5L12 21l-2.5-4H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 7h6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M9 11h6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const Education: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="education" className={`${styles.section} pageSection`}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.45 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Formação e certificações
        </motion.h2>

        <div className={styles.grid}>
          <motion.article
            className={styles.item}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
            }
            transition={
              prefersReducedMotion ? undefined : { duration: 0.45, delay: 0.05 }
            }
            viewport={{ once: true, amount: 0.3 }}
          >
            <MortarboardIcon />
            <div>
              <h3 className={styles.itemTitle}>{degree.course}</h3>
              <p className={styles.itemDesc}>
                {degree.institution} - {degree.period}
              </p>
              {degree.summaries.map((summary) => (
                <p key={summary} className={styles.itemDesc}>
                  {summary}
                </p>
              ))}
            </div>
          </motion.article>

          <motion.div
            className={styles.certList}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
            }
            transition={
              prefersReducedMotion ? undefined : { duration: 0.45, delay: 0.1 }
            }
            viewport={{ once: true, amount: 0.3 }}
          >
            {certifications.map((cert) => (
              <article key={cert.title} className={styles.cert}>
                <CertificateIcon />
                <div>
                  <h3 className={styles.itemTitle}>{cert.title}</h3>
                  <p className={styles.itemDesc}>
                    {cert.issuer}
                    {cert.year ? ` - ${cert.year}` : ""}
                  </p>
                  {cert.detail ? (
                    <p className={styles.itemDesc}>{cert.detail}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
