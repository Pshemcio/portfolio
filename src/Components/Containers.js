import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
    background-color: transparent;
    padding-top: 50px;

    padding-top: ${(props) => (props.clicked ? "0" : "50px")};
`;

export const SectionContainer = styled.section`
    padding: 4vh 15px;

    &#footer {
        padding-top: 0;
    }
`