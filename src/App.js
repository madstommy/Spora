import React, { Component } from 'react';
import './App.css';
import './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import Lander from './components/Lander/Lander';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Lander />
        {/*
          main content with background video and text
          social icons */}
      </div>
    );
  }
}

export default App;
