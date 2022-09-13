import { Phone, Mail } from '@styled-icons/fluentui-system-regular';

import {
    Heading2,
    Heading3,
    SectionContainer,
    TextReveal,
    FooterForm,
    CryptoMailLink,
    CryptoPhoneLink,
    FooterLink
} from '../Components';
import {
    FooterContactContainer,
    FooterContactItem,
    FooterMenuContainer,
    FooterSocialsList,
    FooterSocialsItem,
    FooterSvgWrapper
} from './';
import { CvPdf } from '../docs';

const Footer = () => {
    const socialsFooter = [
        { name: "Facebook", path: "https://www.facebook.com/przemek.majka.10" },
        { name: "Github", path: "https://github.com/Pshemcio" },
        { name: "Linkedin", path: "https://www.linkedin.com/in/przemys%C5%82aw-majka-9540b01b7/" },
    ];

    const updateMail = (e) => {
        e.target.href = 'mailto:' + e.target.dataset.name + '@' + e.target.dataset.domain + '.' + e.target.dataset.tld;
    };

    const updatePhone = (e) => {
        e.target.href = 'tel: +48' + e.target.dataset.first + e.target.dataset.second + e.target.dataset.third;
    };

    return (
        <SectionContainer id="footer">
            <Heading2 footer>
                <TextReveal data-scroll>
                    Kontakt
                </TextReveal>
            </Heading2>
            <Heading3 footer>
                Napisz do mnie!
            </Heading3>
            <FooterForm />
            {/* <FooterContactContainer>
                <FooterContactItem>
                    <FooterSvgWrapper>
                        <Mail />
                    </FooterSvgWrapper>
                    <CryptoMailLink
                        className="cursor_hover"
                        href="mailto:someWeirdEmail@onet.xyz"
                        data-name="przemysaw.majka"
                        data-domain="gmail"
                        data-tld="com"
                        onClick={updateMail}
                        footer
                    />
                </FooterContactItem>
                <FooterContactItem>
                    <FooterSvgWrapper>
                        <Phone />
                    </FooterSvgWrapper>
                    <CryptoPhoneLink
                        className="cursor_hover"
                        href="tel:901928492"
                        data-first="884"
                        data-second="283"
                        data-third="234"
                        onClick={updatePhone}
                        footer
                    />
                </FooterContactItem>
            </FooterContactContainer>
            <FooterMenuContainer>
                <FooterLink href={CvPdf} target='_blank' className="cursor_hover" arrow>
                    CV / Podgląd
                </FooterLink>
                <FooterSocialsList>
                    {socialsFooter.map((social, index) => (
                        <FooterSocialsItem key={index}>
                            <FooterLink className="cursor_hover" href={social.path} target='_blank' rel="noreferrer" arrow>
                                {social.name}
                            </FooterLink>
                        </FooterSocialsItem>
                    ))}
                </FooterSocialsList>
            </FooterMenuContainer> */}
        </SectionContainer>
    )
}

export default Footer
