import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { Theme } from '../Settings';

const {
    colors: {
        secondaryColor,
        tertiaryColor
    }
} = Theme;

const showIcons = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

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
            mix-blend-mode: difference;

            animation: ${showIcons} 2s .5s cubic-bezier(.645,.045,.355,1) both;
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

export const ProjectList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 25px;
`

export const ProjectItem = styled.li`
    padding-right: 15px;
    color: ${tertiaryColor}
`