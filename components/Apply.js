'use client';

import { useLanguage } from '../context/LanguageContext';
import styles from '../styles/Apply.module.css';

export default function Apply() {
    const { t } = useLanguage();

    return (
        <section id="apply" className={styles.apply}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>{t.apply.title}</h2>
                    <p className={styles.description}>{t.apply.description}</p>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSccXtvfDnyAZb1YjxXIE0A24XW52jDTy0vZJINoN3dmrkEbWQ/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                    >
                        {t.apply.cta} &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}
