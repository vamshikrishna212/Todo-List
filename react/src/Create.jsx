import React, { useState } from 'react'
import axios from 'axios';

export const Create = ({ onNewTodo }) => {

    const [newtodo, setNewtodo] = useState("");



    const handleAdd = () => {
        axios.post("http://localhost:6500/add", { todo: newtodo })
            .then(result => {
                console.log(result)
                onNewTodo();

            })
            .catch(err => {
                console.log(err)
            });
    }
    return (
        <div className='create'>
            <input type="text" className='newtodo' onChange={(e) => setNewtodo(e.target.value)} />
            <button className='add-btn' onClick={handleAdd}>Add</button>
        </div>
    )
}
