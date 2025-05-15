import React, { useEffect, useState } from 'react';
import './style.scss';

// ──────────────────────────── Assets
import BrazilianFlag from '../../assets/images/brazilian_flag.svg';
import LinkedinLogo   from '../../assets/images/linkedin.svg';
import GithubLogo     from '../../assets/images/github.svg';
import MailLogo       from '../../assets/images/mail.svg';
import AmericanFlag from  '../../assets/images/american_flag.svg';



// ──────────────────────────── Conteúdo
import Portuguese from '../../mocks/portuguese.json';
import English    from '../../mocks/english.json';

// Deriva o tipo a partir do arquivo JSON (ambos têm a mesma forma)
type LangData = typeof English;

// eslint-disable-next-line no-undef
const Footer: React.FC = () => {
  const [data, setData] = useState<LangData>(English);

  /* escolhe idioma do navegador */
  useEffect(() => {
    const userLang = navigator.language || navigator.languages[0];
    setData(userLang.startsWith('pt') ? Portuguese : English);
  }, []);

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
              <div>
                <img src={BrazilianFlag} alt="Brazilian Flag" />
              </div>
              <div>
                <img src={AmericanFlag} alt="American Flag" />
              </div>
              <p>© 2025</p>
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
