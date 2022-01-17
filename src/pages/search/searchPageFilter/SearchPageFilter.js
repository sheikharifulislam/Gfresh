import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import {  Rating} from '@mui/material';
import './searchPageFilter.css';

const SearchPageFilter = () => {

    const relatedCategory = ["Men's Jens","Cargo","Men's Chinos","Joggers & Sweats","New Born Sets & Packs","Boys Pants","Men's T-Shirts"];
    const brandsName = ["Lotto","Nazara","Demand","Trendz","oddperson","deen","ielgy"];
    const services = ["installment","cash on delivery","fulfilled","free shipping"]
    const ratings= [1,2,3,4,5];
    
    return (
        <aside id="search-page-filter-section">
            <div className="search-page-related-categorys-filter">
                <h4>Related Category</h4>
                {
                    relatedCategory.map((category) => (
                        <small key={category}>{category}</small>
                    ))
                }
            </div>
            <div className="search-page-brands-filter">
                <h4>Brands</h4>
                <FormGroup>
                    {
                        brandsName.map((brandName) => (
                           <div className="search-page-checkbox-container" key={brandName}>
                                <input type="checkbox" id={brandName} />
                                <label htmlFor={brandName}>{brandName}</label>
                           </div>
                        ))
                    }                   
                </FormGroup>               
            </div>
            <div className="search-page-service-filter">
                <h4>Service</h4>
                {
                    services.map((service) =>(
                        <div className="search-page-checkbox-container" key={service}>
                            <input type="checkbox" id={service} />
                            <label htmlFor={service}>{service}</label>
                        </div>
                    ))
                }                
            </div>
            <div className="search-page-rating-filter">
                <h4>Rating</h4>
                {
                    ratings.map((rating) => (
                        <Rating name="read-only" id="star" value={rating} key={rating} readOnly />
                    ))
                }
            </div>
        </aside>
    );
};

export default SearchPageFilter;