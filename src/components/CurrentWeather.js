import React, { useEffect, useState } from 'react';
import './CurrentWeather.css';
import { APIKEY, API_BASE_URL } from '../apis/config';

// let APIKEY = 'f125c765561a0103d94223d5fd98ce93';

const CurrentWeather = () => {
  const [city, setCity] = useState('');
  const [currentIcon, setCurrentIcon] = useState('');
  const [currentTemp, setCurrentTemp] = useState('');
  const [feelsLike, setFeelsLike] = useState('');
  const [description, setDescription] = useState('');
  // const [error, setError] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(
        `${API_BASE_URL}/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${APIKEY}&units=imperial`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCity(data.name);
          setCurrentIcon(data.weather[0].icon);
          setCurrentTemp(data.main.temp);
          setFeelsLike(data.main.feels_like);
          setDescription(data.weather[0].description);
        });
    });
  }, []);

  return (
    <div className="currentWeather">
      <div className="currentWeather__card">
        <h1 className="currentWeather__title">Current Weather for</h1>
        <h2 className="currentWeather__city">📍{city}</h2>
        <img
          className="currentWeather__icon"
          src={`https://openweathermap.org/img/w/${currentIcon}.png`}
          alt="icon right here"
        />
        <p>Current Temperature: {Math.round(currentTemp)} F</p>
        <p>Feels Like: {Math.round(feelsLike)} F</p>
        <p>Condition: {description}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
