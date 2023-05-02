import React, {useEffect, useState} from 'react';
import {ICar} from "../../interfaces/car.interface";
import {carService} from "../../services/car.service";
import Car from "../car/car";
import CarForm from "../carForm/carForm";

const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([]);

    const [change, setChange] = useState<boolean>(false)

    const [carUpdate, setCarUpdate] = useState<ICar|null>(null)


    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    },[change]);

    return (
        <div>
            <CarForm setChange={setChange} carUpdate={carUpdate} setCarUpdate={setCarUpdate} />
            <br/>
            {cars.map(car => <Car key={car.id} car={car} setCarUpdate={setCarUpdate} setChange={setChange}/>)}
        </div>
    );
};

export default Cars;