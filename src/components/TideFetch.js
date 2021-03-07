import React, { useEffect, useState } from 'react';
import './TideFetch.css';
import axios from 'axios';

const timestamp = require('time-stamp');

let APIKEY = '351d60752706416885b203048210103';

const Tide = ({ lat, lng }) => {
  const [firstTide, setFirstTide] = useState('');
  const [secondTide, setSecondTide] = useState('');
  const [thirdTide, setThirdTide] = useState('');
  const [fourthTide, setFourthTide] = useState('');
  const [firstTime, setFirstTime] = useState('');
  const [secondTime, setSecondTime] = useState('');
  const [thirdTime, setThirdTime] = useState('');
  const [fourthTime, setFourthTime] = useState('');
  const [firstDate, setFirstDate] = useState('');
  const [secondDate, setSecondDate] = useState('');
  const [thirdDate, setThirdDate] = useState('');
  const [fourthDate, setFourthDate] = useState('');

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((geo) => {
  //     // set current
  //     setLatLng({
  //       lat: geo.coords.latitude,
  //       lng: geo.coords.longitude,
  //     });
  //   });
  // }, []);

  useEffect(() => {
    navigator.geolocation.watchPosition((position) => {
      axios
        .get(
          `https://api.worldweatheronline.com/premium/v1/marine.ashx?key=${APIKEY}&q=${position.coords.latitude},${position.coords.longitude}&format=json&includelocation=yes&tide=yes`
        )
        // .then((res) => res.json())
        .then((data) => {
          // Do something with response data.
          // setTide(data);
          console.log(data);
          setFirstTide(
            data.data.data.weather[0].tides[0].tide_data[0].tide_type
          );
          setSecondTide(
            data.data.data.weather[0].tides[0].tide_data[1].tide_type
          );
          setThirdTide(
            data.data.data.weather[0].tides[0].tide_data[2].tide_type
          );
          setFourthTide(
            data.data.data.weather[0].tides[0].tide_data[3].tide_type
          );
          setFirstTime(
            data.data.data.weather[0].tides[0].tide_data[0].tideTime
          );
          setSecondTime(
            data.data.data.weather[0].tides[0].tide_data[1].tideTime
          );
          setThirdTime(
            data.data.data.weather[0].tides[0].tide_data[2].tideTime
          );
          setFourthTime(
            data.data.data.weather[0].tides[0].tide_data[3].tideTime
          );
          setFirstDate(data.data.data.weather[0].date);
          setSecondDate(data.data.data.weather[0].date);
          setThirdDate(data.data.data.weather[0].date);
          setFourthDate(data.data.data.weather[0].date);
          console.log(position);
          setFirstDate(timestamp('MM/DD'));
          setSecondDate(timestamp('MM/DD'));
          setThirdDate(timestamp('MM/DD'));
          setFourthDate(timestamp('MM/DD'));
        });
      // .catch((error) => console.log('error', error));
    });
  }, []);

  return (
    <div className="tide">
      <br />
      <div className="tide__card">
        <h2 className="tide__tideHeight">{firstTide} Tide</h2>
        <h2 className="tide__tideDate">Date: {firstDate}</h2>
        <h3 className="tide__tideTime">{firstTime}</h3>
      </div>

      <div>
        <div className="tide__card">
          <h2 className="tide__tideHeight">{secondTide} Tide</h2>
          <h2 className="tide__tideDate">Date: {secondDate}</h2>
          <h3 className="tide__tideTime">{secondTime}</h3>
        </div>
      </div>

      <div>
        <div className="tide__card">
          <h2 className="tide__tideHeight">{thirdTide} Tide</h2>
          <h2 className="tide__tideDate">Date: {thirdDate}</h2>
          <h3 className="tide__tideTime">{thirdTime}</h3>
        </div>
      </div>

      <div>
        <div className="tide__card">
          <h2 className="tide__tideHeight">{fourthTide} Tide</h2>
          <h2 className="tide__tideDate">Date: {fourthDate}</h2>
          <h3 className="tide__tideTime">{fourthTime}</h3>
        </div>
      </div>
    </div>
  );
};

export default Tide;
