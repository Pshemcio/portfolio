import { Intro, AboutShort, SkillsShort } from './';
import { MainContainer, MainLink, PageTransitioning, SectionContainer } from '../Components';
import { ProjectsContent } from '../Projects';
import { Footer } from '../shared';

const Home = (props) => {
    const { HandleMouseoverEffects, HandleLocomotiveScroll } = props;
    HandleMouseoverEffects();
    HandleLocomotiveScroll();

    return (
        <>
            <PageTransitioning />
            <MainContainer className="smooth-scroll" data-scroll-container home>
                <Intro />
                <AboutShort />
                <SkillsShort />
                <ProjectsContent home />
                <Footer />
            </MainContainer>
        </>
    )
}

export default Home;