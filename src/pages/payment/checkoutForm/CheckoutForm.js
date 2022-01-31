import React, { useContext, useEffect, useState } from 'react';
import { useStripe, useElements,CardNumberElement, CardExpiryElement, CardCvcElement} from '@stripe/react-stripe-js';
import {FirebaseContext} from '../../../context/FirebaseProvider';
import './checkout.css';
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({singleProduct, orderQuantity}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const {user} = useContext(FirebaseContext);
    const navigate = useNavigate();
    const [paymentProcessing, serPaymentProcessing] = useState(false);

    useEffect(() => {
      axios.post(`http://localhost:5000/create-payment-intent`,{
        amount: singleProduct.offerPrice,
        quantity: orderQuantity,
      })
      .then((response) => {
        setClientSecret(response.data.clientSecret);
      })
    }, [singleProduct.offerPrice, orderQuantity])
   

    const handleSubmit = async (e) => {    
      e.preventDefault();     
  
      if (!stripe || !elements) {
        return;
      }
      const card = elements.getElement(CardNumberElement);
     
      if (card == null) {
        return;
      }

      // serPaymentProcessing(true);

      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        swal({                    
          text: `${error.message}`,                         
          icon: "warning",          
          buttons: 'ok',        
        })
      } 

       //payment intent 

      const {paymentIntent, confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card,
            billing_details: {
              name: user.displayName,
              email: user.email,
            }
          }
        }
      )

      if(paymentIntent) {
        // serPaymentProcessing(false);
        localStorage.removeItem('orderData');
        swal({
          icon: 'success',
          text: 'succefully payment',
          button: 'Continue Shopping',
        })
        .then(() => {
          navigate('/home', {
            replace: true,
          })
        })        
      }
      else if(confirmError) {
        // serPaymentProcessing(false);
        swal({
          icon: 'warning',
          text: 'Payment Field Please Try again',
          button: 'ok',
        })
      }

     
    

    

    };
    
    

    return (
      <section id="payment-form-section">
          <div className="payment-form-title">
              <h2>Checkout Form</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="payment-form-design">
                <label htmlFor="card-number">Card Number</label>
                <CardNumberElement className="input" />
              </div>
              <div className="payment-form-design">
                  <div className="payment-form-expiry-date">
                      <label htmlFor="expiry-date">Expiry Date</label>
                      <CardExpiryElement className="input"  />
                  </div>
                  <div className="payment-form-cvc">
                      <label htmlFor="cvc-number">CVC Number</label>
                      <CardCvcElement className="input"  />
                  </div>                    
              </div>
              <input type="submit" value="pay" id="payment-confirm-btn" disabled={!stripe } />
          </form>
      </section>
    );
};

export default CheckoutForm;