import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/*
        <Content /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
