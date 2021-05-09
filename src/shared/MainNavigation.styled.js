import styled from 'styled-components';

import { Theme } from "../Settings";

const {
  colors: {
    secondaryColor
  },
  breakpoints
} = Theme;

export const MainNavigationContainer = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background-image: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .3));
  touch-action: none;
  clip-path: ${(props) => (props.clicked ? "circle(150% at 100% 0%)" : "circle(0% at 100% 0%)")};
  transition: ${(props) => (props.clicked ? "clip-path 0.6s" : "clip-path .8s .1s")};
  pointer-events: ${(props) => (props.clicked ? "all" : "none")};
  transition-timing-function: cubic-bezier(.61,-0.02,.34,1.07);

  @media ${breakpoints.xs} {
    clip-path: ${(props) => (props.clicked ? "circle(150% at 0% 0%)" : "circle(0% at 0% 0%)")};
  }
`;

export const MainNavigationList = styled.ul`
  padding-top: 25vh;
  height: 100vh;
  text-align: center;
  width: 100%;
  background-color: ${secondaryColor};
  list-style: none;
  clip-path: ${(props) => (props.clicked ? "circle(100% at 100% 0%)" : "circle(0% at 100% 0%)")};
  pointer-events: ${(props) => (props.clicked ? "all" : "none")};
  transition-timing-function: cubic-bezier(.61,-0.02,.34,1.07);
  transition: ${(props) => (props.clicked ? "clip-path 0.6s .4s" : "clip-path 1s")};

  @media ${breakpoints.xs} {
    clip-path: ${(props) => (props.clicked ? "circle(120% at 0% 40%)" : "circle(0% at 0% 0%)")};
  }
`;

export const MainNavigationItem = styled.li`
    position: relative;
`