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
    },
    breakpoints
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
    /* text-align: center; */
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
        width: clamp(3em, 4vw, 5em);
        height: clamp(3em, 4vw, 5em);
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
        font-weight: 600;
        font-size: 14px;   
        font-family: ${secondaryFont};

        @media ${breakpoints.md} {
            font-size: clamp(16px, 2vw, 26px);
        }
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
    font-size: clamp(1.6rem, 3vw, 2.5rem);
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
    display: ${(props) => (props.hide ? "none" : "inline-block")};
    line-height: 1.1em;
    margin-top: 25px;

    ${props =>
        props.arrow &&
        css`
            &::after {
            display: inline-block;
            width: 20px;
            content: url('data:image/svg+xml;charset=UTF-8, <svg viewBox="0 0 387 391" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 195.5H385.5M385.5 195.5L191 1M385.5 195.5L191 390" stroke="white" stroke-width= "20"/>
            </svg>');
            margin-left: 20px;
            transform: translateY(2.5px);
        }
    `} 

    ${props =>
        props.projectscontent &&
        css`
        @media ${breakpoints.md} {
            display: ${(props) => (props.hide ? "none" : "block")};
            text-align: center;
            font-size: 25px;
        }
    `} 
    

    ${props =>
        props.project &&
        css`
        display: inline-block;
        font-size: clamp(35px, 5vw, 100px);
        margin-top: 0;
        padding-bottom: 5px;
        font-weight: 600;
        text-transform: uppercase;

        @media ${breakpoints.xs} {
            font-size: clamp(14px, 8vw, 120px);
        }
    `}
`;

export const CryptoMailLink = styled(BaseLink)`
    &::before {
        content: attr(data-name) "@" attr(data-domain) "." attr(data-tld); 
    }
`

export const CryptoPhoneLink = styled(BaseLink)`
    &::before {
        content: "+48 " attr(data-first) " " attr(data-second) " " attr(data-third); 
    }
`

export const FooterLink = styled.a`
    ${linksBase}
    font-size: clamp(16px, 4vw, 20px);
    margin: 0 10px 4px 0;

    @media ${breakpoints.xs} {
        font-size: clamp(14px, 3vw, 20px);
    }

    ${props =>
        props.arrow &&
        css`
            &::after {
            display: inline-block;
            width: 15px;
            content: url('data:image/svg+xml;charset=UTF-8, <svg viewBox="0 0 387 391" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 195.5H385.5M385.5 195.5L191 1M385.5 195.5L191 390" stroke="white" stroke-width= "20"/>
            </svg>');
            margin-left: 6px;
            transform: rotate(-45deg);
        }
    `} 
`