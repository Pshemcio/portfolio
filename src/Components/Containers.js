import styled, { css } from 'styled-components';
import { Theme } from '../Settings';

const {
    breakpoints: {
        xs
    }
} = Theme;

export const MainContainer = styled.div`
    background-color: transparent;
    padding-top: ${(props) => (props.home ? "0" : "50px")};
`;

export const SectionContainer = styled.section`
    padding: ${(props) => (props.project ? "4vh 0" : "4vh 15px")};

    @media ${xs} {
        max-width: ${(props) => (props.project ? "100%" : "600px")};
        margin: 0 auto;
    }

    &#footer {
        padding-top: 0;
    }
`

export const SectionContainerInner = styled.section`
    padding: 0 15px;

    @media ${xs} {
        padding: ${(props) => (props.fluid ? "0" : "0 15px")};
        max-width: ${(props) => (props.fluid ? "100%" : "600px")};
        margin: 0 auto;
    }

    &#footer {
        padding-top: 0;
    }
`