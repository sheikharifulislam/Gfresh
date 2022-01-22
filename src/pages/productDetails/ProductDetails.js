import { Rating, Stack } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import  './productDetails.css';

const ProductDetails = () => {

    const {productId} = useParams();
    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        axios.get(`https://arcane-lake-20041.herokuapp.com/all-products?productId=${productId}`)
        .then((response) => {
            setSingleProduct(response.data);
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
                    <section id="product-details-image-section">
                        <div className="product-details-image">
                            <img src={`https://arcane-lake-20041.herokuapp.com/${singleProduct.productImage}`} alt={singleProduct.inTheBox} />
                        </div>
                    </section>
                    <section id="product-details-section">
                        <div className="product-general-features">
                            <div className="product-name">
                                <h2>{singleProduct.productName}</h2>
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
                                <div className="product-rating-comment">
                                    <small>({singleProduct.reviews?.length})</small>
                                </div>

                            </div>
                            <div className="product-general-feature-product-price">
                                {
                                    singleProduct.offerPrice !== singleProduct.mainPrice ?
                                    <small>Price: {singleProduct.offerPrice}$</small>
                                    :
                                    <small>Price: {singleProduct.mainPrice }$</small>
                                }
                            </div>
                        </div>
                        <div className="other-product-details">
                            <table>
                                <tr>
                                    <td>Brand</td>
                                    <td>{singleProduct.brand}</td>
                                </tr>
                                <tr>
                                    <td>Category</td>
                                    <td>{singleProduct.category}</td>
                                </tr>
                                <tr>
                                    <td>weight</td>
                                    <td>{singleProduct.weight}</td>
                                </tr>
                                <tr>
                                    <td>pack Size</td>
                                    <td>{singleProduct.packSize}</td>
                                </tr>
                                <tr>
                                    <td>country</td>
                                    <td>{singleProduct.country}</td>
                                </tr>
                                <tr>
                                    <td>flavour</td>
                                    <td>{singleProduct.flavour}</td>
                                </tr>
                                <tr>
                                    <td>in the box</td>
                                    <td>{singleProduct.inTheBox}</td>
                                </tr>
                            </table >            
                            
                            <div className="product-descriptions">
                                <dl>
                                    <dt>About This Product</dt>
                                    <dd>
                                        <p>{singleProduct.productDetails}</p>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </section>
                    <section id="details-page-order-section">
                        <div className="product-stock">
                            {
                                singleProduct.quantity >= 1 ?
                                <h6 style={{color: 'green'}}>In Stock</h6>
                                :
                                <h6 style={{color: 'red'}}>Out Of Stock</h6>
                            }
                        </div>
                        <form className="quantity-form">
                            <label htmlFor="productQuantity">Product Quantity</label>
                            <input type="number" placeholder="quantity" id="productQuantity" name="productQuantity"required />
                            <input type="submit" value="Add To Cart" id="add-to-cart-btn" disabled/>
                            <input type="submit" value="Order Now" id="order-now-btn"/>
                        </form>                        
                        <div className="payment-secure-details-and-other">
                            <h4><i class="fas fa-lock"></i> Secure transaction</h4>
                            <table>
                                <tr>
                                    <td>Ship From :</td>
                                    <td>GFresh</td>
                                </tr>
                                <tr>
                                    <td>Sold By :</td>
                                    <td>Gfresh</td>
                                </tr>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;