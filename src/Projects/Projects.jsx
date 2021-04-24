import { MainContainer, Heading1, PageTransitioning } from '../Components/';
import { ContainerProjects } from './';
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
        return () => {
            scroll.destroy();
        }
    }, []);

    return (
        <>
            <PageTransitioning />
            <MainContainer className="smooth-scroll">
                <ContainerProjects>
                    <Heading1>Projects</Heading1>
                </ContainerProjects>
                <ContainerProjects white />
            </MainContainer>
        </>
    )
}

export default Projects