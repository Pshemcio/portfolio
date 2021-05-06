import { MainContainer, PageTransitioning } from '../Components';
import { Footer } from '../shared';
import AboutContent from './AboutContent';

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