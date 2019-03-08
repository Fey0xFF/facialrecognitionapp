import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
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
