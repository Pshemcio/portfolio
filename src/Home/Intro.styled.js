import styled, { css, keyframes } from 'styled-components';
import Theme from '../Settings/theme';

const {
    colors: {
        primaryColor,
        primaryColorLight,
        tertiaryColor
    }
} = Theme;

const dash = keyframes`
  to {
        stroke-dashoffset: 0;
    }
`

const fill = keyframes`
    20% {
        stroke-opacity: 0;
    }
    100%{
        stroke-opacity: 0;
        fill-opacity: 1;
    }
`

export const IntroStyled = styled.section`
    position: relative;
    height: 100vh;
    display: grid;
    place-content: center;
    background-image: radial-gradient(${primaryColor},${primaryColorLight});
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

    &.is-inview {
        path {
            animation: ${dash} 3s 1s cubic-bezier(0.43, 0.29, 0.58, 1.01) forwards, ${fill} 1.5s 3.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
    top: 115%;
    left: 50%;
    transform: translateX(-40%);
    opacity: 0;
    transition: opacity 1s 1.5s, transform 1s 1s;

    &.is-inview {
        opacity: 1;
        transform: translateX(-50%);
    }
`