import { useState } from "react";
import cityesCoordinates from "./cityes-coordinates";

const CitySearch = ({ onCitySelect }) => {
  const [search, setSearch] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const writeCityName = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    const results = cityesCoordinates.filter((city) =>
      city.cityName.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCities(results);
  };

  return (
    <div>
      <input type="text" onChange={writeCityName} />
      <button onClick={handleSearch}>Search</button>

      {filteredCities.map((city, index) => (
        <p key={index} onClick={() => onCitySelect(city)}>
          {city.cityName}: {city.latitude}/{city.longitude}
        </p>
      ))}
    </div>
  );
};

export default CitySearch;
