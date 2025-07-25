import styles from '../styles/SignIn.module.css';
import { signinPreview } from '../utils/manga_photo';

interface SignInProps {
  show: boolean;
  loginInput: string;
  setLoginInput: (v: string) => void;
  passwordInput: string;
  setPasswordInput: (v: string) => void;
  onJoin: () => void;
  onClose: () => void;
  loginError?: boolean;
}

export default function SignIn({ show, loginInput, setLoginInput, passwordInput, setPasswordInput, onJoin, onClose, loginError }: SignInProps) {
  if (!show) return null;
  return (
    <div className={styles.signInOverlay}>
      <div className={styles.SignInContainer}>
        <img src={signinPreview} className={styles.signInImage} />
        <div>
          <span className={styles.henChanSignInText}>HenChan</span>
        </div>
        <div>
          <input
            className={styles.EmailContainer + (loginError ? ' ' + styles.Error : '')}
            placeholder="Login"
            value={loginInput}
            onChange={e => setLoginInput(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            className={styles.PasswordContainer + (loginError ? ' ' + styles.Error : '')}
            placeholder="Password"
            value={passwordInput}
            onChange={e => setPasswordInput(e.target.value)}
          />
        </div>
        <div>
          <span
            className={styles.JoinContainer}
            onClick={onJoin}
          >
            <span className={styles.JoinText}>Join</span>
          </span>
        </div>
        <div>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>
      </div>
    </div>
  );
} 