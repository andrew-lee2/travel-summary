import React, { Component } from 'react';
import './App.css';
import MenuButton from './components/MenuButton';
import BackgroundImage from './components/BackgroundMain';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BackgroundImage/>
        <MenuButton/>
      </div>
    );
  }
}

export default App;
