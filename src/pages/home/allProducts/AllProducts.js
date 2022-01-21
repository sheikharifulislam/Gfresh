import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../../sharedComponent/singleProduct/SingleProduct';
import CircularLoader from '../../../customComponent/circularLoader/CircularLoader';
import './allProducts.css';

const AllProducts = () => {

    const [allProductData, setAllProductData] = useState([]);

    useEffect(() => {
        axios.get('https://arcane-lake-20041.herokuapp.com/all-products')
        .then((data) => setAllProductData(data.data))
        .catch((error) => console.log(error.message))
    }, []); 

    if(allProductData.length < 1) {
        return <CircularLoader/>
    }

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
        </section>
    );
};

export default AllProducts;