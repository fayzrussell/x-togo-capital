'use client';

import { useLanguage } from '../context/LanguageContext';
import styles from '../styles/Manifesto.module.css';

export default function Manifesto() {
    const { t } = useLanguage();

    return (
        <section className={`section ${styles.manifesto}`}>
            <div className="container">
                <blockquote className={styles.quoteBlock}>
                    <p className={styles.quote}>&ldquo;{t.manifesto.quote}&rdquo;</p>
                    <cite className={styles.author}>&mdash; {t.manifesto.author}</cite>
                </blockquote>
            </div>
        </section>
    );
}
