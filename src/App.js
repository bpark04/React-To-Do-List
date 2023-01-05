import React, {useState} from "react";
import "./App.css";
import List from "./Components/List.js";

export default function App()  {


  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");
    

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // to prevent page reload when sending input inside form
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

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

        <form style={{display: "flex"}} onSubmit={handleSubmit}>
          <input 
            type = "text" 
            name = "value" 
            style = {{ flex: '10', padding: '5px' }} 
            placeholder = "Please enter your next to-do" 
            value = {value}
            onChange = {handleChange}
          />
          <input 
            type = "submit"
            value = "Enter"
            className = "btn"
            style = {{flex: '1'}}
          />
        </form>
      </div>
    </div>
  )
};