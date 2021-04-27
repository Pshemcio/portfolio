import styled, { } from 'styled-components';
import { Theme } from '../Settings';

const {
    typography: {
        secondaryFont
    }
} = Theme;

export const Heading1 = styled.h1`
    z-index: 1;
    font-weight: 400;
    text-transform: uppercase;
    font-family: ${secondaryFont};
    font-size: 35px;
    padding: 0 2px;
    letter-spacing: -2px;
    overflow: hidden;
`;

export const Heading2 = styled.h2`
`;

export const HeadingDesc = styled.h2`
    z-index: 1;
    font-weight: 300;
    font-family: ${secondaryFont};
    font-size: 20px;
    overflow: hidden;
`;