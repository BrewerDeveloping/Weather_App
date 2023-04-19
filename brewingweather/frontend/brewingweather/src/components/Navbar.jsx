import React, { useState, useEffect, createContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { currUser } from "../utilities";
import { logOut } from "../utilities";

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
  height: 64px;
  width: 100%;
  padding: 0 16px;
  position: fixed;
  top: 0;
  left: 0;
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: #333;
  margin: 0;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 8rem;
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #0066cc;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  cursor: pointer;
  margin-right: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #0066cc;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #f5f5f5;
  padding: 1rem;
  list-style: none;
  margin: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: ${({ open }) => (open ? "block" : "none")};
`;

const DropdownMenuItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const UserContext = createContext(null);

export const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownButtonClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownMenuEnter = () => {
    setDropdownOpen(true);
  };

  const handleDropdownMenuLeave = () => {
    setDropdownOpen(false);
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getCurrUser = async () => {
      setUser(await currUser());
    };
    getCurrUser();
  }, []);

  return (
    <NavBarContainer>
      <Logo>BrewingWeather</Logo>
      <h3>Logged in as {user && user.name} </h3>
      <LinksContainer>
        <NavLink to={"/signup"}>Sign Up</NavLink>
        <NavLink to={"/login"}>Log In</NavLink>
        <DropdownContainer
          onMouseEnter={handleDropdownMenuEnter}
          onMouseLeave={handleDropdownMenuLeave}
        >
          <DropdownButton>Menu</DropdownButton>
          <DropdownMenu open={dropdownOpen}>
            <DropdownMenuItem>
              <NavLink to={"/"}>Home</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink to={"/weather"}>Weather</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NavLink to={"/about"}>About</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button onClick={() => logOut(setUser)}>LOG OUT</button>
            </DropdownMenuItem>
          </DropdownMenu>
        </DropdownContainer>
      </LinksContainer>
    </NavBarContainer>
  );
};
