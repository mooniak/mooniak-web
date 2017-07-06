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
  flex: 0.4;
  padding-left: 50px;
  padding-right: 50px;
`;

const PartnersContainer = Styled.div`
  border-right-style:  solid;
  border-width: 1px;
  display: flex;
  flex: 0.2;
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
    width: 70%;
    height: 100%;
    background: #bde5e6;
`;

class Header extends React.Component {
  render() {
    return (
      <Container>
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
        </MenuContainer>
        <PartnersContainer />
        <ContactContainer >
          <ContactRow border="solid">
            0112255000
          </ContactRow>
          <ContactRow border="solid">
            hello@mooniak.com
          </ContactRow>
          <ContactRow >
            MooniakJQ, 33/1,
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
