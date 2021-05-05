import styled from 'styled-components';
import { Theme } from '../Settings';

const {
    colors: {
        primaryColorLight
    }
} = Theme;

export const FooterWrapper = styled.div`
    min-height: 200vh;
    background-color: green;
    margin-top: 50px;
`

export const FooterContactContainer = styled.div`
    margin: 50px 0;
`

export const CopywrightContainer = styled.div`
    width: 100%;
    height: 150px;
    background-color: ${primaryColorLight};
    position: relative;
    display: grid;
    place-items: center;
`