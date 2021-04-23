import { MainContainer } from '../Components/index';
import { ContainerWork } from './index';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';

const Work = () => {
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
            <ContainerWork />
            <ContainerWork white />
        </MainContainer>
    )
}

export default Work
