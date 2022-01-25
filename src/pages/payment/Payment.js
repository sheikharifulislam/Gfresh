import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './checkoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51JxEmwFExVFWz35ALAJP7ja0wqSN0YNkunWjqBRq2EKgxWFwudBOcoMUbZq4ieWoX4fWm2aBWmNQG3sxtPykEcGR00unAeDLtf');

const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default Payment;