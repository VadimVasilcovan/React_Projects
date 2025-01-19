import { useEffect, useState } from "react";
import CitySearch from "./cityes-search";

const WeatherApp = () => {
  const [data, setData] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  async function FetchWeatherData() {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    FetchWeatherData();
  }, [latitude, longitude]);

  const handleCitySelect = (city) => {
    setLatitude(city.latitude);
    setLongitude(city.longitude);
  };

  return (
    <div>
      <CitySearch onCitySelect={handleCitySelect} />
      {data && data.current_weather && (
        <div>
          <p>Temperature: {data.current_weather.temperature}°C</p>
          <p>Wind Speed: {data.current_weather.windspeed} km/h</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
