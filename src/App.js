import React from 'react';
import './App.css';
import Search from './components/Search';
import Tide from './components/Tide';

function App() {
  return (
    <div className="App">
      <h1 className="app__title">Tide Forescast</h1>
      <Search />
      <Tide />
    </div>
  );
}

export default App;
