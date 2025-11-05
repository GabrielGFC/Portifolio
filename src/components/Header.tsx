import { motion } from "framer-motion";
import React, { MouseEvent, useContext, useEffect, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import brazilianFlag from "../assets/images/brazilian_flag.svg";
import americanFlag from "../assets/images/american_flag.svg";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const { data, langKey, toggleLanguage } = useContext(LanguageContext);
  const [activeSection, setActiveSection] = useState<string>("inicio");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "inicio", label: data.header.nav.inicio },
    { id: "featured", label: data.header.nav.featured },
    { id: "experience", label: data.header.nav.experience },
    { id: "public-projects", label: data.header.nav.publicProjects },
    { id: "contact", label: data.header.nav.contact },
  ];

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
          const offset = sectionId === "inicio" ? 180 : 120;
          return rect.top <= offset && rect.bottom >= offset;
        });

      if (current) {
        setActiveSection(current);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    setIsMenuOpen(false);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      className={`${styles.header} ${
        isScrolled ? styles["header--scrolled"] : ""
      }`}
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className={styles.headerWrap}>
        <a
          className={styles.brand}
          href="#inicio"
          aria-label={data.header.home}
          onClick={(event) => scrollToSection(event, "inicio")}
        >
          <span className={styles["brand__first"]}>Gabriel</span>
          <span className={styles["brand__middle"]}> F.</span>
          <span className={styles["brand__last"]}> de Carvalho</span>
        </a>

        <div className={styles.headerActions}>
          <button
            type="button"
            className={`${styles.langToggle} ${styles.langToggleActive}`}
            onClick={(e) => {
              e.preventDefault();
              toggleLanguage();
            }}
            aria-label={langKey === "pt" ? "Switch to English" : "Trocar para Português"}
            aria-pressed="true"
          >
            <img
              src={langKey === "pt" ? brazilianFlag : americanFlag}
              alt={langKey === "pt" ? "Português" : "English"}
              className={styles.langFlag}
            />
            <span className={styles.langLabel}>{langKey === "pt" ? "PT" : "EN"}</span>
          </button>

          <button
            type="button"
            className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav
            className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
            aria-label="Navegação principal"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`${styles.navLink} ${
                  activeSection === item.id ? styles.navLinkActive : ""
                }`}
                onClick={(event) => scrollToSection(event, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
