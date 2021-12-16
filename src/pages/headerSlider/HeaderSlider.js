import React from 'react';
import image1 from '../../image/home-img-1.png';
import './headerSlider.css';

const HeaderSlider = () => {

    return (
        <div id="header-slider">
            <div className="slides-container">
                <div className="slide">
                    <div className="content">
                        <span>fresh and organic capsicum pepper</span>
                        <h3>upto 50% off</h3>
                        <button>Shop Now</button>
                    </div>
                    <div className="slide-image">
                        <img src={image1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSlider;