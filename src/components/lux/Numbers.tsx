import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { Reveal } from "../../motion/motion";
import styles from "./Numbers.module.scss";

/** Faixa de números verificados (ver docs/portfolio-case-study-evidence.md, "Medições de testes"). */
const Numbers: React.FC = () => {
  const { data } = useContext(LanguageContext);
  const t = data.lux.hero;

  return (
    <section className={styles.band} aria-label={t.numbersLabel}>
      <Reveal className={`container ${styles.inner}`} y={16}>
        <dl className={styles.list}>
          {t.numbers.map((item) => (
            <div key={item.label} className={styles.item}>
              <dt className={styles.value}>{item.value}</dt>
              <dd className={styles.label}>{item.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
};

export default Numbers;
