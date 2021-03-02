import React, { useState } from 'react';
import { usePosition } from './usePosition';
import { Row, Col, FormControl, Button } from 'react-bootstrap';

function CitySelector() {
  const [city, setCity] = useState();
  const [coords, setCoords] = useState();
  const { latitude, longitude, error } = usePosition();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  }
  function getPosition(position) {
    setCoords(position.coords.latitude, position.coords.longitude);
  }

  const onSearch = () => {
    fetch(
      `https://api.worldweatheronline.com/premium/v1/marine.ashx?key=351d60752706416885b203048210103&q=${coords}&format=json&includelocation=yes&tide=yes`
    )
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch();
    }
  };
  return (
    <>
      <Row>
        <Col>
          latitude: {latitude}
          <br />
          longitude: {longitude}
          <br />
          error: {error}
          <h1>Search your city</h1>
        </Col>
      </Row>

      <Row>
        {/* xs={4} takes the one third  of the page*/}
        <Col xs={4} className="text-center">
          <FormControl
            placeholder="Enter city"
            // update city value with the user's input
            onChange={(event) => setCoords(event.target.value)}
            // value will be the currently selected city
            value={city}
            onKeyDown={onKeyDown}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          {/* event handler for button click */}
          <Button onClick={onSearch}>Check Tide</Button>
        </Col>
      </Row>
    </>
  );
}

export default CitySelector;
