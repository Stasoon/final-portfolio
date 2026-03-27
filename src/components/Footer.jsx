import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; {currentYear} Stasoon. тут могла бути ваша реклама.</p>
        
        <div className={styles.socials}>
          <a 
            href="https://github.com/Stasoon" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.link}
          >
            GitHub
          </a >
        </div >
      </div >
    </footer >
  );
};

export default Footer;