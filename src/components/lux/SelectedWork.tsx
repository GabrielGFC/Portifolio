import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageContext";
import { featuredProjects, type FeaturedText } from "../../data/featuredProjects";
import { projectMedia } from "../../data/projectMedia";
import { publicProjects } from "../../data/publicProjects";
import { MaskedTitle, Reveal, duration, ease } from "../../motion/motion";
import styles from "./SelectedWork.module.scss";

const byKey = (key: string) => featuredProjects.find((project) => project.i18nKey === key);

const SelectedWork: React.FC = () => {
  const { data } = useContext(LanguageContext);
  const t = data.lux.work;
  const reduce = !!useReducedMotion();
  const [archiveOpen, setArchiveOpen] = useState(false);
  const featuredText = data.featured as unknown as Record<string, FeaturedText>;

  return (
    <section id="work" className={styles.section} aria-labelledby="work-title">
      <div className="container">
        <header className={styles.head}>
          <p className="eyebrow">{t.eyebrow}</p>
          <MaskedTitle id="work-title" className={styles.title}>
            {t.title}
          </MaskedTitle>
        </header>

        <ol className={styles.list}>
          {t.items.map((item, index) => {
            const project = byKey(item.key);
            if (!project) return null;
            return (
              <li key={item.key} className={styles.item}>
                <Reveal className={styles.text}>
                  <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                  <h3 className={styles.name}>{item.name}</h3>
                  <p className={styles.meta}>{item.meta}</p>
                  <p className={styles.summary}>{item.summary}</p>
                  <p className={styles.stack}>{project.stack.slice(0, 4).join(" · ")}</p>
                  <Link to={`/projetos/${project.id}`} className="linkArrow">
                    {t.caseStudy}
                    <span aria-hidden="true">→</span>
                  </Link>
                </Reveal>
                <motion.figure
                  className={styles.media}
                  initial={reduce ? false : { clipPath: "inset(16% 0% 0% 0%)", opacity: 0 }}
                  whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: duration.cinematic, ease }}
                >
                  <img src={projectMedia[project.thumbnailKey]} alt={item.name} loading="lazy" decoding="async" />
                </motion.figure>
              </li>
            );
          })}
        </ol>

        <div className={styles.archive}>
          <button
            type="button"
            className="linkArrow"
            aria-expanded={archiveOpen}
            aria-controls="work-archive"
            onClick={() => setArchiveOpen((value) => !value)}
          >
            {archiveOpen ? t.archiveClose : t.archiveOpen}
            <span aria-hidden="true">{archiveOpen ? "−" : "+"}</span>
          </button>

          <AnimatePresence initial={false}>
            {archiveOpen && (
              <motion.div
                id="work-archive"
                key="archive"
                className={styles.archivePanel}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: reduce ? 0 : duration.base, ease }}
              >
                <h3 className={styles.archiveTitle}>{t.archiveTitle}</h3>
                <ul className={styles.rows}>
                  {t.archive.map((entry) => {
                    const project = byKey(entry.key);
                    if (!project) return null;
                    return (
                      <li key={entry.key} className={styles.row}>
                        <span className={styles.rowName}>{featuredText[entry.key]?.title}</span>
                        <span className={styles.rowMeta}>{entry.meta}</span>
                        <Link to={`/projetos/${project.id}`} className={styles.rowAction}>
                          {t.caseStudy}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <h3 className={styles.archiveTitle}>{t.archivePublic}</h3>
                <ul className={styles.rows}>
                  {publicProjects.map((repo) => (
                    <li key={repo.id} className={styles.row}>
                      <span className={styles.rowName}>
                        {repo.title}
                        <span className={styles.rowDesc}>{repo.description}</span>
                      </span>
                      <span className={styles.rowMeta}>{repo.stack.join(" · ")}</span>
                      {repo.url ? (
                        <a className={styles.rowAction} href={repo.url} target="_blank" rel="noopener noreferrer">
                          {t.openRepo} <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <span />
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
};

export default SelectedWork;
