import React, { useEffect, useState } from 'react';
import CurrentWeather from './CurrentWeather';

let APIKEY = 'a23515e97824cfc37248b2f2e48c0c37';

const FourDayForecast = () => {
  const [currentTemp, setCurrentTemp] = useState('');
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${APIKEY}&units=imperial`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCurrentTemp();
        });
    });
  });
  return (
    <div className="fourDayForecast">
      <div className="fourDayForecast__title">4 Day Forecast</div>
      <div>
        <CurrentWeather />
        <CurrentWeather />
        <CurrentWeather />
        <CurrentWeather />
        <CurrentWeather />
      </div>
    </div>
  );
};

export default FourDayForecast;
