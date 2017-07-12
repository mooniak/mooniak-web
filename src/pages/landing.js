import React, { Component } from 'react';
import Styled from 'styled-components';
import MediaQuery from 'react-responsive';

import Header from '../component/header';
import MobileHeader from '../component/mobile_header';
import Slider from '../component/slider';
import Services from '../component/services';
import Projects from '../component/projects';
import MainNavbar from '../component/navbar';
import onScroll from '../functions/onScroll';


const navigationCheck = (hash) => {
  const { location } = window;
  if (location.pathname !== '/') {
    window.location.href = `/#${hash}`;
  }
};

const MainContainer = Styled.div`
  background-color: #91d4d6;
  height: 200vh;
  padding: 3vw;
`;

class App extends Component {
  componentDidMount() {
    const mainContent = document.getElementById('mainContent');
    // const navWithBg = document.getElementById('mainnav');
    // const navLogoWithBg = document.getElementById('mainnav-logo');

    // Smooth scroll
    window.smoothScroll.init({
      offset: 60,
      speed: 1000
    });

    if (mainContent) {
      window.addEventListener('scroll', onScroll.bind(this, mainContent.offsetHeight));
    //   navWithBg.classList.remove('nav-with-bg');
    //   if (navLogoWithBg) { navLogoWithBg.classList.remove('nav-logo-with-bg'); }
    } else {
    //   navWithBg.classList.add('nav-with-bg');
    //   if (navLogoWithBg) { navLogoWithBg.classList.add('nav-logo-with-bg'); }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', onScroll);
  }

  render() {
    return (
      <div className="App">
        <MainNavbar navigationCheck={ navigationCheck } />
        <MainContainer id="mainContent">
          <MediaQuery minWidth={ 979 }>
            <Header navigationCheck={ navigationCheck } />
          </MediaQuery>
          <MediaQuery maxWidth={ 978 } >
            <MobileHeader navigationCheck={ navigationCheck } />
          </MediaQuery>
          <Slider />
          <Services />
          <Projects />
        </MainContainer>
      </div>
    );
  }
}

export default App;
