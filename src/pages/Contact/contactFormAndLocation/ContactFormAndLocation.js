import React from 'react';
import './contactFormAndLocation.css';

const ContactFormAndLocation = () => {
    return (
       <section id="contact-form-and-location">
           <div className="container">
               <div className="form-and-location-container">
                   <div className="contact-form-container">
                       <div className="container-fluid">
                            <div className="contact-form-title">
                                <h2>Get In Touch</h2>
                            </div>
                            <form className="contact-form">
                                <div className="contact-form-design">
                                    <input type="text" placeholder="Enter Your Name" name="userName" required/>
                                    <input type="email" placeholder="Enter Your Email" name="userEmail" required/>
                                </div>                           
                                <div className="contact-form-design">
                                    <input type="number" placeholder="Enter Your Number" name="userMobileNumber" required/>
                                    <input type="text" placeholder="Enter Your Subject" name="subject" required/>
                                </div>
                                <div className="contact-form-design">
                                    <textarea name="userMessage" placeholder="Enter Your Message"  readOnly></textarea>
                                </div>
                                <input type="submit" value="Send Message" id="message-send-btn" />                           
                            </form>
                       </div>
                   </div>
                   <div className="our-location">
                        <iframe title="google-map" id="gmap_canvas" src="https://maps.google.com/maps?q=Blue%20Water%20Shopping%20City&t=&z=13&ie=UTF8&iwloc=&output=embed"  scrolling="no"></iframe>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default ContactFormAndLocation;