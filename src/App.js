import React, {Component} from "react";
import "./App.css"

export default class App extends Component {

  state = {
    todoData: [],
    value: ""
  };

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50px",
    cursor: "pointer",
    float: "right"
  };

  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed? "line-through" : "none",
    }
  }
    
  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    this.setState({todoData: newTodoData});
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  };

  handleSubmit = (e) => {
    // to prevent page reload when sending input inside form
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };

    // add new to-do data to existing list
    this.setState({ todoData: [...this.state.todoData, newTodo], value: ""});
  };

  handleChangeCompleted = (id) => {
    let newTodoData = this.state.todoData.map(data => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    })

    this.setState({ todoData: newTodoData });
  };

  render() {
    return(
      <div className="container">
        <div className="todo-block">
          <div className="title">
            <h1>To-Do List</h1>
          </div>
          {this.state.todoData.map(data => (
            <div style={this.getStyle(data.completed)} key={data.id}>
              <input type="checkbox" defaultChecked={false} onChange={() => this.handleChangeCompleted(data.id)}/>
                {data.title}
              <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
            </div>
          ))}

          <form style={{display: "flex"}} onSubmit={this.handleSubmit}>
            <input 
              type = "text" 
              name = "value" 
              style = {{ flex: '10', padding: '5px' }} 
              placeholder = "Please enter your next to-do" 
              value = {this.state.value}
              onChange = {this.handleChange}
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
    );
  };
};