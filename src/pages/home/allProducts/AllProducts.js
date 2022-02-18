import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../../sharedComponent/singleProduct/SingleProduct';
import CircularLoader from '../../../customComponent/circularLoader/CircularLoader';
import './allProducts.css';
import swal from 'sweetalert';

const AllProducts = () => {

    const [allProductData, setAllProductData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/all-products')
        .then((data) => setAllProductData(data.data))
        .catch(() => {
            swal({
                icon: 'error',
                text: 'Something went wrong Please Reload Try Again',
                buttons: 'ok',
            })
        })
        
    }, []); 

    

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