import { MainContainer, PageTransitioning } from '../Components';
import { Footer } from '../shared';

const About = (props) => {
    const { HandleMouseoverEffects, HandleLocomotiveScroll } = props;

    HandleMouseoverEffects();
    HandleLocomotiveScroll();

    return (
        <>
            <PageTransitioning />
            <MainContainer className="smooth-scroll">
                <Footer />
            </MainContainer>
        </>
    )
}

export default About;