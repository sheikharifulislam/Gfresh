import React from 'react';
import './loginForm.css';


const LoginForm = () => {
    return (
        <section id="login-page">
            <div className="container-fluid">
                <div className="login-page-container">
                    <div className="login-page-image">
                        <img src="image/login.png" alt="Login Thumbnail" />
                    </div>
                    <div className="login-form-section">
                        <div className="login-form-title">
                            <h2>Wellcome Back !</h2>
                            <h6>Login To Continue</h6>
                            <form action="">
                                <div className="login-form-design">
                                    <label htmlFor="userName">Your Email</label>
                                    <input type="email" placeholder="Enter Your Email Address" id="userName" name="userNmae" required />
                                </div>
                                <div className="login-form-design">
                                    <label htmlFor="userPassword">Your Password</label>
                                    <input type="password" placeholder="Enter your password" id="userPassword" name="userPassword"required />
                                </div>
                                <div className="login-form-submit-btn-and-other">
                                    <input type="submit" value="Login" />
                                    <small>Forget Password ?</small>
                                </div>
                                <div className="other-login-option">
                                    <div className="other-login-options-title">
                                        <h4>Login With</h4>
                                    </div>
                                    <div className="other-login-options">
                                        <div><img src="image/google.png" alt="Google" /></div>
                                        <div><img src="image/facebook.png" alt="Facebook" /></div>
                                        <div><img src="image/twitter.png" alt="Twitter" /></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;