import { motion } from "framer-motion";
import React from "react";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  const bulletPoints = [
    "Projeto plataformas acadêmicas com check-in validado, dashboards executivos e integrações que eliminam planilhas.",
    "Entrego APIs seguras em Node.js ou Laravel, testes automatizados e contratos OpenAPI homologados com a equipe jurídica.",
    "Monitoro releases com logs estruturados, métricas SLO e alertas que reduzem tempo de resposta operacional.",
  ];

  return (
    <section id="inicio" className={`${styles.hero} pageSection`}>
      <div className={styles.heroWrap}>
        <motion.div
          className={styles.heroInner}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className={styles.heroBadge}>
            Disponível para escalar produto institucional
          </span>
          <h1 className={styles.heroTitle}>
            <span className={styles["brand__first"]}>Gabriel</span>
            <span className={styles["brand__last"]}> F.Carvalho</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Engenheiro back-end para educação e governo. Libero releases
            auditáveis com performance estável.
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
              Baixar currículo
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/gabrielgfc1"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnGhost}`}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
            >
              Conversar no LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
