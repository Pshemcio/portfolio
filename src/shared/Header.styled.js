import styled, { css } from 'styled-components';
import { Theme } from '../Settings';

const {
    breakpoints
} = Theme;

export const MainHeader = styled.header`
    position: fixed;
    top: 15px;
    left: 50%;
    width: 100%;
    max-width: 1920px;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    padding: 2px 10px;
    mix-blend-mode: difference;
    transform: translateX(-50%);

    @media ${breakpoints.sm} {
        padding: 2px 100px;
    }
`

export const Socials = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
`