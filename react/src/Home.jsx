import React, { useState, useEffect } from 'react'
import { Create } from './Create'
import axios from 'axios';

export const Home = () => {
    const [todos1, setTodos1] = useState([]);

    const [addednew, setAddednew] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:6500/getdata")
            .then(response => {
                // Ensure that the response contains an array
                if (Array.isArray(response.data)) {
                    setTodos1(response.data);  // Set the array of todos
                } else {
                    console.error("Expected an array but got:", response.data);
                    setTodos1([]);  // Fallback in case data is not an array
                }
            })
            .catch(err => console.log(err));
    }, [addednew]);

    const handleNewtodo = () => {
        setAddednew(addednew + 1)
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:6500/${id}`)
            .then(result => {
                console.log(result, "deleted succesfully")
                setAddednew(addednew + 1)
            })
            .catch(err => console.log(err))
    }

    const handleCheckbox = (e) => {
        const todoText = e.target.nextElementSibling;
        if (e.target.checked) {
            todoText.style.textDecoration = "line-through";
        }
        else
            todoText.style.textDecoration = "none";
    }

    return (
        <div className='home'>
            <h2>TO DO LIST</h2>
            <Create onNewTodo={handleNewtodo} />

            {

                todos1.map(todo => (
                    <div className='todo-div' key={todo._id}>
                        <><input type="checkbox" onChange={(e) => handleCheckbox(e)} className='checkbox-button' /></>

                        <span className='todo-text'>{todo.todo}</span>

                        <button className='delete-button' onClick={() => handleDelete(todo._id)}>Delete</button>
                    </div>
                ))

            }
        </div>
    )
}
