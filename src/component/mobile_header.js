import React from 'react';
import Styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import Themeline from './shared/themeline';

const Container = Styled.div`
  height: ${props => ((props.isMenuOpen) ? '100vh' : '50vh')};
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

const Dropdown = Styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  padding: 2vw;
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
  font-weight: 500;
  padding: 0;
  cursor: pointer;
  align-self: center;
  padding-bottom: 10px;
  color: inherit;
  text-decoration: none;
`;

const MenuButton = Styled.a`
  font-size: 3.5vw;
  font-weight: 500;
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

const ColomboreContainer = Styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 10px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const ContactContainer = Styled.div`
  display: flex;
  margin-top: 20px;
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  padding-right: 10vw;
  padding-right: 10vw;
`;

const ContactRow = Styled.div`
  border-bottom-style: ${props => props.border};
  border-width: 0.4px;
  display: flex;
  flex-direction: column;
  margin: 1vw;
  padding: 1vw;
  font-size: 3vw;
  color: #555;
`;

const SubContainer = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex: 1;
`;

const XIcon = Styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    font-size: 35px;
    font-family: monospace;
    align-self: center;
`;

const SocialIcon = Styled(FontAwesome)`
  color: #222;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 6vw;
`;

class Header extends React.Component {
  render() {
    const { navigationCheck, isMenuOpen = true } = this.props;
    return (
      <Container id="header" isMenuOpen={ isMenuOpen }>
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

            {(!isMenuOpen) ?
              <MenuItem>menu</MenuItem>
              : <Dropdown>
                <XIcon>X</XIcon>
                <MenuItem>CLOSE</MenuItem>
                <MenuItem>ABOUT US</MenuItem>
                <MenuItem>PROJECTS</MenuItem>
              </Dropdown>
            }
            <Row>
              <MenuButton
                href="#services"
                onClick={ () => navigationCheck('services') }
              >
                OUR SERVICES
              </MenuButton>
              <MenuButton>
                TELL US YOU NEED
              </MenuButton>
            </Row>
            {(isMenuOpen) ?
              <ContactContainer >
                <SubContainer>
                  <ColomboreContainer>
                    COLOMBORE
                  </ColomboreContainer>
                </SubContainer>
                <SubContainer>
                  GET IN TOUCH
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
                </SubContainer>
              </ContactContainer>
              : null}
            <SocialMediaRow >
              <SocialIcon
                name="facebook-official"
              />
              <SocialIcon
                name="twitter"
              />
              <SocialIcon
                name="instagram"
              />
            </SocialMediaRow>
            <SubscribeContainer>
              <MenuItem>
                subscribe
              </MenuItem>
            </SubscribeContainer>
          </Overlay>
        </MenuContainer>
      </Container>
    );
  }
}


export default Header;
