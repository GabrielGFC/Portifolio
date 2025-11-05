import { motion, useReducedMotion } from "framer-motion";
import React, { Suspense, lazy, useMemo, useState } from "react";
import { FeaturedProject, featuredProjects } from "../data/featuredProjects";
import styles from "./Featured.module.scss";

const CaseStudyModal = lazy(() => import("./CaseStudyModal"));

const thumbnailClassMap: Record<FeaturedProject["thumbnailKey"], string> = {
  jac: styles.thumbnailJac,
  fanstone: styles.thumbnailFanstone,
  esports: styles.thumbnailEsports,
};

const badgeTheme: Record<FeaturedProject["badgeType"], string> = {
  "Institucional/Privado": styles.badgePrivado,
  "Institucional/Publico": styles.badgePublico,
};

const Featured: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const activeProject = useMemo(
    () =>
      featuredProjects.find((project) => project.id === activeProjectId) ??
      null,
    [activeProjectId]
  );

  const handleOpen = (projectId: string) => {
    setActiveProjectId(projectId);
  };

  const handleClose = () => setActiveProjectId(null);

  return (
    <section id="featured" className={`${styles.section} pageSection`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <motion.p
            className={styles.eyebrow}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
            }
            transition={prefersReducedMotion ? undefined : { duration: 0.35 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            Projetos institucionais em primeira mão
          </motion.p>
          <motion.h2
            className={styles.title}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
            }
            transition={
              prefersReducedMotion ? undefined : { duration: 0.4, delay: 0.05 }
            }
            viewport={{ once: true, amount: 0.4 }}
          >
            Destaques que comprovam resultados
          </motion.h2>
        </header>

        <div className={styles.grid}>
          {featuredProjects.map((project) => (
            <motion.article
              key={project.id}
              className={styles.card}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
              whileInView={
                prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
              }
              transition={prefersReducedMotion ? undefined : { duration: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div
                className={`${styles.thumbnail} ${
                  thumbnailClassMap[project.thumbnailKey]
                }`}
              >
                <span>{project.title}</span>
              </div>

              <div className={styles.meta}>
                <span
                  className={`${styles.badge} ${badgeTheme[project.badgeType]}`}
                >
                  {project.badge}
                </span>
                <h3>{project.title}</h3>
              </div>

              <div className={styles.story}>
                <p className={styles.impact}>
                  <span className={styles.label}>Impacto</span>
                  {project.impact}
                </p>
                <p className={styles.roleLine}>
                  <span className={styles.label}>Papel</span>
                  {project.roleShort}
                </p>
                {project.resultsPreview[0] ? (
                  <p className={styles.resultLine}>
                    <span className={styles.label}>Resultado</span>
                    <strong>{project.resultsPreview[0]}</strong>
                  </p>
                ) : null}
              </div>

              <div className={styles.stack}>
                {project.stack.slice(0, 4).map((tech) => (
                  <span key={tech} className={styles.chip}>
                    {tech}
                  </span>
                ))}
                {project.stack.length > 4 ? (
                  <span className={styles.chipMuted}>
                    +{project.stack.length - 4}
                  </span>
                ) : null}
              </div>

              <button
                type="button"
                className={styles.cta}
                onClick={() => handleOpen(project.id)}
              >
                Estudo de caso
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
