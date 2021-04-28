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
                <h1>O mnie :)</h1>
                <Footer />
            </MainContainer>
        </>
    )
}

export default About;