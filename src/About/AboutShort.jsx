import { Heading2, Paragraph, SectionContainer, MainLink, TextReveal } from '../Components';
import { AboutDiv } from './';

const AboutContent = () => {
    return (
        <SectionContainer id="about" data-scroll-section data-scroll-target >
            <Heading2>
                <TextReveal data-scroll delay={.4}>
                    Cześć
                </TextReveal>
            </Heading2>
            <Paragraph>
                <TextReveal data-scroll shift={.2} delay={1}>
                    Nazywam się Przemysław Majka, mieszkam w Krakowie.
                    Swoją przygodę z FrontEndem rozpocząłem pod koniec 2019 roku. Od tamtej pory na naukę poświęcam każdą wolną chwilę i sprawia mi ona ogromną przyjemność.
                    Ciągle dążę do poszerzania swoich kompetencji poprzez poznawanie najnowszych rozwiązań i technologii.
                </TextReveal>
            </Paragraph>
            <Paragraph marginBigger>
                <TextReveal data-scroll delay={.6}>
                    Poszukuję pracy jako Junior FrontEnd Developer.
                </TextReveal>
            </Paragraph>
            <Paragraph nice>
                <TextReveal data-scroll delay={1}>
                    Życzę miłego zwiedzania!
                </TextReveal>
            </Paragraph>
            <MainLink className="cursor_hover" to={"/about"}>
                Więcej
            </MainLink>

        </SectionContainer>
    )
}

export default AboutContent;