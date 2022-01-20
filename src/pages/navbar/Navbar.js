import React, {useRef, useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    
    const [searchData, setSearchData] = useState({});
    const searchForm = useRef(null);
    const navigate = useNavigate();

    const toggleSearchBox = () => {
        searchForm.current.classList.toggle('active-search-form');
    }
    
    const removeSearchBox = () => {
        searchForm.current.classList.remove('active-search-form');
    }



    const handleSearchBox = (e) => {
       const field = e.target.name;
       const value = e.target.value;
       const newSearchData = {...searchData};
       newSearchData[field] = value;
       setSearchData(newSearchData);   
    }

    const handleSearchForm = () => {
        console.log(searchData);
        navigate(`/search?productName=${searchData.search}`,{
            replace: true,
        })
    }

    return (
        <header className="header">
            <div className="header-container">
                <div className="brand-logo">
                    <NavLink to="/" className="logo">
                        <i className="fas fa-shopping-basket"></i>
                        GFresh
                    </NavLink>
                </div>
                <div className="menu">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/home">Home</NavLink>
                            </li>                           
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/review">Review</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blogs">Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/registration">SignUp</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="icons">
                    <div id="menu-btn" className="fas fa-bars"/>
                    <div id="search-btn" className="fas fa-search" onClick={toggleSearchBox} />
                    <div id="cart-btn" className="fas fa-shopping-cart" onClick={removeSearchBox} />
                    <div id="acount-btn" className="fas fa-user" onClick={removeSearchBox} />
                </div>
                <form className="search-form" ref={searchForm}>
                    <input type="search" placeholder="Search here..." id="search-box" name="search" value="null" onInput={handleSearchBox}/>
                    <label htmlFor="search-box" className="fas fa-search" onClick={handleSearchForm}/>
                </form>
            </div>
        </header>
    );
};

export default Navbar;