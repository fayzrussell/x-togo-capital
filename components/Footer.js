'use client';

import { useLanguage } from '../context/LanguageContext';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h3>X-TOGO</h3>
                        <p>{t.footer.description}</p>
                    </div>
                    <div className={styles.socials}>
                        <a href="https://www.instagram.com/rustam.togo" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://youtube.com/@rustam_togo" target="_blank" rel="noopener noreferrer">YouTube</a>
                        <a href="https://www.tiktok.com/@rustam_togo" target="_blank" rel="noopener noreferrer">TikTok</a>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>{t.footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
}
