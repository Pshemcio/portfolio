import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
    MainHeader,
    MainNavigation,
    MainNavigationList,
    MainNavigationItem,
    Socials
} from './Header.styled';
import { StyledNavLink, BaseLink } from '../Components';

function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "Projekty", path: "/projects" },
        { name: "O mnie", path: "/about" }
    ];

    const socials = [
        { name: "Github", path: "https://github.com/Pshemcio", icon: faGithub },
        { name: "Linkedin", path: "https://www.linkedin.com/in/przemys%C5%82aw-majka-9540b01b7/", icon: faLinkedin },
    ];

    return (
        <MainHeader>
            <MainNavigation>
                <MainNavigationList grow>
                    {links.map((link, index) => (
                        <MainNavigationItem key={index}>
                            <StyledNavLink to={link.path} exact activeClassName="current" >
                                {link.name}
                            </StyledNavLink>
                        </MainNavigationItem>
                    ))}
                </MainNavigationList>
            </MainNavigation>
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