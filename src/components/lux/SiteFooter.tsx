import { useReducedMotion } from "framer-motion";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageContext";
import styles from "./SiteFooter.module.scss";

const SiteFooter: React.FC = () => {
  const { data } = useContext(LanguageContext);
  const t = data.lux.footer;
  const reduce = !!useReducedMotion();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.bar}`}>
        <p>
          © {new Date().getFullYear()} Gabriel Fernandes de Carvalho. {t.rights}
        </p>
        <ul>
          <li>
            <Link to="/privacidade">{t.privacy}</Link>
          </li>
          <li>
            <Link to="/termos">{t.terms}</Link>
          </li>
          <li>
            <Link to="/cookies">{t.cookies}</Link>
          </li>
          <li>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })}
            >
              {t.top} <span aria-hidden="true">↑</span>
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default SiteFooter;
