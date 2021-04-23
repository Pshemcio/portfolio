import React, { useState, useEffect } from 'react';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
// import { useHistory } from "react-router-dom";

import { Home } from '../Home';
import Work from '../Work/Work';

function Header() {
    // const history = useHistory();
    // NIE DZIALA TO Z LINKAMI, buttony jak najbardziej
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div>
            {/* <div onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? 'Schowaj counter' : 'Pokaż counter'}

            </div> */}

            {/* <img src={logo} className="App-logo" alt="logo" onClick={() => setShowMenu(!showMenu)} /> */}

            {/* <div className={
                showMenu ? 'main-navigation' : 'main-navigation hidden'
            }>
                <nav>
                    <ul >
                        <li>
                            <Link to='/' onClick={() => setShowMenu(!showMenu)}>Home Page</Link>
                        </li>
                        <li>
                            <Link to='/counter' onClick={() => setShowMenu(!showMenu)}>counter</Link>
                        </li>
                        <li>
                            <Link to='/props' onClick={() => setShowMenu(!showMenu)}>props</Link>
                        </li>
                        <li>
                            <Link to='/destructure' onClick={() => setShowMenu(!showMenu)}>destructure</Link>
                        </li>
                        <li>
                            <Link to='/logic' onClick={() => setShowMenu(!showMenu)}>logic</Link>
                        </li>
                        <li>
                            <Link to='/lifecycles' onClick={() => setShowMenu(!showMenu)}>lifecycles</Link>
                        </li>
                        <li>
                            <Link to='/useeffect' onClick={() => setShowMenu(!showMenu)}>useeffect</Link>
                        </li>
                    </ul>
                </nav>
            </div> */}

            <nav>
                <ul >
                    <li>
                        <Link to='/'>Home Page</Link>
                    </li>
                    <li>
                        <Link to='/work'>Work</Link>
                    </li>
                </ul>
            </nav>



            <Switch>
                <Route path='/work' render={props => <Work {...props} />} />
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