import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
import SiteHeader from "../components/lux/SiteHeader";
import { PageTransition } from "../motion/motion";
import styles from "./projeto/projeto.module.scss";

/** Rota inexistente: o GitHub Pages serve dist/404.html (esta mesma página, com noindex). */
const NaoEncontrado: React.FC = () => {
  const { data } = useContext(LanguageContext);
  const t = data.lux.caseStudy;

  useEffect(() => {
    document.title = `${t.pageNotFound.replace(/\.$/, "")} | Gabriel Fernandes de Carvalho`;
  }, [t.pageNotFound]);

  return (
    <PageTransition>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1} className={`container ${styles.missing}`}>
        <h1>{t.pageNotFound}</h1>
        <Link to="/" className="linkArrow">
          {t.home} <span aria-hidden="true">←</span>
        </Link>
      </main>
    </PageTransition>
  );
};

export default NaoEncontrado;
