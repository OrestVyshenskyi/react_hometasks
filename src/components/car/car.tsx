import React, {FC} from 'react';
import {ICar} from "../../interfaces/car.interface";
import {IUseState} from "../../services/axios.service";
import {carService} from "../../services/car.service";

interface IProps{
    setChange:IUseState<boolean>
    setCarUpdate:IUseState<ICar|null>
    car: ICar
}

const Car: FC<IProps> = ({car, setCarUpdate, setChange}) => {
    const {id, brand,price, year,} = car

    const carDelete = async () =>{
        await carService.deleteById(id)
        setChange(prev => !prev)
    }


    return (
        <div>
            <div>Id - {id}</div>
            <div>Brand - {brand}</div>
            <div>Price - {price}</div>
            <div>Year - {year}</div>
            <button onClick={() => setCarUpdate(car)}>Update</button>
            <button onClick={() => carDelete()}>Delete</button>
        </div>
    );
};

export default Car;