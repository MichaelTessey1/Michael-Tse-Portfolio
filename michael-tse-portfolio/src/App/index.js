import React, { Component } from "react";
import "./style.css";
import Nav from '../Components/Nav'
import About from '../Components/About'
import Project from '../Components/Project'
import Contact from '../Components/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <About />
        <Project />
        <Contact />
      </div>
    )
  }
}

export default App;
