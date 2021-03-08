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
          const weatherData = JSON.parse(data);

          const time = new Date().getHours();
          //1)We got hold of current time(24 hr - format)
          weatherData.list.forEach(function (single) {
            var textHour = single.dt_txt.substring(11, 13);
            //2)We got hold of hour from weatherData
            //example "dt_txt": "2020-07-28 21:00:00" ( var textHour= '21')
            var numberHour = parseInt(textHour, 10);
            //2) We converted string '21' to int 21 !
            var difference = Math.abs(time - numberHour);
            //3) In order to get latest time we finded out the difference
            // i.e. The data from API comes strictly from 00:00 then 3 ,6 , ..,21,24 aka 00:00
            // In order to get latest time we finded out the difference
            //example if it was 22:00 the 22(time)-21(numberHour)=1(difference)
            if (
              difference === 1 ||
              difference === 0 ||
              (time === 23 && numberHour === 21) ||
              (time === 24 && numberHour === 0) ||
              (time === 2 && numberHour === 0)
            ) {
              //Here in first case
              //If it was time=22 & numberHour=21 then difference=1
              //Second Case if time=21 & numberHour=21 then difference =0
              //Third Case if it was time=23 then 23-21=2 and the difference would be 2(Special Case)
              //Fourth Case time=24 numberHour=0 , difference =24 (Special Case)
              //Fifth Case time=2 numberHour=0:00 , difference = 2 (Special Case)
              //NOW FOR ALL THE REST THE DIFFERENCE WOULD ONLY BE '0' AND '1'
              daysArray.push(single);
              //We pushed the satisfied timings in our daysArray
            }
          });
          console.log(daysArray);
          //BOOM , In console you will be seeing the 5-day data and that too closest to //your current time !
          // results.render('forecast', { daysArray: daysArray });
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
          // src={`https://openweathermap.org/img/w/${currentIcon}.png`}
          src={currentIcon}
          alt="icon right here"
        />
        <div className="currentWeather__descriptions">
          <p>Current Temperature: {Math.round(currentTemp)} F</p>
          <p>Feels Like: {Math.round(feelsLike)} F</p>
          <p>Condition: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
