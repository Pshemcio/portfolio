import styled, { css } from 'styled-components';
import { Theme } from '../Settings';

const {
    breakpoints
} = Theme;

export const MainContainer = styled.div`
    background-color: transparent;
    padding-top: ${(props) => (props.home ? "0" : "50px")};
`;

export const SectionContainer = styled.section`
    padding: ${(props) => (props.project ? "4vh 0" : "4vh 15px")};
    max-width: ${(props) => (props.project ? "1920px" : "1800px")};
    margin: 0 auto;

    @media ${breakpoints.xs} {
        padding: ${(props) => (props.project ? "4vh 0" : "4vh 40px")};
    }

    &#footer {
        padding-top: 0;
    }
`

export const SectionContainerInner = styled(SectionContainer)`
    padding: 0 15px;
    max-width: 600px;

    @media ${breakpoints.sm} {
        max-width: 1000px;
        max-width: clamp(600px, 80vw, 1000px);
    }
`

export const SectionContainerFluid = styled.section`
    padding: 0 15px;

    ${props =>
        props.nextProject &&
        css`
        @media ${breakpoints.sm} {
            text-align: center;
        }
    `}

    @media ${breakpoints.md} {
        padding: 0;
        width: 100%;
    }
`