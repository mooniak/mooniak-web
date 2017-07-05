import React, { Component } from 'react';
import Styled from 'styled-components';

import './App.css';
import Header from './Component/header';
import Slider from './Component/slider';


const MainContainer = Styled.div`
  background-color: cyan;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer>
          <Header />
          <Slider />
        </MainContainer>
      </div>
    );
  }
}

export default App;
