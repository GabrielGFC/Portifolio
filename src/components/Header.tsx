import React, { MouseEvent, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Header.module.scss';

const navItems = [
  { id: 'hero', label: 'Inicio' },
  { id: 'featured', label: 'Destaques' },
  { id: 'summary', label: 'Resumo' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'public-projects', label: 'Publicos' },
  { id: 'contact', label: 'Contato' },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);

      const current = navItems
        .map((item) => item.id)
        .find((sectionId) => {
          const node = document.getElementById(sectionId);
          if (!node) {
            return false;
          }
          const rect = node.getBoundingClientRect();
          const offset = sectionId === 'hero' ? 180 : 120;
          return rect.top <= offset && rect.bottom >= offset;
        });

      if (current) {
        setActiveSection(current);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles['header--scrolled'] : ''}`}
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className={styles.headerWrap}>
        <a className={styles.brand} href="#hero" aria-label="Pagina inicial" onClick={(event) => scrollToSection(event, 'hero')}>
          <span className={styles.brandFirst}>Gabriel</span>
          <span className={styles.brandLast}> F.Carvalho</span>
        </a>

        <nav className={styles.nav} aria-label="Navegacao principal">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${styles.navLink} ${activeSection === item.id ? styles.navLinkActive : ''}`}
              onClick={(event) => scrollToSection(event, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;

