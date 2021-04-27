import styled, { css } from 'styled-components';
import { Theme } from '../Settings';

const {
    typography: {
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
    font-size: 50px;

    span {
        &::after {
            content: ".";
            color: ${tertiaryColor};
        }
    }
`;

export const HeadingDesc = styled.p`
    ${typographyBase}
    font-weight: 300;
    font-family: ${secondaryFont};
    font-size: 20px;
`;

export const Paragraph = styled.p`
    ${typographyBase}
    font-weight: 400;
    font-family: ${secondaryFont};
    font-size: 16px;
    line-height: 1.7em;
    margin: ${(props) => (props.marginBigger ? "1em 0" : ".5em 0")};

    ${props =>
        props.nice &&
        css`
        color: ${tertiaryColor};
        font-weight: 600;
    `}
`;