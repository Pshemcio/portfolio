import { MainContainer, PageTransitioning } from '../Components/';
import { ProjectsContent } from './';

const Projects = (props) => {
    const { HandleMouseoverEffects, HandleLocomotiveScroll } = props;

    HandleMouseoverEffects();
    HandleLocomotiveScroll();

    return (
        <>
            <PageTransitioning />
            <MainContainer className="smooth-scroll">
                <ProjectsContent />
            </MainContainer>
        </>
    )
}

export default Projects;