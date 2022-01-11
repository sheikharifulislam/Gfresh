import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import { NavLink } from 'react-router-dom';

const AllReview = () => {

    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        fetch('/clientReviewData.json')
        .then((response) => response.json())
        .then((data) =>setReviewData(data))
        .catch((error) => console.log(error.message))
    }, [])

    return (
        <section id="all-reviow-section">
            <div className="container">
                <div className="all-review-section-title">
                    <h2>Our Happy Client</h2>
                    <hr />
                </div>
                <div className="all-review-containere">
                   {
                       reviewData.map((data) => (
                           <div className="single-review">
                               <div className="container-fluid">
                                   <div className="image-and-name-container">
                                       <div className="client-image">
                                           <img src={data.clientImage} alt="" />
                                       </div>
                                       <div className="client-name-and-star">
                                            <h4>{data.clientName}</h4>
                                            <Rating name="read-only" value={parseInt(data.reviewStar)} readOnly />
                                       </div>
                                       <div className="client-review-short-summary">
                                           {
                                               data.clientReviewDetails.length >= 148 ?
                                               (
                                                   <p>{data.clientReviewDetails.slice(0,148)}...<NavLink to="/#">See More</NavLink></p>
                                               )
                                               :
                                               (
                                                   <p>{data.clientReviewDetails}</p>
                                               )
                                           }
                                       </div>
                                   </div>
                               </div>
                           </div>
                       ))
                   }
                </div>
            </div>
        </section>
    );
};

export default AllReview;