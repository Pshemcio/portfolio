import { Intro, About, Container } from './index';
import { MainContainer } from '../Components/index';
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
    }, [])

    return (
        <MainContainer className="smooth-scroll">
            <Intro />
            <About data-scroll-section data-scroll-target></About>
        </MainContainer>
    )
}

export default Home;