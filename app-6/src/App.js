import React, { Component } from "react";
import "./App.css";
import Todo from "./Todo"

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      input: ""
    }
    this.handdleAddTask = this.handdleAddTask.bind(this)
  }

  handleInputChange(value) {
    this.setState({ input: value })
  }

  handdleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    })
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>
      <div>
        <input
          value={this.state.input}
          placeholder="Enter new task"
          onChange={e => this.handleInputChange
          (e.target.value)}
        />

        <button onClick={this.handdleAddTask}>Add</button>
      </div>
        <br />

        {list}
      </div>
    );
  }
}

export default App;
