import { motion } from "framer-motion";
import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  const { data } = useContext(LanguageContext);

  return (
    <section id="inicio" className={`${styles.hero} pageSection`}>
      <div className={styles.heroWrap}>
        <motion.div
          className={styles.heroInner}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className={styles.heroBadge}>{data.hero.badge}</span>
          <h1 className={styles.heroTitle}>
            <span className={styles["brand__first"]}>Gabriel</span>
            <span className={styles["brand__middle"]}> F.</span>
            <span className={styles["brand__last"]}> de Carvalho</span>
          </h1>
          <p className={styles.heroSubtitle}>{data.hero.subtitle}</p>
          <div className={styles.heroActions}>
            <motion.a
              href="/Portifolio/Gabriel_Fernandes_de_Carvalho.pdf"
              download="Gabriel_Fernandes_de_Carvalho.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnPrimary}`}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
            >
              {data.hero.ctaDownload}
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/gabrielgfc1"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnGhost}`}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
            >
              {data.hero.ctaLinkedIn}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
