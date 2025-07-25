import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Cap.module.css';
import SignIn from './sign_in';
import SideMenu from './side_menu';
import { checkUser } from '../db';
import SignUp from './sign_up';

interface CapProps {
  showSignIn: boolean;
  setShowSignIn: (v: boolean) => void;
}

export default function Cap({ showSignIn, setShowSignIn }: CapProps) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<null | 'manga' | 'signin' | 'signup'>(null);
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [userName, setUserName] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [logoutActive, setLogoutActive] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) setUserName(savedName);
  }, []);

  useEffect(() => {
    setLoginError(false);
  }, [loginInput, passwordInput]);

  const handleJoin = () => {
    if (loginInput && passwordInput) {
      if (checkUser(loginInput, passwordInput)) {
        setUserName(loginInput);
        localStorage.setItem('userName', loginInput);
        setShowSignIn(false);
        setLoginInput('');
        setPasswordInput('');
        setLoginError(false);
      } else {
        setLoginError(true);
      }
    }
  };

  const handleMangaClick = () => {
    setActiveTab('manga');
    router.push('/');
  };

  const handleSignInClick = () => {
    setShowSignIn(true);
    setActiveTab('signin');
  };

  const handleProfileClick = () => {
    setShowProfileMenu((v) => !v);
  };

  const handleLogout = () => {
    setLogoutActive(true);
    setTimeout(() => {
      setUserName('');
      setActiveTab(null);
      setShowProfileMenu(false);
      localStorage.removeItem('userName');
      setLogoutActive(false);
      router.push('/');
    }, 350);
  };

  const handleSignUpClick = () => {
    setActiveTab('signup');
    setShowSignUp(true);
  };

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
              className={`${styles.MangaText} ${activeTab === 'manga' ? styles.MangaTextActive : ''}`}
              onClick={handleMangaClick}
              style={{ cursor: 'pointer' }}
            >
              Manga
            </span>
          </div>
          <div className={styles.headerRight}>
            {userName ? (
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <span
                  className={styles.SignInText + (showProfileMenu ? ' ' + styles.SignInTextActive : '')}
                  onClick={handleProfileClick}
                  style={{ cursor: 'pointer' }}
                >
                  {userName}
                </span>
                {showProfileMenu && (
                  <div className={styles.ProfileContainer}>
                    <span className={styles.ProfileText}>My profile</span>
                    <span className={styles.SettingsText}>Settings</span>
                    <span
                      className={styles.LogoutText + (logoutActive ? ' ' + styles.LogoutTextActive : '')}
                      onClick={handleLogout}
                      style={{ cursor: 'pointer' }}
                    >
                      Logout
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <>
                <span
                  className={styles.SignInText + (showSignIn || activeTab === 'signin' ? ' ' + styles.SignInTextActive : '')}
                  onClick={handleSignInClick}
                >
                  SignIn
                </span>
                <span
                  className={styles.SignUpText + (activeTab === 'signup' ? ' ' + styles.SignUpTextActive : '')}
                  onClick={handleSignUpClick}
                  style={{ cursor: 'pointer' }}
                >
                  SignUp
                </span>
              </>
            )}
          </div>
        </div>
        <SideMenu show={menuOpen} onMangaClick={handleMangaClick} />
      </div>
      <SignIn
        show={showSignIn}
        loginInput={loginInput}
        setLoginInput={setLoginInput}
        passwordInput={passwordInput}
        setPasswordInput={setPasswordInput}
        onJoin={handleJoin}
        onClose={() => setShowSignIn(false)}
        loginError={loginError}
      />
      <SignUp
        show={showSignUp}
        loginInput={loginInput}
        setLoginInput={setLoginInput}
        passwordInput={passwordInput}
        setPasswordInput={setPasswordInput}
        onJoin={() => setShowSignUp(false)}
        onClose={() => setShowSignUp(false)}
        loginError={loginError}
      />
    </>
  );
} 