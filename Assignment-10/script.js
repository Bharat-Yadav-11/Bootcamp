const API_KEY = "af4b4a3646f1c040c43b78842b30cca8"; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherInfo = document.getElementById("weatherInfo");

  if (city === "") {
    weatherInfo.innerHTML = `<p>Please enter a city name.</p>`;
    return;
  }

  try {
    weatherInfo.innerHTML = `<p>Loading...</p>`;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      weatherInfo.innerHTML = `<p>City not found. Please try again.</p>`;
      return;
    }

    const data = await response.json();
    const { name, main, weather, sys } = data;
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    weatherInfo.innerHTML = `
      <h2>${name}, ${sys.country}</h2>
      <img src="${icon}" alt="${weather[0].description}" />
      <p><strong>${weather[0].main}</strong> - ${weather[0].description}</p>
      <p>🌡️ Temp: ${main.temp}°C</p>
      <p>💧 Humidity: ${main.humidity}%</p>
      <p>🔻 Min: ${main.temp_min}°C | 🔺 Max: ${main.temp_max}°C</p>
    `;
  } catch (error) {
    weatherInfo.innerHTML = `<p>Error fetching data. Try again later.</p>`;
    console.error("Fetch error:", error);
  }
}
