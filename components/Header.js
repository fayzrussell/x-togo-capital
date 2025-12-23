'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import styles from '../styles/Header.module.css';

export default function Header() {
    const { t, locale, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    {/* Show Light Logo (Dark Text) in Light Mode, Dark Logo (White Text) in Dark Mode */}
                    {/* Actually, prompt said: "Light & Dark theme with toggle", "Automatically switch logos based on theme" */}
                    {/* Images: logo-light.jpg (Black text), logo-dark.jpg (White text) */}
                    <Image
                        src={theme === 'dark' ? '/assets/logo-dark.jpg' : '/assets/logo-light.jpg'}
                        alt="X-Togo Capital"
                        width={120}
                        height={40}
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </Link>

                <nav className={styles.nav}>
                    <Link href="#about">{t.header.about}</Link>
                    <Link href="#founder">{t.header.founder}</Link>
                    <Link href="#thesis">{t.header.philosophy}</Link>
                    <Link href="#portfolio">{t.header.portfolio}</Link>
                    <Link href="#apply" className={styles.cta}>{t.header.apply}</Link>
                </nav>

                <div className={styles.controls}>
                    <button onClick={toggleLanguage} className={styles.controlBtn}>
                        {locale === 'en' ? 'RU' : 'EN'}
                    </button>
                    <button onClick={toggleTheme} className={styles.controlBtn}>
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </div>
        </header>
    );
}
