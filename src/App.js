import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import './App.css';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        {
        	/*<Logo />
        <ImageLinkForm />
        <FaceRecognition />*/
    }
      </div>
    );
  }
}

export default App;
