import React, { useEffect, useState } from 'react';
import './App.css';
// import CitySelector from './CitySelector';
import TideFetch from './components/TideFetch';

function App() {
  return (
    <div className="app">
      {/* <CitySelector /> */}
      <TideFetch />
    </div>
  );
}

export default App;
