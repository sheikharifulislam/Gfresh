import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './checkoutForm/CheckoutForm';
import axios from 'axios';
import swal from 'sweetalert';

const stripePromise = loadStripe('pk_test_51JxEmwFExVFWz35ALAJP7ja0wqSN0YNkunWjqBRq2EKgxWFwudBOcoMUbZq4ieWoX4fWm2aBWmNQG3sxtPykEcGR00unAeDLtf');

const Payment = () => {
    let orderData = localStorage.getItem('orderData');
    orderData = JSON.parse(orderData);
    const [singleProduct, setSingleProduct] = useState({});
   
    useEffect(() => {
        axios.get(`https://arcane-lake-20041.herokuapp.com/all-products?productId=${orderData.productId}`)
        .then((response) => {
            setSingleProduct(response.data);
        })
        .catch((error) => {
            swal({
                icon: 'warning',
                text: 'something was wrong please try again',
                button: 'ok',
            })
        })
    }, [orderData.productId])

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm singleProduct={singleProduct} orderData={orderData} />
        </Elements>
    );
};

export default Payment;