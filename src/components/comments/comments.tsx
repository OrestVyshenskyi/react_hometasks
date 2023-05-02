import React, {useEffect, useState} from 'react';
import {IComment} from "../../interfaces/comment.interface";
import {commentService} from "../../services/comment.service";
import Comment from "../comment/comment";
import ComentForm from "../commentForm/comentForm";

const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        commentService.getAll().then(value => value.data).then(value => setComments(value))
        },[])

    return (
        <div>
            <ComentForm setComments={setComments}/>
            {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default Comments;