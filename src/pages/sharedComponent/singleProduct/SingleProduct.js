import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Rating, Stack } from '@mui/material';
import './singleProduct.css';
import baseurl from '../../../utils/baseurl';

const SingleProduct = ({product}) => {

    const navigate = useNavigate();
        
    const offerRange = (mainPrice,offerPrice) => {
        return Math.round(((mainPrice - offerPrice) / mainPrice) * 100); 
    }

    const handleSingleProduct = () => {
        navigate(`/product-details/${product._id}`);
    }

    const baseUrl = baseurl();

    return (
        <div className="single-product" onClick={handleSingleProduct}>
            <div className="single-product-container">
                <div className="single-product-image">
                    <img src={`${baseUrl}${product.productImage}`} alt={product.inTheBox} />
                </div>
                <div className="single-product-body">
                    <div className="single-product-title">
                        <h4>{product.productName}</h4>
                    </div>
                    <div className="single-product-price">
                        <div className="single-product-offer-price">
                            {
                                product.offerPrice !== null ?
                                (
                                    <h5>${product.offerPrice}</h5>
                                )
                                :
                                (
                                    <h5>${product.mainPrice}</h5>
                                )
                            }
                        </div>
                        {
                            product.offerPrice !== null &&
                                <div className="single-product-main-price">
                                    <del><small>${product.mainPrice}</small></del>
                                    <small id="offer-range">-{offerRange(product.mainPrice,product.offerPrice)}%</small>
                                </div>
                        }
                    </div>
                    <div className="single-product-reviews">
                        <div className="single-product-review-star">
                           <Stack>
                                <Rating name="half-rating-read"
                                id="star"
                                defaultValue={
                                    product.reviewStar ? parseInt(product.reviewStar) /product.reviews.length : 0
                                }
                                precision={0.5}
                                readOnly />
                           </Stack>
                        </div>
                        <div className="single-product-review-comment">
                            <span>({product.reviews.length})</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;