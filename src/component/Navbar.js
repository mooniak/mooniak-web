import React from 'react';
import Styled from 'styled-components';
import MediaQuery from 'react-responsive';
import FontAwesome from 'react-fontawesome';

import SubscribeContainer from './SubscribeContainer';
import '../assets/styles/contact.css';

import smallLogo from '../assets/images/logos/logo.svg';


const NavBarContainer = Styled.div`
  position: fixed;
  visibility: hidden;
  top: 0;
  width: 100vw;
  z-index: 9999;
`;

const NavBar = Styled.nav`
  background-color: white;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  transform: translateY(0);
  -webkit-transition: height 0.1s;
  transition: height 0.1s;
  height: 0vh;
  opacity: 0;
  display: flex;
  flex-direction: row;
  flex:1;
`;

const SocialMediaRow = Styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
  padding-right: 40px;
  align-self: center;
`;

const NavLinks = Styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-self: center;
  width: 0;
  padding: 0;
  align-items: flex-start;
  flex-basis: content;
`;

const NavLinkItem = Styled.li`
  margin: 10px;
`;

const HiddenNavLinks = Styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-self: center;
  width: 0;
  padding: 0;
  margin: 0;
  visibility: hidden;
  opacity: 0;
`;

const NavLink = Styled.a`
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`;


const NavLogo = Styled.img`
  align-self: center;
  width: 40px;
  height: 40px;
  padding: 1vw;
  margin-left: 3vw;
`;

const Break = Styled.span`
  font-size: 15px;
`;

const MainNav = props => (
  <NavBarContainer>
    <MediaQuery minWidth={769}>
      <NavBar id="mainnav" >
        <NavLogo src={smallLogo} alt="Menu Logo" id="mainnav-logo" />
        <HiddenNavLinks id="hiddenText">
          <NavLinkItem>
            <Break>
                |
            </Break>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink
              href="#services"
              onClick={() => props.navigationCheck('services')}
              data-scroll
            >
              Our services
            </NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <Break>
                |
            </Break>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink
              href="#header"
              onClick={() => props.navigationCheck('header')}
              data-scroll
            >
              Tell us your need
            </NavLink>
          </NavLinkItem>
        </HiddenNavLinks>
        <NavLinks>
          <NavLinkItem>
            <Break>
                |
            </Break>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink
              href="#header"
              onClick={() => props.navigationCheck('header')}
              data-scroll
            >
              menu
            </NavLink>
          </NavLinkItem>
        </NavLinks>
        <SocialMediaRow >
          <SubscribeContainer navbarMode />
          <FontAwesome
            name="facebook-official"
            size="2x"
            style={{ color: '#333', marginLeft: 10, marginRight: 10 }}
          />
          <FontAwesome
            name="twitter"
            size="2x"
            style={{ color: '#333', marginLeft: 10, marginRight: 10 }}
          />
          <FontAwesome
            name="instagram"
            size="2x"
            style={{ color: '#333', marginLeft: 10, marginRight: 10 }}
          />
        </SocialMediaRow>
      </NavBar>
    </MediaQuery>
    <MediaQuery maxWidth={768} >
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
