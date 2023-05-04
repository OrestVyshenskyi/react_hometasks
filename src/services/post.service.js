import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

const postService = {
    getAll:() => axiosService.get(urls.posts)
}

export {
    postService
}