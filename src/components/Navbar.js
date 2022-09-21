import React from 'react';
import {NavLink, useHistory} from "react-router-dom";

const Navbar = ({isAuth, toggleAuth}) => {
    const history = useHistory();
    console.log((isAuth))

    function signOut() {
        toggleAuth(false);
        history.push('/')
    }

    return (
        <nav>
            <ul>

                <li>
                    <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                </li>
                {isAuth === true
                    ? <>
                        <li>
                            <NavLink to="/blognew" activeClassName="active-link">Blognew</NavLink>
                        </li>

                        <li>
                            <NavLink to="/blogoverview" activeClassName="active-link">BlogOverview</NavLink>
                        </li>
                        <li>
                            <button type="button" onClick={signOut}>
                                Uitloggen
                            </button>
                        </li>
                    </>
                    :
                    <li>  <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                    </li>
                }
            </ul>
        </nav>
    );
};

export default Navbar;

