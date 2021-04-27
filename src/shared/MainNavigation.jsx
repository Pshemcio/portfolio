import React, { useState } from "react";
import styled from "styled-components";
import {
    MainNavigationItem,
    Burger
} from './';
import { StyledNavLink } from '../Components';
import { Theme } from "../Settings";

const {
    colors: {
        secondaryColor
    }
} = Theme;

const MainNavigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 600;
  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .2));
  backdrop-filter: blur(7px);
  touch-action: none;
  clip-path: ${(props) => (props.clicked ? "circle(150% at 0% 100%)" : "circle(5% at 0% 100%)")};
  transition: ${(props) => (props.clicked ? "clip-path 0.6s" : "clip-path 0.6s .3s")};
  pointer-events: ${(props) => (props.clicked ? "all" : "none")};

  transition-timing-function: cubic-bezier(.61,-0.02,.34,1.07);
`;

const List = styled.ul`
  padding-top: 25vh;
  height: 100vh;
  text-align: center;
  width: 100%;
  background-color: ${secondaryColor};
  list-style: none;
  clip-path: ${(props) => (props.clicked ? "circle(100% at 100% 0%)" : "circle(5% at 100% 0%)")};
  pointer-events: ${(props) => (props.clicked ? "all" : "none")};
  transition-timing-function: cubic-bezier(.61,-0.02,.34,1.07);
  transition: ${(props) => (props.clicked ? "clip-path 0.6s .4s" : "clip-path 2s")};
`;

const links = [
    { name: "Home", path: "/" },
    { name: "Projekty", path: "/projects" },
    { name: "O mnie", path: "/about" }
];


function HamburgerMenu() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <Burger clicked={click} test={handleClick} />
            <MainNavigation onClick={handleClick} clicked={click}>
                <List clicked={click}>
                    {links.map((link, index) => (
                        <MainNavigationItem key={index}>
                            <StyledNavLink to={link.path} exact activeClassName="current" clicked={click ? "hack" : undefined}>
                                {link.name}
                            </StyledNavLink>
                        </MainNavigationItem>
                    ))}
                </List>
            </MainNavigation>
        </>
    );
}

export default HamburgerMenu;