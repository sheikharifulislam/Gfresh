import React from 'react';
import ContactFormAndLocation from './contactFormAndLocation/ContactFormAndLocation';
import ContactOption from './contactOption/ContactOption';
import ContactPageHeader from './contactPageHader/ContactPageHeader';

const Contact = () => {
    return (
        <>
            <ContactPageHeader/>
            <ContactOption/>
            <ContactFormAndLocation/>
        </>
    );
};

export default Contact;