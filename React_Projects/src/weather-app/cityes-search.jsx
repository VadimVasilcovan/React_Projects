import { useState } from "react"
import cityesCoordinates from "./cityes-coordinates.jsx"

const CitySearch = () => {
const [cityName, setCityname] =useState('')
const [selectCity, setSelectCity] =useState ([])



const writeCityName = (event) =>{
setCityname(event.target.value);

}


const selectCityFun =  () => {
    setSelectCity([...selectCity, cityName])
    setCityname("");
}


const findCity = cityesCoordinates.filter((city) => 
    !selectCity.length || selectCity.includes(city.cityName)
  );
    




    return (<div>
            <input
            type="text"
            onChange={writeCityName}
            />

            <button onClick={findCity}>Search</button>

            {findCity.map(city,index =( <p key={index}>{city.cityName}</p>))}

            

     
    </div>)
}

export default CitySearch