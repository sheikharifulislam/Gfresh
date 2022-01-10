import React from 'react';
import './contactPageHeader.css'

const ContactPageHeader = () => {
    return (
        <section id="contact-page-header" style={{backgroundImage: 'url("image/heading-bg.jpg")'}}>
            <div className="contact-page-header-title">
                <h2>Contact Us</h2>
            </div>
        </section>
    );
};

export default ContactPageHeader;