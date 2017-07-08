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
  padding: 10px;
`;

const MenuContainer = Styled.div`
  border-right-style:  solid;
  border-width: 1px;
  display: flex;
  justify-content: center;
  flex: 0.3;
  padding-left: 100px;
  padding-right: 100px;
  position: relative;
`;

const PartnersContainer = Styled.div`
  padding-left: 50px;
  padding-right: 50px;
  border-right-style:  solid;
  border-width: 1px;
  display: flex;
  flex: 0.2;
  flex-direction: column;
`;

const ContactContainer = Styled.div`
  display: flex;
  flex: 0.2;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  padding-left: 50px;
`;

const LogoTitle = Styled.h1`
  font-size: 7rem;
  justify-content: center;
  color: white;
  margin: 0;
  padding: 0;
`;

const LogoContent = Styled.p`
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
  color: #555
`;

const ContactRow = Styled.div`
  border-bottom-style: ${props => props.border};
  border-width: 0.4px;
  margin: 6px;
  padding: 5px;
  font-size: 1.2rem;
  color: #555
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
  justify-content: center;
  z-index: 1;
  position: absolute;
  margin-top: 30px;
  height: 80%;
  width: 60%;
`;

const MenuSubContainer = Styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
`;

const MenuItem = Styled.a`
  font-size: 1.2rem;
  font-weight: 800;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`;

const MenuButton = Styled.a`
  font-size: 1.2rem;
  cursor: pointer;
  color: inherit;
  font-weight: 800;
  border-style: solid;
  border-width: 2px;
  margin-top: 10px;
  text-align: center;
  margin-bottom: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-decoration: none;
`;


class Header extends React.Component {
  render() {
    const { navigationCheck } = this.props;
    return (
      <Container id="home">
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
              <Themeline horizontal />
              <MenuItem>colombore</MenuItem>
              <MenuButton>tell us your need</MenuButton>
              <MenuItem>subscribe</MenuItem>
            </MenuSubContainer>
          </Overlay>
        </MenuContainer>
        <PartnersContainer >
          <MenuItem>partners</MenuItem>
          <Themeline horizontal />
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
          <Themeline horizontal />
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
