import React from 'react';
import ContactFormAndLocation from './contactFormAndLocation/ContactFormAndLocation';
import ContactOption from './contactOption/ContactOption';
import ContactPageHeader from './contactPageHader/ContactPageHeader';

const Contact = () => {
    return (
        <section id="contact-page">
            <ContactPageHeader/>
            <ContactOption/>
            <ContactFormAndLocation/>
        </section>
    );
};

export default Contact;