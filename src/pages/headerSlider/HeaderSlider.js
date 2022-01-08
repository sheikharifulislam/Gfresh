import React from 'react';

import './headerSlider.css';

const HeaderSlider = () => {

    return (
        <div id="header-slider" style={{backgroundImage: 'url("image/home-bg.jpg")'}}>
            <div className="container">
                <div className="slide">
                    <div className="content">
                        <span>fresh and organic capsicum pepper</span>
                        <h3>upto 50% off</h3>
                        <button>Shop Now</button>
                    </div>
                    <div className="slide-image">
                        <img src="image/home-img-1.png" alt="Slider Image Not Found" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSlider;