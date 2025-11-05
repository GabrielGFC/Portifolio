import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import type { FeaturedProject } from '../data/featuredProjects';
import styles from './CaseStudyModal.module.scss';

interface CaseStudyModalProps {
  project: FeaturedProject | null;
  isOpen: boolean;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>('');

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    setActiveTab(project?.caseStudy.tabs[0]?.key ?? '');

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, project]);

  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && project ? (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.backdrop} onClick={onClose} />
          <motion.div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`case-study-${project.id}`}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <header className={styles.header}>
              <div>
                <p className={styles.type}>{project.badge}</p>
                <h2 id={`case-study-${project.id}`}>{project.title}</h2>
              </div>
              <button type="button" className={styles.close} onClick={onClose}>
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Fechar</span>
              </button>
            </header>

            <div className={styles.tags}>
              {project.stack.slice(0, 4).map((tech) => (
                <span key={tech} className={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>

            <div className={styles.tabs} role="tablist" aria-label="Sessoes do estudo de caso">
              {project.caseStudy.tabs.map((tab) => (
                <button
                  type="button"
                  key={tab.key}
                  role="tab"
                  aria-selected={activeTab === tab.key}
                  className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <div className={styles.content}>
              {project.caseStudy.tabs.map((tab) => {
                const isActive = tab.key === activeTab;
                return (
                  <AnimatePresence key={tab.key} mode="wait">
                    {isActive && (
                      <motion.div
                        className={styles.section}
                        role="tabpanel"
                        id={`panel-${tab.key}`}
                        aria-labelledby={`tab-${tab.key}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                      >
                        {Array.isArray(tab.content) ? (
                          <ul className={styles.list}>
                            {tab.content.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className={styles.description}>{tab.content}</p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                );
              })}
            </div>

            {project.caseStudy.referenceLink && (
              <footer className={styles.footer}>
                <a href={project.caseStudy.referenceLink} target="_blank" rel="noopener noreferrer">
                  Ver referencia visual
                </a>
              </footer>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
};

export default CaseStudyModal;