import React, { useEffect, useState } from 'react';
import './TideFetch.css';

const Tide = () => {
  const [firstTide, setFirstTide] = useState('');
  const [secondTide, setSecondTide] = useState('');
  const [thirdTide, setThirdTide] = useState('');
  const [fourthTide, setFourthTide] = useState('');
  const [firstTime, setFirstTime] = useState('');
  const [secondTime, setSecondTime] = useState('');
  const [thirdTime, setThirdTime] = useState('');
  const [fourthTime, setFourthTime] = useState('');

  useEffect(() => {
    fetch(
      'https://api.worldweatheronline.com/premium/v1/marine.ashx?key=351d60752706416885b203048210103&q=29.21,-81.02&format=json&includelocation=yes&tide=yes'
    )
      .then((res) => res.json())
      .then((data) => {
        // Do something with response data.
        // setTide(data);
        console.log(data.data.weather[0].tides[0].tide_data);
        setFirstTide(data.data.weather[0].tides[0].tide_data[0].tide_type);
        setSecondTide(data.data.weather[0].tides[0].tide_data[1].tide_type);
        setThirdTide(data.data.weather[0].tides[0].tide_data[2].tide_type);
        setFourthTide(data.data.weather[0].tides[0].tide_data[3].tide_type);
        setFirstTime(data.data.weather[0].tides[0].tide_data[0].tideTime);
        setSecondTime(data.data.weather[0].tides[0].tide_data[1].tideTime);
        setThirdTime(data.data.weather[0].tides[0].tide_data[2].tideTime);
        setFourthTime(data.data.weather[0].tides[0].tide_data[3].tideTime);
      });
  }, []);

  return (
    <div className="tide">
      <h1 className="tide__title">Tide Forecast</h1>

      <h2 className="tide__tideHeight">First Tide : {firstTide}</h2>
      <h3 className="tide__tideTime">Time: {firstTime}</h3>
      <br />
      <h2 className="tide__tideHeight">Second Tide : {secondTide}</h2>
      <h3 className="tide__tideTime">Time: {secondTime}</h3>
      <br />
      <h2 className="tide__tideHeight">Third Tide : {thirdTide}</h2>
      <h3 className="tide__tideTime">Time: {thirdTime}</h3>
      <br />
      <h2 className="tide__tideHeight">Fourth Tide : {fourthTide}</h2>
      <h3 className="tide__tideTime">Time: {fourthTime}</h3>
      <br />
    </div>
  );
};

export default Tide;
