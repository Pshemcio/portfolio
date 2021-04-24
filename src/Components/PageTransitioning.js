import styled from 'styled-components';
import { motion } from "framer-motion";
import Theme from '../Settings/theme';

let {
    secondaryColor
} = Theme.colors;

const variants = {
    initial: {
        bottom: 0,
    },
    animate: {
        bottom: "105vh",
        transition: {
            duration: .8,
            ease: [1, 0, 0.13, 1]
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: .1
        }
    },
    exitStop: {
        bottom: 0,
        transition: {
            duration: .8,
            ease: [1, 0, 0.13, 1]
        }
    }
};

const TransitionHelper = styled(motion.div)`
position: fixed;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    background-color: ${secondaryColor};
`

const InitialTransition = styled(TransitionHelper).attrs(() => ({
    initial: "initial",
    variants,
    animate: "animate",
    exit: "exit"
}))`
`;

const ExitTransition = styled(TransitionHelper).attrs(() => ({
    variants,
    exit: "exitStop"
}))`
    bottom: -105vh;
`;

const PageTransitioning = () => {
    return (
        <>
            <InitialTransition />
            <ExitTransition />
        </>
    )
};

export default PageTransitioning;