import React from 'react';
import './headerBackgroundBanner.css';

const HeaderBackgroundBanner = ({title}) => {
    return (
        <section id="contact-page-header" style={{backgroundImage: 'url("image/heading-bg.jpg")'}}>
            <div className="contact-page-header-title">
                <h2>{title}</h2>
            </div>
        </section>
    );
};

export default HeaderBackgroundBanner;