import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import '../assets/styles/header.css';

import Themeline from './shared/Themeline';
import Scrible from '../assets/images/logos/scribble-logo-black.svg';
import Sense from '../assets/images/logos/sense-logo-black.svg';
import Texual from '../assets/images/logos/textual-logo-black.svg';
import SubscribeContainer from './SubscribeContainer';


const Container = styled.div`
  height: 35vh;
  display: flex;
  padding-left: 40px;
  padding-right: 50px;
  padding-bottom: 4vh;
`;

const LogoContainer = styled.div`
  height: 220px;
  border-right-style:  solid;
  border-width: 1px;
  display: flex;
  flex: 0.4;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 2vw;
  padding-right: 2vw;
  margin-top: auto;
  margin-bottom: auto;
`;

const MenuContainer = styled.div`
  height: 220px;
  border-right-style:  solid;
  border-width: 1px;
  display: flex;
  justify-content: center;
  flex: 0.4;
  position: relative;
  padding-left: 2vw;
  padding-right: 2vw;
  margin-top: auto;
  margin-bottom: auto;


`;

const PartnersContainer = styled.div`
  height: 220px;
  padding-left: 3vw;
  padding-right: 3vw;
  border-right-style:  solid;
  border-width: 1px;
  display: flex;
  flex: 0.2;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
`;

const ContactContainer = styled.div`
  height: 220px;
  display: flex;
  flex: 0.2;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 2vw;
  padding-right: 2vw;
  margin-top: auto;
  margin-bottom: auto;
`;

const LogoTitle = styled.h1`
  font-size: 100px;
  text-align: flex-start;
  font-family: mooniak;
  font-weight: 400;
  color: white;
  margin: 0;
  padding: 0;
`;

const LogoContent = styled.p`
  font-size: 13px;
  margin: 0;
  padding: 0;
  color: #555
`;

const ContactRow = styled.div`
  border-bottom-style: ${props => props.border};
  border-width: 0.4px;
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 5px;
  padding: 5px;
  font-size: 13px;
  color: #444;
`;

const SocialMediaRow = styled.div`
  display: flex;
  margin-top: auto;
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

const CircleBase = styled.div`
  border-radius: 50%;
  margin-top: auto;
  margin-bottom: auto;
  width: 200px;
  height: 200px;
  background: ${props => props.circleColor};
`;

const Overlay = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  position: absolute;
  height: 100%;
  width: 22vw;
`;

const Column = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
`;

const MenuItem = styled.a`
  font-size: 14px;
  font-weight: 600;
  margin-top: 1vw;
  margin-bottom: 1vw;
  padding: 0;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`;

const MenuButton = styled.a`
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  color: inherit;
  padding: 5px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  border-style: solid;
  border-width: 1.5px;
  text-align: center;
  text-decoration: none;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
  margin-bottom: 2px;
`;

const MenuRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const SocialIcon = styled(FontAwesome)`
  color: #222;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 22px;
`;

const PartnerLogo = styled.img`
  margin: 10px;
  width: 80%;
  height: 20%;
`;

const PartnerText = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 600;
  font-size: 14px;
  margin-right: 20px;
  text-align: center;
`;

const Contactlink = styled.a`
  text-decoration: none;
  color: inherit;
`;

class Header extends React.Component {
  render() {
    const { navigationCheck, circleColor } = this.props;
    return (
      <Container id="header">
        <LogoContainer >
          <Themeline
            horizontal
            alignTop
          />
          <LogoTitle>mooniak</LogoTitle>
          <LogoContent >
            We are a multydeciplinary design, art direction and technology studio. We provide
            communication solutions and experience across
            languages and mediums using graphic design, typography, image-making and
            digital technologies.
          </LogoContent>
          <Themeline
            horizontal
            alignBottom
          />
        </LogoContainer>
        <MenuContainer >
          <CircleBase circleColor={circleColor} />
          <Overlay>
            <MenuRow>
              <Column >
                <Themeline
                  horizontal
                  alignTop
                />
                <MenuItem>about us</MenuItem>
              </Column>
              <Column>
                <Row>
                  <MenuItem>colombore</MenuItem>
                  <Themeline vertical />
                </Row>
              </Column>
            </MenuRow>
            <MenuRow>
              <MenuButton
                href="#services"
                onClick={() => navigationCheck('services')}
              >
                OUR SERVICES
              </MenuButton>
              <MenuButton className="remove-sideborder" >TELL US YOUR NEED</MenuButton>
            </MenuRow>
            <MenuRow>
              <Column >
                <MenuItem
                  href="#projects"
                  onClick={() => navigationCheck('projects')}
                >projects</MenuItem>
                <Themeline
                  horizontal
                  alignBottom
                />
              </Column>
              <Column>
                <Row>
                  <SubscribeContainer />
                  {/* <MenuItem>subscribe</MenuItem> */}
                </Row>
              </Column>
            </MenuRow>
          </Overlay>
        </MenuContainer>
        <PartnersContainer >
          <Row>
            <PartnerText>partners</PartnerText>
            <Themeline
              horizontal
              alignTop
            />
          </Row>
          <PartnerLogo src={Sense} />
          <PartnerLogo src={Texual} />
          <PartnerLogo src={Scrible} />
        </PartnersContainer>
        <ContactContainer >
          <ContactRow border="solid">
            <Contactlink href="tel:0112255000">
            0112255000
            </Contactlink>
          </ContactRow>
          <ContactRow border="solid">
            <Contactlink href="email:hello@mooniak.com">
            hello@mooniak.com
            </Contactlink>
          </ContactRow>
          <ContactRow >
            MooniakHQ, 33/1,
            Siriwardena Rd,
            Dehiwala, Colombo,
            Sri Lanka
          </ContactRow>
          <Row>
            <Themeline
              alignTop
              alignBottom
              horizontal
            />
          </Row>
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
        </ContactContainer>
      </Container>
    );
  }
}


export default Header;
