import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="nav-mainContainer">
            <h1 className="nav-logo_text">BM</h1>
            <ul className="nav-list">
                <li className="nav-listItem"><a href="#about_me">About Me</a></li>
                <li className="nav-listItem"><a href="#education">Education</a></li>
                <li className="nav-listItem"><a href="#projects">Projects</a></li>
                <li className="nav-listItem"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;