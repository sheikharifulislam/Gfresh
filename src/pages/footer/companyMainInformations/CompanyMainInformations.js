import React from 'react';
import './companyMainInformations.css';
const CompanyMainInformations = () => {
    return (
        <section id="company-informations-section">
            <div className="container-fluid">
                <div className="information-container">
                    <div className="connected">
                        <h3>Stay Connected</h3>
                        <a href="/#" title="Facebook"><i className="fab fa-facebook-square"></i></a>
                        <a href="/#" title="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href="/#" title="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="/#" title="Messenger"><i className="fab fa-facebook-messenger"></i></a>
                        <a href="/#" title="Whatsapp"><i className="fab fa-whatsapp"></i></a>
                    </div>
                    <div className="shopping-with-us">
                        <h3>Shopping With Us</h3>
                        <p>Making Payments</p>
                        <p>Delivery Options</p>
                        <p>Buyer Protection</p>
                    </div>
                    <div className="customar-service">
                        <h3>Customar Service</h3>
                        <p>Customer Service</p>
                        <p>Transaction Services Agreement</p>
                        <p>Take Our Feedback Survey</p>
                    </div>
                    <div className="Collaborate">
                        <h3>Collaborate with us</h3>
                        <p>Partnerships</p>
                        <p>Affiliate program</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyMainInformations;