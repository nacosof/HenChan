import Image from 'next/image';
import styles from '../styles/Home.module.css';

interface Props {
  src: string;
  alt?: string;
  onClick?: () => void;
}

export default function MangaImageContainer({ src, alt = '', onClick }: Props) {
  return (
    <div className={styles.mangaImageContainer} onClick={onClick} style={onClick ? { cursor: 'pointer' } : {}}>
      <Image
        src={src}
        alt={alt}
        fill
        className={styles.mangaImage}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
} 