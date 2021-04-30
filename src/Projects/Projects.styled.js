import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../Settings';

const {
    colors: {
        secondaryColor
    }
} = Theme;

export const ProjectsList = styled.ul`
    list-style: none;
    margin-top: 15px;
`

export const ProjectsItem = styled.li`
    margin-bottom: 3em;
`

export const ProjectsInfoContainer = styled.div`
    width: 100%;
    display: flex; 
    justify-content: space-between;
    align-items: center;

    ${props =>
        props.arrow &&
        css`
            &::after {
            display: inline-block;
            content: url('data:image/svg+xml;charset=UTF-8, <svg width="20" height="20" viewBox="0 0 387 391" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 195.5H385.5M385.5 195.5L191 1M385.5 195.5L191 390" stroke="white" stroke-width= "20"/>
            </svg>');
            margin-left: 20px;
            transform: translateY(3px);
        }
    `} 

    ${props =>
        props.projectIcons &&
        css`
            position: absolute;
            bottom: 10px;
            padding: 0 20px;
    `} 
`

export const ProjectsItemContainer = styled(Link)`
    color: ${secondaryColor};
    text-decoration: none;
`


////////////////////////// Project

export const ProjectImageContainer = styled.div`
    position: relative;
`