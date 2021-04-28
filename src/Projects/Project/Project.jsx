import { MainContainer, PageTransitioning } from "../../Components";
import { Footer } from "../../shared";

const Project = (props) => {
    const { HandleMouseoverEffects, HandleLocomotiveScroll } = props;

    HandleMouseoverEffects();
    HandleLocomotiveScroll();

    return (
        <>
            <PageTransitioning />
            <MainContainer className="smooth-scroll">
                <h1>Hejka</h1>
                <p>Czemu to zaczęło działać -_-</p>
                {/* <Project /> */}
                <Footer />
            </MainContainer>
        </>
    )
}

export default Project;
