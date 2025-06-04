import React, { useContext } from 'react';
import './style.scss';

// ──────────────────────────── Assets
import BrazilianFlag from '../../assets/images/brazilian_flag.svg';
import LinkedinLogo   from '../../assets/images/linkedin.svg';
import GithubLogo     from '../../assets/images/github.svg';
import MailLogo       from '../../assets/images/mail.svg';
import AmericanFlag from  '../../assets/images/american_flag.svg';

// ──────────────────────────── Contexto de idioma
import { LanguageContext } from '../../contexts/LanguageContext';

// eslint-disable-next-line no-undef
const Footer: React.FC = () => {
  const { langKey, data, toggleLanguage } = useContext(LanguageContext);

  // Função para selecionar idioma explicitamente
  const setLanguage = (lang: 'pt' | 'en') => {
    if (lang !== langKey) toggleLanguage();
  };

  return (
      <>
        {/* coluna mobile / primeira seção */}
        <div className="footer-column">
          <a
              href="https://gabrielgfc.github.io/Portifolio/Gabriel_Fernandes_de_Carvalho.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
          >
            <button>{data.footer.resume}</button>
          </a>
          <div className="social-media">
            <a
                href="https://www.linkedin.com/in/gabrielgfc1"
                target="_blank"
                rel="noopener noreferrer"
            >
              <img src={LinkedinLogo} alt="LinkedIn Logo" />
            </a>
            <a
                href="https://github.com/gabrielgfc"
                target="_blank"
                rel="noopener noreferrer"
            >
              <img src={GithubLogo} alt="GitHub Logo" />
            </a>
            <a href="mailto:carvalhogabrielgfc1@gmail.com">
              <img src={MailLogo} alt="Mail Logo" />
            </a>
          </div>
        </div>

        {/* layout desktop */}
        <div className="footer-container">
          <div className="footer-column">
            <p className="notranslate">
              {data.footer.based} Gabriel <span>F.Carvalho</span>
            </p>
            <div className="inside-line">
              <div className="footer-flags-copyright">
                <div className="flags-language">
                  <button
                    className={`flag-btn${langKey === 'pt' ? ' selected' : ''}`}
                    onClick={() => setLanguage('pt')}
                    aria-label="Português"
                  >
                    <img src={BrazilianFlag} alt="Brazilian Flag" />
                  </button>
                  <button
                    className={`flag-btn${langKey === 'en' ? ' selected' : ''}`}
                    onClick={() => setLanguage('en')}
                    aria-label="English"
                  >
                    <img src={AmericanFlag} alt="American Flag" />
                  </button>
                </div>
                <p>© 2025</p>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <div className="divider-line" />
            <a
                href="https://www.linkedin.com/in/gabrielgfc1"
                target="_blank"
                rel="noopener noreferrer"
            >
              <img src={LinkedinLogo} alt="LinkedIn Logo" />
            </a>
            <a
                href="https://github.com/gabrielgfc"
                target="_blank"
                rel="noopener noreferrer"
            >
              <img src={GithubLogo} alt="GitHub Logo" />
            </a>
            <a href="mailto:carvalhogabrielgfc1@gmail.com">
              <img src={MailLogo} alt="Mail Logo" />
            </a>
            <div className="divider-line" />
          </div>

          <div className="footer-column">
            <a
                href="https://gabrielgfc.github.io/Portifolio/Gabriel_Fernandes_de_Carvalho.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="download-button"
            >
              <button>{data.footer.resume}</button>
            </a>
          </div>
        </div>
      </>
  );
};

export default Footer;
