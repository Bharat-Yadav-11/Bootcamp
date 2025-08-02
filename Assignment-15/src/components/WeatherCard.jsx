import React from 'react';

const WeatherCard = ({ data }) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg mt-10 w-full max-w-md mx-auto shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{data.name}, {data.sys.country}</h2>
      <div className="text-5xl font-semibold mb-2">{Math.round(data.main.temp)}°C</div>
      <div className="text-xl capitalize">{data.weather[0].description}</div>
      <div className="mt-4 text-sm text-gray-400">
        Humidity: {data.main.humidity}% | Wind: {data.wind.speed} m/s
      </div>
    </div>
  );
};

export default WeatherCard;
