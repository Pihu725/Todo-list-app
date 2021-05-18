import React from 'react'
import { ToDoItem } from "./ToDoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        border: "5px solid grey",
        margin: "40px auto",
        backgroundColor: "cadetblue",
        
    }
   
    return (
        <div className="container my-3"  style={myStyle}>
            <h3 className="text-center my-3 ">Todos List</h3>
            {props.todos.length === 0 ? "No  Todos to Display" :
                props.todos.map((todo) => {
                    return (
                        <>
                        
                            
                            <ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /><hr />
                        </>

                    )
                })
            }

        </div>
    )
}
