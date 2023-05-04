import React from 'react';
import {Link, Outlet, Route, useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, postId, name} = comment
    return (
        <div className={'info'}>
            <Link to={postId.toString()} state={{...comment}}>
                {id} - {name}
            </Link>
        </div>
    );
};

export default Comment;