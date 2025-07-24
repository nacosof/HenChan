import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

const mangaPages = Array.from({ length: 25 }, (_, i) => `/images/manga_1/page${i + 1}.jpg`);

export default function Manga1() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mangaActive, setMangaActive] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [userName, setUserName] = useState('');

  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.topGrayBar}>
          <div className={styles.headerLeft}>
            <button
              className={`${styles.menuIcon} ${menuOpen ? styles.menuIconActive : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <div className={styles.menuIconBar}></div>
              <div className={styles.menuIconBar}></div>
              <div className={styles.menuIconBar}></div>
            </button>
            <span
              className={`${styles.MangaText} ${mangaActive ? styles.MangaTextActive : ''}`}
              onClick={() => setMangaActive((v) => !v)}>
            <span onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
            Manga
            </span>
            </span>
          </div>
          <div className={styles.headerRight}>
            <span
              className={styles.SignInText + (showSignIn ? ' ' + styles.SignInTextActive : '')}
              onClick={() => setShowSignIn(true)}
            >
              {userName ? userName : 'SignIn'}
            </span>
          </div>
        </div>
        <div className={`${styles.sideMenu} ${menuOpen ? styles.sideMenuOpen : ''}`}>
          <div className={styles.sideMenuContent}>
            <span className={styles.MangaContainer}> 
            <span className={styles.mangaText} onClick={() => router.push('/')}style={{ cursor: 'pointer' }}>
            Manga
            </span>
            </span>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 48 }}>
        {mangaPages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Manga page ${idx + 1}`}
            style={{ width: '100%', maxWidth: 600, marginBottom: 16, borderRadius: 8 }}
          />
        ))}
      </div>
    </>
  );
}
