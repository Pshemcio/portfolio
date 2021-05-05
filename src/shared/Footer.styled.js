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
    margin: 30px 0 20px;
`

export const CopywrightContainer = styled.div`
    width: 100%;
    height: 150px;
    background-color: ${primaryColorLight};
    position: relative;
    display: grid;
    place-items: center;
`

export const FooterContactItem = styled.div`
    font-size: clamp(16px, 5vw, 50px);
    padding: 8px 0;
    font-weight: 600;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    text-align: center;

    &:first-of-type {
        border-bottom: none;
    }

`