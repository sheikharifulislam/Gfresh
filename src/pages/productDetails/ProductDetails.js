import { Rating, Stack } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';

const ProductDetails = () => {

    const {productId} = useParams();
    const [singleProduct, serSingleProduct] = useState({});

    useEffect(() => {
        axios.get(`https://arcane-lake-20041.herokuapp.com/all-products?productId=${productId}`)
        .then((response) => {
            serSingleProduct(response.data);
        })
        .catch((error) => {
            if(error.message) {
                swal({                    
                    text: error.message,
                    icon: "warning",
                    button: "OK",
                  });
            }
        })
    },[productId])

    return (
        <section id="product-details-page">
            <div className="container-fluid">
               <div className="product-details-container">
                    <section className="product-details-image-section">
                        <div className="product-details-image">
                            <img src={singleProduct.productImage} alt="" />
                        </div>
                    </section>
                    <section id="product-details">
                        <div className="product-general-features">
                            <div className="product-name">
                                <h6>{singleProduct.productName}</h6>
                            </div>
                            <div className="product-rating">
                                <Stack>
                                    <Rating name="half-rating-read"
                                    id="star"
                                    defaultValue={
                                        singleProduct.reviewStar ? parseInt(singleProduct.reviewStar) /singleProduct.reviews.length : 0
                                    }
                                    precision={0.5}
                                    readOnly />
                                </Stack>
                            </div>
                            <div className="product-general-feature-product-pricc">
                                {
                                    singleProduct.offerPrice !== singleProduct.mainPrice ?
                                    <small>{singleProduct.offerPrice}</small>
                                    :
                                    <small>{singleProduct.mainPrice }</small>
                                }
                            </div>
                        </div>
                        <div className="other-product-details">
                        <ul>
                                <li>Brand: {singleProduct.brand}</li>
                                <li>Category: {}</li>
                                <li>weight</li>
                                <li>pack Size</li>
                                <li>country</li>
                                <li>flavour</li>
                                <li>in the box</li>
                        </ul>
                        <div className="product-descriptions">
                            <h4>About This Item</h4>
                            <ul>
                                <li>
                                        
                                </li>
                            </ul>
                        </div>
                        </div>
                    </section>
                    <section id="details-page-order-section">
                        <h6>In Stock</h6>
                        <div className="qunatity-form-order">
                            <input type="number" placeholder="quantity" name="order-quantity"/>
                        </div>
                        <div className="add-to-cart-and-buy-now-button">
                            <button>Add To Cart</button>
                            <button>Buy Now</button>
                        </div>
                        <div className="payment-secure-details">
                            <h4><i class="fas fa-lock"></i> Secure transaction</h4>
                            <h6>
                                <small>Ships from</small>
                                <small>GFresh</small>
                            </h6>
                            <h6>
                                <small>Sold by</small>
                                <small>GFresh</small>
                            </h6>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;