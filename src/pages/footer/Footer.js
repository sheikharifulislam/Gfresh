import React from 'react';
import {useLocation} from 'react-router-dom';
import AllServices from './allServices/AllServices';
import CompanyAdditionalInformation from './companyAdditionalInformation/CompanyAdditionalInformation';
import CompanyMainInformations from './companyMainInformations/CompanyMainInformations';
import FooterBottom from './footerBottom/FooterBottom';

const Footer = () => {

    const location = useLocation();
    if(location.pathname.includes('dashboard'))return null;

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