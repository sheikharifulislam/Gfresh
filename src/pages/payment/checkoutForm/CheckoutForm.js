import React, { useContext, useEffect, useState } from 'react';
import { useStripe, useElements,CardNumberElement, CardExpiryElement, CardCvcElement} from '@stripe/react-stripe-js';
import {FirebaseContext} from '../../../context/FirebaseProvider';
import './checkout.css';
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import baseurl from '../../../utils/baseurl.js'; 

const CheckoutForm = ({singleProduct, orderData}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const {user} = useContext(FirebaseContext);
    const navigate = useNavigate();
    const [paymentProcessing, serPaymentProcessing] = useState(false);
    const baseUrl = baseurl();   

    useEffect(() => {
      axios.post(`${baseUrl}payment/create-payment-intent`,{
        amount: singleProduct.offerPrice,
        quantity: orderData.orderQuantity,
      })
      .then((response) => {
        setClientSecret(response.data.clientSecret);
      })
    }, [singleProduct.offerPrice, orderData.orderQuantity,baseUrl])
   

    const handleSubmit = async (e) => {    
      e.preventDefault();     
  
      if (!stripe || !elements) {
        return;
      }
      const card = elements.getElement(CardNumberElement);
     
      if (card == null) {
        return;
      }

      serPaymentProcessing(true);

      // Use your card Element with other Stripe.js APIs
      const {error} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        swal({                    
          text: `${error.message}`,                         
          icon: "warning",          
          buttons: 'ok',        
        })
        serPaymentProcessing(false);
      } 

       //payment intent 

      const {paymentIntent, confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card,
            billing_details: {
              name: user?.displayName,
              email: user?.email,
              address: {
                city: user?.city,
              }
            }
          }
        }
      )

      if(paymentIntent) {
        serPaymentProcessing(false);
        const newOrderData = {
          productInfo: {
            ...singleProduct,
          },          
          orderInfo: {
            ...orderData,            
            orderStatus: 'pending',
          },
          userInfo: {
            userEmail: user.email,
            userName: user.displayName,
          }
        }
        let date = new Date().toLocaleDateString();
        date = date.split('/');
        let formateDate = `${date[1]}/${date[0]}/${date[2]}`;
        newOrderData.orderInfo.orderDate = formateDate;
        delete newOrderData._id;
        delete newOrderData.orderInfo.productId;
        delete newOrderData.quantity;

        
        axios.post(`${baseUrl}orders/add-order?productId=${singleProduct._id}`,newOrderData)
        .then((response) => {
          if(response.data.result.insertedId && response.data.updateProductQuantity.modifiedCount >= 1) {
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
        })        
      }
      else if(confirmError) {
        serPaymentProcessing(false);
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
              <input type="submit" value={paymentProcessing ? 'pay...' : 'pay'} id="payment-confirm-btn" disabled={!stripe || paymentProcessing} />
          </form>
      </section>
    );
};

export default CheckoutForm;