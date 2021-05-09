import styled, { css, keyframes } from 'styled-components';
import Theme from '../Settings/theme';

const {
    colors: {
        primaryColor,
        secondaryColor
    },
    breakpoints
} = Theme;

const dash = keyframes`
    80% {
        stroke-dashoffset: 0;
        stroke-opacity: 1;
    }
    100%{
        stroke-opacity: .3;
        stroke-dashoffset: 0;
    }
`

// const fill = keyframes`
//     20% {
//         stroke-opacity: 0;
//     }
//     100%{
//         stroke-opacity: 0;
//         fill-opacity: 1;
//     }
// `

export const IntroStyled = styled.section`
    position: relative;
    height: 100vh;
    display: grid;
    place-content: center;
    background-color: ${primaryColor};
    text-align: center;
    overflow: hidden;
`

export const IntroContainer = styled.div`
    width: 100vw;
    position: relative;
`

export const SvgWrapper = styled.div`
    width: 250px;
    margin: 0 auto;

    @media ${breakpoints.xs} {
        width: 30vw;
    }

    ${props =>
        props.footer &&
        css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 110px;
    `}

    &.is-inview {
        path {
            animation: ${dash} 3s 1s cubic-bezier(0.43, 0.29, 0.58, 1.01) forwards;
        }
    }
`

export const LogoPath = styled.path`
    stroke-dasharray: 1500;
    stroke-dashoffset: 1500;
    stroke: #39C0D2;
    stroke-width: 2;
    fill: url(#header-shape-gradient) #fff;
    fill-opacity: 0;

    ${props =>
        props.footer &&
        css`
        stroke: transparent;
        fill: ${secondaryColor};
        fill-opacity: .3;
    `}
`

export const InfoWrapper = styled.div`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    transform: translate(-50%, -50%);
`

export const IntroLinksList = styled.div`
    position: absolute;
    width: 100%;
    top: 105%;
    left: 50%;
    transform: translateX(-40%);
    opacity: 0;
    transition: opacity 1s 1.5s, transform 1s 1s;

    @media ${breakpoints.xs} {
        top: 75%;
    }

    &.is-inview {
        opacity: 1;
        transform: translateX(-50%);
    }
`