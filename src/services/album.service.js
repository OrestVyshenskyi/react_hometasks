import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

const albumService = {
    getAll:() => axiosService.get(urls.albums)
}

export {
    albumService
}