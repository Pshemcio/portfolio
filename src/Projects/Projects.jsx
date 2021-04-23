import { MainContainer } from '../Components/index';
import { ContainerProjects } from './index';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".smooth-scroll"),
            lerp: 0.09,
            reloadOnContextChange: true,
            smooth: true
        });
    }, [])

    return (
        <MainContainer className="smooth-scroll">
            <ContainerProjects />
            <ContainerProjects white />
        </MainContainer>
    )
}

export default Projects
