import {carAxiosService, IRes} from "./axios.service";
import {ICar} from "../interfaces/car.interface";
import {urls} from "../configs/urls";

const carService = {
    getAll:():IRes<ICar[]> => carAxiosService.get(urls.cars),
    create:(car: ICar):IRes<ICar> => carAxiosService.post(urls.cars, car),
    updateById:(id: number, car: ICar):IRes<ICar> => carAxiosService.put(`${urls.cars}/${id}`, car),
    deleteById:(id: number):IRes<ICar> => carAxiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}