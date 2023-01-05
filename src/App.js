import React, {useState} from "react";
import "./App.css";
import List from "./Components/List.js";
import Form from "./Components/Form.js";

export default function App()  {


  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");
  

  const handleSubmit = (e) => {
    // to prevent page reload when sending input inside form
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    }

    // add new to-do data to existing list
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  return (
    <div className="container">
      <div className="todo-block">
        <div className="title">
          <h1>To-Do List</h1>
        </div>


        <List todoData={todoData} setTodoData={setTodoData}/>
        <Form handleSubmit = {handleSubmit} value={value} setValue={setValue}/>
        
      </div>
    </div>
  )
};