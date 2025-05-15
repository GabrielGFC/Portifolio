import { useEffect, useState } from 'react';
import './style.scss';

// ────────────────────────── Conteúdo
import Portuguese from '../../mocks/portuguese.json';
import English    from '../../mocks/english.json';

// Faz o TypeScript inferir o formato a partir do JSON
type LangData = typeof English;

// Mapeia deslocamentos de rolagem por seção
const scrollOffsets: Record<string, number> = {
    section1: 100,
    section2:   0,
    section3: -200,
    section4: -1000,
    default: -1000
};

const Header: React.FC = () => {
    const [data, setData] = useState<LangData>(English);

    // Detecta idioma do navegador
    useEffect(() => {
        const userLang = navigator.language || navigator.languages[0];
        setData(userLang.startsWith('pt') ? Portuguese : English);
    }, []);

    const handleScrollTo = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const offset   = scrollOffsets[sectionId] ?? scrollOffsets.default;
        const position = section.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top: position, behavior: 'smooth' });
    };

    return (
        <div className="header-container">
            <p className="notranslate">
                Gabriel <span>F.Carvalho</span>
            </p>

            <div className="navigation-box">
                <p className="notranslate" onClick={() => handleScrollTo('section1')}>
                    {data.header.home}
                </p>
                <p onClick={() => handleScrollTo('section2')}>{data.header.capabilities}</p>
                <p onClick={() => handleScrollTo('section3')}>{data.header.experience}</p>
                <p onClick={() => handleScrollTo('section4')}>{data.header.projects}</p>
            </div>
        </div>
    );
};

export default Header;
