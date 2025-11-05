import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import { publicProjects } from "../data/publicProjects";
import styles from "./PublicProjects.module.scss";

const PublicProjects: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="public-projects" className={`${styles.section} pageSection`}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.45 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Projetos públicos selecionados
        </motion.h2>

        <div className={styles.grid}>
          {publicProjects.map((project) => (
            <motion.article
              key={project.id}
              className={styles.card}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={
                prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
              }
              transition={prefersReducedMotion ? undefined : { duration: 0.35 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.header}>
                <h3>{project.title}</h3>
                <div className={styles.stack}>
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <p className={styles.description}>{project.description}</p>
              {project.url ? (
                <a
                  className={styles.link}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-fallback={project.isFallback ? "true" : undefined}
                >
                  {project.linkLabel ?? "Ver no GitHub"}
                </a>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicProjects;
