import React, {useEffect, useState} from 'react';
import User from "../user/user";

const Users = ({setUserId}) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(allUsers => {
                setUsers(allUsers)
            })

    },[])

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} setUserId={setUserId}/>)
            }
        </div>
    );
};

export default Users;