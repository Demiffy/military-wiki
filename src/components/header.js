// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.header`
  background-color: #282c34;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled(NavLink)`
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #61dafb;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  position: relative;
  transition: color 0.3s;

  &.active::after,
  &:hover::after {
    width: 90%;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 50%;
    background-color: white;
    transition: width 0.3s ease, left 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    left: 50%;
    width: 90%;
    transform: translateX(-50%);
  }
`;

const Header = () => (
  <Navbar>
    <Logo to="/" exact>
      Military Encyclopedia
    </Logo>
    <NavLinks>
      <StyledNavLink to="/" exact activeClassName="active">
        Home
      </StyledNavLink>
      <StyledNavLink to="/aircraft" activeClassName="active">
        Aircraft
      </StyledNavLink>
      <StyledNavLink to="/tanks" activeClassName="active">
        Tanks
      </StyledNavLink>
      <StyledNavLink to="/quiz" activeClassName="active">
        Quiz
      </StyledNavLink>
    </NavLinks>
  </Navbar>
);

export default Header;
