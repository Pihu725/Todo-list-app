import React from 'react'

export const ToDoItem = ({todo, onDelete}) => {
    console.log(todo.Date)
    console.log(todo.title)
    
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <h6>{todo.Date}</h6>        
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        
        </div>
    )
}
