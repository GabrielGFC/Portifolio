import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';

const bulletPoints = [
  'Software institucional real para educacao, pesquisa e eventos.',
  'Back-end escalavel com integracoes internas e camadas de seguranca.',
  'Boas praticas fortes: arquitetura, documentacao e monitoramento.',
];

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroWrap}>
        <motion.div
          className={styles.heroInner}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className={styles.heroBadge}>Disponivel para projetos institucionais parrudos</span>
          <h1 className={styles.heroTitle}>
            <span className={styles.brandFirst}>Gabriel</span>
            <span className={styles.brandLast}> F.Carvalho</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Desenvolvedor Back-end | Laravel | NodeJS | Python | .NET | PHP | Java
          </p>
          <ul className={styles.heroBullets}>
            {bulletPoints.map((point) => (
              <li key={point}>
                <span />
                {point}
              </li>
            ))}
          </ul>
          <div className={styles.heroActions}>
            <motion.a
              href="/Portifolio/Gabriel_Fernandes_de_Carvalho.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnPrimary}`}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Curriculo (PDF)
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/gabrielgfc1"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnGhost}`}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
            >
              Falar no LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
