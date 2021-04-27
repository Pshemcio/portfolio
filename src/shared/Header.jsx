import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
    MainHeader,
    Socials
} from './Header.styled';
import { BaseLink } from '../Components';
import MainNavigation from './MainNavigation';

function Header() {
    const socials = [
        { name: "Github", path: "https://github.com/Pshemcio", icon: faGithub },
        { name: "Linkedin", path: "https://www.linkedin.com/in/przemys%C5%82aw-majka-9540b01b7/", icon: faLinkedin },
    ];

    return (
        <MainHeader>
            <MainNavigation />
            <Socials>
                {socials.map((link, index) => (
                    <BaseLink target='_blank' key={index} href={link.path} rel="noreferrer" iconLink>
                        <FontAwesomeIcon icon={link.icon} />
                    </BaseLink>
                ))}
            </Socials>
        </MainHeader>
    )
}

export default Header;