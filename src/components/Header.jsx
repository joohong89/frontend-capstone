import React from 'react';
import Nav from "./Nav.jsx";

const Header = () => {
    return (
        <header>
            <img src="/Logo.svg" alt="logo"/>
            <Nav></Nav>
        </header>
    );
};

export default Header;