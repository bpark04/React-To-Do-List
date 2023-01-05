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
    <div className="flex items-start justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-20 bg-white rounded shadow-xl lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-5 font-semibold text-2xl">
          <h1>To-Do List</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData}/>
        <Form handleSubmit = {handleSubmit} value={value} setValue={setValue}/>
      </div>
    </div>
  )
};