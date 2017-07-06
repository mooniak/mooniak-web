import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
`;

const WContainer = Styled.div`
  border-right-style:  solid;
  border-width: 1px;
  display: flex;
  flex: 0.4;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;

const EContainer = Styled.div`
  border-right-style:  solid;
  border-width: 1px;
  display: flex;
  flex: 0.4;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;

const DContainer = Styled.div`
  border-right-style:  solid;
  border-width: 1px;
  display: flex;
  flex: 0.4;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;

const OContainer = Styled.div`
  border-right-style:  solid;
  border-width: 1px;
  display: flex;
  flex: 0.4;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;

const backgroundDiv = Styled.div`
  align-items: center;
`;

const HugeTitle = Styled.span`
  font-size: 35rem;
  color: white;
  align-self: center;
`;

const Overlay = Styled.div`
  display: flex;
  flex:1;
  justify-content: center;
  z-index: 1;
  position: absolute;
  margin-top: 30px;
  height: 60%;
  width: 100%;
`;

const MenuButton = Styled.div`
  font-size: 1.4rem;
  cursor: pointer;
  align-self: center;
  font-weight: 800;
  border-style: solid;
  border-width: 2px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 200px;
`;

class Services extends React.Component {
  render() {
    return (
      <Container >
        <backgroundDiv>
          <HugeTitle>  WEDO</HugeTitle>
        </backgroundDiv>
        <Overlay>
          <WContainer />
          <EContainer />
          <DContainer />
          <OContainer />
        </Overlay>
        <MenuButton>Get in touch</MenuButton>
      </Container>
    );
  }
}


export default Services;
