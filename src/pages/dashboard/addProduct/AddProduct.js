import React,{useState} from 'react';
import axios from 'axios';
import './addProduct.css';
import swal from 'sweetalert';
import baseurl from '../../../utils/baseurl'; 

const AddProduct = () => {
    
    const [productData, setProductData] = useState({
        offerPrice: null,
    });
    const [file, setFile] = useState(null);
    const baseUrl = baseurl();

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
        axios.post(`${baseUrl}products/add-product`,formData)
        .then((response) => {
            if(response.data.insertedId) {
                swal({
                    icon: 'success',
                    text: 'Successfully Product Added',
                    button: 'ok',
                });
                e.target.reset();
            }
        })
        .catch(() => {
            swal({
                icon: 'error',
                text: 'Something went wrong Please Reload Add Try Again',
                button: 'ok',
            })
        })
        
    }

    return (
        <div className="add-new-product-section">
          <div className="add-new-product-section-title">
                <h2>Add New Product</h2>
                <div className="add-product-container">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="add-product-area">
                            <div className="add-product-form-design">
                                <label htmlFor="product-name">Product Name</label>
                                <input type="text" placeholder="Enter Your Product Name" name="productName" id="product-name" onInput={handleInput} required />
                            </div>
                            <div className="add-product-form-design">
                                <label htmlFor="product-category">Product Category</label>
                                <input list="category" placeholder='Select Product Category' name="category" id="product-category" onInput={handleInput} required />
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
                            <div className="add-product-form-design">
                                <label htmlFor="product-brand">Product Brand</label>
                                <input type="text" placeholder="Enter Your Product Brand Name" name="brand" id="product-brand" onInput={handleInput} required />
                            </div>
                            <div className="add-product-form-design">
                                <label htmlFor="product-weight">Product Weight</label>
                                <input type="text" placeholder="Enter Your Product Weight" name="weight" id="product-weight" onInput={handleInput} required />
                            </div>       
                            <div className="add-product-form-design">
                                <label htmlFor="packSize">Pack Size</label>
                                <input type="text" placeholder="Enter Your Product Pack Size" name="packSize" id="packSize" onInput={handleInput} required />
                            </div>
                            <div className="add-product-form-design">
                                <label htmlFor="country">Country</label>
                                <input type="text" placeholder="Enter your Product Country Name" name="country" id="country" onInput={handleInput} required />    
                            </div>
                            <div className="add-product-form-design">
                                <label htmlFor="flavour">Product Flavour</label>
                                <input type="text" placeholder="Enter your Product Flavour"name="flavour" id="flavour" onInput={handleInput} required />    
                            </div>
                            <div className="add-product-form-design">
                                <label htmlFor="main-price">Product Price</label>
                                <input type="number" placeholder="Enter your Product Price"name="mainPrice" id="main-price" onInput={handleInput} required />     
                            </div>
                            <div className="add-product-form-design">
                                <label htmlFor="offer-price">Product Offer Price</label>
                                <input type="number" placeholder="Enter your Product Offer Price"name="offerPrice" id="offer-price" onInput={handleInput} />     
                            </div>
                            <div className="add-product-form-design">
                                <label htmlFor="product-quantity">Product Quantity</label>
                                <input type="number" placeholder="Enter Your Product Quantity" name="quantity" id="product-quantity" onInput={handleInput} required />     
                            </div>
                            <div className="add-product-form-design">
                                <label htmlFor="in-the-box">In The Box</label>
                                <input type="text" placeholder="In The Box" name="inTheBox" id="in-the-box" onInput={handleInput} required />    
                            </div>
                            <div className="add-product-form-design">
                                <label htmlFor="product-image">Product Image</label>
                                <div className="file-upload-button-design">
                                    <button id="file-upload-button">
                                        <img src="/image/cloud-upload-outline-1.png" alt="fil-upload" />
                                    </button>
                                    <input type="file" name="ProductImage" id="product-image" onInput={(e) => setFile(e.target.files[0])} required />                                    
                                </div>    
                            </div>
                            <div className="add-product-form-design">
                                <label htmlFor="product-details">Product Details</label>
                                <textarea placeholder="Enter Your Product Details"name="productDetails" id="product-details" cols="40" rows="10" onInput={handleInput} required></textarea>    
                            </div>                    
                        </div>
                        <input type="submit" value="Submit" id="add-new-product-button" />    
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;