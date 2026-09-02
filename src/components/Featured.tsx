import { motion, useReducedMotion } from "framer-motion";
import React, { Suspense, lazy, useContext, useMemo, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { FeaturedProject, featuredProjects } from "../data/featuredProjects";
import jacShot from "../assets/projects/jac.png";
import esportsShot from "../assets/projects/esports.png";
import maximizaShot from "../assets/projects/maximiza.png";
import placeholderShot from "../assets/projects/placeholder.png";
import styles from "./Featured.module.scss";

const thumbnailImageMap: Record<FeaturedProject["thumbnailKey"], string> = {
  jac: jacShot,
  esports: esportsShot,
  maximiza: maximizaShot,
  aila: placeholderShot,
  fronteiras: placeholderShot,
  lion: placeholderShot,
};

const thumbnailUrlMap: Record<FeaturedProject["thumbnailKey"], string> = {
  jac: "projeto pessoal",
  esports: "esports.unievangelica.edu.br",
  maximiza: "maximiza-seguros.workers.dev",
  aila: "projeto privado",
  fronteiras: "automação privada",
  lion: "em desenvolvimento",
};

const CaseStudyModal = lazy(() => import("./CaseStudyModal"));

const thumbnailClassMap: Record<FeaturedProject["thumbnailKey"], string> = {
  jac: styles.thumbnailJac,
  esports: styles.thumbnailEsports,
  maximiza: styles.thumbnailMaximiza,
  aila: styles.thumbnailAila,
  fronteiras: styles.thumbnailFronteiras,
  lion: styles.thumbnailLion,
};

const badgeTheme: Record<FeaturedProject["badgeType"], string> = {
  "Institucional/Privado": styles.badgePrivado,
  "Institucional/Publico": styles.badgePublico,
};

const Featured: React.FC = () => {
  const { data } = useContext(LanguageContext);
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
            {data.featured.eyebrow}
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
            {data.featured.title}
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
                <div className={styles.browserFrame}>
                  <div className={styles.browserBar}>
                    <span className={styles.browserDot} data-color="red" />
                    <span className={styles.browserDot} data-color="yellow" />
                    <span className={styles.browserDot} data-color="green" />
                    <span className={styles.browserUrl}>
                      {thumbnailUrlMap[project.thumbnailKey]}
                    </span>
                  </div>
                  <div className={styles.browserContent}>
                    <img
                      src={thumbnailImageMap[project.thumbnailKey]}
                      alt=""
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display =
                          "none";
                      }}
                    />
                    <span className={styles.placeholderLabel}>
                      {thumbnailUrlMap[project.thumbnailKey]}
                    </span>
                  </div>
                </div>
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
                  {project.impact}
                </p>
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

              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.cta}
                  onClick={() => handleOpen(project.id)}
                >
                  {data.common.viewDetails}
                </button>
                {project.caseStudy.referenceLink ? (
                  <a
                    className={styles.ctaPrimary}
                    href={project.caseStudy.referenceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Acessar Sistema ↗
                  </a>
                ) : null}
              </div>
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
