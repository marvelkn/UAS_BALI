
// import React, { useState, useEffect, useContext } from 'react';
// import { useLocation } from 'react-router-dom';
// import './Stats.css';
// import coins from '../pics/coins.png';
// import balimap from '../pics/balimap.png';
// import HealthBar from './HealthBar';
// import { HealthContext } from '../contexts/HealthContext';
// import WaypointMarker from './WaypointMarker';
// import Modal from '../components/Restoran/Modal';
// import menu from '../components/Restoran/Menu';

// export default function Map() {
//   const location = useLocation();
//   const name = location.state?.name || sessionStorage.getItem('userName') || '';

//   const initialCoinAmount = parseInt(localStorage.getItem('coinAmount')) || 100;
//   const [coinAmount, setCoinAmount] = useState(initialCoinAmount);
//   const { health, setHealth } = useContext(HealthContext);

//   const [waypoints, setWaypoints] = useState([
//     { id: 1, name: 'Waypoint 1', x: 530, y: 300, info: 'Pura Agung Besakih', link: '/candibesakih' },
//     { id: 2, name: 'Waypoint 2', x: 600, y: 300, info: 'Candi Pura Lempuyangan', link: '/candipura' },
//     { id: 3, name: 'Waypoint 3', x: 400, y: 350, info: 'Monkey Forest Ubud', link: '/monkeyforest' },
//     { id: 4, name: 'Waypoint 4', x: 364, y: 380, info: 'Tanah Lot', link: '/tanahlot' },
//     { id: 5, name: 'Waypoint 5', x: 382, y: 415, info: 'Pantai Kuta', link: '/pantaikuta' },
//     { id: 6, name: 'Waypoint 6', x: 540, y: 415, info: 'Nusa Penida', link: '/nusapenida' },
//     { id: 7, name: 'Waypoint 7', x: 380, y: 250, info: 'Pura Ulun Danu Beratan Bedugul', link: '/ulundanu' },
//     { id: 8, name: 'Waypoint 8', x: 349, y: 443, info: 'Pura Luhur Uluwatu', link: '/Uluwatu' },
//     { id: 9, name: 'Waypoint 9', x: 375, y: 439, info: 'Garuda Wisnu Kencana', link: '/GWK' },
//     { id: 10, name: 'Waypoint 10', x: 434, y: 380, info: 'Tegenungan Waterfall', link: '/tegenungan' },
//   ]);

//   const [weather, setWeather] = useState(null);
//   const [airQuality, setAirQuality] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [localTime, setLocalTime] = useState(new Date().toLocaleString("en-US", { timeZone: "Asia/Makassar" }));
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       const apiKey = '68072c5371a32abb39f5de596649e177';
//       const city = 'Bali';
//       const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//       try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//           throw new Error('Failed to fetch weather data');
//         }
//         const data = await response.json();
//         setWeather(data);
//         console.log(data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     };

//     const fetchAirQuality = async () => {
//       const apiKey = '68072c5371a32abb39f5de596649e177';
//       const apiUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=-8.3405&lon=115.0920&appid=${apiKey}`;

//       try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//           throw new Error('Failed to fetch air quality data');
//         }
//         const data = await response.json();
//         setAirQuality(data);
//         console.log(data);
//       } catch (error) {
//         console.error('Error fetching air quality data:', error);
//       }
//     };

//     const fetchNews = async () => {
//       const newsApiKey = 'f8e75872221b4c09b0bc5dd7db7502ec';
//       const newsApiUrl = `https://newsapi.org/v2/everything?q=Bali&apiKey=${newsApiKey}`;

//       try {
//         const response = await fetch(newsApiUrl);
//         if (!response.ok) {
//           throw new Error('Failed to fetch news data');
//         }
//         const data = await response.json();
//         const baliNews = data.articles.filter(article => article.description && article.description.includes('Bali'));
//         setNews(baliNews);
//         console.log(data);
//       } catch (error) {
//         console.error('Error fetching news data:', error);
//       }
//     };

//     fetchWeather();
//     fetchAirQuality();
//     fetchNews();

//     const updateLocalTime = () => {
//       setLocalTime(new Date().toLocaleString("en-US", { timeZone: "Asia/Makassar" }));
//     };

//     const intervalId = setInterval(updateLocalTime, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('coinAmount', coinAmount.toString());
//     localStorage.setItem('progress', health.toString());
//   }, [coinAmount, health]);

//   const handleOrder = (price) => {
//     const priceNumber = parseInt(price);
//     const newCoinAmount = coinAmount - priceNumber;
//     if (newCoinAmount >= 0) {
//       setCoinAmount(newCoinAmount);
//       localStorage.setItem('coinAmount', newCoinAmount.toString());
//       setHealth((prevHealth) => prevHealth + 15);
//     } else {
//       alert('Not enough coins!');
//     }
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const decreaseHealth = () => {
//     const newHealth = health - 40 >= 0 ? health - 40 : 0;
//     setHealth(newHealth);
//   };

//   const replenishHealth = () => {
//     setHealth((prevHealth) => prevHealth + 15);
//   };

//   return (
//     <div className="container-stats">
//       <div className="left-side">
//         <div className="user-stats">
//           <h2>{`Hello, ${name}!`}</h2>
//           <h3> Hunger Bar : </h3>
//           <HealthBar health={health} />
//           <p> Coins </p>
//           <div className="coin-amount">
//             <img src={coins} alt="logoCoins" className="logoCoins"></img>
//             <p>{coinAmount}</p>
//           </div>
//         </div>
//         <div className="info-box">
//           {weather && (
//             <div className="weather-info">
//               <h3>Live {weather.name} Time</h3>
//               <p>{localTime}</p>
//               <h3>{weather.name} Weather</h3>
//               <p>Weather: {weather.weather[0].description}</p>
//               <p>Temperature: {weather.main.temp}°C</p>
//               <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon" />
//               <p>Humidity: {weather.main.humidity}%</p>
//               <p>Wind Speed: {weather.wind.speed} m/s</p>
//               <p>Wind Direction: {weather.wind.deg}°</p>
//               <p>Pressure: {weather.main.pressure} hPa</p>
//               <p>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
//               <p>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
//             </div>
//           )}
//           {airQuality && (
//             <div className="air-quality-info">
//               <h3>Air Quality Index</h3>
//               <p>AQI: {airQuality.list[0].main.aqi}</p>
//               <p>PM2.5: {airQuality.list[0].components.pm2_5} µg/m³</p>
//               <p>PM10: {airQuality.list[0].components.pm10} µg/m³</p>
//               <p>CO: {airQuality.list[0].components.co} µg/m³</p>
//               <p>NO: {airQuality.list[0].components.no} µg/m³</p>
//               <p>NO2: {airQuality.list[0].components.no2} µg/m³</p>
//               <p>O3: {airQuality.list[0].components.o3} µg/m³</p>
//               <p>SO2: {airQuality.list[0].components.so2} µg/m³</p>
//               <p>NH3: {airQuality.list[0].components.nh3} µg/m³</p>
//               {airQuality.list[0].main.aqi <= 50 && <p>Health Recommendation: Air quality is considered satisfactory, and air pollution poses little or no risk.</p>}
//               {airQuality.list[0].main.aqi > 50 && airQuality.list[0].main.aqi <= 100 && <p>Health Recommendation: Air quality is acceptable; however, there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.</p>}
//               {airQuality.list[0].main.aqi > 100 && airQuality.list[0].main.aqi <= 150 && <p>Health Recommendation: Members of sensitive groups may experience health effects. The general public is not likely to be affected.</p>}
//               {airQuality.list[0].main.aqi > 150 && airQuality.list[0].main.aqi <= 200 && <p>Health Recommendation: Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.</p>}
//               {airQuality.list[0].main.aqi > 200 && airQuality.list[0].main.aqi <= 300 && <p>Health Recommendation: Health alert: everyone may experience more serious health effects.</p>}
//               {airQuality.list[0].main.aqi > 300 && <p>Health Recommendation: Health warnings of emergency conditions. The entire population is more likely to be affected.</p>}
//             </div>
//           )}
//         </div>
//         <div className="button-rest">
//           <button onClick={openModal}>Restaurant 🍽️</button>
//         </div>
//       </div>
//       <div className="right-side">
//         <div className="main-map" style={{ position: 'relative' }}>
//           <img src={balimap} alt="baliMap" className="baliMap" style={{ width: '100%', height: 'auto' }} />
//           {waypoints.map((waypoint) => (
//             <WaypointMarker key={waypoint.id} waypoint={waypoint} decrease={decreaseHealth} />
//           ))}
//         </div>
//       </div>
//       <div className="right2-side">

//       </div>
//       <Modal isOpen={isModalOpen} onClose={closeModal} menu={menu} onOrder={handleOrder} />
//     </div>
//   );
// }

import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './Stats.css';
import coins from '../pics/coins.png';
import balimap from '../pics/balimap.png';
import HealthBar from './HealthBar';
import { HealthContext } from '../contexts/HealthContext';
import WaypointMarker from './WaypointMarker';
import Modal from '../components/Restoran/Modal';
import menu from '../components/Restoran/Menu';

export default function Map() {
  const location = useLocation();
  const name = location.state?.name || sessionStorage.getItem('userName') || '';

  const initialCoinAmount = parseInt(localStorage.getItem('coinAmount')) || 100;
  const [coinAmount, setCoinAmount] = useState(initialCoinAmount);
  const { health, setHealth } = useContext(HealthContext);

  const [waypoints, setWaypoints] = useState([
    { id: 1, name: 'Waypoint 1', x: 530, y: 300, info: 'Pura Agung Besakih', link: '/candibesakih' },
    { id: 2, name: 'Waypoint 2', x: 600, y: 300, info: 'Candi Pura Lempuyangan', link: '/candipura' },
    { id: 3, name: 'Waypoint 3', x: 400, y: 350, info: 'Monkey Forest Ubud', link: '/monkeyforest' },
    { id: 4, name: 'Waypoint 4', x: 364, y: 380, info: 'Tanah Lot', link: '/tanahlot' },
    { id: 5, name: 'Waypoint 5', x: 382, y: 415, info: 'Pantai Kuta', link: '/pantaikuta' },
    { id: 6, name: 'Waypoint 6', x: 540, y: 415, info: 'Nusa Penida', link: '/nusapenida' },
    { id: 7, name: 'Waypoint 7', x: 380, y: 250, info: 'Pura Ulun Danu Beratan Bedugul', link: '/ulundanu' },
    { id: 8, name: 'Waypoint 8', x: 349, y: 443, info: 'Pura Luhur Uluwatu', link: '/Uluwatu' },
    { id: 9, name: 'Waypoint 9', x: 375, y: 439, info: 'Garuda Wisnu Kencana', link: '/GWK' },
    { id: 10, name: 'Waypoint 10', x: 434, y: 380, info: 'Tegenungan Waterfall', link: '/tegenungan' },
  ]);

  const [weather, setWeather] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localTime, setLocalTime] = useState(new Date().toLocaleString("en-US", { timeZone: "Asia/Makassar" }));

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = '68072c5371a32abb39f5de596649e177';
      const city = 'Bali';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeather(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    const fetchAirQuality = async () => {
      const apiKey = '68072c5371a32abb39f5de596649e177';
      const apiUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=-8.3405&lon=115.0920&appid=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch air quality data');
        }
        const data = await response.json();
        setAirQuality(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching air quality data:', error);
      }
    };

    fetchWeather();
    fetchAirQuality();

    const updateLocalTime = () => {
      setLocalTime(new Date().toLocaleString("en-US", { timeZone: "Asia/Makassar" }));
    };

    const intervalId = setInterval(updateLocalTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('coinAmount', coinAmount.toString());
    localStorage.setItem('progress', health.toString());
  }, [coinAmount, health]);

  const handleOrder = (price) => {
    const priceNumber = parseInt(price);
    const newCoinAmount = coinAmount - priceNumber;
    if (newCoinAmount >= 0) {
      setCoinAmount(newCoinAmount);
      localStorage.setItem('coinAmount', newCoinAmount.toString());
      setHealth((prevHealth) => prevHealth + 15);
    } else {
      alert('Not enough coins!');
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const decreaseHealth = () => {
    const newHealth = health - 40 >= 0 ? health - 40 : 0;
    setHealth(newHealth);
  };

  const replenishHealth = () => {
    setHealth((prevHealth) => prevHealth + 15);
  };

  return (
    <div className="container-stats">
      <div className="left-side">
        <div className="user-stats">
          <h2 className="fw-bold">{`Hello, ${name}!`}</h2>
          <h3> Hunger Bar : </h3>
          <HealthBar health={health} />
          <p> Coins </p>
          <div className="coin-amount">
            <img src={coins} alt="logoCoins" className="logoCoins"></img>
            <p>{coinAmount}</p>
          </div>
        </div>
        <div className="info-box">
          {weather && (
            <div className="weather-info">
              <h3 className="fw-bold">{weather.name} Weather</h3>
              <p>Weather: {weather.weather[0].description}</p>
              <p>Temperature: {weather.main.temp}°C</p>
              <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon" />
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Wind Speed: {weather.wind.speed} m/s</p>
              <p>Wind Direction: {weather.wind.deg}°</p>
              <p>Pressure: {weather.main.pressure} hPa</p>
              <p>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
              <p>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
            </div>
          )}
        </div>
      </div>
      <div className="right-side">
        <h1 className="fw-bold text-center" style={{ marginTop: '20px', marginBottom: '0', color: 'black' }}>Tentukan Perjalananmu di BALI!!</h1>
        {/* <p className="fw-bold text-center" style={{ marginBottom: '0', padding: '0' }}>Pilih salah satu wisata untuk memulai perjalanan!</p> */}
        <div className="main-map" style={{ position: 'relative' }}>
          <img src={balimap} alt="baliMap" className="baliMap" />
          {waypoints.map((waypoint) => (
            <WaypointMarker key={waypoint.id} waypoint={waypoint} decrease={decreaseHealth} />
          ))}
        </div>
      </div>
      <div className="right2-side">
        <div className="time-info">
          <h3 className="fw-bold">Live Bali Time</h3>
          <p>{localTime}</p>
        </div>
        {airQuality && (
          <div className="air-quality-info">
            <h3 className="fw-bold">Air Quality Index</h3>
            <p>AQI: {airQuality.list[0].main.aqi}</p>
            <p>PM2.5: {airQuality.list[0].components.pm2_5} µg/m³</p>
            <p>PM10: {airQuality.list[0].components.pm10} µg/m³</p>
            <p>CO: {airQuality.list[0].components.co} µg/m³</p>
            <p>NO: {airQuality.list[0].components.no} µg/m³</p>
            <p>NO2: {airQuality.list[0].components.no2} µg/m³</p>
            <p>O3: {airQuality.list[0].components.o3} µg/m³</p>
            <p>SO2: {airQuality.list[0].components.so2} µg/m³</p>
            <p>NH3: {airQuality.list[0].components.nh3} µg/m³</p>
            {airQuality.list[0].main.aqi <= 50 && <p>Health Recommendation: Air quality is considered satisfactory, and air pollution poses little or no risk.</p>}
            {airQuality.list[0].main.aqi > 50 && airQuality.list[0].main.aqi <= 100 && <p>Health Recommendation: Air quality is acceptable; however, there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.</p>}
            {airQuality.list[0].main.aqi > 100 && airQuality.list[0].main.aqi <= 150 && <p>Health Recommendation: Members of sensitive groups may experience health effects. The general public is not likely to be affected.</p>}
            {airQuality.list[0].main.aqi > 150 && airQuality.list[0].main.aqi <= 200 && <p>Health Recommendation: Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.</p>}
            {airQuality.list[0].main.aqi > 200 && airQuality.list[0].main.aqi <= 300 && <p>Health Recommendation: Health alert: everyone may experience more serious health effects.</p>}
            {airQuality.list[0].main.aqi > 300 && <p>Health Recommendation: Health warnings of emergency conditions. The entire population is more likely to be affected.</p>}
          </div>
        )}
        <div className="button-rest">
          <button onClick={openModal}>Restaurant 🍽️</button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} menu={menu} onOrder={handleOrder} />
    </div>
  );
}
