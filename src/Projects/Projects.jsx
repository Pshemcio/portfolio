import { MainContainer, Heading1, InitialContainer } from '../Components/';
import { ContainerProjects } from './';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        console.log('start projects');

        const scroll = new LocomotiveScroll({
            el: document.querySelector(".smooth-scroll"),
            lerp: 0.09,
            reloadOnContextChange: true,
            smooth: true
        });
        return () => {
            console.log('koniec projects');

            scroll.destroy();
        }
    }, []);

    return (
        <>
            <InitialContainer exit={{
                height: 0,
                transition: {
                    duration: 1.2,
                    ease: [0.87, 0, 0.13, 1]
                }
            }}>
                <MainContainer className="smooth-scroll">
                    <ContainerProjects>
                        <Heading1>Projects</Heading1>
                    </ContainerProjects>
                    <ContainerProjects white />
                </MainContainer>
            </InitialContainer>
        </>
    )
}

export default Projects