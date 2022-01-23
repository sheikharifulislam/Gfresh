import React from 'react';

const Payment = () => {
    return (
        <section id="payment-form">
            <form action="">
                <div className="payment-form-design">
                    <label htmlFor="card-number">Card Number</label>
                    <input type="number" name="cardNumber" id="card-number" />
                </div>
                <div className="payment-form-desing">
                    <div className="payment-form-cvc">
                        <label htmlFor="cvc-number">CVC Number</label>
                        <input type="number" name="cvcNumber" id="cvc-number" />
                    </div>
                    <div className="payment-form-expiry-date">
                        <label htmlFor="expiry-date">Expiry Date</label>
                        <input type="date" name="expiryDate" id="expiry-date" />
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Payment;