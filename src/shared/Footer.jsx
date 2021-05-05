import {
    Heading2,
    Heading3,
    SectionContainer,
    TextReveal,
    FooterForm,
    CryptoMailLink,
    CryptoPhoneLink
} from '../Components';
import { FooterContactContainer } from './Footer.styled';

const Footer = () => {
    const test = (e) => {
        e.target.href = 'mailto:' + e.target.dataset.name + '@' + e.target.dataset.domain + '.' + e.target.dataset.tld;
    }

    const test2 = (e) => {
        e.target.href = 'tel: +48' + e.target.dataset.first + e.target.dataset.second + e.target.dataset.third;
    }

    return (
        <SectionContainer id="footer" data-scroll-section>
            <Heading2>
                <TextReveal data-scroll>
                    Kontakt
                </TextReveal>
            </Heading2>
            <Heading3 footer>
                Napisz do mnie!
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

    )
}

export default Footer
