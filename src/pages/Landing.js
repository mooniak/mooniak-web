import React, { Component } from 'react';
import Styled from 'styled-components';
import MediaQuery from 'react-responsive';

import Header from '../component/Header';
import MobileHeader from '../component/MobileHeader';
import Slider from '../component/Slider';
import Services from '../component/Services';
import Projects from '../component/Projects';
import MainNavbar from '../component/Navbar';
import Project from '../component/Project';
import onScroll from '../functions/OnScroll';

import Cover from '../assets/images/cover.png';
import Cover2 from '../assets/images/farmer_slider.png';

const navigationCheck = (hash) => {
  const { location } = window;
  if (location.pathname !== '/') {
    window.location.href = `/#${hash}`;
  }
};

const MainContainer = Styled.div`
  background-color: ${props => props.backgroundColor};
  padding: 0;
  height: auto;
`;


const sliderPhotos = [
  {
    src: Cover2,
    bgColor: '#ffaf15',
    altColor: '#e14d54'
  },

  {
    src: Cover,
    bgColor: '#86d3d3',
    altColor: '#cfe1ef'
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      isProjectSelected: false,
      selectedProjectId: 0,
      backgroundColor: sliderPhotos[0].bgColor,
      circleColor: sliderPhotos[0].altColor
    };

    this.selectProject = this.selectProject.bind(this);
    this.changeBackgroundColors = this.changeBackgroundColors.bind(this);
  }

  componentDidMount() {
    const mainContent = document.getElementById('mainContent');

    // Smooth scroll
    window.smoothScroll.init({
      offset: 60,
      speed: 1000
    });

    if (mainContent) {
      window.addEventListener('scroll', onScroll.bind(this, mainContent.offsetHeight));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', onScroll);
  }

  selectProject() {
    this.setState({
      isProjectSelected: !this.state.isProjectSelected
    });
  }

  changeBackgroundColors(bg, alt) {
    this.setState({
      backgroundColor: bg,
      circleColor: alt
    });
  }

  render() {
    const { circleColor, backgroundColor, isProjectSelected, selectedProjectId } = this.state;
    return (
      <div className="App">
        <MainNavbar navigationCheck={navigationCheck} />
        <MainContainer
          id="mainContent"
          backgroundColor={backgroundColor}
        >
          <MediaQuery minWidth={979}>
            <Header
              navigationCheck={navigationCheck}
              circleColor={circleColor}
            />
          </MediaQuery>
          <MediaQuery maxWidth={978} >
            <MobileHeader navigationCheck={navigationCheck} />
          </MediaQuery>
          <Slider
            changeBackgroundColors={this.changeBackgroundColors}
            sliderPhotos={sliderPhotos}
          />
          <Services />
          {(isProjectSelected) ?
            <Project
              onClickAction={this.selectProject}
              selectedProjectId={selectedProjectId}
            />
            :
            <Projects
              onClickAction={this.selectProject}
            />
          }
        </MainContainer>
      </div>
    );
  }
}

export default App;
