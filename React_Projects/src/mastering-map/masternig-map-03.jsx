import data from "./data"; 

const MasteringMap03 = () => {
    const cars = data(); 

    const showData = cars.map((car) => (
        <div key={car.id}>
            <p>{car.brand}</p>
            <p>{car.model}</p>
        </div>
    ));

    return <div>{showData}</div>;
};

export default MasteringMap03;
