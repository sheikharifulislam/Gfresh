import React, { useEffect, useState } from 'react';
import SingleService from '../singleService/SingleService';
import './allServices.css';

const AllServices = () => {

    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch('/serviceData.json')
        .then((response) => response.json())
        .then((data) => setServiceData(data))
        .catch((error) => console.log(error.message));
    },[])
    
    return (
        <section id="all-services">
            <div className="container-fluid">
                <div className="services-container">
                    {
                        serviceData.map((data) => <SingleService key={data.id} data={data}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AllServices;