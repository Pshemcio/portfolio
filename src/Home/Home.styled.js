import styled, { css } from 'styled-components';
import Theme from '../Settings/theme';

const {
    typography: {
        primaryFont
    },
    colors: {
        primaryColor,
        secondaryColor,
        quaternaryColor
    }
} = Theme;

export const Container = styled.div`
    /* background-color: red; */
`;

export const HeaderStyled = styled.header`
    min-height: 100vh;
    background-color: ${primaryColor};
`

export const AboutStyled = styled.section`
    min-height: 100vh;
    background-color: ${quaternaryColor};
`