import React from 'react';
import styles from './MyFuture.module.css';

const MyFuture = () => {
  return (
    <div className={styles.container}>
      <section className={styles.quoteSection}>
        <blockquote>
          "Запам'ятай одну фразу: все буде, але не зразу."
        </blockquote>
      </section>

      <section className={styles.dreamJobSection}>
        <h2>Робота мрії 🎯</h2>
        <p>
          Моя ціль — стати бекенд-розробником. Я хочу створювати надійні, масштабовані та швидкі серверні частини застосунків. 
          Зараз я знаходжуся на етапі інтенсивного навчання, але маю величезне бажання розвиватися, 
          працювати з реальними комерційними проєктами та щодня вдосконалювати свої навички.
        </p>
      </section>

      <section className={styles.timelineSection}>
        <h2>3 кроки до мети 🚀</h2>
        <div className={styles.timeline}>
          
          <div className={styles.timelineItem}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>До вересня 2026</h3>
              <p>Пройти поглиблені курси з Python та закріпити знання на практиці.</p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Осінь 2026</h3>
              <p>Створити кілька складних пет-проєктів для підсилення портфоліо.</p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>Кінець 2026</h3>
              <p>Розпочати активний пошук роботи на позицію Junior Backend Developer.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default MyFuture;