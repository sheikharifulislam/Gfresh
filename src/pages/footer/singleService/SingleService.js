import React from 'react';
import './singleService.css';

const SingleService = ({data}) => {

    const {serviceIcon,serviceName,serviceDetails} = data;

    return (
        <div className="single-service">
            <div className="service-icon">
                <i className={serviceIcon} />
            </div>
            <div className="service-name">
                <h3>{serviceName}</h3>
            </div>
            <div className="service-details">
                <p>{serviceDetails}</p>
            </div>
        </div>
    );
};

export default SingleService;