import React, { useContext, useState } from 'react';
import './style.scss';
import { LanguageContext } from '../../contexts/LanguageContext';

const scrollOffsets: Record<string, number> = {
    section1: 100,
    section2: 0,
    section3: -200,
    section4: -1000,
    default: -1000,
};

const Header: React.FC = () => {
    const { langKey, toggleLanguage, data } = useContext(LanguageContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScrollTo = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const offset = scrollOffsets[sectionId] ?? scrollOffsets.default;
        const position = section.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top: position, behavior: 'smooth' });
        setMenuOpen(false); // Fecha o menu ao navegar
    };

    return (
        <>
            <div className="header-container desktop-header">
                <p className="notranslate">
                    Gabriel <span>F.Carvalho</span>
                </p>
                <div className="nav-lang-group">
                    <div className="navigation-box">
                        <p onClick={() => handleScrollTo('section1')}>{data.header.home}</p>
                        <p onClick={() => handleScrollTo('section2')}>{data.header.capabilities}</p>
                        <p onClick={() => handleScrollTo('section3')}>{data.header.experience}</p>
                        <p onClick={() => handleScrollTo('section4')}>{data.header.projects}</p>
                    </div>
                    <button className="language-button" onClick={toggleLanguage}>
                        {langKey === 'pt' ? 'EN' : 'PT'}
                    </button>
                </div>
            </div>
            <div className="mobile-header">
                <div className="mobile-header-bar">
                    <p className="notranslate">
                        Gabriel <span>F.Carvalho</span>
                    </p>
                    <button
                        className="hamburger-btn"
                        aria-label="Abrir menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="hamburger-icon">&#9776;</span>
                    </button>
                </div>
                {menuOpen && (
                    <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
                        <div className="mobile-menu" onClick={e => e.stopPropagation()}>
                            <button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Fechar menu">
                                &times;
                            </button>
                            <nav>
                                <p onClick={() => handleScrollTo('section1')}>{data.header.home}</p>
                                <p onClick={() => handleScrollTo('section2')}>{data.header.capabilities}</p>
                                <p onClick={() => handleScrollTo('section3')}>{data.header.experience}</p>
                                <p onClick={() => handleScrollTo('section4')}>{data.header.projects}</p>
                            </nav>
                            <button className="language-button" onClick={toggleLanguage}>
                                {langKey === 'pt' ? 'EN' : 'PT'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
