// src/components/Header.js
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { aircraft } from '../data/aircraft'; // Make sure the path is correct

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

const SearchBar = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 200px;
  transition: width 0.3s ease;

  &:focus {
    width: 300px;
  }
`;

const Suggestions = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 1001;
`;

const SuggestionItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;
  color: black; /* Change suggestion text color to black */
  &:hover {
    background: #f5f5f5;
  }
`;

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredSuggestions = aircraft.filter((aircraft) =>
        aircraft.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name);
    setSuggestions([]);
    navigate(`/vehicle/aircraft/${suggestion.id}`); // Update URL format
  };

  return (
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
      <SearchBar>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search for aircraft..."
        />
        {suggestions.length > 0 && (
          <Suggestions>
            {suggestions.map((suggestion) => (
              <SuggestionItem
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.name}
              </SuggestionItem>
            ))}
          </Suggestions>
        )}
      </SearchBar>
    </Navbar>
  );
};

export default Header;
