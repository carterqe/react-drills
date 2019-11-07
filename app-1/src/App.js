import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super ()
      this.state = {
        text: 'start'
      }
  }
  
  
  
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  
  
  
  render() {
    return (
      <div className="App">
        <input onChange={(event) => this.handleChange(event)}></input>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default App;
