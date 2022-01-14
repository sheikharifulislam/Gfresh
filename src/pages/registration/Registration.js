import React from 'react';
import './registration.css';

const Registration = () => {
    return (
        <section id="registration-page" style={{backgroundImage: 'url("image/registration_page_background.gif")'}}>
            <div className="registration-page-container">
                <div className="registration-page-title">
                    <h1>Welcome To Your Shop</h1>
                    <h6>Create An Acount</h6>
                </div>
                <form id="registration-form">
                    <div className="registration-form-design">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" placeholder="Enter Your Name" id="name" name="name" required/>
                    </div>
                    <div className="registration-form-design">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" placeholder='Enter Your Email Address' name="email" id="email" required/>
                    </div>
                    <div className="registration-form-design">
                        <label htmlFor="mobileNumber">your Mobile Number</label>
                        <input type="number" placeholder="Enter your Mobile Number" name="mobileNumber" id="mobileNumber" required/>
                    </div>
                    <div className="registration-form-design">
                        <label htmlFor="Passowrd">Your Pasword</label>
                        <input type="password"placeholder="Enter Your Password" name="Passowrd" id="Passowrd" required/>
                    </div>
                    <div className="registration-form-design">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" placeholder="Confirm Your Password" name="confirmPassword" id="confirmPassword" />
                    </div>
                    <div className="registration-form-design">
                        <input type="submit" value="Sign Up" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Registration;