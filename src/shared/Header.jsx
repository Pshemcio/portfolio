import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
    MainHeader,
    Socials
} from './Header.styled';
import { BaseLink } from '../Components';
import MainNavigation from './MainNavigation';
import { Burger } from '.';

function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const socials = [
        { name: "Github", path: "https://github.com/Pshemcio", icon: faGithub },
        { name: "Linkedin", path: "https://www.linkedin.com/in/przemys%C5%82aw-majka-9540b01b7/", icon: faLinkedin },
    ];

    return (
        <>
            <MainHeader>
                <Burger clicked={click} onclick={handleClick} />
                <Socials>
                    {socials.map((link, index) => (
                        <BaseLink className="cursor_hover" target='_blank' key={index} href={link.path} rel="noreferrer" iconLink>
                            <FontAwesomeIcon icon={link.icon} />
                        </BaseLink>
                    ))}
                </Socials>
            </MainHeader>
            <MainNavigation click={click} handleClick={handleClick} />
        </>
    )
}

export default Header;