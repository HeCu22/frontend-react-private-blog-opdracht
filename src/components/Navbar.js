import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/blogpost">BlogPost</NavLink>
                </li>

                <li>
                    <NavLink to="/blogoverview">Overview</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>

            </ul>
        </nav>
    );
};

export default Navbar;

