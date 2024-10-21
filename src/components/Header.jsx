import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'; 
import './Header.css';

const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [initialTab, setInitialTab] = useState('cart'); 
    const toggleSidebar = (tab) => {
        setInitialTab(tab);
        setSidebarOpen(!isSidebarOpen);
    };
    const cartItems = useSelector((state) => state.addItem);
    const cartItemCount = cartItems.length;

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-2">
                    <Navbar />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavLink className="navbar-brand mx-auto fw-bold" to="/">LEVENTS</NavLink>
                        <div className="d-flex align-items-center">
                            {/* Search Icon */}
                            <button className="icon-button" aria-label="Search">
                                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                            </button>
                            {/* Account Icon */}
                            <button className="icon-button" onClick={() => toggleSidebar('account')} aria-label="Account">
                                <FontAwesomeIcon icon={faUser} size="lg" />
                            </button>
                            {/* Cart Icon with item count */}
                            <button className="icon-button" onClick={() => toggleSidebar('cart')} aria-label="Cart">
                                <FontAwesomeIcon icon={faBagShopping} size="lg" />
                                {cartItemCount > 0 && (
                                    <span className="cart-count">{cartItemCount}</span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(false)} initialTab={initialTab} />
        </>
    );
}

export default Header;
