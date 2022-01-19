import axios from 'axios';
import React, { useState } from 'react';
import './abc.css';

const Product = () => {


    const [productData,setProductData] = useState({
        offerPrice: "",
    }); 
    const [file,setFile] = useState(null);
    
    const handleInput= (e) => {
        const filed = e.target.name;
        const value = e.target.value;
        const newData = {...productData};
        newData[filed] = value;
        setProductData(newData);
        
    }

    const handleForm = (e) => {
        e.preventDefault();
        if(productData.offerPrice === '') {
            productData.offerPrice = productData.mainPrice;
        }

        const formData = new FormData();
        for(let key in productData) {
            formData.append(key, productData[key]);
        }
        formData.append("productImage",file);
       
        
        axios.post('http://localhost:5000/add-product',formData)
        .then((data) => {
            if(data.data.insertedId) {
                alert("Succefull");
                e.target.reset();
                setProductData({
                    offerPrice: "",
                })
            }
        })

        console.log(productData);
    }

    return (
        <form action="" id="add-form" onSubmit={handleForm} encType="multipart/form-data">
            <input type="text" placeholder="Enter Product Name Name" onInput={handleInput} name="productName" id="" />
            <input type="text" placeholder="Enter Product Category" onInput={handleInput} name="category" id="" />
            <input type="text" placeholder="Enter Product Brand" onInput={handleInput}  name="brand" id="" />
            <input type="text" placeholder="Enter Product Weight" onInput={handleInput} name="weight" id="" />
            <input type="text"  placeholder="Enter Product Packsize" onInput={handleInput} name="packSize" id="" />
            <input type="text" placeholder="Enter Product Country" onInput={handleInput} name="country" id="" />
            <input type="text" placeholder="product flavour" onInput={handleInput} name="flavour" id="" />
            <input type="number" placeholder="Enter Product quantity" onInput={handleInput} name="quantity" id="" />
            <input type="number" placeholder="product main price" onInput={handleInput} name="mainPrice" id="" />
            <input type="number" placeholder="Product Offer Price" value={productData.offerPrice} onInput={handleInput} name="offerPrice" id="" />
            <input type="text" placeholder="In the box" onInput={handleInput} name="inTheBox" id="" />
            <input type="file" name="productImage" onInput={(e) => setFile(e.target.files[0])} />
            <input type="text" placeholder="product details" onInput={handleInput} name="productDetails" id="" />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Product;