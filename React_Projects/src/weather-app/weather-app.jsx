import { useEffect, useState } from "react"



const WeatherApp = () => {
const [data, setData]=useState([])


async function FetchWeatherData () {
try {
    const getData = await fetch ( `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`)
    const result = await getData.json();
    if (result && result.length){
        setData((d) => [...d, ...result])
    }
}catch(e){
console.log(e)
}

};

useEffect(() => {
    FetchWeatherData();
}, [])

    return(<div>

    </div>)
}

export default WeatherApp