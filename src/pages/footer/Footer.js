import React from 'react';
import AllServices from './allServices/AllServices';

const Footer = () => {

    const footerStyle = {
        backgroundColor: '#f5f5f5',
        paddingTop: '50px',
        marginTop: '150px',
    }
    
    return (
        <footer style={footerStyle}>
            <AllServices/>
        </footer>
    );
};

export default Footer;