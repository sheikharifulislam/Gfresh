import React, { useContext, useState, useEffect } from 'react';
import { OrderDataContext } from '../../context/OrderDataProvider';
import './shippingInformations.css';

const ShippingInformations = () => {

    const [shippingData, setShippingData] = useState({});
    const {orderData, setOrderData} = useContext(OrderDataContext);
    

    const handleInput = e => {
        const key = e.target.name;
        const value = e.target.value;
        const newShippingData = {...shippingData};
        newShippingData[key] = value;
        setShippingData(newShippingData);
    }

    const handleShippingForm = e => {
        e.preventDefault();
        const newOrderData = {
            ...orderData,
            shippingData: {
                ...shippingData,
            }
        };
        setOrderData(newOrderData);
        
    }

    useEffect(() => {
        console.log(orderData);
    },[orderData])
    
    return (
        <section id="shipping-info-form">
            <div className="shipping-info-form-title">
                <h2>Shipping Form</h2>
            </div>
            <form onSubmit={handleShippingForm}>
                <div className="shipping-info-form-design">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder="Enter Your Name" name="name" id="name" onInput={handleInput} required/>
                </div>
                <div className="shipping-info-form-design">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder="Enter your E-Mail" name="email" id="email" onInput={handleInput} required />
                </div>
                <div className="shipping-info-form-design">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input type="tel" placeholder="Enter Your Mobile Number" name="mobileNumbeer" id="mobileNumber" onInput={handleInput} required />
                </div>
                <div className="shipping-info-form-design">
                    <div className="shipping-city">
                        <label htmlFor="city">Your City</label>
                        <input type="text" placeholder="Enter Your City" name="city" id="city" onInput={handleInput} required />
                    </div>
                    <div className="shipping-delivery-address">
                        <label htmlFor="address">Your Address</label>
                        <input type="text" placeholder="Enter your Address" name="address" id="address" onInput={handleInput} required />
                    </div>
                </div>
                <input type="submit" value="Next" id="shipping-info-send-btn" />
            </form>
        </section>
    );
};

export default ShippingInformations;