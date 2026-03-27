import React from 'react';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <section className={styles.bioSection}>
        <h1>Привіт, я Стас! 👋</h1>
        <p>
          Студент ІТ-факультету НУБіП. У найближчому майбутньому планую стати бекенд-розробником на Python. 
          Постійно вдосконалюю свої навички у програмуванні, вивчаю нові технології та підходи. 
          У вільний час люблю грати в мобільні ігри, а іноді випробовую свої нерви на міцність, 
          проходячи хардкорні ігри типу Dark Souls.
        </p>
      </section>

      <section className={styles.projectsSection}>
        <h2>Мої проєкти 💻</h2>
        <div className={styles.projectsGrid}>
          
          <div className={styles.projectCategory}>
            <h3>HTML & CSS</h3>
            <ul>
              <li><a href="https://github.com/Stasoon/html-basic" target="_blank" rel="noopener noreferrer">html-basic</a> — Базова верстка</li>
              <li><a href="https://github.com/Stasoon/css-pratice" target="_blank" rel="noopener noreferrer">css-pratice</a> — Практика стилізації</li>
            </ul>
          </div>

          <div className={styles.projectCategory}>
            <h3>JavaScript</h3>
            <ul>
              <li><a href="https://github.com/Stasoon/js-DOM2" target="_blank" rel="noopener noreferrer">js-DOM2</a> — Робота з DOM-деревом</li>
            </ul>
          </div>

          <div className={styles.projectCategory}>
            <h3>React</h3>
            <ul>
              <li><a href="https://github.com/Stasoon/lab14-useeffect" target="_blank" rel="noopener noreferrer">lab14-useeffect</a> — Робота з хуками</li>
              <li><a href="https://github.com/Stasoon/react-gallery-api" target="_blank" rel="noopener noreferrer">react-gallery-api</a> — Взаємодія з API</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutMe;