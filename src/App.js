import React, { Component } from 'react';
import Styled from 'styled-components';

import './App.css';
import Header from './component/header';
import Slider from './component/slider';
import Services from './component/services';
import Projects from './component/projects';
import MainNavbar from './component/navbar';

const navigationCheck = (hash) => {
  const { location } = window;
  if (location.pathname !== '/') {
    window.location.href = `/#${hash}`;
  }
};
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
        <MainNavbar navigationCheck={ navigationCheck } />
        <MainContainer>
          <Header navigationCheck={ navigationCheck } />
          <Slider />
          <Services />
          <Projects />
        </MainContainer>
      </div>
    );
  }
}

export default App;
