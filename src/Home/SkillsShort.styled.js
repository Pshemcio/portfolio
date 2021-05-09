import styled from 'styled-components';
import { Theme } from '../Settings';

const {
    colors: {
        primaryColorLight,
        secondaryColor,
        tertiaryColor
    },
    breakpoints: {
        xs,
        sm,
        md,
        lg,
        xl
    }
} = Theme;

export const SkillsWrapper = styled.div`
    width: 100%;
    background-color: ${primaryColorLight};
    padding-bottom: 25px;
`

export const SkillsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    margin-top: 10px;
    padding: 4vh 0;
    border: 1px solid white;
`

export const SkillsItem = styled.li`
    position: relative;
    flex-basis: 49%;
    display: grid;
    place-items: center;
    padding: 15px 0;

    @media ${md} {
        flex-basis: 32.5%;
    }

    @media ${lg} {
        flex-basis: 24%;
    }
`

export const SkillsInfo = styled.span`
    position: relative;
    z-index: 1;
    text-transform: uppercase;
    font-size: clamp(12px, 2.5vw, 20px);
    white-space: nowrap;
    margin-top: 10px;
`

export const SkillsSvgWrapper = styled.span`
    width: 70%;
    color: ${secondaryColor};
    transition: color 4s 1.5s;
    overflow: hidden;

    @media ${xs} {
        width: 40%;
    }

    svg {
        transform: rotateX(90deg);
        opacity: 0;
        transition: transform 1s .5s, opacity 1s .5s;
    };

    &.is-inview {
        color: ${(props) =>
        typeof props.color === 'string' ? props.color : tertiaryColor};

        svg {
        transform: rotateX(0);
        opacity: 1;
        };
    };
`