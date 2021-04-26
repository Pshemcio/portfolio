import { HeadingDesc, Heading1, TextReveal, Links } from '../Components/index';
import {
    HeaderStyled,
    SvgWrapper,
    IntroContainer,
    LogoPath,
    InfoWrapper,
    IntroLinksList
} from './';
import Theme from '../Settings/theme';

const {
    colors: {
        tertiaryColor,
        tertiaryColorDark
    }
} = Theme;

const Intro = () => {
    return (
        <HeaderStyled data-scroll-section >
            <IntroContainer>
                <SvgWrapper data-scroll>
                    <svg viewBox="0 0 294 282" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="header-shape-gradient" x2="0.8" y2=".7">
                                <stop offset="0%" stopColor={tertiaryColor} />
                                <stop offset="10%" stopColor={tertiaryColor} />
                                <stop offset="100%" stopColor={tertiaryColorDark} />
                            </linearGradient>
                        </defs>
                        <LogoPath
                            d="M1 280.028H29.1874V35.089L144.853 151.727H146.797L202.2 94.8658C202.2 87.0899 197.826 72.5102 192.48 67.6503L145.825 112.847H144.853L33.0754 1.06966H1V280.028Z" />
                        <LogoPath
                            d="M138.049 1.06964H50.571H49.599L76.8145 29.2571H138.049C237.677 24.3972 239.135 169.222 138.049 166.306H78.7584V101.184L50.571 72.9962H49.599V281H78.7584V195.466H138.049C275.584 199.84 277.042 -3.30426 138.049 1.06964Z" />
                        <LogoPath
                            d="M257.603 1.06966L229.415 29.2571C234.761 35.0193 241.079 47.1691 244.481 55.0146L263.435 36.061V281H292.594V1.06966H257.603Z" />
                    </svg>
                </SvgWrapper>
                <InfoWrapper>
                    <Heading1 data-scroll data-scroll-speed="-2">
                        <TextReveal data-scroll >
                            Przemek Majka
                        </TextReveal>
                    </Heading1>
                    <HeadingDesc data-scroll data-scroll-speed="-3">
                        <TextReveal data-scroll delay={1.2}>
                            FrontEnd Developer
                        </TextReveal>
                    </HeadingDesc>
                </InfoWrapper>
                <IntroLinksList data-scroll>
                    <Links href="#about" data-scroll-to>
                        O mnie
                    </Links>
                    <Links href="#projects" data-scroll-to>
                        Projekty
                    </Links>
                    <Links href="#contact" data-scroll-to>
                        Kontakt
                    </Links>
                </IntroLinksList>
            </IntroContainer>
        </HeaderStyled>
    )
}

export default Intro;