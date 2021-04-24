import { Intro, About } from './';
import { MainContainer, InitialContainer } from '../Components/';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';


const Home = () => {
    useEffect(() => {
        console.log('start home');

        const scroll = new LocomotiveScroll({
            el: document.querySelector(".smooth-scroll"),
            lerp: 0.09,
            reloadOnContextChange: true,
            smooth: true
        });
        return () => {
            console.log('koniec home');

            scroll.destroy();
        }
    }, []);

    return (
        <InitialContainer exit={{
            height: 0,
            transition: {
                duration: 1.2,
                ease: [0.87, 0, 0.13, 1]
            }
        }}>
            <MainContainer className="smooth-scroll" data-scroll-container>
                <Intro data-scroll-section />
                <About data-scroll-section data-scroll-target></About>
            </MainContainer>
        </InitialContainer>
    )
}

export default Home;