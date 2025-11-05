import { motion } from "framer-motion";
import React, { MouseEvent, useEffect, useState } from "react";
import styles from "./Header.module.scss";

const navItems = [
  { id: "inicio", label: "Início" },
  { id: "featured", label: "Destaques" },
  { id: "summary", label: "Resumo" },
  { id: "experience", label: "Experiência" },
  { id: "public-projects", label: "Públicos" },
  { id: "contact", label: "Contato" },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("inicio");
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
  }, []);

  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
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
          aria-label="Página inicial"
          onClick={(event) => scrollToSection(event, "inicio")}
        >
          <span className={styles["brand__first"]}>Gabriel</span>
          <span className={styles["brand__last"]}> F.Carvalho</span>
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
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
    </motion.header>
  );
};

export default Header;
