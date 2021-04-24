import styled, { css } from 'styled-components';
import { motion } from "framer-motion";

export const MainContainer = styled(motion.div)`
    background-color: white;
`;

const variants = {
    visible: { height: "auto", transition: { duration: 1 } },
    hidden: { height: 0 }
};

export const InitialContainer = styled(motion.div).attrs(() => ({
    initial: "hidden",
    variants,
    animate: "visible"
}))`
    background-color: white;
`;