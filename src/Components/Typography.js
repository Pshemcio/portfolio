import styled, { css } from 'styled-components';
import { Theme } from '../Settings';

const {
    typography: {
        secondaryFont
    },
    colors: {
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
`;

export const Heading4 = styled.h4`
    ${typographyBase}
    font-size: 16px;
    font-family: ${secondaryFont};
    font-weight: 400;
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
    margin-bottom: .5em;

    ${props =>
        props.nice &&
        css`
        color: ${tertiaryColor};
        font-weight: 600;
        margin: 1.5em 0 .5em;
    `}
`;