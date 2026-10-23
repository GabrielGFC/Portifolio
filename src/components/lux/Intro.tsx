import { motion, useReducedMotion } from "framer-motion";
import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { duration, ease, scrollToSection } from "../../motion/motion";
import Monogram from "./Monogram";
import styles from "./Intro.module.scss";

const Intro: React.FC = () => {
  const { data } = useContext(LanguageContext);
  const t = data.lux.hero;
  const reduce = !!useReducedMotion();

  const fadeIn = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: duration.slow, ease, delay },
  });

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <motion.p className="eyebrow" {...fadeIn(0.05)}>
            {t.eyebrow}
          </motion.p>

          <motion.h1 id="hero-title" className={styles.title} {...fadeIn(0.15)}>
            {t.line1} {t.line2}
          </motion.h1>

          <motion.p className={styles.statement} {...fadeIn(0.3)}>
            {t.statement}
          </motion.p>

          <motion.div className={styles.actions} {...fadeIn(0.45)}>
            <button type="button" className={styles.primary} onClick={() => scrollToSection("work", reduce)}>
              {t.primary}
              <span aria-hidden="true">→</span>
            </button>
            <button type="button" className={styles.ghost} onClick={() => scrollToSection("contact", reduce)}>
              {t.secondary}
              <span aria-hidden="true">↗</span>
            </button>
          </motion.div>
        </div>

        <motion.figure className={styles.card} aria-label={t.markLabel} {...fadeIn(0.2)}>
          <Monogram className={styles.mark} />
          <figcaption className={styles.caption}>
            <span>{t.markCaption}</span>
            <span className={styles.rule} aria-hidden="true">
              <i />
              <i />
            </span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
};

export default Intro;
