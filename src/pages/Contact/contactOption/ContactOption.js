import React, { useEffect, useState } from 'react';
import './contactOption.css';

const ContactOption = () => {

    const [contactData,setContactData] = useState([]);

    useEffect(() => {
        fetch('/contactData.json')
        .then((response) => response.json())
        .then((data) => setContactData(data))
        .catch((error) => console.log(error.message))
    },[])

    return (
        <section id="contact-options-section">
            <div className="container">
                <div className="contact-option-container">
                    {
                        contactData.map((data) => (
                            <div className="single-contact-box" key={data.id}>
                                <div className="contact-icon">
                                    <i className={data.icon} />
                                </div>
                                <div className="contact-title">
                                    <h3>{data.contactType}</h3>
                                </div>
                                <div className="contact-option">
                                    <p>{data.contactOption}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ContactOption;