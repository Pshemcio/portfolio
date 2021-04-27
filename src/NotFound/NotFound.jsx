import { MainContainer, PageTransitioning } from '../Components/';
import { Footer } from '../shared';

const NotFound = (props) => {
    const { HandleMouseoverEffects, HandleLocomotiveScroll } = props;

    HandleMouseoverEffects();
    HandleLocomotiveScroll();

    return (
        <>
            <PageTransitioning />
            <MainContainer className="smooth-scroll">
                <div>
                    <h1>
                        Nie ma takiej strony :(
                    </h1>
                </div>
                <Footer />
            </MainContainer>
        </>
    )
}

export default NotFound;