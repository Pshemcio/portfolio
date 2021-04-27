import styled, { keyframes } from "styled-components";
import { Theme } from "../Settings";

const {
    secondaryColor,
    tertiaryColor
} = Theme.colors;

const mouse = keyframes`
    0% {
        transform: translateY(0);
        opacity: .5;
    }

    50% {
        transform: translateY(-5px);
        opacity: 1; 
    }
    100%  {
        transform: translateY(0);
        opacity: .5;
    }
`

const mouseScroll = keyframes`
    0%, 30% {
        opacity: 0;
    }

    50% {
        opacity: 1;
        transform: translateY(-14px) scale(1);
    }
    65% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translateY(0) scale(.75);
    }
`


const MouseContainer = styled.a`
    position: absolute;
    bottom: 5vh;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 60px;
    text-decoration: none;

    &::after {
        content: "Scroll Down";
        font-size: 11px;
        color: rgba(255,255,255, .6);
    }
`

const MouseIcon = styled.span`
    position: relative;
    display: block;
    width: 23px;
    height: 40px;
    border: 2px solid ${secondaryColor};
    border-radius: 100px;
    margin: 0 auto;
    animation: ${mouse} 2s cubic-bezier(.645,.045,.355,1) infinite;
`

const MouseScroll = styled.span`
    position: relative;
    display: block;
    width: 5px;
    height: 5px;
    top: 20px;
    border-radius: 50%;
    background-color: ${tertiaryColor};
    opacity: .8;
    margin: 0 auto;
    animation: ${mouseScroll} 2s cubic-bezier(.645,.045,.355,1) infinite;
`

const CallToAction = () => {
    return (
        <MouseContainer href="#about" className="cursor_hover" intro data-scroll-to>
            <MouseIcon>
                <MouseScroll />
            </MouseIcon >
        </MouseContainer>
    )
}

export default CallToAction
