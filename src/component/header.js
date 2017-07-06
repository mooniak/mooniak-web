import React from 'react';
import Styled from 'styled-components';
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
  flex: 0.4;
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
  align-items: center;
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
        <MenuContainer />
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
          <SocialMediaRow />
        </ContactContainer>
      </Container>
    );
  }
}


export default Header;
