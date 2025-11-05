import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import styles from "./Summary.module.scss";

const Summary: React.FC = () => {
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
          Resumo profissional
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
          <p>
            Projeto APIs institucionais em Node.js e Laravel, documentadas em
            OpenAPI e validadas com testes automatizados.
          </p>
          <p>
            Conduzo integrações com SSO interno, mensageria e PostgreSQL
            aplicando LGPD, criptografia e controles auditáveis.
          </p>
          <p>
            Alinho designers, produto e jurídico para homologar releases com
            métricas de observabilidade e SLAs definidos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Summary;
