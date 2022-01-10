import React from 'react';

const FooterBottom = () => {

    const footerBottomStyle = {
        textAlign: 'center',
        padding: '10px 0',
        backgroundColor: "#000",
        color: "#fff",
    }
    
    return (
        <section id="footer-bottom" style={footerBottomStyle}>
            <p>&copy; GFresh 2022</p>
        </section>
    );
};

export default FooterBottom;