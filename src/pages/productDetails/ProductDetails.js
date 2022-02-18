import { Rating } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import CircularLoader from '../../customComponent/circularLoader/CircularLoader';
import  './productDetails.css';

const ProductDetails = () => {

    const {productId} = useParams();
    const navigate = useNavigate();
    const [singleProduct, setSingleProduct] = useState({});
    const [productQuantiy, setProductQuantity] = useState("");   
    
    
    const handleProductQuantityForm = e => {
        e.preventDefault();        
        const newOrderData = {
            productId: singleProduct._id,
            orderQuantity: productQuantiy,
        };
        localStorage.setItem('orderData',JSON.stringify(newOrderData));       
        navigate(`/shipping/${singleProduct._id}`, {
            replace: true,
        })

        e.target.reset();
    }
    

    useEffect(() => {
        axios.get(`http://localhost:5000/all-products?productId=${productId}`)
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
                            <img src={`http://localhost:5000/${singleProduct.productImage}`} alt={singleProduct.inTheBox} />
                        </div>
                    </section>
                    <section id="product-details-section">
                        <div className="product-general-features">
                            <div className="product-name">
                                <h2>{singleProduct.productName}</h2>
                            </div>
                            <div className="product-rating">
                                <Rating name="half-rating-read" defaultValue={
                                        singleProduct.reviewStar >= 1 ? (singleProduct.reviewStar / singleProduct.reviews.length) : 0
                                    }
                                    precision={0.5}
                                    size="small"
                                    readOnly />
                                
                                <div className="product-rating-comment">
                                    <small>({singleProduct.reviews?.length})</small>
                                </div>

                            </div>
                            <div className="product-general-feature-product-price">
                                {
                                    singleProduct.offerPrice !== null ?
                                    <small>Price: {singleProduct.offerPrice}$</small>
                                    :
                                    <small>Price: {singleProduct.mainPrice }$</small>
                                }
                            </div>
                        </div>
                        <div className="other-product-details">
                            <table>
                                <tbody>
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
                                </tbody>
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
                        <form className="quantity-form" onSubmit={handleProductQuantityForm}>
                            <label htmlFor="productQuantity">Product Quantity</label>
                            <input type="number" placeholder="quantity" id="productQuantity" name="productQuantity" onInput={(e) => setProductQuantity(e.currentTarget.value)} required />
                            <input type="submit" value="Add To Cart" id="add-to-cart-btn" disabled/>
                            <input type="submit" value="Order Now" id="order-now-btn" disabled={singleProduct.quantity >= 1 ? false : true} /> 
                        </form>                        
                        <div className="payment-secure-details-and-other">
                            <h4><i className="fas fa-lock"></i> Secure transaction</h4>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Ship From :</td>
                                        <td>GFresh</td>
                                    </tr>
                                    <tr>
                                        <td>Sold By :</td>
                                        <td>Gfresh</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
                {
                    singleProduct.reviews?.length >= 1 &&
                    <section id="product-reviews-section">
                        <div className="product-review-section-title">
                            <h2>Product Reviews</h2>
                        </div>
                        {
                            singleProduct.reviews?.map((data) => (
                                <div className="single-product-review" key={data._id}>
                                    <div className="product-review-rating">
                                        <Rating name="half-rating-read" defaultValue={parseInt(data.reviewStar)} precision={0.5} size="small" readOnly />
                                        
                                    </div>
                                    <div className="product-review-customar-name">
                                        <h3>{data.userName}</h3>
                                    </div>                                
                                    <div className="product-review-details">
                                        <p>{data.userReview}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                }
            </div>
            {
                Object.keys(singleProduct).length === 1 &&
                <CircularLoader height="80vh" />
            }
        </section>
    );
};

export default ProductDetails;