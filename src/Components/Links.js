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
    position: relative;
    background-color: transparent;
    color: ${secondaryColor};
    text-decoration: none;
    text-align: center;
    padding: 2px 2px;
`;

const showLineOnHover = css`
    &::before {
        content: "";
        position: absolute;
        top: ${(props) => (props.main ? "90%" : "100%")};
        left: 0;
        width: 0;
        height: 1px;
        background-color: ${secondaryColor};
        transition: width .8s cubic-bezier(0.77, 0, 0.175, 1);
        mix-blend-mode: difference;
    }

    &:hover::before {
        width: ${(props) => (props.main ? "100%" : "calc(100% - 35px)")};
    }
`

export const BaseLink = styled.a`
    ${linksBase}

    ${props =>
        props.iconLink &&
        css`
        width: 2.5em;
        height: 1.5em;
        padding: 0;
        display: flex;
        justify-content: center;
    `}

    ${props =>
        props.intro &&
        css`
        display: inline-block;
        text-transform: uppercase;
        padding: 4px 5px;
        font-weight: 500;
        font-size: 14px;   
        font-family: ${secondaryFont};

        &:nth-of-type(2) {
            &::before,
            &::after {
                content: '/';
                color: ${tertiaryColor};
                font-weight: 400;
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
    ${showLineOnHover};
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
    text-decoration: line-through;
  }
`;

export const MainLink = styled(Link)`
    ${linksBase}
    ${showLineOnHover};
    font-size: 1.2rem;
    font-weight: 400;
    font-family: ${secondaryFont};
    display: inline-block;
    line-height: 1.1em;
    margin: 15px 0 40px;

    ${props =>
        props.arrow &&
        css`
            &::after {
            display: inline-block;
            content: url('data:image/svg+xml;charset=UTF-8, <svg width="20" height="20" viewBox="0 0 387 391" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 195.5H385.5M385.5 195.5L191 1M385.5 195.5L191 390" stroke="white" stroke-width= "20"/>
            </svg>');
            margin-left: 20px;
            transform: translateY(2.5px);
        }
    `} 
`;