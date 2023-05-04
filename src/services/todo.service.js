import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

const todoService = {
    getAll: () => axiosService.get(urls.todos)
}

export {
    todoService
}