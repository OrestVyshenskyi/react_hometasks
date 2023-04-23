import React, {useEffect, useState} from 'react';

const UserPosts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/user/'+ `${userId}` + '/posts')
            .then(value => value.json())
            .then(allPosts => {
                setPosts(allPosts)
            })

    },[userId])
    return (
        <div>
            {
                posts.map(post =>
                <div className={'posts'}>
                        <div>Id - {post.id}</div>
                        <div>UserID - {post.userId}</div>
                        <div>Title - {post.title}</div>
                        <div>Body - {post.body}</div>
                    </div>
                )
            }
        </div>
    );
};

export default UserPosts;