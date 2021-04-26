import styled, { css } from 'styled-components';
import { Theme } from '../Settings';

const {
    colors: {
        primaryColor,
        primaryColorLight
    }
} = Theme;

export const ProjectsWrapper = styled.div`

`

export const ProjectsContainer = styled.div`
    text-align: center;
    min-height: 100vh;
    background-image: radial-gradient(${primaryColor},${primaryColorLight});    display: grid;
    place-content: center;
    
    ${props =>
        props.white &&
        css`
            background-image: none;
            background-color: #fff;
        `
    }
`;