import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../../sharedComponent/singleProduct/SingleProduct';
import CircularLoader from '../../../customComponent/circularLoader/CircularLoader';
import './allProducts.css';
import swal from 'sweetalert';
import baseurl from '../../../utilis/baseurl';


const AllProducts = () => {

    const [allProductData, setAllProductData] = useState([]);
    const baseUrl = baseurl()

    useEffect(() => {
        axios.get(`${baseUrl}products/all-products`)
        .then((data) => setAllProductData(data.data))
        .catch(() => {
            swal({
                icon: 'error',
                text: 'Something went wrong Please Reload Try Again',
                buttons: 'ok',
            })
        })
        
    }, [baseUrl]); 

    

    return (
        <section id="all-products-section">
            <div className="container-fluid">
                <div className="all-products-section-title">
                    <h2>Just For You</h2>
                </div>
                <div className="all-products-container">
                    {
                        allProductData.map((product) => <SingleProduct key={product._id} product={product}/>)
                    }
                </div>
            </div>
            {
                allProductData.length < 1 &&
                <CircularLoader position="relative" height="500px" />
            }
        </section>
    );
};

export default React.memo(AllProducts);