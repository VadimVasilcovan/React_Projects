import { useState } from "react"

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




    return (<div>
            <input
            type="text"
            onChange={writeCityName}
            />

            <button onClick={selectCityFun}>Search</button>

            {selectCity.map((city, index) => (
        <p key={index}>{city}</p>
      ))}
    </div>)
}

export default CitySearch