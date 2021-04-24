import React from 'react';
import {
    NavLink
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import {
    MainNavigation,
    MainNavigationList,
    MainNavigationItem,
    SocialsName,
} from './Header.styled';

function Header() {
    const links = [
        { name: "Home", path: "/" },
        { name: "Projekty", path: "/projects" },
    ];

    const socials = [
        { name: "Github", path: "https://github.com/Pshemcio", icon: faGithub },
        { name: "Linkedin", path: "https://www.linkedin.com/in/przemys%C5%82aw-majka-9540b01b7/", icon: faLinkedin },
    ];

    return (
        <MainNavigation>
            <MainNavigationList grow>
                {links.map((link, index) => (
                    <MainNavigationItem key={index}>
                        <NavLink to={link.path} exact activeClassName="current">
                            {link.name}
                        </NavLink>
                    </MainNavigationItem>
                ))}
            </MainNavigationList>
            <MainNavigationList>
                {socials.map((link, index) => (
                    <MainNavigationItem key={index}>
                        <a target='_blank' href={link.path} rel="noreferrer">
                            <FontAwesomeIcon icon={link.icon} />
                            <SocialsName>
                                {link.name}
                            </SocialsName>
                        </a>
                    </MainNavigationItem>
                ))}
            </MainNavigationList>
        </MainNavigation>
    )
}

export default Header;