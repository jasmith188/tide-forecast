import React, { useEffect, useState } from 'react';
import './CurrentWeather.css';

let APIKEY = 'c5fc998f4951203abe90d5f6c1f39d7b';

const CurrentWeather = () => {
  const [city, setCity] = useState('');
  const [currentIcon, setCurrentIcon] = useState('');
  const [currentTemp, setCurrentTemp] = useState('');
  const [feelsLike, setFeelsLike] = useState('');
  const [description, setDescription] = useState('');
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${APIKEY}&units=imperial`
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
  });

  return (
    <div className="currentWeather">
      <div className="currentWeather__card">
        <h1 className="currentWeather__title">Current Weather for {city}</h1>
        <img
          className="currentWeather__icon"
          src={`http://openweathermap.org/img/w/${currentIcon}.png`}
          alt="icon right here"
        />
        <p>{Math.round(currentTemp)} F</p>
        <p>{Math.round(feelsLike)} F</p>
        <p>Condition: {description}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
