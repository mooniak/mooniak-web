import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const WContainer = Styled.div`
  height: 30vw;
  border-right-style:  solid;
  border-width: 1px;
  display: flex;
  flex: 0.4;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  &:hover{
   .more-link-container{
     opacity: 1;
   }
   .more-link{
     transform: translateY(0) scale(1);
   }
 }
`;

const EContainer = Styled.div`
  height: 30vw;
  border-right-style:  solid;
  border-width: 1px;
  display: flex;
  flex: 0.4;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  &:hover{
   .more-link-container{
     opacity: 1;
   }
   .more-link{
     transform: translateY(0) scale(1);
   }
 `;

const DContainer = Styled.div`
  height: 30vw;
  border-right-style:  solid;
  border-width: 1px;
  display: flex;
  flex: 0.4;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  &:hover{
   .more-link-container{
     opacity: 1;
   }
   .more-link{
     transform: translateY(0) scale(1);
   }
`;

const OContainer = Styled.div`
  height: 30vw;
  display: flex;
  flex: 0.4;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  &:hover{
   .more-link-container{
     opacity: 1;
   }
   .more-link{
     transform: translateY(0) scale(1);
   }
 `;

const OverlayTextContainer = Styled.a`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  opacity: 0;
  flex-direction: column;
  -webkit-transition: all 0.9s;
  transition: all 0.9s;
  cursor: pointer;
`;

const OverlayText = Styled.span`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  flex: 1;
  flex-direction: row;
  width: 90%;
  align-items: ${props => (props.alignTop ? 'flex-start' : 'flex-end')};
  color: #000;
  font-weight: 600;
  font-size: 15px;
  justify-content: ${props => (props.alignRight ? 'flex-start' : 'flex-end')};
  transform: scale(0);
  -webkit-transition: all 0.6s;
  transition: all 0.6s;
`;

const BackgroundDiv = Styled.div`
  align-items: center;
`;

const HugeTitle = Styled.span`
  font-size: 32vw;
  color: white;
  text-align: center;
`;

const Overlay = Styled.div`
  margin-top: 5vw;
  display: flex;
  justify-content: center;
  z-index: 1;
  position: absolute;
  height: 80%;
  width: 100%;
`;

const MenuButton = Styled.div`
  font-size: 14px;
  cursor: pointer;
  align-self: center;
  font-weight: 600;
  border-style: solid;
  border-width: 2px;
  text-align: center;
  padding: 10px;
`;

class Services extends React.Component {
  render() {
    return (
      <Container id="services" >
        <BackgroundDiv>
          <HugeTitle>WEDO</HugeTitle>
        </BackgroundDiv>
        <Overlay>
          <WContainer >
            <OverlayTextContainer className="more-link-container">
              <OverlayText alignTop className="more-link">KNOW MORE</OverlayText>
              <OverlayText className="more-link">SEE WORKS</OverlayText>
            </OverlayTextContainer>
          </WContainer>
          <EContainer >
            <OverlayTextContainer className="more-link-container">
              <OverlayText alignRight alignTop className="more-link">KNOW MORE</OverlayText>
              <OverlayText alignRight className="more-link">SEE WORKS</OverlayText>
            </OverlayTextContainer>
          </EContainer>
          <DContainer >
            <OverlayTextContainer className="more-link-container">
              <OverlayText alignTop className="more-link">KNOW MORE</OverlayText>
              <OverlayText className="more-link">SEE WORKS</OverlayText>
            </OverlayTextContainer>
          </DContainer>
          <OContainer >
            <OverlayTextContainer className="more-link-container">
              <OverlayText alignRight alignTop className="more-link">KNOW MORE</OverlayText>
              <OverlayText alignRight className="more-link">SEE WORKS</OverlayText>
            </OverlayTextContainer>
          </OContainer>
        </Overlay>
        <MenuButton>GET IN TOUCH</MenuButton>
      </Container>
    );
  }
}


export default Services;
