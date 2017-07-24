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


const navigationCheck = (hash) => {
  const { location } = window;
  if (location.pathname !== '/') {
    window.location.href = `/#${hash}`;
  }
};

const MainContainer = Styled.div`
  background-color: #ffaf15;
  padding: 0;
  height: auto;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      isProjectSelected: true,
      selectedProjectId: 0
    };

    this.selectProject = this.selectProject.bind(this);
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

  render() {
    const { isProjectSelected, selectedProjectId } = this.state;
    return (
      <div className="App">
        <MainNavbar navigationCheck={navigationCheck} />
        <MainContainer id="mainContent">
          <MediaQuery minWidth={979}>
            <Header navigationCheck={navigationCheck} />
          </MediaQuery>
          <MediaQuery maxWidth={978} >
            <MobileHeader navigationCheck={navigationCheck} />
          </MediaQuery>
          <Slider />
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
