import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="brand-logo">
                    <NavLink to="/" className="logo">
                        <i className="fas fa-shopping-basket"></i>
                        groco
                    </NavLink>
                </div>
                <div className="menu">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop">Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signup">SignUp</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="icons">
                    <div id="menu-btn" className="fas fa-bars"/>
                    <div id="search-btn" className="fas fa-search"/>
                    <div id="cart-btn" className="fas fa-shopping-cart"/>
                    <div id="acount-btn" className="fas fa-user"/>
                </div>
                <form id="search-form">
                    <input type="search" placeholder="Search here..." id="search-box"/>
                    <label htmlFor="search-box" class="fas fa-search"></label>
                </form>
            </div>
        </header>
    );
};

export default Navbar;