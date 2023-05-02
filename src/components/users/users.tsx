import React, {useEffect, useState} from 'react';
import {IUser} from "../../interfaces/user.interface";
import {userService} from "../../services/user.service";
import User from "../user/user";
import UserForm from "../userForm/userForm";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() =>{
        userService.getAll().then(value => value.data).then(value => setUsers(value))
    }, [])
    return (
        <div>
            <UserForm setUsers={setUsers}/>
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    );
};

export default Users;