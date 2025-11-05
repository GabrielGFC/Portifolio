import { motion, useReducedMotion } from "framer-motion";
import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import mailIcon from "../assets/images/mail.svg";
import linkedinIcon from "../assets/images/linkedin.svg";
import githubIcon from "../assets/images/github.svg";
import styles from "./Contact.module.scss";

const Contact: React.FC = () => {
  const { data } = useContext(LanguageContext);
  const prefersReducedMotion = useReducedMotion();

  const channels = [
    {
      id: "email",
      label: data.contact.items.email.label,
      value: data.contact.items.email.value,
      href: data.contact.items.email.href,
      icon: mailIcon,
    },
    {
      id: "linkedin",
      label: data.contact.items.linkedin.label,
      value: data.contact.items.linkedin.value,
      href: data.contact.items.linkedin.href,
      icon: linkedinIcon,
    },
    {
      id: "github",
      label: data.contact.items.github.label,
      value: data.contact.items.github.value,
      href: data.contact.items.github.href,
      icon: githubIcon,
    },
    {
      id: "instagram",
      label: data.contact.items.instagram.label,
      value: data.contact.items.instagram.value,
      href: data.contact.items.instagram.href,
      icon: null,
    },
  ];

  return (
    <section id="contact" className={`${styles.section} pageSection`}>
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className={styles.title}>{data.contact.title}</h2>
          <p className={styles.subtitle}>{data.contact.subtitle}</p>
        </motion.header>

        <div className={styles.grid}>
          {channels.map((channel, index) => (
            <motion.a
              key={channel.id}
              className={styles.card}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={
                channel.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={
                prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 0.4, delay: index * 0.1 }
              }
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.icon}>
                {channel.icon ? (
                  <img src={channel.icon} alt={channel.label} />
                ) : (
                  <span className={styles.iconPlaceholder}>📷</span>
                )}
              </div>
              <div className={styles.content}>
                <span className={styles.label}>{channel.label}</span>
                <span className={styles.value}>{channel.value}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
