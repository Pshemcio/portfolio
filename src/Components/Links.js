import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Theme from '../Settings/theme';

let {
    colors: {
        secondaryColor,
        tertiaryColor,
        primaryColor
    },
    typography: {
        secondaryFont
    }
} = Theme;

const linksBase = css`
    background-color: transparent;
    color: ${secondaryColor};
    text-decoration: none;
    text-align: center;
    padding: 2px 2px;
`;

export const BaseLink = styled.a`
    ${linksBase}

    ${props =>
        props.iconLink &&
        css`
        font-size: 1.5em;
        margin-left: 10px;
    `}

    ${props =>
        props.intro &&
        css`
        display: inline-block;
        text-transform: uppercase;
        padding: 4px 5px;
        font-weight: 600;
        font-size: 14px;   

        &:nth-of-type(2) {
            &::before,
            &::after {
                content: '/';
                color: ${tertiaryColor};
                font-weight: 600;
            }

            &::before {
                margin-right: 10px;
            }

            &::after {
                margin-left: 10px;
            }
        }

    `}
`

export const StyledNavLink = styled(NavLink)`
    ${linksBase}
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 300;
    font-family: ${secondaryFont};
    color: ${primaryColor};
    letter-spacing: 3px;
    display: inline-block;
    padding: clamp(12px, 1vw, 40px);
    transition: visibility 0s .6s;
    visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
    
    &.current {
    /* color: ${tertiaryColor}; */
    text-decoration: line-through;
    /* pointer-events: none; */
  }
`;

export const MainLink = styled(Link)`
    ${linksBase}
    text-transform: uppercase;
    font-size: 1.7rem;
    font-weight: 300;
    font-family: ${secondaryFont};
    display: inline-block;
`;