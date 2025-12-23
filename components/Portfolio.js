'use client';

import { useLanguage } from '../context/LanguageContext';
import styles from '../styles/Portfolio.module.css';

export default function Portfolio() {
    const { t } = useLanguage();

    return (
        <section id="portfolio" className={`section ${styles.portfolio}`}>
            <div className="container">
                <h2 className={styles.sectionTitle}>{t.portfolio.title}</h2>
                <div className={styles.content}>
                    <p className={styles.placeholder}>{t.portfolio.coming_soon}</p>
                    {/* Future: Grid of investments */}
                </div>
            </div>
        </section>
    );
}
