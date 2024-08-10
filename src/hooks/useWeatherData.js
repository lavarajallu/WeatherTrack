import { useState, useEffect } from 'react';
import { getWeatherData } from '../services/weatherService';

const useWeatherData = (cityName, shouldFetch) => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (shouldFetch && cityName.length >= 3) {
      setLoading(true);
      setError(null); // Clear any previous error

      getWeatherData(cityName)
        .then((data) => setWeatherData(data))
        .catch(() =>
          setError('Failed to fetch weather data. Please try again.')
        )
        .finally(() => setLoading(false));
    }
  }, [cityName, shouldFetch]);

  return { weatherData, loading, error };
};

export default useWeatherData;
