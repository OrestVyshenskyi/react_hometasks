import React from 'react';

const User = ({user, setUserId}) => {
    return (
        <div className={'user'}>
            <div>Id - {user.id}</div>
            <div>Name - {user.name}</div>
            <div>UserName - {user.username}</div>
            <div>Email - {user.email}</div>
            <button onClick={() => setUserId(user.id)}>User posts</button>
        </div>
    );
};

export default User;