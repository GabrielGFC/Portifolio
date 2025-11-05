import { motion, useReducedMotion } from "framer-motion";
import React, { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styles from "./Experience.module.scss";

type TimelineItem = {
  company: string;
  role: string;
  period: string;
  achievements: string[];
};

const Experience: React.FC = () => {
  const { data } = useContext(LanguageContext);
  const prefersReducedMotion = useReducedMotion();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const timeline: TimelineItem[] = [
    {
      company: data.experience.ftt.company,
      role: data.experience.ftt.role,
      period: data.experience.ftt.period,
      achievements: [
        data.experience.ftt.bullet1,
        data.experience.ftt.bullet2,
        data.experience.ftt.bullet3,
      ],
    },
    {
      company: data.experience.proppe.company,
      role: data.experience.proppe.role,
      period: data.experience.proppe.period,
      achievements: [
        data.experience.proppe.bullet1,
        data.experience.proppe.bullet2,
        data.experience.proppe.bullet3,
      ],
    },
    {
      company: data.experience.fab.company,
      role: data.experience.fab.role,
      period: data.experience.fab.period,
      achievements: [
        data.experience.fab.bullet1,
        data.experience.fab.bullet2,
        data.experience.fab.bullet3,
      ],
    },
  ];

  const toggleExpanded = (company: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(company)) {
        next.delete(company);
      } else {
        next.add(company);
      }
      return next;
    });
  };

  return (
    <section id="experience" className={`${styles.section} pageSection`}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {data.experience.title}
        </motion.h2>

        <div className={styles.timeline}>
          {timeline.map((item, index) => {
            const isExpanded = expandedItems.has(item.company);
            return (
              <motion.article
                key={item.company}
                className={styles.item}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
                whileInView={
                  prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                }
                transition={
                  prefersReducedMotion
                    ? undefined
                    : {
                        duration: 0.45,
                        delay: prefersReducedMotion ? 0 : index * 0.08,
                      }
                }
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className={styles.header}>
                  <div>
                    <p className={styles.role}>{item.role}</p>
                    <h3 className={styles.company}>{item.company}</h3>
                  </div>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <p className={styles.summary}>{item.achievements[0]}</p>
                {isExpanded && (
                  <ul className={styles.list}>
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                )}
                <button
                  type="button"
                  className={styles.expandButton}
                  onClick={() => toggleExpanded(item.company)}
                >
                  {isExpanded ? data.common.close : data.common.viewDetails}
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
