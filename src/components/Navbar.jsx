import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (isOpen && !document.querySelector('.sidenav').contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div>
            <nav className="topnav">
                <div style={{ textAlign: 'center' }}>
                    <NavLink className="topnav-link" aria-current="page" to="/products">
                        <strong>Levents Vacation Dream 2024</strong>
                    </NavLink>
                </div>
            </nav>
            <div className={`sidenav ${isOpen ? 'open' : ''}`}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/collections/classic-line">LEVETS® CLASSIC</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/bout">ABOUT</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/collections/new-arrival">NEW ARRIVAL</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">ALL PRODUCTS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/tops">TOPS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/bottoms">BOTTOMS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/outerwear">OUTERWEAR</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/accessories">ACCESSORIES</NavLink>
                    </li>
                </ul>
            </div>
            <nav className="navmenu">
                <a href="#" onClick={toggleNav}>
                    <svg width="30" height="30" id="icoOpen">
                        <path d="M0,5 30,5" stroke="#000" strokeWidth="1" />
                        <path d="M0,14 30,14" stroke="#000" strokeWidth="1" />
                        <path d="M0,23 30,23" stroke="#000" strokeWidth="1" />
                    </svg>
                </a>
            </nav>
            <div id="main">

            </div>
        </div>
    );
};

export default Navbar;
