import React from 'react';
import AllProducts from '../allProducts/AllProducts';
import Footer from '../footer/Footer';
import HeaderBanner from '../headerBanner/HeaderBanner';
import HeaderSlider from '../headerSlider/HeaderSlider';
import Navbar from '../navbar/Navbar';
import ProductCategory from '../productCategory/ProductCategory';

const Home = () => {
    return (
        <>
            <Navbar/>
            <HeaderSlider/>
            <main>
                <HeaderBanner/>
                <ProductCategory/>
                <AllProducts/>
            </main>
            <Footer/>           
        </>

        
    );
};

export default Home;