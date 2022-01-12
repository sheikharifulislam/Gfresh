import React from 'react';
import './aboutUsDetails.css';

const AboutUsDetails = () => {
    return (
        <section id="about-us-details-section">
            <div className="container">
                <div className="about-us-details-container">
                    <div className="about-us-image">
                        <img src="image/about-img.jpg" alt="Description Display" />
                    </div>
                    <div className="about-us-descriptions">
                        <h1 className="about-us-descriptions-title">Welcome To Our Shop</h1>
                        <h2>Fresh And Organic Groceries</h2>
                        <p>GFresh.com offers you do not have to take the trouble of going to bazaar because we will bring all the food and grocery in your home. Quality is our primary concern. Food and grocery sold from here are the best quality because we know that no customer can compromise with quality.</p>
                        <p>To buy fresh vegetables like bitter gourd, capsicum green, carrot, cucumber, green papaya, hyacinth bean, okra, snake gourd, string bean, aloe vera, etc., you may visit our Ecommerce website.</p>
                        <button id="about-read-more-btn">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsDetails;