import styled from 'styled-components';
import { Theme } from '../Settings';

const {
    breakpoints
} = Theme;

export const FooterContactContainer = styled.div`
    margin: 30px 0 20px;

    @media ${breakpoints.md} {
        margin: 60px 0 60px;
    }
`

export const FooterMenuContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
`

export const FooterSocialsList = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style: none;
    flex-wrap: wrap;
    margin-top: 10px;
`

export const FooterSocialsItem = styled.li`
    flex-grow: 1;   
    a {
        display: block;
    }
`

export const FooterContactItem = styled.div`
    font-size: clamp(16px, 5vw, 30px);
    padding: 8px 0;
    font-weight: 600;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    text-align: center;
    
    @media ${breakpoints.xs} {
        font-size: clamp(20px, 3vw, 30px);
    }

    &:first-of-type {
        border-bottom: none;
    }
`