import { Intro, AboutShort, SkillsShort } from './';
import { MainContainer, PageTransitioning } from '../Components';
import { ProjectsContent } from '../Projects';
import { Footer } from '../shared';
import { useEffect } from 'react';

const Home = (props) => {
    const { HandleMouseoverEffects, HandleLocomotiveScroll, title } = props;

    useEffect(() => {
        document.title = title || "";
    }, [title]);

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