import React from 'react';
import AllServices from './allServices/AllServices';
import CompanyAdditionalInformation from './companyAdditionalInformation/CompanyAdditionalInformation';
import CompanyMainInformations from './companyMainInformations/CompanyMainInformations';
import FooterBottom from './footerBottom/FooterBottom';

const Footer = () => {

    return (
        <footer>
            <AllServices/>
            <CompanyMainInformations/>
            <CompanyAdditionalInformation/>
            <FooterBottom/>
        </footer>
    );
};

export default Footer;