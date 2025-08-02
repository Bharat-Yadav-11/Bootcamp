import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim() !== '') onSearch(city);
  };

  return (
    <div className="flex justify-center gap-4 mt-8">
      <input
        type="text"
        placeholder="Enter city name"
        className="px-4 py-2 rounded bg-gray-800 text-white w-64"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
