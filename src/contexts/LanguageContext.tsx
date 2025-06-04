import React, { createContext, useState, useEffect } from 'react';
import Portuguese from '../mocks/portuguese.json';
import English   from '../mocks/english.json';

export type LangKey  = 'pt' | 'en';
export type LangData = typeof English;

interface LanguageContextType {
    langKey: LangKey;
    data:    LangData;
    toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({
    langKey: 'en',
    data:    English,
    toggleLanguage: () => {},
});

export const LanguageProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [langKey, setLangKey] = useState<LangKey>('en');
    const [data, setData]     = useState<LangData>(English);

    useEffect(() => {
        const userLang = navigator.language || navigator.languages[0];
        if (userLang.toLowerCase().startsWith('pt')) {
            setLangKey('pt');
        } else {
            setLangKey('en');
        }
    }, []);

    useEffect(() => {
        if (langKey === 'pt') {
            setData(Portuguese);
        } else {
            setData(English);
        }
    }, [langKey]);

    const toggleLanguage = () => {
        setLangKey(prev => (prev === 'pt' ? 'en' : 'pt'));
    };

    return (
        <LanguageContext.Provider value={{ langKey, data, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
