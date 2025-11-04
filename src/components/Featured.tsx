import React, { Suspense, lazy, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { featuredProjects, FeaturedProject } from '../data/featuredProjects';
import styles from './Featured.module.scss';

const CaseStudyModal = lazy(() => import('./CaseStudyModal'));

const badgeCopy = {
  'Institucional/Privado': 'Institucional / Privado',
  'Institucional/Publico': 'Institucional / Publico',
};

const thumbnailClassMap: Record<FeaturedProject['thumbnailKey'], string> = {
  jac: styles.thumbnailJac,
  fanstone: styles.thumbnailFanstone,
  esports: styles.thumbnailEsports,
};

const Featured: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const activeProject = useMemo(
    () => featuredProjects.find((project) => project.id === activeProjectId) ?? null,
    [activeProjectId],
  );

  const handleOpen = (projectId: string) => {
    setActiveProjectId(projectId);
  };

  const handleClose = () => setActiveProjectId(null);

  return (
    <section id="featured" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Projetos institucionais em primeira mao
          </motion.p>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Destaques que contam a historia certa
          </motion.h2>
        </header>

        <div className={styles.grid}>
          {featuredProjects.map((project) => (
            <motion.article
              key={project.id}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className={`${styles.thumbnail} ${thumbnailClassMap[project.thumbnailKey]}`}>
                <span>{project.title}</span>
              </div>
              <div className={styles.meta}>
                <span className={styles.badge}>{badgeCopy[project.badge]}</span>
                <h3>{project.title}</h3>
              </div>

              <div className={styles.story}>
                <div className={styles.storyBlock}>
                  <span>Impacto</span>
                  <p>{project.impact}</p>
                </div>
                <div className={styles.storyBlock}>
                  <span>Papel</span>
                  <p>{project.role}</p>
                </div>
                <div className={styles.storyBlock}>
                  <span>Resultado</span>
                  <p>{project.resultSummary}</p>
                </div>
              </div>

              <div className={styles.stack}>
                {project.stack.slice(0, 4).map((tech) => (
                  <span key={tech} className={styles.chip}>
                    {tech}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span className={styles.chipMuted}>+{project.stack.length - 4}</span>
                )}
              </div>

              <button
                type="button"
                className={styles.cta}
                onClick={() => handleOpen(project.id)}
              >
                Estudo de Caso
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <Suspense fallback={null}>
        <CaseStudyModal
          project={activeProject}
          isOpen={Boolean(activeProject)}
          onClose={handleClose}
        />
      </Suspense>
    </section>
  );
};

export default Featured;
