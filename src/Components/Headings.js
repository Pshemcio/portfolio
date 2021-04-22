import styled, { css } from 'styled-components';

export const Heading1 = styled.h1`
    ${props =>
        props.pink &&
        css`
        background-color: pink;
    `}
`;

export const Heading2 = styled.h2`
    background-color: red;
`;