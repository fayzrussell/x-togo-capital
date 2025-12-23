'use client';

import { useLanguage } from '../context/LanguageContext';
import styles from '../styles/Thesis.module.css';

export default function InvestmentThesis() {
    const { t } = useLanguage();

    return (
        <section id="thesis" className={`section ${styles.thesis}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>{t.thesis.title}</h2>
                    <p className={styles.subtitle}>{t.thesis.subtitle}</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.column}>
                        <h3>Stages</h3>
                        <p className={styles.highlight}>{t.thesis.stages}</p>
                    </div>

                    <div className={styles.column}>
                        <h3>Focus</h3>
                        <ul>
                            {t.thesis.focus.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>We Offer</h3>
                        <ul>
                            {t.thesis.offer.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
