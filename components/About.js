'use client';

import { useLanguage } from '../context/LanguageContext';
import styles from '../styles/About.module.css';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className="container">
                <h2 className={styles.title}>{t.about.title}</h2>
                <p className={styles.mainDescription}>{t.about.description}</p>

                <div className={styles.grid}>
                    {t.about.points.map((point, index) => (
                        <div key={index} className={styles.card}>
                            <h3>{point.title}</h3>
                            <p>{point.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
