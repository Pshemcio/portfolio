import { Intro } from './';
import { MainContainer, PageTransitioning } from '../Components';
import { ProjectsContent } from '../Projects';
import { AboutContent } from '../About';
import { Footer } from '../shared';

const Home = (props) => {
    const { HandleMouseoverEffects, HandleLocomotiveScroll } = props;

    HandleMouseoverEffects();
    HandleLocomotiveScroll();

    return (
        <>
            <PageTransitioning />
            <MainContainer className="smooth-scroll" data-scroll-container>
                <Intro />
                <AboutContent />
                <ProjectsContent />
                <Footer />
            </MainContainer>
        </>
    )
}

export default Home;