import React from 'react';
import styles from '../styles/Home.module.css';
import Cap from '../components/cap';

const mangaPages = Array.from({ length: 25 }, (_, i) => `/images/manga_1/page${i + 1}.jpg`);

export default function Manga1() {
  return (
    <>
      <Cap />
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
