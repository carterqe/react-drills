import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://nickpassey.com/wp-content/uploads/2016/10/Featured.jpg}"}/>
      </div>
    );
  }
}

export default App;
