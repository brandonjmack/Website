import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="nav-mainContainer">
            <h1 className="nav-logo">BM</h1>
            <ul className="nav-list">
                <li className="nav-listItem"><a href="#aboutMe">About Me</a></li>
                <li className="nav-listItem"><a href="#experience">Experience</a></li>
                <li className="nav-listItem"><a href="#skills">Skills</a></li>
                <li className="nav-listItem"><a href="#projects">Projects</a></li>
                <li className="nav-listItem"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;