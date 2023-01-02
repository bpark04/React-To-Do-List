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

  render() {
    return(
      <div className="container">
        <div className="todo-block">
          <div className="title">
            <h1>To-Do List</h1>
          </div>

          <div style={this.getStyle()}>
            <input type="checkbox" defaultChecked={false}/>
            Study
            <button style={this.btnStyle}>x</button>
          </div>

        </div>
        
      </div>
    )
  }
}