import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { MaskedTitle, RESUME_URL, Reveal } from "../../motion/motion";
import styles from "./Closing.module.scss";

const Closing: React.FC = () => {
  const { data } = useContext(LanguageContext);
  const t = data.lux.contact;
  const nav = data.lux.nav;

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className={`container ${styles.inner}`}>
        <p className="eyebrow">{t.eyebrow}</p>
        <MaskedTitle id="contact-title" className={styles.title}>
          {t.title}
        </MaskedTitle>
        <Reveal className={styles.body}>
          <p className={styles.text}>{t.text}</p>
          <a className={styles.email} href={`mailto:${t.email}`}>
            {t.email}
            <span aria-hidden="true">→</span>
          </a>
          <ul className={styles.links}>
            <li>
              <a href="https://www.linkedin.com/in/gabrielgfc1" target="_blank" rel="noopener noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/GabrielGFC" target="_blank" rel="noopener noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                {nav.resume} (PDF) <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Closing;
