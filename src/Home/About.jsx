import { Button } from '../Components';
import { AboutStyled, AboutDiv } from './';

const About = () => {
    return (
        <AboutStyled id="about">
            <Button data-scroll data-scroll-position-top>No elo</Button>
            <AboutDiv data-scroll data-scroll-repeat data-scroll-direction="horizontal" data-scroll-speed="-8" />
        </AboutStyled>
    )
}

export default About
