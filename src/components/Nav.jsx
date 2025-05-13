import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav>
                <ul className="nav">
                    <li>   <Link to="/"> Home</Link></li>
                    <li><a href={''} role={'button'}>About</a></li>
                    <li><a href={''} role={'button'}>Menu</a></li>
                    <li><a href={''} role={'button'}>Reservations</a></li>
                    <li><a href={''} role={'button'}>Order Online</a></li>
                    <li><a href={''} role={'button'}>Login</a></li>
                </ul>

            </nav>
        </>
    );
};

export default Nav;
