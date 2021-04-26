import styled, { css, keyframes } from 'styled-components';
import Theme from '../Settings/theme';

let {
    secondaryColor
} = Theme.colors;

const wave = keyframes`
  50%,
  75% {
    transform: scale(2.5);
  }

  80%,
  100% {
    opacity: 0;
  }
`

const LoadingScreenStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: grid;
    place-content: center;
    background-color: ${secondaryColor};
`

const AnimatedDotsContainer = styled.div`
    display: flex;
`

const AnimatedDot = styled.div`
    position: relative;
    width: 30px;
    height: 30px;
    margin: 10px;
    border-radius: 50%;
    ${props =>
        props.color &&
        css`
        background-color: ${props.color};
    `}

    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      animation: ${wave} 2s ease-out infinite;
      ${props =>
        props.delay &&
        css`
            animation-delay: ${props.delay};
        `}
    }
`

const dots = [
    {
        color: "#7ef9ff",
        delay: "0s"
    },
    {
        color: "#89cff0",
        delay: ".2s"
    },
    {
        color: "#4682b4",
        delay: ".4s"
    },
    {
        color: "#0f52ba",
        delay: ".6s"
    },
    {
        color: "#000080",
        delay: ".8s"
    }
]

const LoadingScreen = () => {
    return (
        <LoadingScreenStyled>
            <AnimatedDotsContainer>
                {dots.map((dot, index) => (
                    <AnimatedDot key={index} color={dot.color} delay={dot.delay}>
                    </AnimatedDot>
                ))}
            </AnimatedDotsContainer>
        </LoadingScreenStyled>
    )
}

export default LoadingScreen;