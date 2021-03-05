import React, { useEffect, useState } from 'react';

function UsePosition() {
  const [error, setError] = useState(null);
  const [position, setPosition] = useState();

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported.');
      return;
    }

    const handleSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      setPosition({
        latitude,
        longitude,
      });
    };

    const handleError = (error) => {
      setError(error.message);
    };

    geo.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { position, error };
}

export default UsePosition;
