import data from "./data.jsx";


const MasteringMapMethod = () => {

const cars = data();
    
    return(<>
    {cars.map((car) => <div key={car.id}><p>{car.brand}</p></div>) }
    </>)
}

export default MasteringMapMethod;