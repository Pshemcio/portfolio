import React, { useState } from 'react';
import {
    MainHeader,
    Socials
} from './Header.styled';
import { BaseLink } from '../Components';
import MainNavigation from './MainNavigation';
import { Burger } from '.';

import { Linkedin } from '@styled-icons/bootstrap/Linkedin';
import { Github } from '@styled-icons/bootstrap/Github';


function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const socials = [
        { name: "Github", path: "https://github.com/Pshemcio", icon: <Github /> },
        { name: "Linkedin", path: "https://www.linkedin.com/in/przemys%C5%82aw-majka-9540b01b7/", icon: <Linkedin /> },
    ];

    return (
        <>
            <MainHeader>
                <Burger clicked={click} onclick={handleClick} />
                <Socials>
                    {socials.map((link, index) => (
                        <BaseLink className="cursor_hover" target='_blank' key={index} href={link.path} rel="noreferrer" iconLink>
                            {link.icon}
                        </BaseLink>
                    ))}
                </Socials>
            </MainHeader>
            <MainNavigation click={click} handleClick={handleClick} />
        </>
    )
}

export default Header;