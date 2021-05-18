
import React, { useState } from 'react'

export const AddTodos = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const currDate= new Date().toLocaleDateString();
    const[date, setDate]=useState(currDate);
    

    const submit = (e) => {
        const currDate= new Date().toLocaleDateString();
        console.log(currDate)
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            setDate(currDate)
            // console.log(date)
            addTodo(title, desc, date);
            setTitle("");
            setDesc("");
            
        }
    }
    return (
        <div className="container my-3 navbar-dark bg-secondary ">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3" >
                    <label htmlFor="title" className="form-label" >Todo Title</label>
                    <input type="text" placeholder="Write Your Title Here !" value={title} onChange={(e) => { setTitle(e.target.value) }}
                        className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label" >Todo Description</label>
                    <input type="text" placeholder="Write Your Description Here !" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>

                <div className="mb-3">
                <label htmlFor="date" className="form-label" >Todo date</label>
                 {  <input  value={date} onChange={(e) => { setDate(e.target.value) }} className="form-control" id="date" />   }

                </div>

               <button type="submit" className="btn btn-sm btn-success" >Add Todo</button>
                
            </form>
        </div>
    )
}
