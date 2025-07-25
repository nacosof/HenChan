import styles from '../styles/SideMenu.module.css';

interface SideMenuProps {
  show: boolean;
  onClose?: () => void;
  onMangaClick?: () => void;
}

export default function SideMenu({ show, onClose, onMangaClick }: SideMenuProps) {
  return (
    <div className={styles.sideMenu + (show ? ' ' + styles.sideMenuOpen : '')}>
      <div className={styles.sideMenuContent}>
        <span className={styles.MangaContainer}>
          <span className={styles.mangaText} onClick={onMangaClick} style={{ cursor: 'pointer' } }>Manga</span>
        </span>
      </div>
    </div>
  );
} 