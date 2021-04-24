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

export const MainNavigation = styled.nav`
    position: fixed;
    top: 20px;
    left: 0;
    right: 0;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    padding: 0 10vw;

    ${props =>
        props.grow &&
        css`
        flex-grow: 1;
    `}
`

export const MainNavigationList = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
`

export const MainNavigationItem = styled.li`
    position: relative;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 2px 2px;
        text-transform: uppercase;
        font-size: .75rem;
        font-weight: 300;
        font-family: ${secondaryFont};
        letter-spacing: 3px;
        color: white;
        text-align: center;

        &.current {
            color: ${tertiaryColor};
        } 

        svg {
            font-size: 20px;
            margin-left: 10px;
        }
    }
`

export const SocialsName = styled.span`
    display: none;
`