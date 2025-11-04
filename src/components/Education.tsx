import React from 'react';
import { motion } from 'framer-motion';
import styles from './Education.module.scss';

const MortarboardIcon: React.FC = () => (
  <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M2 8.5L12 4l10 4.5-10 4.5-7-3.15V14c0 1.66 3.13 3 7 3s7-1.34 7-3v-2.65"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CertificateIcon: React.FC = () => (
  <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M8 3h8l3 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7l3-4z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 9v6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M9 12h6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const degree = {
  title: 'Engenharia de Software — UniEVANGELICA (2023-2027)',
  description:
    'Grade com engenharia de software, arquitetura, qualidade e projetos aplicados na Fabrica de Tecnologias Turing.',
};

const certifications = [
  {
    title: 'Laravel 11 — Curso Online (2024) | APIs e boas praticas',
  },
  {
    title: 'Fundamentos de C# — Plataforma Educacional (2023)',
  },
  {
    title: 'Scrum — Certificacao Profissional (2023) | fundamentos de agilidade',
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Formacao e certificacoes
        </motion.h2>

        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.item}>
            <MortarboardIcon />
            <div>
              <p className={styles.itemTitle}>{degree.title}</p>
              <p className={styles.itemDesc}>{degree.description}</p>
            </div>
          </div>

          <div className={styles.certList}>
            {certifications.map((cert) => (
              <div key={cert.title} className={styles.cert}>
                <CertificateIcon />
                <p className={styles.itemTitle}>{cert.title}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
