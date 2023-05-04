import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import Post from "../post/post";
import {useLocation} from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => value.data).then(value => setPosts(value))
    },[])

    const {state} = useLocation()

    const filter = posts.filter(post => post.id === state.postId)


    return (
        <div>
            {filter.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;