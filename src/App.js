import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {
        	/*<Logo />

        <FaceRecognition />*/
    }
      </div>
    );
  }
}

export default App;
