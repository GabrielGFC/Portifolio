import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.grid}>
          <div>
            <h4>Sobre</h4>
            <p>Desenvolvedor back-end focado em sistemas institucionais, APIs seguras e integracoes internas.</p>
            <p>Atuo na Fabrica de Tecnologias Turing da UniEVANGELICA entregando plataformas auditaveis.</p>
          </div>
          <nav>
            <h4>Navegacao</h4>
            <ul>
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#featured">Destaques</a></li>
              <li><a href="#experience">Experiencia</a></li>
              <li><a href="#public-projects">Projetos</a></li>
              <li><a href="#education">Formacao</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
          <div>
            <h4>Contato</h4>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/gabrielgfc1" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:bibigfc@gmail.com">E-mail</a>
              </li>
              <li>
                <a href="/Portifolio/Gabriel_Fernandes_de_Carvalho.pdf" target="_blank" rel="noopener noreferrer">
                  Curriculo em PDF
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.legal}>
          <span>{`© ${year} Gabriel Fernandes de Carvalho. Todos os direitos reservados.`}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
