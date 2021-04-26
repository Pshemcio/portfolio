import { Button, HeadingDesc, TextReveal } from '../Components';
import { AboutStyled, AboutDiv } from './';

const About = () => {
    return (
        <AboutStyled id="about" data-scroll-section data-scroll-target >
            <Button data-scroll data-scroll-position-top>No elo</Button>
            <HeadingDesc>
                <TextReveal data-scroll data-scroll-repeat>
                    Przemek Majka
                </TextReveal>
            </HeadingDesc>
            <AboutDiv data-scroll data-scroll-repeat data-scroll-direction="horizontal" data-scroll-speed="-8" />
        </AboutStyled>
    )
}

export default About;