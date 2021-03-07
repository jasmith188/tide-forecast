import React, { useEffect, useState } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
// import FiveDayForecast from './components/FiveDayForecast';
// import CitySelector from './CitySelector';
import TideFetch from './components/TideFetch';

function App() {
  return (
    <div className="app">
      <div className="app__right">
        <div className="app__header" />
        <h1 className="app__title">TideCast</h1>
        <CurrentWeather />
      </div>
      <div className="app__left">
        <div />
        <h3 className="app__tideHeader">Check out your Local Tide Info!</h3>
        <TideFetch />
        {/* <FiveDayForecast /> */}
      </div>
      {/* <CitySelector /> */}
    </div>
  );
}

export default App;
