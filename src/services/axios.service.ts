import axios, {AxiosResponse} from "axios";

import {baseURL, carBaseUrl} from "../configs/urls";
import {Dispatch, SetStateAction} from "react";

type IRes<T> = Promise<AxiosResponse<T>>
type IUseState<T> = Dispatch<SetStateAction<T>>
const axiosService = axios.create({baseURL:baseURL})

const carAxiosService = axios.create({baseURL:carBaseUrl})

export {
    carAxiosService,
    axiosService
}

export type {
    IRes,
    IUseState
}