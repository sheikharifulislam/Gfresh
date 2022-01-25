import React from 'react';
import { useStripe, useElements,CardNumberElement, CardExpiryElement, CardCvcElement} from '@stripe/react-stripe-js';
import './checkout.css';
import swal from 'sweetalert';

const CheckoutForm = () => {

  

    const stripe = useStripe();
    const elements = useElements();


    const handleSubmit = async (e) => {
      // Block native form submission.
      e.preventDefault();     
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardNumberElement);
     
      if (card == null) {
        return;
      }

     

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
      } else {
        console.log(paymentMethod);
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
                <input type="submit" value="Pay" id="payment-confirm-btn" disabled={!stripe} />
            </form>
        </section>
    );
};

export default CheckoutForm;