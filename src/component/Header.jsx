import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.appHeader}>
      <img src='../../public/vite.svg' alt='React logo' />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
