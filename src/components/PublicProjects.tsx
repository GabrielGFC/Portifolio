import React from 'react';
import { motion } from 'framer-motion';
import { publicProjects } from '../data/publicProjects';
import styles from './PublicProjects.module.scss';

const PublicProjects: React.FC = () => {
  return (
    <section id="public-projects" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Projetos publicos selecionados
        </motion.h2>

        <div className={styles.grid}>
          {publicProjects.map((project) => (
            <motion.article
              key={project.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
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
              {project.url && (
                <a
                  className={styles.link}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.linkLabel ?? 'Ver no GitHub'}
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
