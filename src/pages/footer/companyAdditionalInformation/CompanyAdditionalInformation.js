import React from 'react';
import './companyAdditionalInformation.css';

const CompanyAdditionalInformation = () => {
    return (
        <section id="additional-information">
            <div className="container-fluid">
                <div className="additional-information-container">
                    <div className="payment-method">
                        <h3>Payment Methods</h3>
                        <img src="image/payment.png" alt="Payment Method" />
                    </div>
                    <div className="coverage-area">
                        <h3>GFresh International</h3>
                        <img src="image/bangladesh.png" alt="Bangladesh" title="Bangladesh" />
                        <img src="image/india_flag.png" alt="India" title="India" />
                        <img src="image/pakistan.png" alt="Pakistan" title="Pakistan" />
                        <img src="image/mayanmar.png" alt="Mayanmar" title="Mayanmar" />
                        <img src="image/japan.png" alt="Japan" title="Japan" />
                    </div>
                    <div className="verified-by">
                        <h3>Verified By</h3>
                        <div className="verified-image-container">
                            <img src="image/godaddy.svg" alt="Godaddy" />
                            <img src="image/norton.svg" alt="Norton" />
                            <img src="image/ssl.svg" alt="SSL" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyAdditionalInformation;