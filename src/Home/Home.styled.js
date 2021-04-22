import styled from 'styled-components';
import Theme from '../Settings/theme';

const {
    colors: {
        quaternaryColor
    }
} = Theme;

export const Container = styled.div`
    text-align: center;
`;

export const AboutStyled = styled.section`
    min-height: 100vh;
    background-color: ${quaternaryColor};
`