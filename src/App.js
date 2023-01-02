import React, {Component} from "react";
import "./App.css"




export default class App extends Component {

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50px",
    cursor: "pointer",
    float: "right"
  }

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: 'none'

    }
  }

  todoData =  [
    {
      id: "1",
      title: "Study",
      completed: true,
    },
    {
      id: "1",
      title: "Read a book",
      completed: true,
    }
  ]
    


  render() {
    return(
      <div className="container">
        <div className="todo-block">
          <div className="title">
            <h1>To-Do List</h1>
          </div>
          {this.todoData.map(data => (
            <div style={this.getStyle()} key={data.id}>
              <input type="checkbox" defaultChecked={false}/>
                {data.title}
              <button style={this.btnStyle}>x</button>
            </div>
          ))}

        </div>
      </div>
    )
  }
}