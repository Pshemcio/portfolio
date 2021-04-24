import { Button } from '../Components/index';
import { AboutStyled, AboutDiv } from './Home.styled';

const About = () => {
    return (
        <AboutStyled id="about">
            <Button data-scroll data-scroll-position-top>No elo</Button>
            <AboutDiv data-scroll data-scroll-repeat data-scroll-direction="horizontal" data-scroll-speed="-8" />
        </AboutStyled>
    )
}

export default About
