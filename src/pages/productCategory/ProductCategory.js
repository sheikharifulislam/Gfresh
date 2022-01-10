import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './productCategory.css';

const ProductCategory = () => {


    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        fetch('/productCategory.json')
        .then((response) => response.json())
        .then((data) => setCategoryData(data))
        .catch((error) => console.log(error.message))
    },[])

    return (
        <section className="product-category-section">
            <div className="container-fluid">
                <div className="product-category-section-title">
                    <h2>Category</h2>
                </div>
                <div className="product-category-container">
                    {
                        categoryData.map((category) => (
                            <NavLink to="/#" className="single-product-category" key={category.id}>
                                <div className="product-category-image">
                                    <img src={category.categoryImage} alt="Category Image" />
                                </div>
                                <div className="product-category-name">
                                    <h5>{category.categoryName}</h5>
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ProductCategory;