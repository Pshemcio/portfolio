import { MainContainer, PageTransitioning } from '../Components';
import { AboutContent } from '.';
import { Footer } from '../shared';

const About = (props) => {
    const { HandleMouseoverEffects, HandleLocomotiveScroll } = props;

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