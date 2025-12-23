'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../content/en';
import { ru } from '../content/ru';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [locale, setLocale] = useState('en');

    // Load saved language from local storage on mount
    useEffect(() => {
        const savedLocale = localStorage.getItem('locale');
        if (savedLocale && (savedLocale === 'en' || savedLocale === 'ru')) {
            setLocale(savedLocale);
        }
    }, []);

    const toggleLanguage = () => {
        const newLocale = locale === 'en' ? 'ru' : 'en';
        setLocale(newLocale);
        localStorage.setItem('locale', newLocale);
    };

    const t = locale === 'en' ? en : ru;

    return (
        <LanguageContext.Provider value={{ locale, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
