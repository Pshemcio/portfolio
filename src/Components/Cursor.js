import { useEffect, useState, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import { Theme } from "../Settings";

let {
    tertiaryColor
} = Theme.colors;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const CursorStyled = styled.div`
    width: 60px;
    height: 60px;
    z-index: 1000;
    border-radius: 50%;
    border: 1px solid ${tertiaryColor};
    position: fixed;
    opacity: 0;
    pointer-events: none;
    transition: border .5s;
    will-change: transform; 

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: #fff;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        opacity: 0;
        transform: translate(-50%, -50%);
        transition: transform .5s, opacity .5s;
        transition-timing-function: ease-out;
    }

    ${props =>
        props.ready &&
        css`
        animation: ${fadeIn} .5s linear forwards;
    `}

    ${props =>
        props.mobile &&
        css`
        display: none;
    `}

    ${props =>
        props.hovered &&
        css`
        border: none;
        mix-blend-mode: difference;

        &::before {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 1;
        }
    `}
`

const Cursor = ({ isHovered, isMobile }) => {
    const cursor = useRef(null);
    const positionRef = useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1,
    });

    const [isReady, setIsReady] = useState(false);
    // const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        document.addEventListener("mouseover", () => {
            setIsReady(true);
        })
        return () => { }
    }, [])

    useEffect(() => {

        document.addEventListener("mousemove", (event) => {
            const { clientX, clientY } = event;

            const mouseX = clientX;
            const mouseY = clientY;

            positionRef.current.mouseX =
                mouseX - cursor.current.clientWidth / 2;
            positionRef.current.mouseY =
                mouseY - cursor.current.clientHeight / 2;
        });

        return () => { };
    }, []);

    useEffect(() => {
        const followMouse = () => {
            positionRef.current.key = requestAnimationFrame(followMouse);
            const {
                mouseX,
                mouseY,
                destinationX,
                destinationY,
                distanceX,
                distanceY,
            } = positionRef.current;
            if (!destinationX || !destinationY) {
                positionRef.current.destinationX = mouseX;
                positionRef.current.destinationY = mouseY;
            } else {
                positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
                positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
                if (
                    Math.abs(positionRef.current.distanceX) +
                    Math.abs(positionRef.current.distanceY) <
                    0.1
                ) {
                    positionRef.current.destinationX = mouseX;
                    positionRef.current.destinationY = mouseY;
                } else {
                    positionRef.current.destinationX += distanceX;
                    positionRef.current.destinationY += distanceY;
                }
            }
            cursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
        };
        followMouse();
    }, []);

    return (
        <CursorStyled ref={cursor} ready={isReady} hovered={isHovered} mobile={isMobile} />
    )
}

export default Cursor;