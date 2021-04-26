import { Intro, About } from './';
import { MainContainer, PageTransitioning } from '../Components';
import { ProjectsContent } from '../Projects';

const Home = (props) => {
    const { HandleMouseoverEffects, HandleLocomotiveScroll } = props;

    HandleMouseoverEffects();
    HandleLocomotiveScroll();

    return (
        <>
            <PageTransitioning />
            <MainContainer className="smooth-scroll" data-scroll-container>
                <Intro data-scroll-section />
                <About data-scroll-section data-scroll-target></About>
                <ProjectsContent />
            </MainContainer>
        </>
    )
}

export default Home;