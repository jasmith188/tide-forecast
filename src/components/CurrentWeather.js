import React, { useEffect, useState } from 'react';
import './CurrentWeather.css';
import { APIKEY, API_BASE_URL, YOUR_ACCESS_KEY } from '../apis/config';
import axios from 'axios';

// let APIKEY = 'f125c765561a0103d94223d5fd98ce93';

const CurrentWeather = () => {
  const [city, setCity] = useState('');
  const [currentIcon, setCurrentIcon] = useState('');
  const [currentTemp, setCurrentTemp] = useState('');
  const [feelsLike, setFeelsLike] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const daysArray = [];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      axios
        .get(
          `https://api.weatherstack.com/current?access_key=da3519b8084af6fd6aab249e61aa62f0&query=${position.coords.latitude},${position.coords.longitude}&units=f`
        )
        // .then((res) => )
        .then((data) => {
          console.log(data);
          setCity(data.data.location.name);
          setCurrentIcon(data.data.current.weather_icons);
          setCurrentTemp(data.data.current.temperature);
          setFeelsLike(data.data.current.feelslike);
          setDescription(data.data.current.weather_descriptions[0]);
          // setHigh(data.data.daily[0])
        });
    });
  }, []);

  return (
    <div className="currentWeather">
      <div className="currentWeather__card">
        {/* <h1 className="currentWeather__title">Current Weather for</h1> */}
        <h2 className="currentWeather__city">📍{city}</h2>
        <div className="currentWeather__description">{description}</div>
        <p className="currentWeather__currentTemp">
          {Math.round(currentTemp)} F
        </p>
        <img
          className="currentWeather__icon"
          // src={`https://openweathermap.org/img/w/${currentIcon}.png`}
          src={currentIcon}
          alt="icon right here"
        />
        <div className="currentWeather__feelsLike">
          <p>Feels Like: {Math.round(feelsLike)} F</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
