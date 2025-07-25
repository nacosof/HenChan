import React from 'react';
import styles from '../styles/Home.module.css';
import Cap from '../components/cap';

const mangaPages = Array.from({ length: 24 }, (_, i) => `/images/manga_3/page${i + 1}.jpg`);

export default function Manga3() {
  return (
    <>
      <Cap showSignIn={false} setShowSignIn={() => {}} />
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
