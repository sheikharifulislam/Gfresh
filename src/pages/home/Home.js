import React from 'react';
import HeaderSlider from './headerSlider/HeaderSlider';
import HeaderBanner from './headerBanner/HeaderBanner';
import ProductCategory from './productCategory/ProductCategory';
import AllProducts from './allProducts/AllProducts';

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