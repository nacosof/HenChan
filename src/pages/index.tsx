import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import { mangaPreview1, mangaPreview2, mangaPreview3, signinPreview } from '../utils/manga_photo';
import MangaImageContainer from '../components/MangaImageContainer';

export default function Main() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mangaActive, setMangaActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [userName, setUserName] = useState('');

  return (
    <>
      <Head>
        <title>HenChan</title>
      </Head>
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
              onClick={() => setMangaActive((v) => !v)}
            >
              Manga
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
              <span className={styles.mangaText}>Manga</span>
              </span>
          </div>
        </div>
      </div>
      {showSignIn && (
        <div className={styles.signInOverlay}>
          <div className={styles.SignInContainer}>
            <img src={signinPreview} className={styles.signInImage} />
            <div>
              <span className={styles.henChanSignInText}>HenChan</span>
            </div>
            <div>
              <input
                className={styles.EmailContainer}
                placeholder="Login"
                value={loginInput}
                onChange={e => setLoginInput(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                className={styles.PasswordContainer}
                placeholder="Password"
                value={passwordInput}
                onChange={e => setPasswordInput(e.target.value)}
              />
            </div>
            <div>
              <span
                className={styles.JoinContainer}
                onClick={() => {
                  if (loginInput && passwordInput) {
                    setUserName(loginInput);
                    setShowSignIn(false);
                    setLoginInput('');
                    setPasswordInput('');
                  }
                }}
              >
                <span className={styles.JoinText}>Join</span>
              </span>
            </div>
            <div>
              <button className={styles.closeButton} onClick={() => setShowSignIn(false)}>×</button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.centerContainer}>
        <span className={styles.henchanText}>HenChan</span>
        <div className={styles.mangaRowAppear + ' ' + styles.mangaGrid}>
          <MangaImageContainer src={mangaPreview1} alt="Manga 1" onClick={() => router.push('/manga_1')} />
          <MangaImageContainer src={mangaPreview2} alt="Manga 2" onClick={() => router.push('/manga_2')}/>
          <MangaImageContainer src={mangaPreview3} alt="Manga 3" onClick={() => router.push('/manga_3')}/>
        </div>
      </div>
    </>
  );
} 