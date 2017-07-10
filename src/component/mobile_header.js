import React from 'react';
import Styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import Themeline from './shared/themeline';

const Container = Styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
`;

const PartnersContainer = Styled.div`
  padding-left: 3vw;
  padding-right: 3vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

const LogoContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 2vw;
  padding-right: 2vw;
`;

const LogoTitle = Styled.h1`
  font-size: 15vw;
  justify-content: center;
  color: white;
  margin: 0;
  padding: 0;
`;

const MenuContainer = Styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  padding-left: 2vw;
  padding-right: 2vw;
`;

const CircleBase = Styled.div`
  border-radius: 50%;
  width: 30vw;
  height: 30vw;
  background: #bde5e6;
`;

const Overlay = Styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  position: absolute;
`;

const MenuItem = Styled.a`
  font-size: 4vw;
  font-weight: 600;
  padding: 0;
  cursor: pointer;
  align-self: center;
  padding-bottom: 10px;
  color: inherit;
  text-decoration: none;
`;

const MenuButton = Styled.a`
  font-size: 4vw;
  font-weight: 600;
  margin-top: 1vw;
  margin-bottom: 1vw;
  cursor: pointer;
  color: inherit;
  border-style: solid;
  border-width: 0.5vw;
  text-align: center;
  padding: 5px;
  text-decoration: none;
`;

const Row = Styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-bottom: 2px;
`;

const SocialMediaRow = Styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-top: 20px;
  margin-bottom: 20px;
  align-self: center;
  align-items: center;
`;

const SubscribeContainer = Styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  border-top-style: solid;
  border-width: 1px;
  padding-top: 10px;
  width: 100%;
  align-self: center;
  justify-content: center;
`;


// // //////////////////////////////////////
// const ContactContainer = Styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   align-items: flex-start;
//   padding-left: 3vw;
//   padding-right: 3vw;
// `;
//
// const ContactRow = Styled.div`
//   border-bottom-style: ${props => props.border};
//   border-width: 0.4px;
//   display: flex;
//   flex-direction: column;
//   margin: 0.5vw;
//   padding: 0.5vw;
//   font-size: 1.2vw;
//   color: #555;
// `;


// const MenuSubContainer = Styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 0.5;
// `;


class Header extends React.Component {
  render() {
    const { navigationCheck } = this.props;
    return (
      <Container id="header">
        <PartnersContainer >
          type
          <Themeline vertical />
          sense
          <Themeline vertical />
          scrible
          <Themeline vertical />
        </PartnersContainer>
        <LogoContainer >
          <LogoTitle>mooniak</LogoTitle>
        </LogoContainer>
        <MenuContainer >
          <CircleBase />
          <Overlay>
            <MenuItem>menu</MenuItem>
            <Row>
              <MenuButton
                href="#services"
                onClick={ () => navigationCheck('services') }
              >
                our services
              </MenuButton>
              <MenuButton>
                tell us your need
              </MenuButton>
            </Row>
            <SocialMediaRow >
              <FontAwesome
                name="facebook-official"
                size="2x"
                style={ { color: '#222', marginLeft: 10, marginRight: 10 } }
              />
              <FontAwesome
                name="twitter"
                size="2x"
                style={ { color: '#222', marginLeft: 10, marginRight: 10 } }
              />
              <FontAwesome
                name="instagram"
                size="2x"
                style={ { color: '#222', marginLeft: 10, marginRight: 10 } }
              />
            </SocialMediaRow>
            <SubscribeContainer>subscribe</SubscribeContainer>
          </Overlay>
        </MenuContainer>
        {/*
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

        {/* </ContactContainer> */}
      </Container>
    );
  }
}


export default Header;
