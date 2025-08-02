import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

const API_KEY = 'af4b4a3646f1c040c43b78842b30cca8';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) setWeatherData(data);
      else alert(data.message);
    } catch (error) {
      alert("Failed to fetch weather data.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-center">🌤️ Modern Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;
