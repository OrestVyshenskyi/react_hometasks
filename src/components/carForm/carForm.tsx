import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces/car.interface";
import {carService} from "../../services/car.service";
import {IUseState} from "../../services/axios.service";
import {joiResolver} from '@hookform/resolvers/joi'
import {carValidator} from "../../validators/car.validator";
interface IProps{
    carUpdate:ICar|null,
    setChange:IUseState<boolean>
    setCarUpdate:IUseState<ICar|null>
}
const CarForm: FC<IProps> = ({setChange, carUpdate, setCarUpdate}) => {
    const {register, reset, handleSubmit, formState:{errors, isValid}, setValue} = useForm<ICar>({mode:'onChange', resolver:joiResolver(carValidator)})

    const save:SubmitHandler<ICar> = async (car) =>{
        await carService.create(car)
        setChange(prev => !prev)
        reset()
    }
    useEffect(() => {
        if (carUpdate){
            setValue('brand', carUpdate.brand, {shouldValidate:true})
            setValue('price', carUpdate.price,{shouldValidate:true})
            setValue('year', carUpdate.year,{shouldValidate:true})
        }
    },[carUpdate])
    const update:SubmitHandler<ICar> = async (car) =>{
        await carService.updateById(carUpdate!.id, car)
        setChange(prev => !prev)
        reset()
        setCarUpdate(null)
    }
    return (
        <form onSubmit={handleSubmit(carUpdate?update:save)}>
            <input type={"text"} placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type={"text"} placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type={"text"} placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carUpdate?'Update':'Create'}</button>
        </form>
    );
};

export default CarForm;