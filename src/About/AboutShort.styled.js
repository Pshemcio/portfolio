import styled from 'styled-components';
import { Theme } from '../Settings';

const {
    colors: {
        quaternaryColor
    }
} = Theme;

export const Container = styled.div`
    text-align: center;
`;

export const AboutStyled = styled.section`
    min-height: 200vh;
    background-color: ${quaternaryColor};
    display: grid;
    place-content: center;
`

export const AboutDiv = styled.div`
    background-color: #fff;
    height: 20vh;
    width: 20vh;
`