import React, { Component } from 'react';
import Styled from 'styled-components';

import './App.css';
import Header from './component/header';
import Slider from './component/slider';
import Services from './component/services';
import Projects from './component/projects';


const MainContainer = Styled.div`
  margin-top: 50px;
  background-color: #91d4d6;
  height: 200vh;
  padding: 30px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer>
          <Header />
          <Slider />
          <Services />
          <Projects />
        </MainContainer>
      </div>
    );
  }
}

export default App;
