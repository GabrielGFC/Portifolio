import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageContext";
import { RESUME_URL, duration, ease, scrollToSection } from "../../motion/motion";
import styles from "./Intro.module.scss";

const Intro: React.FC = () => {
  const { data } = useContext(LanguageContext);
  const t = data.lux.hero;
  const reduce = !!useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const lightY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 160]);
  const horizonOpacity = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0]);

  const lineIn = (index: number) => ({
    initial: reduce ? false : { y: "105%" },
    animate: { y: "0%" },
    transition: { duration: duration.cinematic, ease, delay: 0.2 + index * 0.14 },
  });

  const fadeIn = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: duration.slow, ease, delay },
  });

  return (
    <section id="top" ref={ref} className={styles.hero} aria-labelledby="hero-title">
      <motion.div
        aria-hidden="true"
        className={styles.light}
        style={{ y: lightY }}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.4, ease }}
      />

      <div className={`container ${styles.inner}`}>
        <motion.p className="eyebrow" {...fadeIn(0.05)}>
          {t.eyebrow}
        </motion.p>

        <h1 id="hero-title" className={styles.title}>
          <span className={styles.mask}>
            <motion.span className={styles.line} {...lineIn(0)}>
              {t.line1}
            </motion.span>
          </span>
          <span className={styles.mask}>
            <motion.span className={`${styles.line} ${styles.lineSoft}`} {...lineIn(1)}>
              {t.line2}
            </motion.span>
          </span>
        </h1>

        <motion.p className={styles.statement} {...fadeIn(0.8)}>
          {t.statement}
        </motion.p>

        <motion.dl className={styles.creds} aria-label={t.credentialsLabel} {...fadeIn(0.9)}>
          {t.credentials.map((group) => (
            <div key={group.label} className={styles.credGroup}>
              <dt>{group.label}</dt>
              <dd>
                {group.items.map((item) =>
                  "project" in item && item.project ? (
                    <Link key={item.text} to={`/projetos/${item.project}`} className={styles.chip}>
                      {item.text}
                    </Link>
                  ) : (
                    <span key={item.text} className={`${styles.chip} ${styles.chipStatic}`}>
                      {item.text}
                    </span>
                  ),
                )}
              </dd>
            </div>
          ))}
        </motion.dl>

        <motion.div className={styles.actions} {...fadeIn(1.05)}>
          <button type="button" className={styles.primary} onClick={() => scrollToSection("work", reduce)}>
            {t.primary}
            <span aria-hidden="true">→</span>
          </button>
          <a className="linkArrow" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            {t.secondary}
            <span aria-hidden="true">↗</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        className={styles.horizon}
        style={{ opacity: horizonOpacity }}
        initial={reduce ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.8, ease, delay: 0.5 }}
      />
    </section>
  );
};

export default Intro;
