import React, { useState } from 'react';
import SearchBar from './components/common/SearchBar';
import WeatherGrid from './components/weather/WeatherGrid';
import Loader from './components/common/Loader';
import useWeatherData from './hooks/useWeatherData';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { weatherTextInfo } from './utils/constants';

const App = () => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false); // Track if search has been submitted
  const {
    weatherData,
    loading,
    error: hookError,
  } = useWeatherData(city, hasSearched); // Pass shouldFetch

  const handleSearch = () => {
    if (city.trim().length < 3) {
      setError(weatherTextInfo.validationText);
      return;
    }

    setError('');
    setHasSearched(true); // Trigger data fetch
  };

  const handleClear = () => {
    setCity('');
    setError('');
    setHasSearched(false); // Reset search status
  };

  return (
    <div className='container mt-5'>
      <h1 className='text-center mb-4 header-text'>
        {weatherTextInfo.weather_Info_Text_Header}{' '}
        <span>{hasSearched && city}</span>
      </h1>
      <SearchBar
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onSubmit={handleSearch}
        onClear={handleClear}
      />
      {error && <div className='alert alert-danger'>{error}</div>}
      {hookError && <div className='alert alert-danger'>{hookError}</div>}
      {loading && <Loader />}
      {!loading && hasSearched && !weatherData && !error && (
        <div className='alert alert-warning'>
          {weatherTextInfo.no_data_Available}
        </div>
      )}
      {!loading && hasSearched && weatherData && (
        <WeatherGrid weatherData={weatherData} />
      )}
    </div>
  );
};

export default App;
