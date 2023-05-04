import React from 'react';
import './post.styles.css'
const Post = ({post}) => {

    const {id, title, body} = post
    return (
        <div className={'post_info'}>
            <div>Id - {id}</div>
            <div>Title - {title}</div>
            <div>Body - {body}</div>
        </div>
    );
};

export default Post;