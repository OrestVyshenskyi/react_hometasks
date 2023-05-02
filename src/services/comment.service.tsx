import {axiosService, IRes} from "./axios.service";
import {urls} from "../configs/urls";
import {IComment} from "../interfaces/comment.interface";

const commentService = {
    getAll:():IRes<IComment[]> => axiosService.get(urls.comments),
    create:(comment: IComment):IRes<IComment> => axiosService.post(urls.comments, comment),
}

export {
    commentService
}
