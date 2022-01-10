import React from 'react';
import AllServices from './allServices/AllServices';
import CompanyAdditionalInformation from './companyAdditionalInformation/CompanyAdditionalInformation';
import CompanyMainInformations from './companyMainInformations/CompanyMainInformations';

const Footer = () => {

    return (
        <footer>
            <AllServices/>
            <CompanyMainInformations/>
            <CompanyAdditionalInformation/>
        </footer>
    );
};

export default Footer;