import React from 'react';
import AllReview from './allReview/AllReview';
import ReviewPageHeader from './reviewPageHader/ReviewPageHeader';

const Reviews = () => {
    return (
        <section id="review-page">
            <ReviewPageHeader/>
            <AllReview/>
        </section>
    );
};

export default Reviews;