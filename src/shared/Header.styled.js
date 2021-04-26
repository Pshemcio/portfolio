import styled, { css } from 'styled-components';
import Theme from '../Settings/theme';

let {
    colors: {
        tertiaryColor,
    },
    typography: {
        secondaryFont
    }
} = Theme;

export const MainHeader = styled.header`
    position: fixed;
    top: 20px;
    left: 0;
    right: 0;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    padding: 0 10vw;
`

export const MainNavigation = styled.nav`
    display: flex;
    justify-content: flex-start;
    align-items: center;

`

export const MainNavigationList = styled.ul`
    display: flex;
    list-style: none;

    ${props =>
        props.grow &&
        css`
        flex-grow: 1;
    `}
`

export const MainNavigationItem = styled.li`
    position: relative;
`

export const Socials = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
`