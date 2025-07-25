import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { mangaPreview1, mangaPreview2, mangaPreview3 } from '../utils/manga_photo';
import MangaImageContainer from '../components/MangaImageContainer';
import Cap from '../components/cap';

export default function Main() {
  const router = useRouter();
  const [showSignIn, setShowSignIn] = useState(false);

  const handleMangaClick = (mangaRoute: string) => {
    const userName = typeof window !== 'undefined' ? localStorage.getItem('userName') : null;
    if (userName) {
      router.push(mangaRoute);
    } else {
      setShowSignIn(true);
    }
  };

  return (
    <>
      <Head>
        <title>HenChan</title>
      </Head>
      <Cap showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
      <div className={styles.centerContainer}>
        <span className={styles.henchanText}>HenChan</span>
        <div className={styles.mangaRowAppear + ' ' + styles.mangaGrid}>
          <MangaImageContainer src={mangaPreview1} alt="Manga 1" onClick={() => handleMangaClick('/manga_1')} />
          <MangaImageContainer src={mangaPreview2} alt="Manga 2" onClick={() => handleMangaClick('/manga_2')}/>
          <MangaImageContainer src={mangaPreview3} alt="Manga 3" onClick={() => handleMangaClick('/manga_3')}/>
        </div>
      </div>
    </>
  );
} 