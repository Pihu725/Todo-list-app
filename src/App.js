
import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodos } from "./MyComponents/AddTodos";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route,}from "react-router-dom";

 
function App() {
  
 
    let initTodo;
    if (localStorage.getItem("todos") === null) {
      initTodo = [];
    }
    else {
      initTodo = JSON.parse(localStorage.getItem("todos"));

    }

    const onDelete = (todo) => {
      console.log("I am OnDelete of Todo", todo);

      setTodos(todos.filter((e) => {
        return e !== todo;
      }));
      console.log("deleted", todos)
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    const addTodo = (title, desc, Date) => {
      console.log("I am adding this todo", title, desc, Date)
      let sno;
      if (todos.length ===0) {
        sno = 0;
      }
      else {
        sno = todos[todos.length - 1].sno + 1;
      }
      const myTodo = {
        sno: sno,
        title: title,
        desc: desc,
        Date: Date
      }
      setTodos([...todos, myTodo]);
      console.log(myTodo);
    }
    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
      <>
        <Router>
          <Header title="My ToDosList "searchBar={true} />
          <Switch>
            <Route exact path="/" render={() => {
              return (
          <>
          <AddTodos addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      </>)
        
      }}>
            
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          
          
        </Switch>



        <Footer />
      </Router>
    </>
  );
  }

export default App;
