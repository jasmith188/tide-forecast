import React, { useEffect } from 'react';

const Tide = () => {
  useEffect(() => {
    fetch(
      'https://api.stormglass.io/v2/tide/extremes/point?lat=58.7984&lng=17.8081&start=2021-02-10&end=2021-02-17',
      {
        headers: {
          Authorization:
            '39fb5468-6a6b-11eb-958b-0242ac130002-39fb551c-6a6b-11eb-958b-0242ac130002',
        },
      }
    )
      .then((response) => response.json()).then((jsonData) => {
        // Do something with response data.
        console.log(jsonData);
      });
  });

  return (
    <div className="tide">
      <h1 className="tide__icon">Tide Icon</h1>
      <h3 className="tide__description">Description of the Tide</h3>
      <h1>some data results</h1>
    </div>
  );
};

export default Tide;
