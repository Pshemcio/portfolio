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
    margin: 0 auto;

    @media ${breakpoints.xs} {
        max-width: ${(props) => (props.project ? "100%" : "600px")};
    }

    @media ${breakpoints.md} {
        max-width: ${(props) => (props.project ? "100%" : "90%")};
    }
    
    @media ${breakpoints.lg} {
        max-width: ${(props) => (props.project ? "100%" : "95%")};
    }

    @media ${breakpoints.xl} {
        max-width: ${(props) => (props.project ? "100%" : "1440px")};
    }

    @media ${breakpoints.smPortrait} {
        max-width: ${(props) => (props.project ? "100%" : "92vw")};
    }

    &#footer {
        padding-top: 0;
    }
`

export const SectionContainerInner = styled(SectionContainer)`
    padding: 0 15px;

    ${props =>
        props.nextProject &&
        css`
        @media ${breakpoints.sm} {
            text-align: center;
        }
    `}
`

export const SectionContainerFluid = styled.section`
    padding: 0 15px;

    @media ${breakpoints.xs} {
        padding: 0;
        width: 100%;
        margin-top: 50px;
    }

    @media ${breakpoints.lg} {
        max-width: ${(props) => (props.project ? "100%" : "95%")};
    }

    @media ${breakpoints.xl} {
        max-width: ${(props) => (props.project ? "100%" : "1440px")};
    }
`