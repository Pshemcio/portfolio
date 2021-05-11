import {
    Heading1,
    MainContainer,
    MainLink,
    PageTransitioning
} from '../Components/';
import {
    NotFoundContainer,
    NotFoundWrapper
} from './';
import { Footer } from "../shared";


const NotFound = (props) => {
    const { HandleMouseoverEffects, HandleLocomotiveScroll } = props;

    HandleMouseoverEffects();
    HandleLocomotiveScroll();

    return (
        <>
            <PageTransitioning />
            <MainContainer className="smooth-scroll" data-scroll-container home>
                <NotFoundWrapper data-scroll-section>
                    <NotFoundContainer>
                        <Heading1 notfound>
                            Coś poszło nie tak :(
                        </Heading1>
                        <MainLink className="cursor_hover" to={"/"} notfound="true">
                            Wróć do strony głównej
                        </MainLink>
                    </NotFoundContainer>
                </NotFoundWrapper>
            </MainContainer>
        </>
    )
}

export default NotFound;