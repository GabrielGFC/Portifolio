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
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
