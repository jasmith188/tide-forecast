import React from 'react';

const Search = () => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search State, City or Zip-Code"
        className="search__input"
      />
      <button className="search__button">Search</button>
    </div>
  );
};

export default Search;
