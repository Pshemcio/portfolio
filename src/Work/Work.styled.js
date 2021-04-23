import styled, { css } from 'styled-components';

export const ContainerWork = styled.div`
    text-align: center;
    min-height: 220vh;
    background-color: black;
    display: grid;
    place-content: center;

    
    ${props =>
        props.white &&
        css`
            background-color: #fff;
        `

    }
`;