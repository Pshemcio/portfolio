import { MainContainer, PageTransitioning } from '../Components/';
import { Footer } from '../shared';
import { ProjectsContent } from './';

const Projects = (props) => {
    const { HandleMouseoverEffects, HandleLocomotiveScroll } = props;

    HandleMouseoverEffects();
    HandleLocomotiveScroll();

    return (
        <>
            <PageTransitioning />
            <MainContainer className="smooth-scroll">
                <ProjectsContent hidecontent={"true"} />
                <Footer />
            </MainContainer>
        </>
    )
}

export default Projects;