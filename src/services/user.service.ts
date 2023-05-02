import {axiosService, IRes} from "./axios.service";
import {IUser} from "../interfaces/user.interface";
import {urls} from "../configs/urls";

const userService = {
    getAll:():IRes<IUser[]> => axiosService.get(urls.users),
    create:(user: IUser):IRes<IUser> => axiosService.post(urls.users, user),
}

export {
    userService
}
