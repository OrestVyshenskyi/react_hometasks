import React, {useEffect, useState} from 'react';
import Post from "../post/post";
import PostDetails from "../postDetails/postDetails";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(allPosts => {
                setPosts(allPosts)
            })

        },[])
    return (
        <div className={'container'}>
            <div className={'block'}>{
                posts.map(post => <Post key={post.id} post={post} setPost={setPost}/>)
            }</div>
            <div className={'block'}>{post &&
                <PostDetails key={post.id} post={post}/>
            }</div>
        </div>
    );
};

export default Posts;