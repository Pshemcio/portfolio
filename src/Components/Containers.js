import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
    background-color: transparent;
    padding-top: 50px;

    ${props =>
        props.home &&
        css`
        padding-top: 0;
    `}
`;

export const SectionContainer = styled.section`
    padding: 4vh 15px;
`