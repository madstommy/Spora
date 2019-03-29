import React, { Component } from 'react';
import './App.css';
import './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import Lander from './components/Lander/Lander';
import Socials from './components/Socials/Socials';
import About from './components/About/About';

class App extends Component {
  constructor(){
    super();
    this.state = {
      showAboutMessage: false
      
    }
  }

  setAboutMessage = () => {
    const newState = !(this.state.showAboutMessage);
    this.setState({showAboutMessage:newState});
  }

  render() {
    return (
      <div className="App">
        <Navbar setAboutMessage={this.setAboutMessage} />
        <About showAboutMessage={this.state.showAboutMessage} />
        <Lander />
        <Socials />
      </div>
    );
  }
}

export default App;
