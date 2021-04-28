import { Heading2, Paragraph, SectionContainer, MainLink, TextReveal } from '../Components';

const AboutShort = () => {
    return (
        <SectionContainer id="about" data-scroll-section>
            <Heading2>
                <TextReveal data-scroll>
                    Cześć
                </TextReveal>
            </Heading2>
            <Paragraph>
                <TextReveal data-scroll shift={.3} transparent>
                    Nazywam się Przemysław Majka, mieszkam w Krakowie.
                    Swoją przygodę z FrontEndem rozpocząłem pod koniec 2019 roku. Od tamtej pory na naukę poświęcam każdą wolną chwilę i sprawia mi ona ogromną przyjemność.
                    Ciągle dążę do poszerzania swoich kompetencji poprzez poznawanie najnowszych rozwiązań i technologii.
                </TextReveal>
            </Paragraph>
            <Paragraph nice>
                <TextReveal data-scroll>
                    Poszukuję pracy jako FrontEnd Developer.
                </TextReveal>
            </Paragraph>
            <MainLink className="cursor_hover" to={"/about"} arrow="true">
                Więcej
            </MainLink>
            {/* <ImageWrapper data-scroll>
                <Image src={myFace} alt="my face" />
            </ImageWrapper> */}
        </SectionContainer>
    )
}

export default AboutShort;