import styled, { css } from 'styled-components';
import { Theme } from '../Settings';

const {
    typography: {
        primaryFont,
        secondaryFont
    },
    colors: {
        secondaryColor,
        tertiaryColor
    },
    breakpoints
} = Theme;

const typographyBase = css`
    z-index: 1;
    overflow: hidden;
`;

export const Heading1 = styled.h1`
    ${typographyBase}
    font-weight: 800;
    font-size: 39px;
    padding: 0 2px;
    letter-spacing: -1px;
    cursor: default;

    @media ${breakpoints.xs} {
        font-size: clamp(30px, 6.5vw, 50px);
    }

    @media ${breakpoints.md} {
        font-size: clamp(50px, 8vw, 100px);
    }

    @media ${breakpoints.smPortrait} {
        font-size: clamp(50px, 10vw, 100px);
    }

    ${props =>
        props.notfound &&
        css`
        font-size: 8vw;
        text-transform: uppercase;
    `}
`;

export const Heading2 = styled.h2`
    ${typographyBase}
    font-size: 40px;
    font-size: clamp(40px, 8vw, 120px);
    margin-bottom: ${(props) => (props.smaller ? "30px" : "inherit")};
    
    ${props =>
        props.project &&
        css`
        font-size: 35px;
        font-size: clamp(32px, 11vw, 50px);
        margin-top: 15px;
        text-transform: uppercase;
        line-height: 1em;
        text-align: center;

        @media ${breakpoints.xs} {
            font-size: 28px;
            font-size: clamp(28px, 9vw, 130px);
            margin-bottom: 10px;
        }
    `}

    ${props =>
        props.footer &&
        css`
        @media ${breakpoints.sm} {
            text-align: center;
        }
    `}

    span {
        &::after {
            content: ".";
            color: ${tertiaryColor};
        }
    }
`;

export const Heading3 = styled.h3`
    ${typographyBase}
    font-size: 20px;
    font-size: clamp(20px, 3vw, 30px);
    font-family: ${secondaryFont};
    font-weight: 600;

    ${props =>
        props.project &&
        css`
        font-size: 16px;
        font-size: clamp(14px, 4vw, 25px);
    `}

    ${props =>
        props.projectscontent &&
        css`
        @media ${breakpoints.md} and (pointer: fine) {
            position: absolute;
            top: 70px;
            width: 500px;
            opacity: 0;
            font-size: 40px;
            font-weight: 800;
            transform: translateY(25px);
            transition: opacity .5s cubic-bezier(0.14, 0.99, 0.43, 1.01), transform .5s cubic-bezier(0.14, 0.99, 0.43, 1.01);
        }
    `}

    ${props =>
        props.about &&
        css`
        font-size: 30px;
        font-size: clamp(24px, 3vw, 80px);
        margin: 25px 0 5px;
    `}

    ${props =>
        props.footer &&
        css`
        font-family: ${primaryFont};
        font-size: clamp(30px, 9vw, 80px);
        color: ${secondaryColor};
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${secondaryColor};
        text-transform: uppercase;
        margin-bottom: 10px;

        @media ${breakpoints.xs} {
            font-size: clamp(30px, 6vw, 70px);
        }

        @media ${breakpoints.sm} {
            text-align: center;
        }
    `}
`;

export const Heading4 = styled.h4`
    ${typographyBase}
    font-size: 14px;
    font-size: clamp(14px, 2vw, 20px);
    font-family: ${secondaryFont};
    font-weight: 400;

    @media ${breakpoints.md} and (pointer: fine) {
        position: relative;
        font-size: 20px;
        font-weight: 600;
        transition: color .5s;
    }
`;

export const HeadingDesc = styled.p`
    ${typographyBase}
    font-weight: 300;
    font-family: ${secondaryFont};
    font-size: 20px;
    transform: translateY(-.4em);
    cursor: default;

    @media ${breakpoints.xs} {
        font-size: clamp(20px, 2.4vw, 60px);
    }

    @media ${breakpoints.smPortrait} {
        font-size: clamp(35px, 4vw, 100px);
    }

    ${props =>
        props.small &&
        css`
        transform: none;
        font-size: 15px;
        font-size: clamp(15px, 4.5vw, 30px);

        @media ${breakpoints.xs} {
            font-size: clamp(20px, 2.2vw, 30px);
        }
    `}
`;

export const Paragraph = styled.p`
    ${typographyBase}
    font-weight: 400;
    font-family: ${secondaryFont};
    font-size: 16px;
    line-height: 1.7em;
    margin-bottom: .5em;

    @media ${breakpoints.md} {
        font-size: clamp(16px, 1.5vw, 24px);
    }

    ${props =>
        props.about &&
        css`
        @media ${breakpoints.lg} {
            width: 50%;
        }
    `}

    ${props =>
        props.nice &&
        css`
        color: ${tertiaryColor};
        font-weight: 600;
        margin: ;
        margin: ${(props) => (props.aboutme ? ".5em 0" : "1.5em 0 .5em")};

        @media ${breakpoints.md} {
            font-size: 30px;
        }
    `}

    ${props =>
        props.project &&
        css`
        font-size: 16px;
        font-size: clamp(16px, 2vw, 24px);
        line-height: 1.8em;
        margin: 20px 0;

        @media ${breakpoints.smPortrait} {
            line-height: 1.5em;
        }
    `}
`;