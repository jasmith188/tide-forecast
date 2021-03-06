import React, { useEffect, useState } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
// import FiveDayForecast from './components/FiveDayForecast';
// import CitySelector from './CitySelector';
import TideFetch from './components/TideFetch';

function App() {
  return (
    <div className="app">
      <div className="app__left">
        <TideFetch />
      </div>
      <div className="app__right">
        <div className="app__header">
          <h1 className="tide__title">TideCast</h1>
          <h3>Here You Can Find Tide Types, Date and Time </h3>
          <h3>In Your Local Area</h3>
          <CurrentWeather />
          {/* <FiveDayForecast /> */}
        </div>
      </div>
      {/* <CitySelector /> */}
    </div>
  );
}

export default App;
