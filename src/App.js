import React, { Component } from 'react';
import './App.css';
import ColorWidget from './widgets/ColorWidget';
import Brightness from './widgets/Brightness';
import Temperature from './widgets/Temperature';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Temperature/>
        </div>
        <div>
          <ColorWidget/>
        </div>
        <div>
          <Brightness/>
        </div>
      </div>
    );
  }
}

export default App;
