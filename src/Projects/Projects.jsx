import { useEffect } from 'react';
import { MainContainer, PageTransitioning } from '../Components/';
import { Footer } from '../shared';
import { ProjectsContent } from './';

const Projects = (props) => {
    const { HandleMouseoverEffects, HandleLocomotiveScroll, title } = props;

    useEffect(() => {
        document.title = title || "";
    }, [title]);

    HandleMouseoverEffects();
    HandleLocomotiveScroll();

    return (
        <>
            <PageTransitioning />
            <MainContainer className="smooth-scroll">
                <ProjectsContent hidelink={"true"} />
                <Footer />
            </MainContainer>
        </>
    )
}

export default Projects;