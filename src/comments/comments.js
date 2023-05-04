import React, {useEffect, useState} from 'react';
import {commentService} from "../services/comment.service";
import Comment from "../comment/comment";
import {Outlet} from "react-router-dom";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(value => value.data).then(value => setComments(value))
    })
    return (
        <div>
            <h1 style={{textAlign:'center', margin:'70px', fontSize:'50px'}}>Comments</h1>
            <Outlet/>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;