import React from 'react';
import {NavLink, Redirect, useHistory} from "react-router-dom";
import BlogOverview from "../pages/BlogOverview";

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
                <li>
                    <NavLink to="/blogpost" activeClassName="active-link">BlogPost</NavLink>
                </li>

                <li>
                    <NavLink to="/blogoverview" activeClassName="active-link">Overview</NavLink>
                </li>
                <li>
                    <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                </li>
                <li>
                    {isAuth ? <span> Aangelogd </span> : <span> Uitgelogd </span>}
                </li>
                <li>
                    <button disabled={!isAuth} type="button" onClick={signOut}>
                        Uitloggen
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

