import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './productCategory.css';

const ProductCategory = () => {


    const [categoryData, setCategoryData] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetch('/productCategory.json')
        .then((response) => response.json())
        .then((data) => setCategoryData(data))
        .catch((error) => console.log(error.message))
    },[]);

    const handleSingleCategory = (category) => {
        navigate(`/search?category=${category}`, {
            replace: true,
        })
    }


    return (
        <section className="product-category-section">
            <div className="container-fluid">
                <div className="product-category-section-title">
                    <h2>Category</h2>
                </div>
                <div className="product-category-container">
                    {
                        categoryData.map((category) => (
                            <div className="single-product-category" key={category.id} onClick={() => handleSingleCategory(category.categoryName)}>
                                <div className="product-category-image">
                                    <img src={category.categoryImage} alt={category.categoryName} />
                                </div>
                                <div className="product-category-name">
                                    <h5>{category.categoryName}</h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ProductCategory;