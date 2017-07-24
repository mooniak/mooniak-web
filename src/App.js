import React, { Component } from 'react';

import './App.css';
import './assets/styles/fonts.css';
import Landing from './pages/Landing';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Landing />
      </div>
    );
  }
}

export default App;
