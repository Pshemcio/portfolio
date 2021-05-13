import { useEffect } from 'react';
import { MainContainer, PageTransitioning } from '../Components';
import { Footer } from '../shared';
import AboutContent from './AboutContent';

const About = (props) => {
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
                <AboutContent />
                <Footer />
            </MainContainer>
        </>
    )
}

export default About;