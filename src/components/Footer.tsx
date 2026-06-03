import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const { data } = useContext(LanguageContext);
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.grid}>
          <div>
            <h4>{data.footer.about.title}</h4>
            <p>{data.footer.about.description}</p>
          </div>
          <nav>
            <h4>{data.footer.navigation.title}</h4>
            <ul>
              {data.footer.navigation.items.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h4>{data.footer.contact.title}</h4>
            <ul>
              {data.footer.contact.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    download={item.href.includes('.pdf') ? 'Gabriel_Fernandes_de_Carvalho.pdf' : undefined}
                    target={item.href.startsWith('http') || item.href.includes('.pdf') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') || item.href.includes('.pdf') ? 'noopener noreferrer' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.legal}>
          <span>{`© ${year} ${data.footer.copyright}`}</span>
          {Array.isArray(data.footer.legal) ? (
            <div className={styles.legalLinks}>
              {data.footer.legal.map((item: { label: string; href: string }) => (
                <a
                  key={item.href}
                  className={styles.legalLink}
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                className={styles.legalLink}
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("gfc:open-privacy"))
                }
              >
                Gerenciar consentimento
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
