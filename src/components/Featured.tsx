import { motion, useReducedMotion } from "framer-motion";
import React, { Suspense, lazy, useContext, useMemo, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { FeaturedProject, featuredProjects } from "../data/featuredProjects";
import jacShot from "../assets/projects/jac.png";
import esportsShot from "../assets/projects/esports.png";
import maximizaShot from "../assets/projects/maximiza.png";
import ailaShot from "../assets/projects/aila.png";
import pasteurShot from "../assets/projects/pasteur.png";
import lionFanstoneShot from "../assets/projects/lion-fanstone.png";
import farmXpShot from "../assets/projects/farm-xp.png";
import fanstoneLegacyShot from "../assets/projects/fanstone-legacy.png";
import conelesteShot from "../assets/projects/coneleste.png";
import styles from "./Featured.module.scss";

type FeaturedText = {
  title: string;
  badge: string;
  problem: string;
  impact: string;
  roleShort: string;
  result: string;
  cta: string;
};

/**
 * Real screenshots, keyed by project. `hasRealMedia` in featuredProjects.ts
 * is the single source of truth for whether a project renders its screenshot
 * or the honest placeholder — an entry can exist here ahead of time without
 * activating until that flag flips, so dropping in a future asset never
 * requires touching this component's logic.
 */
const thumbnailImageMap: Partial<Record<FeaturedProject["thumbnailKey"], string>> = {
  jac: jacShot,
  esports: esportsShot,
  maximiza: maximizaShot,
  aila: ailaShot,
  pasteur: pasteurShot,
  lion: lionFanstoneShot,
  farmxp: farmXpShot,
  fanstoneLegacy: fanstoneLegacyShot,
  coneleste: conelesteShot,
};

/** Per-image crop focus for the browser-frame thumbnail (CSS object-position). Defaults to "top center" when omitted. */
const thumbnailObjectPositionMap: Partial<Record<FeaturedProject["thumbnailKey"], string>> = {
  pasteur: "center 65%",
  fanstoneLegacy: "center",
};

const placeholderInitials: Record<FeaturedProject["thumbnailKey"], string> = {
  jac: "JAC",
  esports: "E5",
  maximiza: "MX",
  aila: "AI",
  pasteur: "PA",
  lion: "LI",
  coneleste: "CX",
  farmxp: "XP",
  fanstoneLegacy: "JF",
};

const CaseStudyModal = lazy(() => import("./CaseStudyModal"));

const thumbnailClassMap: Record<FeaturedProject["thumbnailKey"], string> = {
  jac: styles.thumbnailJac,
  esports: styles.thumbnailEsports,
  maximiza: styles.thumbnailMaximiza,
  aila: styles.thumbnailAila,
  pasteur: styles.thumbnailPasteur,
  lion: styles.thumbnailLion,
  coneleste: styles.thumbnailConeleste,
  farmxp: styles.thumbnailFarmxp,
  fanstoneLegacy: styles.thumbnailFanstoneLegacy,
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

        <div className={styles.rows}>
          {featuredProjects.map((project, index) => {
            const text = (
              data.featured as unknown as Record<string, FeaturedText>
            )[project.i18nKey];
            const realImage = project.hasRealMedia
              ? thumbnailImageMap[project.thumbnailKey]
              : undefined;

            return (
              <motion.article
                key={project.id}
                className={`${styles.row} ${
                  index % 2 === 1 ? styles.rowReverse : ""
                }`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
                whileInView={
                  prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                }
                transition={prefersReducedMotion ? undefined : { duration: 0.4 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className={styles.rowContent}>
                  <div className={styles.meta}>
                    <span
                      className={`${styles.badge} ${
                        badgeTheme[project.badgeType]
                      }`}
                    >
                      {text.badge}
                    </span>
                    <h3>{text.title}</h3>
                  </div>

                  <dl className={styles.narrative}>
                    <div className={styles.narrativeStep}>
                      <dt>{data.common.problemLabel}</dt>
                      <dd>{text.problem}</dd>
                    </div>
                    <div className={styles.narrativeStep}>
                      <dt>{data.common.solutionLabel}</dt>
                      <dd>{text.impact}</dd>
                    </div>
                    <div className={styles.narrativeStep}>
                      <dt>{data.common.contributionLabel}</dt>
                      <dd>{text.roleShort}</dd>
                    </div>
                  </dl>

                  <div className={styles.stack}>
                    {project.stack.map((tech) => (
                      <span key={tech} className={styles.chip}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className={styles.result}>
                    <span className={styles.resultDot} aria-hidden="true" />
                    {text.result}
                  </p>

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
                        {data.common.openSystem}
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className={styles.rowMedia}>
                  {realImage ? (
                    <div
                      className={`${styles.thumbnail} ${
                        thumbnailClassMap[project.thumbnailKey]
                      }`}
                    >
                      <div className={styles.browserFrame}>
                        <div className={styles.browserBar}>
                          <span
                            className={styles.browserDot}
                            data-color="red"
                          />
                          <span
                            className={styles.browserDot}
                            data-color="yellow"
                          />
                          <span
                            className={styles.browserDot}
                            data-color="green"
                          />
                          <span className={styles.browserUrl}>
                            {data.common.mediaLabels[project.thumbnailKey]}
                          </span>
                        </div>
                        <div className={styles.browserContent}>
                          <img
                            src={realImage}
                            alt={text.title}
                            loading="lazy"
                            style={{
                              objectPosition:
                                thumbnailObjectPositionMap[
                                  project.thumbnailKey
                                ],
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`${styles.placeholder} ${
                        thumbnailClassMap[project.thumbnailKey]
                      }`}
                      role="img"
                      aria-label={`${text.title} — ${data.common.previewSoon}`}
                    >
                      <span className={styles.placeholderInitials}>
                        {placeholderInitials[project.thumbnailKey]}
                      </span>
                      <span className={styles.placeholderCaption}>
                        {data.common.mediaLabels[project.thumbnailKey]}
                      </span>
                      <span className={styles.placeholderTag}>
                        {data.common.previewSoon}
                      </span>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
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
