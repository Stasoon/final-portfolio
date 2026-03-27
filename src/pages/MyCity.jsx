import React, { useState, useEffect } from 'react';
import styles from './MyCity.module.css';

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=51.24&longitude=33.20&current_weather=true';

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Помилка при завантаженні погоди');
        }
        return response.json();
      })
      .then((data) => {
        setWeather({
          name: 'Конотоп (Попівка)',
          sys: { country: 'UA' },
          main: { temp: data.current_weather.temperature },
          weather: [{ 
            description: 'Поточна температура',
            icon: '04d' 
          }],
          coord: { lat: 51.24, lon: 33.20 }
        });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.cityInfo}>
        <h1>Моє рідне село — Попівка 🇺🇦</h1>
        <p>
          Я родом із мальовничого села Попівка, що на Конотопщині у Сумській області. 
          Це місце з особливою атмосферою, де тиша природи зустрічається з індустріальним минулим. 
          Наша місцева гордість і легенда — нині закритий спиртовий завод.
        </p>
        <p>
          А ще Попівка славиться своїми знаменитими «бардовими ямами». Коли вітер дме в правильному напрямку, 
          вони щедро огортають околиці своїм неповторним, фірмовим «запашком», який не сплутаєш ні з чим!
        </p>
      </section>

      <section className={styles.weatherSection}>
        <h2>Поточна погода 🌤️</h2>
        
        {loading && <p className={styles.statusMsg}>Завантаження даних...</p>}
        {error && <p className={styles.statusMsg}>{error}</p>}
        
        {weather && !loading && !error && (
          <div className={styles.weatherCard}>
            <div className={styles.weatherHeader}>
              <h3>{weather.name}, {weather.sys.country}</h3>
              <img 
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                alt="Іконка погоди" 
              />
            </div>
            
            <div className={styles.weatherDetails}>
              <div className={styles.temp}>{Math.round(weather.main.temp)}°C</div>
              <div className={styles.desc}>{weather.weather[0].description}</div>
            </div>
            
            <div className={styles.coords}>
              Координати: [{weather.coord.lat}, {weather.coord.lon}]
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default MyCity;