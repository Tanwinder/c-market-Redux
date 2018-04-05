import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Crypto from '../src/components/crypto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Crypto />
      </div>
    );
  }
}

export default App;
