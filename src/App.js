import React, {Component} from 'react';
import './App.css';
import BackgroundImage from "./components/BackgroundMain";
import MenuButton from "./components/MenuButton";

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
