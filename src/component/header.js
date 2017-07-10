import React from 'react';
import Styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import Themeline from './shared/themeline';

const Container = Styled.div`
  height: 35vh;
  display: flex;
  padding-top: 20px;
  padding-bottom: 30px;
`;

const LogoContainer = Styled.div`
  border-right-style:  solid;
  border-width: 1px;
  display: flex;
  flex: 0.4;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 2vw;
  padding-right: 2vw;
`;

const MenuContainer = Styled.div`
  border-right-style:  solid;
  border-width: 1px;
  display: flex;
  justify-content: center;
  flex: 0.3;
  padding-left: 2vw;
  padding-right: 2vw;
  position: relative;
`;

const PartnersContainer = Styled.div`
  padding-left: 3vw;
  padding-right: 3vw;
  border-right-style:  solid;
  border-width: 1px;
  display: flex;
  flex: 0.2;
  flex-direction: row;
`;

const ContactContainer = Styled.div`
  display: flex;
  flex: 0.2;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 3vw;
  padding-right: 3vw;
`;

const LogoTitle = Styled.h1`
  font-size: 7vw;
  justify-content: center;
  color: white;
  margin: 0;
  padding: 0;
`;

const LogoContent = Styled.p`
  font-size: 1.1vw;
  margin: 0;
  padding: 0;
  color: #555
`;

const ContactRow = Styled.div`
  border-bottom-style: ${props => props.border};
  border-width: 0.4px;
  display: flex;
  flex-direction: column;
  margin: 0.5vw;
  padding: 0.5vw;
  font-size: 1.2vw;
  color: #555;
`;

const SocialMediaRow = Styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

const CircleBase = Styled.div`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background: #bde5e6;
`;

const Overlay = Styled.div`
  display: flex;
  flex:1;
  margin-top: 3vw;
  justify-content: center;
  z-index: 1;
  position: absolute;
  width: 80%;
  height: 80%;
`;

const MenuSubContainer = Styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
`;

const MenuItem = Styled.a`
  font-size: 1.1vw;
  font-weight: 600;
  margin-top: 1vw;
  margin-bottom: 1vw;
  padding: 0;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`;

const MenuButton = Styled.a`
  font-size: 1.1vw;
  font-weight: 600;
  margin-top: 1vw;
  margin-bottom: 1vw;
  cursor: pointer;
  color: inherit;
  border-style: solid;
  border-width: 0.15vw;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  text-decoration: none;
`;

const Row = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
  margin-bottom: 2px;
`;


class Header extends React.Component {
  render() {
    const { navigationCheck } = this.props;
    return (
      <Container id="header">
        <LogoContainer >
          <Themeline horizontal />
          <LogoTitle>Mooniak</LogoTitle>
          <LogoContent >
            We are a multydeciplinary design, art direction and technology studio. We provide
            communication solutions and experience across
            languages and mediums using graphic design, typography, image-making and
            digital technologies.
          </LogoContent>
          <Themeline horizontal />
        </LogoContainer>
        <MenuContainer >
          <CircleBase />
          <Overlay>
            <MenuSubContainer >
              <Themeline horizontal />
              <MenuItem>about us</MenuItem>
              <MenuButton
                href="#services"
                onClick={ () => navigationCheck('services') }
              >
                our services
              </MenuButton>
              <MenuItem
                href="#projects"
                onClick={ () => navigationCheck('projects') }
              >projects</MenuItem>
              <Themeline horizontal />
            </MenuSubContainer>
            <MenuSubContainer >
              <Row>
                <MenuItem>colombore</MenuItem>
                <Themeline vertical />
              </Row>
              <MenuButton>tell us your need</MenuButton>
              <Row>
                <MenuItem>subscribe</MenuItem>
              </Row>
            </MenuSubContainer>
          </Overlay>
        </MenuContainer>
        <PartnersContainer >
          <MenuItem>partners</MenuItem>
          <Row>
            <Themeline horizontal />
          </Row>
        </PartnersContainer>
        <ContactContainer >
          <ContactRow border="solid">
            0112255000
          </ContactRow>
          <ContactRow border="solid">
            hello@mooniak.com
          </ContactRow>
          <ContactRow >
            MooniakHQ, 33/1,
            Siriwardena Rd,
            Dehiwala, Colombo,
            Sri Lanka
          </ContactRow>
          <Row>
            <Themeline horizontal />
          </Row>
          <SocialMediaRow >
            <FontAwesome
              name="facebook-official"
              size="2x"
              style={ { color: '#333', marginLeft: 10, marginRight: 10 } }
            />
            <FontAwesome
              name="twitter"
              size="2x"
              style={ { color: '#333', marginLeft: 10, marginRight: 10 } }
            />
            <FontAwesome
              name="instagram"
              size="2x"
              style={ { color: '#333', marginLeft: 10, marginRight: 10 } }
            />
          </SocialMediaRow>
        </ContactContainer>
      </Container>
    );
  }
}


export default Header;
