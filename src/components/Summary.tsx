import { motion, useReducedMotion } from "framer-motion";
import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styles from "./Summary.module.scss";

const Summary: React.FC = () => {
  const { data } = useContext(LanguageContext);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="summary" className={`${styles.section} pageSection`}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {data.summary.title}
        </motion.h2>

        <motion.div
          className={styles.content}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion ? undefined : { duration: 0.45, delay: 0.05 }
          }
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>{data.summary.paragraph1}</p>
          <p>{data.summary.paragraph2}</p>
          <p>{data.summary.paragraph3}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Summary;
