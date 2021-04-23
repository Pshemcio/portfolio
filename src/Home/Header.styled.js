import styled, { css, keyframes } from 'styled-components';
import Theme from '../Settings/theme';

const {
    colors: {
        primaryColor
    }
} = Theme;

export const HeaderStyled = styled.header`
    height: 100vh;
    display: grid;
    place-content: center;
    background-color: ${primaryColor};
`

export const SvgWrapper = styled.div`
    width: 220px;
`

const dash = keyframes`
  to {
        stroke-dashoffset: 0;
    }
`

const fill = keyframes`
  to {
        fill-opacity: 1;
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
        props.loaded &&
        css`
        animation: ${dash} 3s .5s cubic-bezier(0.43, 0.29, 0.58, 1.01) forwards, ${fill} .5s 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    `}
`