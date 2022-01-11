import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './allProducts.css';

const AllProducts = () => {

    const [allProductData, setAllProductData] = useState([]);

    useEffect(() => {
        fetch('/productsData.json')
        .then((response) => response.json())
        .then((data) => setAllProductData(data))
        .catch((error) => console.log(error.message))
    }, []);
    
    const offerRange = (mainPrice,offerPrice) => {
        return Math.round(((mainPrice - offerPrice) / mainPrice) * 100); 
    }

    

    return (
        <section id="all-products-section">
            <div className="container-fluid">
                <div className="all-products-section-title">
                    <h2>Just For You</h2>
                </div>
                <div className="all-products-container">
                    {
                        allProductData.map((product) => (
                            <NavLink to="/#" className="single-product" key={product.id}>
                                <div className="single-product-container">
                                    <div className="single-product-image">
                                        <img src={product.productImage} alt="" />
                                    </div>
                                    <div className="single-product-body">
                                        <div className="single-product-title">
                                            <h4>{product.productName}</h4>
                                        </div>
                                        <div className="single-product-price">
                                            <div className="single-product-offer-price">
                                                <h5>${product.offerPrice}</h5>
                                            </div>
                                            {
                                                product.offerPrice !== product.mainPrice &&
                                                    <div className="single-product-main-price">
                                                        <del><small>${product.mainPrice}</small></del>
                                                        <small id="offer-range">-{offerRange(product.mainPrice,product.offerPrice)}$</small>
                                                    </div>
                                            }
                                        </div>
                                        <div className="single-product-reviews">
                                            <div className="single-product-review-star">
                                                <Rating name="read-only" id="star" value={product.reviews.lenght / parseInt(product.reviewStar)} readOnly />
                                            </div>
                                            <div className="single-product-review-comment">
                                                <span>({product.reviews.length})</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default AllProducts;