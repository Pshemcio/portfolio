import styled, { css } from "styled-components";
import { Theme } from "../Settings";

const {
    colors: {
        primaryColor,
        secondaryColor
    }
} = Theme;

const BurgerButton = styled.button`
    position: relative;
    z-index: 3;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: grid;
    place-content: center;
    width: 60px;
    height: 60px;
    cursor: pointer;
`;

const BurgerSvg = styled.svg`
    width: 50px;
    height: 50px;
`

const BurgerPath = styled.path`
    fill: none;
    stroke: ${secondaryColor};
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke .5s .5s;

    /* ${props =>
        props.clicked &&
        css`
        stroke: ${primaryColor};
    `} */

    ${props =>
        props.line1 &&
        css`
        stroke-dasharray: 60 207;
        stroke-width: 3;

        ${props =>
                props.clicked &&
                css`
                stroke-dasharray: 90 207;
                stroke-dashoffset: -134;
                stroke-width: 3;
        `}
    `}

    ${props =>
        props.line2 &&
        css`
        stroke-dasharray: 60 80;
        stroke-width: 3;

        ${props =>
                props.clicked &&
                css`
                stroke-dasharray: 1 60;
                stroke-dashoffset: -30;
                stroke-width: 3;
        `}
    `}

    ${props =>
        props.line3 &&
        css`
        stroke-dasharray: 60 207;
        stroke-width: 3;

        ${props =>
                props.clicked &&
                css`
                stroke-dasharray: 90 207;
                stroke-dashoffset: -134;
                stroke-width: 3;
        `}
    `}
`

function Burger(props) {
    const { onclick, clicked } = props;

    return (
        <BurgerButton className="cursor_hover" onClick={onclick}>
            <BurgerSvg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <BurgerPath clicked={clicked} line1 d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <BurgerPath clicked={clicked} line2 d="M 20,50 H 80" />
                <BurgerPath clicked={clicked} line3 d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </BurgerSvg>
        </BurgerButton >
    )
}

export default Burger;