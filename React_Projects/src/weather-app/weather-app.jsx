import { useEffect, useState } from "react";
import CitySearch from "./cityes-search";

const WeatherApp = () => {
  const [data, setData] = useState([]);

  async function FetchWeatherData() {
    try {
      const getData = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${cityes.latitude}&longitude=${cityes.longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
      );
      const result = await getData.json();
      if (result && result.length) {
        setData((d) => [...d, ...result]);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    FetchWeatherData();
  }, []);

  return <div>
    <CitySearch/>
  </div>;
};

export default WeatherApp;
