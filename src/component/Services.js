import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MediaQuery from 'react-responsive';

import WEImage from '../assets/images/backgrounds/we_image.svg';
import DOImage from '../assets/images/backgrounds/do_image.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  padding-bottom: 10vh;
`;

const WatermarkPart1 = styled(ReactSVG)`
  width: 100%;
  display: flex;
  height: 100%;
  padding: 0;
`;

const WatermarkPart2 = styled(ReactSVG)`
  width: 100%;
  display: flex;
  height: 100%;
  padding: 0;
`;

const WContainer = styled.div`
  height: 60vh;
  max-height: 400px;
  @media (max-width: 979px) {
   height: 35vh;
 }
  border-right-style:  solid;
  border-width: 1px;
  display: flex;
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

const EContainer = styled.div`
  height: 60vh;
  max-height: 400px;
  border-right-style:  solid;
  margin-top: 10px;
     @media (max-width: 979px) {
      height: 35vh;
      border-width: 0px;
    }
  border-width: 1px;
  display: flex;
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

const DContainer = styled.div`
  height: 60vh;
  max-height: 400px;
  @media (max-width: 979px) {
   height: 35vh;
 }
  border-right-style:  solid;
  border-width: 1px;
  display: flex;
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

const OContainer = styled.div`
  height: 60vh;
  max-height: 400px;
  @media (max-width: 979px) {
   height: 35vh;
 }
  display: flex;
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

const OverlayTextContainer = styled.a`
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

const OverlayText = styled.span`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  flex: 1;
  flex-direction: row;
  width: 90%;
  align-items: ${props => (props.alignTop ? 'flex-start' : 'flex-end')};
  color: #000;
  font-weight: 600;
  font-size: 13px;
  justify-content: ${props => (props.alignRight ? 'flex-start' : 'flex-end')};
  transform: scale(0);
  -webkit-transition: all 0.6s;
  transition: all 0.6s;
`;

const Overlay = styled.div`
  justify-content: center;
  z-index: 1;
  position: absolute;
  height: 100%;
  width: 100%;
`;

const MenuButton = styled.div`
  font-size: 14px;
  cursor: pointer;
  align-self: center;
  font-weight: 600;
  margin-top: 30px;
  border-style: solid;
  border-width: 2px;
  text-align: center;
  padding: 10px;
`;

class Services extends React.Component {
  render() {
    return (
      <Container id="services" >
        <Grid fluid>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} >
              <WatermarkPart1
                path={WEImage}
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} >
              <WatermarkPart2
                style={{ margin: 0, padding: 0 }}
                path={DOImage}
              />
            </Col>
          </Row>
        </Grid>
        <Overlay>
          <Grid fluid>
            <Row>
              <Col xs={6} sm={6} md={3} lg={3}>
                <WContainer >
                  <OverlayTextContainer className="more-link-container">
                    <OverlayText alignTop className="more-link">KNOW MORE</OverlayText>
                    <OverlayText className="more-link">SEE WORKS</OverlayText>
                  </OverlayTextContainer>
                </WContainer>
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>
                <EContainer >
                  <OverlayTextContainer className="more-link-container">
                    <OverlayText alignRight alignTop className="more-link">KNOW MORE</OverlayText>
                    <OverlayText alignRight className="more-link">SEE WORKS</OverlayText>
                  </OverlayTextContainer>
                </EContainer>
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>
                <DContainer >
                  <OverlayTextContainer className="more-link-container">
                    <OverlayText alignTop className="more-link">KNOW MORE</OverlayText>
                    <OverlayText className="more-link">SEE WORKS</OverlayText>
                  </OverlayTextContainer>
                </DContainer>
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>
                <OContainer >
                  <OverlayTextContainer className="more-link-container">
                    <OverlayText alignRight alignTop className="more-link">KNOW MORE</OverlayText>
                    <OverlayText alignRight className="more-link">SEE WORKS</OverlayText>
                  </OverlayTextContainer>
                </OContainer>
              </Col>
            </Row>
          </Grid>
        </Overlay>
        <MediaQuery minWidth={978} >
          <MenuButton>GET IN TOUCH</MenuButton>
        </MediaQuery>
      </Container>
    );
  }
}


export default Services;
