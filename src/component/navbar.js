import React from 'react';
import Styled from 'styled-components';
import MediaQuery from 'react-responsive';
import FontAwesome from 'react-fontawesome';

import smallLogo from '../assets/images/logo.png';

const NavBarContainer = Styled.div`
  position: fixed;
  visibility: hidden;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

const NavBar = Styled.nav`
  background-color: white;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  -webkit-transition: all 0.8s;
  transition: all 0.8s;
  height: 55px;
  display: flex;
  flex-direction: row;
  flex:1;
`;

const SocialMediaRow = Styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
  padding-top: 10px;
  padding-right: 40px;
  padding-bottom: 10px
  align-self: center;
  margin: 10px;
`;

const NavLinks = Styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-basis: content;
  padding-left: 1vw;
`;

const NavLinkItem = Styled.li`
  margin: 10px;
`;

const HiddenNavLinks = Styled.li`
  list-style: none;
  display: flex;
  width: 0px;
  flex-direction: row;
  flex-basis: content;
  padding-left: 1vw;
  visibility: hidden;
`;

const NavLink = Styled.a`
  font-size: 1.2vw;
  font-weight: 500;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`;

const SubscribeButton = Styled.a`
  font-size: 1.2vw;
  font-weight: 500;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  margin-left: 2vw;
  margin-right: 2vw;
  align-self: center;
`;

const NavLogo = Styled.img`
  align-self: center;
  width: 4.5vw;
  height: 4vw;
  margin-left: 5vw;
`;

const MainNav = props => (
  <NavBarContainer>
    <MediaQuery minWidth={ 769 }>
      <NavBar id="mainnav" >
        <NavLogo src={ smallLogo } alt="Menu Logo" id="mainnav-logo" />
        <HiddenNavLinks id="hiddenText">
          <NavLinkItem>
            <NavLink
              href="#services"
              onClick={ () => props.navigationCheck('services') }
              data-scroll
            >
              |  Our services
            </NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink
              href="#header"
              onClick={ () => props.navigationCheck('header') }
              data-scroll
            >
              |  tell us your need
            </NavLink>
          </NavLinkItem>
        </HiddenNavLinks>
        <NavLinks>
          <NavLinkItem>
            <NavLink
              href="#header"
              onClick={ () => props.navigationCheck('header') }
              data-scroll
            >
              |  menu
            </NavLink>
          </NavLinkItem>
        </NavLinks>
        <SocialMediaRow >
          <SubscribeButton >
            subscribe
          </SubscribeButton>
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
      </NavBar>
    </MediaQuery>
    <MediaQuery maxWidth={ 768 } >
      <NavBar id="mobilenav" >

        {/* // add the details components for mobile nav and change them on scroll */}

        {/* <NavLogo src={ smallLogo } alt="Menu Logo" id="mainnav-logo" />
        <HiddenNavLinks id="hiddenText"> */}
        {/* <NavLinkItem>
            <NavLink
              href="#services"
              onClick={ () => props.navigationCheck('services') }
              data-scroll
            >
              |  Our services
            </NavLink>
            </NavLinkItem>
            <NavLinkItem>
            <NavLink
              href="#header"
              onClick={ () => props.navigationCheck('header') }
              data-scroll
            >
              |  tell us your need
            </NavLink>
            </NavLinkItem>
            </HiddenNavLinks>
            <NavLinks>
            <NavLinkItem>
            <NavLink
              href="#header"
              onClick={ () => props.navigationCheck('header') }
              data-scroll
            >
              |  menu
            </NavLink>
            </NavLinkItem>
        </NavLinks> */}
      </NavBar>
    </MediaQuery>
  </NavBarContainer>
);

export default (MainNav);
