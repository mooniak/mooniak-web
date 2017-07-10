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
  height: 60px;
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
  padding-bottom: 10px;
  align-self: center;
`;

const NavLinks = Styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-basis: content;
  padding-left: 10px;
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
  padding-left: 10px;
  visibility: hidden;
`;

const NavLink = Styled.a`
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`;

const SubscribeButton = Styled.a`
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  margin-left: 20px;
  margin-right: 20px;
  align-self: center;
`;

const NavLogo = Styled.img`
  align-self: center;
  width: 45px;
  height: 35px;
  margin-left: 50px;
`;

const MainNav = props => (
  <NavBarContainer>
    <MediaQuery minWidth={ 992 }>
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
  </NavBarContainer>
);

export default (MainNav);
