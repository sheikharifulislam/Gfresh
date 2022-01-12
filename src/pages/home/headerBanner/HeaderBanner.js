import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './headerBanner.css';


const HeaderBanner = () => {

    const [bannerData,setBannerData] = useState([]);

    useEffect(() => {
        fetch('/headerBannerData.json')
        .then((response) => response.json())
        .then((data) => setBannerData(data))
        .catch(error => console.log(error.message));
    },[])
    
    return (
        <section id="header-banner">
            <div className="container-fluid">
                <div className="banner-container">
                   {
                       bannerData.map((data) => (
                            <div className="banner" key={data.id}>
                                <div className="banner-image">
                                    <img src={data.bannerImage} alt="current offer thumbnail" />
                                </div>
                                <div className="banner-content">
                                    <h3>{data.offerName}</h3>
                                    <p>{data.offerRange}</p>
                                    <NavLink to="/#" id="banner-shop-btn">shop now</NavLink>
                                </div>
                            </div>
                       ))
                   }
                </div>
            </div>
        </section>
    );
};

export default HeaderBanner;