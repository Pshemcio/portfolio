import { Link, NavLink } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
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

const showIcon = keyframes`
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-5px);
    }
    100%  {
        transform: translateY(0);
    }
`

const linksBase = css`
    position: relative;
    background-color: transparent;
    color: ${secondaryColor};
    text-decoration: none;
    text-align: center;
    padding: 2px 2px;
    overflow: hidden;

    svg {
        width: 100%;
        height: 100%;
    }
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
        props.project &&
        css`
        width: 3em;
        height: 3em;
        animation: ${showIcon} 2s 1s cubic-bezier(.645,.045,.355,1) infinite;
    `}

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

    ${props =>
        props.footer &&
        css`
        display: block;
        font-size: clamp(16px, 5vw, 50px);
        padding: 8px 0;
        font-weight: 600;
        border-top: 1px solid white;
        border-bottom: 1px solid white;

        &:first-of-type {
            border-bottom: none;
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
    /* margin-top: 10px; */

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

    ${props =>
        props.project &&
        css`
            display: block;
            font-size: clamp(35px, 5vw, 100px);
            margin-top: 0;
            font-weight: 600;
            text-transform: uppercase;
    `}

    ${props =>
        props.homelink &&
        css`
            display: block;
            text-align: center;
        `}
`;

export const CryptoMailLink = styled(BaseLink)`
    display: block;
    &::before {
        content: attr(data-name) "@" attr(data-domain) "." attr(data-tld); 
    }
`

export const CryptoPhoneLink = styled(BaseLink)`
    display: block;
    &::before {
        content: "+48 " attr(data-first) " " attr(data-second) " " attr(data-third); 
    }
`