import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import './updateProductInfo.css';

const UpdateProductInfo = () => {
    const {productId} = useParams();
    const [productData, setProductData] = useState({});
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/all-products?productId=${productId}`)
        .then((response) => {
            setProductData(response.data);            
        })
        .catch(() => {
            swal({
                icon: 'error',
                text: 'Something went wrong Please Reload update Try Again',
                button: 'ok',
            })           
        })
    }, [productId])
      

    const handleInput = e => {
        const key = e.target.name;
        const value = e.target.value;
        const newData = {...productData};
        newData[key] = value;
        setProductData(newData);
    }

    const handleSubmit = e => {
        e.preventDefault();               
        const formData = new FormData();
        for(let key in productData) {
            formData.append(key, productData[key]);
        }
        formData.append("productImage",file);      
        axios.patch(`http://localhost:5000/update-product-info?productId=${productData._id}&&imagePath=${productData.productImage}`,formData)
        .then((response) => {
            if(response.data.modifiedCount) {
                swal({
                    icon: 'success',
                    text: 'Successfully updated Product Info',
                    button: 'ok',
                })
                .then(() => {
                    navigate('/dashboard/manage-all-products', {
                        replace: true,
                    })
                })                
            }
        })
        .catch((error) => {
            swal({
                icon: 'error',
                text: 'Something went wrong Please Reload update Try Again',
                button: 'ok',
            })
            console.log(error.message)
        })
        
    }

    return (
        <div className="update-product-section">
          <div className="update-product-section-title">
                <h2>Update New Product</h2>
                <div className="update-product-container">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="update-product-area">
                            <div className="update-product-form-design">
                                <label htmlFor="product-name">Product Name</label>
                                <input type="text" placeholder="Enter Your Product Name" name="productName" id="product-name" defaultValue={productData.productName} onInput={handleInput} required />
                            </div>
                            <div className="update-product-form-design">
                                <label htmlFor="product-category">Product Category</label>
                                <input list="category" placeholder='Select Product Category' name="category" id="product-category" defaultValue={productData.category} onInput={handleInput} required />
                                <datalist id="category">                                    
                                    <option value="Rice">Rice</option>
                                    <option value="Spices">Spices</option>
                                    <option value="Vegetables">Vegetables</option>
                                    <option value="Fruit">Fruit</option>
                                    <option value="Nuts">Nuts</option>
                                    <option value="Pickles">Pickles</option>
                                    <option value="Meat">Meat</option>
                                    <option value="Raisins">Raisins</option>
                                    <option value="Fish">Fish</option>
                                    <option value="Pulses">Pulses</option>
                                    <option value="Edible Oil">Edible Oil</option>
                                    <option value="Mustard">Mustard</option>
                                    <option value="Milk">Milk</option>
                                    <option value="Cold Drink">Cold Drink</option>
                                </datalist>
                            </div>
                            <div className="update-product-form-design">
                                <label htmlFor="product-brand">Product Brand</label>
                                <input type="text" placeholder="Enter Your Product Brand Name" name="brand" id="product-brand" defaultValue={productData.brand} onInput={handleInput} required />
                            </div>
                            <div className="update-product-form-design">
                                <label htmlFor="product-weight">Product Weight</label>
                                <input type="text" placeholder="Enter Your Product Weight" name="weight" id="product-weight" defaultValue={productData.weight} onInput={handleInput} required />
                            </div>       
                            <div className="update-product-form-design">
                                <label htmlFor="packSize">Pack Size</label>
                                <input type="text" placeholder="Enter Your Product Pack Size" name="packSize" id="packSize" defaultValue={productData.packSize} onInput={handleInput} required />
                            </div>
                            <div className="update-product-form-design">
                                <label htmlFor="country">Country</label>
                                <input type="text" placeholder="Enter your Product Country Name" name="country" id="country" defaultValue={productData.country} onInput={handleInput} required />    
                            </div>
                            <div className="update-product-form-design">
                                <label htmlFor="flavour">Product Flavour</label>
                                <input type="text" placeholder="Enter your Product Flavour"name="flavour" id="flavour" defaultValue={productData.flavour} onInput={handleInput} required />    
                            </div>
                            <div className="update-product-form-design">
                                <label htmlFor="main-price">Product Price</label>
                                <input type="number" placeholder="Enter your Product Price"name="mainPrice" id="main-price" defaultValue={productData.mainPrice} onInput={handleInput} required />     
                            </div>
                            <div className="update-product-form-design">
                                <label htmlFor="offer-price">Product Offer Price</label>
                                <input type="number" placeholder="Enter your Product Offer Price"name="offerPrice" id="offer-price" defaultValue={productData.offerPrice} onInput={handleInput} />     
                            </div>
                            <div className="update-product-form-design">
                                <label htmlFor="product-quantity">Product Quantity</label>
                                <input type="number" placeholder="Enter Your Product Quantity" name="quantity" id="product-quantity" defaultValue={productData.quantity} onInput={handleInput} required />     
                            </div>
                            <div className="update-product-form-design">
                                <label htmlFor="in-the-box">In The Box</label>
                                <input type="text" placeholder="In The Box" name="inTheBox" id="in-the-box" defaultValue={productData.inTheBox} onInput={handleInput} required />    
                            </div>
                            <div className="update-product-form-design">
                                <label htmlFor="product-image">Product Image</label>
                                <div className="file-upload-button-design">
                                    <button id="file-upload-button">
                                        <img src="/image/cloud-upload-outline-1.png" alt="fil-upload" />
                                    </button>
                                    <input type="file" name="ProductImage" id="product-image" onInput={(e) => setFile(e.target.files[0])} />                                    
                                </div>    
                            </div>
                            <div className="update-product-form-design">
                                <label htmlFor="product-details">Product Details</label>
                                <textarea placeholder="Enter Your Product Details"name="productDetails" id="product-details" defaultValue={productData.productDetails} cols="40" rows="10" onInput={handleInput} required></textarea>    
                            </div>                    
                        </div>
                        <input type="submit" value="Submit" id="update-product-button" />    
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProductInfo;