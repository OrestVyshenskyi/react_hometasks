import React, {useEffect, useState} from 'react';
import {todoService} from "../../services/todo.service";
import Todo from "../todo/todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todoService.getAll().then(value => value.data).then(value => setTodos(value))
    },[])
    return (
        <div>
            <h1 style={{textAlign:'center', margin:'70px', fontSize:'50px'}}>Todos</h1>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default Todos;