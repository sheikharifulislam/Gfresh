import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import swal from 'sweetalert';
import SingleProduct from '../../sharedComponent/singleProduct/SingleProduct';
import './searchPageResult.css';

const SearchPageResult = () => {


    const [data, setData] = useState([]);
    const [searchParams] = useSearchParams()
    const productName = searchParams.get('productName');
    const categoryName = searchParams.get('categoryName');      

    useEffect(() => {

        if(productName) {
            axios.get(`https://arcane-lake-20041.herokuapp.com/all-products?productName=${productName}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                swal({                    
                    title: `Erro: ${error.message}`,
                    text: 'Please Try Again',                
                    icon: "worning",               
                    button: 'ok',        
                })
            })
        }
        else if(categoryName) {
            axios.get(`https://arcane-lake-20041.herokuapp.com/all-products?category=${categoryName}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                swal({                    
                    title: `Erro: ${error.message}`,
                    text: 'Please Try Again',                
                    icon: "worning",               
                    button: 'ok',        
                })
            })
        }
        
    }, [productName,categoryName]); 

    return (
        <section id="search-page-result">
            <div className="search-page-result-header">
                <div className="totla-search-result-title">
                   {
                       productName ? 
                       <h6>100 items found for {productName}</h6>
                       :
                       <h6>100 items found for {categoryName}</h6>
                   }
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
                    data.map((product) => <SingleProduct key={product._id} product={product}/>)
                }
            </div>
        </section>
    );
};

export default SearchPageResult;