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
    setActiveTab(project?.modal.sections[0]?.id ?? '');

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
              {project.modal.sections.map((section) => (
                <button
                  type="button"
                  key={section.id}
                  role="tab"
                  aria-selected={activeTab === section.id}
                  className={`${styles.tab} ${activeTab === section.id ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab(section.id)}
                >
                  {section.title}
                </button>
              ))}
            </div>

            <div className={styles.content}>
              {project.modal.sections.map((section) => {
                const isActive = section.id === activeTab;
                return (
                  <AnimatePresence key={section.id} mode="wait">
                    {isActive && (
                      <motion.div
                        className={styles.section}
                        role="tabpanel"
                        id={`panel-${section.id}`}
                        aria-labelledby={`tab-${section.id}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className={styles.description}>{section.description}</p>
                        {section.bullets && (
                          <ul className={styles.list}>
                            {section.bullets.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        )}
                        {section.highlight && <p className={styles.highlight}>{section.highlight}</p>}
                      </motion.div>
                    )}
                  </AnimatePresence>
                );
              })}
            </div>

            {project.modal.referenceLink && (
              <footer className={styles.footer}>
                <a href={project.modal.referenceLink} target="_blank" rel="noopener noreferrer">
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

