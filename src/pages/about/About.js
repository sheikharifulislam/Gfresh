import React from 'react';
import AboutPageHeader from './aboutPageHeader/AboutPageHeader';
import AboutUsDetails from './aboutUsDetails/AboutUsDetails';
import ImageGallery from './imageGallery/ImageGallery';

const About = () => {
    return (
        <section id="about-us-page">
            <AboutPageHeader/>
            <AboutUsDetails/>
            <ImageGallery/>
        </section>
    );
};

export default About;