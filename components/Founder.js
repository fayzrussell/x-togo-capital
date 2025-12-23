'use client';

import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import styles from '../styles/Founder.module.css';

export default function Founder() {
    const { t } = useLanguage();

    return (
        <section id="founder" className={`section ${styles.founder}`}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/assets/avatar.png"
                            alt={t.founder.name}
                            width={200}
                            height={200}
                            className={styles.avatar}
                        />
                    </div>
                    <div className={styles.text}>
                        <h2 className={styles.label}>{t.founder.title}</h2>
                        <h3 className={styles.name}>{t.founder.name}</h3>
                        <p className={styles.role}>{t.founder.role}</p>
                        <p className={styles.bio}>{t.founder.bio}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
