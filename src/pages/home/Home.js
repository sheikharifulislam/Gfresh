import React from 'react';
import AllProducts from '../allProducts/AllProducts';
import Footer from '../footer/Footer';
import HeaderBanner from '../headerBanner/HeaderBanner';
import HeaderSlider from '../headerSlider/HeaderSlider';
import ProductCategory from '../productCategory/ProductCategory';

const Home = () => {
    return (
        <>            
            <HeaderSlider/>
            <main>
                <HeaderBanner/>
                <ProductCategory/>
                <AllProducts/>
            </main>                      
        </>

        
    );
};

export default Home;