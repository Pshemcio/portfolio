import { Intro, About } from './';
import { MainContainer, PageTransitioning } from '../Components/';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';


const Home = () => {
    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".smooth-scroll"),
            lerp: 0.09,
            reloadOnContextChange: true,
            smooth: true
        });
        return () => {
            scroll.destroy();
        }
    }, []);

    return (
        <>
            <PageTransitioning />
            <MainContainer className="smooth-scroll" data-scroll-container>
                <Intro data-scroll-section />
                <About data-scroll-section data-scroll-target></About>
            </MainContainer>
        </>
    )
}

export default Home;