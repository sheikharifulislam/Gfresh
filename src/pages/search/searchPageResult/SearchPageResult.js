import React,{useEffect, useState} from 'react';
import SingleProduct from '../../sharedComponent/singleProduct/SingleProduct';
import './searchPageResult.css';

const SearchPageResult = () => {


    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/productsData.json')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error.message))
    }, []); 

    return (
        <section id="search-page-result">
            <div className="search-page-result-header">
                <div className="totla-search-result-title">
                    <h6>100 items found for pant</h6>
                </div>
                <div className="search-page-result-normal-filter">
                    <label htmlFor="filter-buy-price">Sort By: </label>
                    <select id="filter-buy-price">
                        <option value="Best Match">Best Match</option>
                        <option value="Price low to hight">Price low to hight</option>
                        <option value="price high to low">Price high to low</option>
                    </select>
                </div>                
            </div>
            <div className="search-page-result-container">
                {
                    data.map((product) => <SingleProduct key={product.id} product={product}/>)
                }
            </div>
        </section>
    );
};

export default SearchPageResult;