import React, { useEffect, useState } from 'react';
import SingleProduct from '../../sharedComponent/singleProduct/SingleProduct';
import './allProducts.css';

const AllProducts = () => {

    const [allProductData, setAllProductData] = useState([]);

    useEffect(() => {
        fetch('/productsData.json')
        .then((response) => response.json())
        .then((data) => setAllProductData(data))
        .catch((error) => console.log(error.message))
    }, []); 

    return (
        <section id="all-products-section">
            <div className="container-fluid">
                <div className="all-products-section-title">
                    <h2>Just For You</h2>
                </div>
                <div className="all-products-container">
                    {
                        allProductData.map((product) => <SingleProduct key={product.id} product={product}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AllProducts;