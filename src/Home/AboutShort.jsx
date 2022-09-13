import { Heading2, Paragraph, SectionContainer, MainLink, TextReveal } from '../Components';

const AboutShort = () => {
    return (
        <SectionContainer id="about">
            <Heading2>
                <TextReveal data-scroll>
                    Cześć
                </TextReveal>
            </Heading2>
            <Paragraph about="true">
                <TextReveal data-scroll shift={.3} transparent>
                    Nazywam się Przemysław Majka, mieszkam w Krakowie. Swoją przygodę z FrontEndem rozpocząłem pod koniec 2019 roku. Po półtora roku nauki udało mi się znaleźć pierwszą pracę w IT. Obecnie pracuję jako React developer w Sopockiej firmie Devopsbay.
                </TextReveal>
            </Paragraph>
            <Paragraph nice>
                <TextReveal data-scroll>
                    Zapraszam do przeglądania! :)
                </TextReveal>
            </Paragraph>
            <MainLink className="cursor_hover" to={"/about"} arrow="true" aboutshort="true">
                Więcej
            </MainLink>
        </SectionContainer>
    )
}

export default AboutShort;