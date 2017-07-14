import React from 'react';
import Styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import Themeline from './shared/themeline';
import Scrible from '../assets/images/logos/scribble logo black-03.svg';
import Sense from '../assets/images/logos/sense logo black -03.svg';
import Texual from '../assets/images/logos/textual logo black -03.svg';

const Container = Styled.div`
  height: 35vh;
  display: flex;
  padding-bottom: 4vh;
`;

const LogoContainer = Styled.div`
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

const MenuContainer = Styled.div`
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

const PartnersContainer = Styled.div`
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

const ContactContainer = Styled.div`
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

const LogoTitle = Styled.h1`
  font-size: 100px;
  text-align: flex-start;
  font-family: mooniak;
  font-weight: 400;
  color: white;
  margin: 0;
  padding: 0;
`;

const LogoContent = Styled.p`
  font-size: 13px;
  margin: 0;
  padding: 0;
  color: #555
`;

const ContactRow = Styled.div`
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

const SocialMediaRow = Styled.div`
  display: flex;
  margin-top: auto;
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

const CircleBase = Styled.div`
  border-radius: 50%;
  margin-top: auto;
  margin-bottom: auto;
  width: 200px;
  height: 200px;
  background: #bde5e6;
`;

const Overlay = Styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  position: absolute;
  height: 100%;
  width: 22vw;
`;

const Column = Styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
`;

const MenuItem = Styled.a`
  font-size: 14px;
  font-weight: 600;
  margin-top: 1vw;
  margin-bottom: 1vw;
  padding: 0;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`;

const MenuButton = Styled.a`
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

const Row = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
  margin-bottom: 2px;
`;

const MenuRow = Styled.div`
  display: flex;
  flex-direction: row;
`;

const SocialIcon = Styled(FontAwesome)`
  color: #222;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 22px;
`;

const PartnerLogo = Styled.img`
  margin: 10px;
  width: 80%;
  height: 20%;
`;

const PartnerText = Styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 600;
  font-size: 14px;
  margin-right: 20px;
  text-align: center;
`;


class Header extends React.Component {
  render() {
    const { navigationCheck } = this.props;
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
          <CircleBase />
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
              <MenuButton>TELL US YOUR NEED</MenuButton>
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
                  <MenuItem>subscribe</MenuItem>
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
