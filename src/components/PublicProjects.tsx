import { motion, useReducedMotion } from "framer-motion";
import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { publicProjects } from "../data/publicProjects";
import styles from "./PublicProjects.module.scss";

const PublicProjects: React.FC = () => {
  const { data } = useContext(LanguageContext);
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
          {data.publicProjects?.title || "Projetos públicos selecionados"}
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
                  {project.stack.slice(0, 3).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className={styles.stackMore}>+{project.stack.length - 3}</span>
                  )}
                </div>
              </div>
              <p className={styles.description}>{project.description}</p>
              {project.url && (
                <a
                  className={styles.link}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-fallback={project.isFallback ? "true" : undefined}
                >
                  {project.linkLabel ?? "Ver no GitHub"}
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicProjects;
