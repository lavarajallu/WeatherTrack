import axios from 'axios';

const API_KEY = '1635890035cbba097fd5c26c8ea672a1';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast';

export const getWeatherData = async (cityName) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: cityName.toLowerCase(),
        units: 'metric',
        appid: API_KEY,
      },
    });

    const data = response?.data;

    if (!data?.list || data?.list.length === 0) {
      throw new Error('No weather data available.');
    }

    return data?.list
      .filter((_, index) => index % 8 === 0) // Adjust as needed
      .map((item) => ({
        date: new Date(item.dt_txt).toLocaleDateString(),
        minTemp: item.main.temp_min,
        maxTemp: item.main.temp_max,
        pressure: item.main.pressure,
        humidity: item.main.humidity,
      }));
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
