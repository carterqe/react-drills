import React, { Component } from "react";
import "./App.css";

class Todo extends Component {
  render() {
    return (
      <p>{this.props.task}</p>
    );
  }
}

export default Todo;
