import {
    Heading2,
    Heading3,
    Heading4,
    SectionContainer,
    TextReveal,
    FooterForm,
    CryptoMailLink,
    CryptoPhoneLink
} from '../Components';
import { LogoPath, SvgWrapper } from '../Home';
import { Theme } from '../Settings';
import { FooterContactContainer, CopywrightContainer } from './Footer.styled';

const {
    colors: {
        tertiaryColor,
        tertiaryColorDark
    }
} = Theme;

const Footer = () => {
    const test = (e) => {
        e.target.href = 'mailto:' + e.target.dataset.name + '@' + e.target.dataset.domain + '.' + e.target.dataset.tld;
    }

    const test2 = (e) => {
        e.target.href = 'tel: +48' + e.target.dataset.first + e.target.dataset.second + e.target.dataset.third;
    }

    return (
        <>
            <SectionContainer id="footer" data-scroll-section>
                <Heading2>
                    <TextReveal data-scroll>
                        Kontakt
                    </TextReveal>
                </Heading2>
                <Heading3 footer>
                    <TextReveal data-scroll delay={.5}>
                        Napisz do mnie!
                    </TextReveal>
                </Heading3>
                <FooterForm />
                <FooterContactContainer>
                    <CryptoMailLink href="mailto:someWeirdEmail@onet.xyz"
                        data-name="przemysaw.majka"
                        data-domain="gmail"
                        data-tld="com"
                        onClick={test}
                        footer
                    />
                    <CryptoPhoneLink href="tel:901928492"
                        data-first="884"
                        data-second="283"
                        data-third="234"
                        onClick={test2}
                        footer
                    />
                </FooterContactContainer>
            </SectionContainer>
            <CopywrightContainer>
                <SvgWrapper data-scroll footer>
                    <svg viewBox="0 0 294 282" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <LogoPath
                            d="M1 280.028H29.1874V35.089L144.853 151.727H146.797L202.2 94.8658C202.2 87.0899 197.826 72.5102 192.48 67.6503L145.825 112.847H144.853L33.0754 1.06966H1V280.028Z" footer />
                        <LogoPath
                            d="M138.049 1.06964H50.571H49.599L76.8145 29.2571H138.049C237.677 24.3972 239.135 169.222 138.049 166.306H78.7584V101.184L50.571 72.9962H49.599V281H78.7584V195.466H138.049C275.584 199.84 277.042 -3.30426 138.049 1.06964Z" footer />
                        <LogoPath
                            d="M257.603 1.06966L229.415 29.2571C234.761 35.0193 241.079 47.1691 244.481 55.0146L263.435 36.061V281H292.594V1.06966H257.603Z" footer />
                    </svg>
                </SvgWrapper>
                <Heading4>
                    &copy; Przemysław Majka, 2021
                </Heading4>
            </CopywrightContainer>
        </>
    )
}

export default Footer
