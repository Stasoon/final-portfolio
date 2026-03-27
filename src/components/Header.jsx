import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Stasoon Portfolio
      </div>
      
      <nav className={styles.nav}>
        <NavLink 
          to="/about" 
          className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Про мене
        </NavLink>
        <NavLink 
          to="/my-city" 
          className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Моє місто
        </NavLink>
        <NavLink 
          to="/my-future" 
          className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Мій розвиток
        </NavLink>
      </nav>
      
      <button onClick={toggleTheme} className={styles.themeToggle}>
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  );
};

export default Header;