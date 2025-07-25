import styles from '../styles/SignUp.module.css';
import { signupPreview } from '../utils/manga_photo';
import { addUser } from '../db';

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

  const handleSignUp = () => {
    if (loginInput && passwordInput) {
      addUser(loginInput, passwordInput);
      setLoginInput('');
      setPasswordInput('');
      onJoin();
    }
  };

  return (
    <div className={styles.signUpOverlay}>
      <div className={styles.SignUpContainer}>
        <img src={signupPreview} className={styles.signUpImage} />
        <div>
          <span className={styles.henChanSignUpText}>HenChan</span>
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
            onClick={handleSignUp}
          >
            <span className={styles.JoinText}>SignUp</span>
          </span>
        </div>
        <div>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>
      </div>
    </div>
  );
} 