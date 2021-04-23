import React, { useState, useEffect } from 'react';
import {
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Home } from '../Home';
import Projects from '../Projects/Projects';
import {
    MainNavigation,
    MainNavigationList,
    MainNavigationItem,
    SocialsName,
} from './Header.styled';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "Projekty", path: "/projects" },
    ];

    const socials = [
        { name: "Github", path: "https://github.com/Pshemcio", icon: faGithub },
        { name: "Linkedin", path: "https://www.linkedin.com/in/przemys%C5%82aw-majka-9540b01b7/", icon: faLinkedin },
    ];

    return (
        <div>
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

            <Switch>
                <Route path='/projects' render={props => <Projects {...props} />} />
                {/* <Route path='/props' render={props => <Props {...props} />} />
                <Route path='/destructure' render={props => <Destructure {...props} />} />
                <Route path='/logic' render={props => <Logic {...props} />} />
                <Route path='/lifecycles' render={props => <Lifecycles {...props} />} />
                <Route path='/useeffect' render={props => <UseEffect {...props} />} /> */}
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}

export default Header;