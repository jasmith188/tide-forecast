import React, { useEffect, useState } from 'react';
import './FiveDayForecast.css';
import moment from 'moment';
let APIKEY = 'a23515e97824cfc37248b2f2e48c0c37';

const timestamp = require('time-stamp');
// const months = require('months');

const FourDayForecast = ({ dailyWeather }) => {
  const [dayOneDate, setDayOneDate] = useState('');
  const [dayOneIcon, setDayOneIcon] = useState('');
  const [dayOneMaxTemp, setDayOneMaxTemp] = useState('');
  const [dayOneLowTemp, setDayOneLowTemp] = useState('');
  const [dayOneDescription, setDayOneDescription] = useState('');
  const [dayTwoDate, setDayTwoDate] = useState('');
  const [dayTwoIcon, setDayTwoIcon] = useState('');
  const [dayTwoMaxTemp, setDayTwoMaxTemp] = useState('');
  const [dayTwoLowTemp, setDayTwoLowTemp] = useState('');
  const [dayTwoDescription, setDayTwoDescription] = useState('');
  // const [dayThreeDate, setDayThreeDate] = useState('');
  // const [dayThreeIcon, setDayThreeIcon] = useState('');
  // const [dayThreeMaxTemp, setDayThreeMaxTemp] = useState('');
  // const [dayThreeLowTemp, setDayThreeLowTemp] = useState('');
  // const [dayThreeDescription, setDayThreeDescription] = useState('');
  // const [dayFourDate, setDayFourDate] = useState('');
  // const [dayFourIcon, setDayFourIcon] = useState('');
  // const [dayFourMaxTemp, setDayFourMaxTemp] = useState('');
  // const [dayFourLowTemp, setDayFourLowTemp] = useState('');
  // const [dayFourDescription, setDayFourDescription] = useState('');
  // const [newTimestamp, setNewTimestamp] = useState('');
  // const date = new Date(dayOneDescription);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=minutely,hourly&appid=${APIKEY}&units=imperial`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDayOneDate(data.daily[1].dt);
          setDayOneIcon(data.daily[1].weather[0].icon);
          setDayOneMaxTemp(data.daily[1].temp.max);
          setDayOneLowTemp(data.daily[1].temp.min);
          setDayOneDescription(data.daily[1].weather[0].description);
          setDayTwoDate(data.daily[2].dt);
          setDayTwoIcon(data.daily[2].weather[0].icon);
          setDayTwoMaxTemp(data.daily[2].temp.max);
          setDayTwoLowTemp(data.daily[2].temp.min);
          setDayTwoDescription(data.daily[2].weather[0].description);
          // setDayThreeDate(data.daily[3].dt);
          // setDayThreeIcon(data.daily[3].weather[0].icon);
          // setDayThreeMaxTemp(data.daily[3].temp.max);
          // setDayThreeLowTemp(data.daily[3].temp.min);
          // setDayThreeDescription(data.daily[3].weather[0].description);
          // setDayFourDate(data.daily[4].dt);
          // setDayFourIcon(data.daily[4].weather[0].icon);
          // setDayFourMaxTemp(data.daily[4].temp.max);
          // setDayFourLowTemp(data.daily[4].temp.min);
          // setDayFourDescription(data.daily[4].weather[0].description);
          setDayOneDate(timestamp('MM/DD'));
          // setDayTwoDate(timestamp('MM/DD'));
          let setDayTwoDate = moment(new Date(1615482000 * 1000)).format(
            'MM/DD/YYYY hh:MM'
          );
          //                           -----------^^^^^^^------------
          // console.log(newDate);
        })
        .catch((error) => console.log('error', error));
    });
  }, []);

  //=> 2018-10-26

  // const timestamp = Date.now(); // This would be the timestamp you want to format

  // setNewTimestamp(
  //   new Intl.DateTimeFormat('en-US', {
  //     year: 'numeric',
  //     month: '2-digit',
  //     day: '2-digit',
  //     // hour: '2-digit',
  //     // minute: '2-digit',
  //     // second: '2-digit',
  //   }).format(timestamp)
  // );

  return (
    <div className="fourDayForecast">
      <div className="fourDayForecast__card">
        <div className="fourDayForecast__title">4 Day Forecast</div>
        <h2 className="fourDayForecast__date">{dayOneDate}</h2>
        <h3 className="fourDayForecast__icon">{dayOneIcon}</h3>
        <h3 className="fourDayForecast__maxTemp">
          {Math.round(dayOneMaxTemp)}
        </h3>
        <h3 className="fourDayForecast__minTemp">
          {Math.round(dayOneLowTemp)}
        </h3>
        <h4 className="fourDayForecast__description">{dayOneDescription}</h4>
      </div>

      <div className="fourDayForecast__card">
        <h2 className="fourDayForecast__date">
          {moment(dayTwoDate).format('MMM')}
        </h2>
        <h3 className="fourDayForecast__icon">{dayTwoIcon}</h3>
        <h3 className="fourDayForecast__maxTemp">
          {Math.round(dayTwoMaxTemp)}
        </h3>
        <h3 className="fourDayForecast__minTemp">
          {Math.round(dayTwoLowTemp)}
        </h3>
        <h4 className="fourDayForecast__description">{dayTwoDescription}</h4>
      </div>
      {/* <div className="fourDayForecast__card">
        <h2 className="fourDayForecast__date">{dayThreeDate}</h2>
        <h3 className="fourDayForecast__icon">{dayThreeIcon}</h3>
        <h3 className="fourDayForecast__maxTemp">
          {Math.round(dayThreeMaxTemp)}
        </h3>
        <h3 className="fourDayForecast__minTemp">
          {Math.round(dayThreeLowTemp)}
        </h3>
        <h4 className="fourDayForecast__description">{dayThreeDescription}</h4>
      </div>
      <div className="fourDayForecast__card">
        <h2 className="fourDayForecast__date">{dayFourDate}</h2>
        <h3 className="fourDayForecast__icon">{dayFourIcon}</h3>
        <h3 className="fourDayForecast__maxTemp">
          {Math.round(dayFourMaxTemp)}
        </h3>
        <h3 className="fourDayForecast__minTemp">
          {Math.round(dayFourLowTemp)}
        </h3>
        <h4 className="fourDayForecast__description">{dayFourDescription}</h4>
      </div> */}
    </div>
  );
};

export default FourDayForecast;
