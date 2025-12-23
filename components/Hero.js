'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import styles from '../styles/Hero.module.css';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <h1 className={styles.headline}>{t.hero.headline}</h1>
                <h2 className={styles.subheadline}>{t.hero.subheadline}</h2>
                <p className={styles.description}>{t.hero.description}</p>
                <div className={styles.actions}>
                    <Link href="#apply" className={styles.primaryBtn}>
                        {t.hero.cta_apply}
                    </Link>
                    <Link href="#about" className={styles.secondaryBtn}>
                        {t.hero.cta_philosophy}
                    </Link>
                </div>
            </div>
        </section>
    );
}
