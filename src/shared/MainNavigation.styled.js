import styled, { css } from 'styled-components';

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