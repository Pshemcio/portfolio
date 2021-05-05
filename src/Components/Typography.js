import styled, { css } from 'styled-components';
import { Theme } from '../Settings';

const {
    typography: {
        primaryFont,
        secondaryFont
    },
    colors: {
        secondaryColor,
        tertiaryColor
    }
} = Theme;

const typographyBase = css`
    z-index: 1;
    overflow: hidden;
`;

export const Heading1 = styled.h1`
    ${typographyBase}
    font-weight: 800;
    font-size: 39px;
    padding: 0 2px;
    letter-spacing: -1px;
`;

export const Heading2 = styled.h2`
    ${typographyBase}
    font-size: ${(props) => (props.smaller ? "40px" : "50px")};
    margin-bottom: ${(props) => (props.smaller ? "30px" : "inherit")};
    
    ${props =>
        props.project &&
        css`
        font-size: clamp(28px, 5vw, 60px);
        margin-top: 15px;
    `}

    span {
        &::after {
            content: ".";
            color: ${tertiaryColor};
        }
    }
`;

export const Heading3 = styled.h3`
    ${typographyBase}
    font-size: 20px;
    font-family: ${secondaryFont};
    font-weight: 600;

    ${props =>
        props.project &&
        css`
        font-size: clamp(14px, 4vw, 25px);
        text-align: center;
    `}

    ${props =>
        props.footer &&
        css`
        font-family: ${primaryFont};
        font-size: clamp(30px, 9vw, 80px);
        color: ${secondaryColor};
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${secondaryColor};
        text-transform: uppercase;
    `}
`;

export const Heading4 = styled.h4`
    ${typographyBase}
    font-size: 14px;
    font-family: ${secondaryFont};
    font-weight: 400;
`;

export const HeadingDesc = styled.p`
    ${typographyBase}
    font-weight: 300;
    font-family: ${secondaryFont};
    font-size: 20px;

    ${props =>
        props.small &&
        css`
        font-size: 16px;
    `}
`;

export const Paragraph = styled.p`
    ${typographyBase}
    font-weight: 400;
    font-family: ${secondaryFont};
    font-size: 16px;
    line-height: 1.7em;
    margin-bottom: .5em;

    ${props =>
        props.nice &&
        css`
        color: ${tertiaryColor};
        font-weight: 600;
        margin: 1.5em 0 .5em;
    `}

    ${props =>
        props.project &&
        css`
        font-size: 14px;
        margin: 20px 0;
    `}
`;