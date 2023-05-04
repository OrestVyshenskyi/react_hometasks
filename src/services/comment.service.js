import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

const commentService = {
    getAll:() => axiosService.get(urls.comments)
}

export {
    commentService
}